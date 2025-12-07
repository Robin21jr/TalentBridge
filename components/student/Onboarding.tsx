import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, Pen, X, Search, Check } from 'lucide-react';
import { StudentProfile } from '../../types';
import { SPANISH_UNIVERSITIES, CAREER_SECTORS, JOB_TYPES_PREF } from '../../constants';

interface OnboardingProps {
  onComplete: (profile: Partial<StudentProfile>) => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [formData, setFormData] = useState({
    institution: '',
    email: '',
    firstName: '',
    lastName: '',
    degree: 'Grado',
    major: '',
    gradDate: '',
    jobTypes: [] as string[],
    sectors: [] as string[],
    visibility: 'Comunidad'
  });

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  const toggleSelection = (list: string[], item: string, key: 'jobTypes' | 'sectors') => {
    if (list.includes(item)) {
      setFormData({ ...formData, [key]: list.filter(i => i !== item) });
    } else {
      setFormData({ ...formData, [key]: [...list, item] });
    }
  };

  const filteredUnis = SPANISH_UNIVERSITIES.filter(uni => 
    uni.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Background gradient style for onboarding
  const gradientBg = "bg-gradient-to-br from-violet-600 via-fuchsia-400 to-pink-300";

  // --- Screens ---

  // 0. Welcome / Splash
  if (step === 0) {
    return (
      <div className={`fixed inset-0 ${gradientBg} flex flex-col items-center justify-end pb-12 px-6 z-50`}>
        <div className="w-full bg-slate-900/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl animate-slideUp">
           <div className="flex justify-center -mt-12 mb-6">
              <div className="w-16 h-16 bg-lime-400 rounded-lg flex items-center justify-center text-slate-900 font-black text-3xl italic shadow-lg rotate-3">
                T
              </div>
           </div>
           <h1 className="text-3xl text-white font-bold text-center mb-8 font-serif">Regístrate o inicia sesión</h1>
           
           <button 
             onClick={nextStep}
             className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-lg mb-3 hover:bg-slate-100 transition-colors"
           >
             Continuar como estudiante
           </button>
           <button className="w-full bg-slate-800 text-white font-medium py-3.5 rounded-lg border border-slate-700 hover:bg-slate-700 transition-colors">
             Continuar sin institución
           </button>
        </div>
      </div>
    );
  }

  // 1. Choose Institution
  if (step === 1) {
    return (
      <div className="fixed inset-0 bg-slate-900 text-white flex flex-col z-50 animate-fadeIn">
        <div className="p-6 pb-2 border-b border-slate-800">
           <button onClick={prevStep} className="mb-4">
            <ChevronLeft />
           </button>
           <h1 className="text-3xl font-bold mb-2 font-serif">Elige tu universidad</h1>
           <p className="text-slate-400 text-sm mb-4">Busca entre todas las universidades de España.</p>
           
           <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
             <input 
               type="text" 
               placeholder="Buscar universidad..."
               className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-3 text-white outline-none focus:border-student-accent"
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               autoFocus
             />
           </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
           {filteredUnis.map(uni => (
             <button
               key={uni}
               onClick={() => { setFormData({...formData, institution: uni}); nextStep(); }}
               className={`w-full text-left p-4 rounded-lg flex justify-between items-center transition-colors ${formData.institution === uni ? 'bg-student-accent/20 border border-student-accent text-student-accent' : 'bg-slate-800/50 border border-slate-800 hover:bg-slate-800'}`}
             >
               <span className="font-medium">{uni}</span>
               {formData.institution === uni && <Check size={18} />}
             </button>
           ))}
           {filteredUnis.length === 0 && (
             <p className="text-center text-slate-500 mt-8">No se encontraron resultados.</p>
           )}
        </div>
      </div>
    );
  }

  // 2. Email
  if (step === 2) {
    return (
      <div className="fixed inset-0 bg-slate-900 text-white flex flex-col p-6 z-50 animate-fadeIn">
        <button onClick={prevStep} className="self-start p-2 -ml-2 mb-4">
          <ChevronLeft />
        </button>
        
        <div className="flex-1 mt-8 text-center">
           <h1 className="text-3xl font-bold mb-2 font-serif leading-tight">¿Cuál es tu correo<br/>institucional?</h1>
           <p className="text-slate-400 mb-8">
             Introduce tu correo de {formData.institution ? formData.institution : 'la universidad'} para verificarte.
           </p>
           
           <input 
             type="email"
             placeholder="estudiante@universidad.es"
             className="w-full bg-slate-800 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-500 focus:border-white outline-none"
             value={formData.email}
             onChange={(e) => setFormData({...formData, email: e.target.value})}
             autoFocus
           />
        </div>

        <button 
          onClick={nextStep}
          disabled={!formData.email.includes('@')}
          className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-lg disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    );
  }

  // 3. Basics (Name)
  if (step === 3) {
    return (
      <div className={`fixed inset-0 ${gradientBg} text-white flex flex-col items-center justify-end z-50 animate-fadeIn`}>
        <div className="w-full h-[85vh] bg-slate-900 rounded-t-3xl p-6 flex flex-col shadow-2xl">
          <div className="flex items-center mb-6">
             <button onClick={prevStep} className="mr-4"><ChevronLeft/></button>
             <h2 className="text-3xl font-bold font-serif">Vamos a lo básico</h2>
          </div>
          
          <p className="text-slate-400 mb-8 text-sm">Cuanto más actualizados mantengas estos datos, mejor funcionará TalentBridge para ti.</p>
          
          <div className="flex gap-4 mb-4">
            <div className="flex-1">
               <label className="text-xs text-slate-400 block mb-2">Nombre</label>
               <input 
                 className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none focus:border-student-accent"
                 value={formData.firstName}
                 onChange={e => setFormData({...formData, firstName: e.target.value})}
               />
            </div>
            <div className="flex-1">
               <label className="text-xs text-slate-400 block mb-2">Apellidos</label>
               <input 
                 className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none focus:border-student-accent"
                 value={formData.lastName}
                 onChange={e => setFormData({...formData, lastName: e.target.value})}
               />
            </div>
          </div>
          
          <div className="mt-auto">
             <button onClick={nextStep} className="w-full bg-slate-800 border border-slate-700 text-white font-bold py-3.5 rounded-lg hover:bg-slate-700">Siguiente</button>
          </div>
        </div>
      </div>
    );
  }

  // 4. Basics (Education)
  if (step === 4) {
    return (
      <div className={`fixed inset-0 ${gradientBg} text-white flex flex-col items-center justify-end z-50 animate-fadeIn`}>
        <div className="w-full h-[85vh] bg-slate-900 rounded-t-3xl p-6 flex flex-col shadow-2xl">
          <div className="flex items-center mb-6">
             <button onClick={prevStep} className="mr-4"><ChevronLeft/></button>
             <h2 className="text-3xl font-bold font-serif">Tu Educación</h2>
          </div>
          
          <div className="space-y-6">
             {/* Name Readonly */}
             <div className="flex gap-4">
                <div className="flex-1 bg-slate-800 p-3 rounded-lg text-slate-300 border border-slate-700">{formData.firstName}</div>
                <div className="flex-1 bg-slate-800 p-3 rounded-lg text-slate-300 border border-slate-700">{formData.lastName}</div>
             </div>

             <div>
                <label className="text-xs text-slate-400 block mb-2">¿Qué estudios estás cursando?</label>
                <div className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 flex justify-between items-center">
                   <span>{formData.degree}</span>
                   <ChevronDown size={16} className="text-slate-500" />
                </div>
             </div>

             <div>
                <label className="text-xs text-slate-400 block mb-2">¿Qué estás estudiando? (Grado/Máster)</label>
                <input 
                   className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white outline-none focus:border-student-accent"
                   value={formData.major}
                   placeholder="Ej: Matemáticas, Ingeniería Informática..."
                   onChange={e => setFormData({...formData, major: e.target.value})}
                />
             </div>

             <div>
                <label className="text-xs text-slate-400 block mb-2">¿Cuándo esperas graduarte?</label>
                <div className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 flex justify-between items-center cursor-pointer">
                   <select 
                     className="bg-transparent w-full outline-none text-white appearance-none"
                     value={formData.gradDate}
                     onChange={(e) => setFormData({...formData, gradDate: e.target.value})}
                   >
                     <option value="" className="text-slate-500">Seleccionar año</option>
                     <option value="2024" className="text-black">2024</option>
                     <option value="2025" className="text-black">2025</option>
                     <option value="2026" className="text-black">2026</option>
                     <option value="2027" className="text-black">2027</option>
                     <option value="2028" className="text-black">2028</option>
                   </select>
                   <ChevronDown size={16} className="text-slate-500 pointer-events-none" />
                </div>
             </div>
          </div>
          
          <div className="mt-auto">
             <button onClick={nextStep} disabled={!formData.major} className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-lg disabled:opacity-50">Siguiente</button>
          </div>
        </div>
      </div>
    );
  }

  // 5. Preferences (New Step)
  if (step === 5) {
     return (
      <div className={`fixed inset-0 ${gradientBg} text-white flex flex-col items-center justify-end z-50 animate-fadeIn`}>
        <div className="w-full h-[85vh] bg-slate-900 rounded-t-3xl p-6 flex flex-col shadow-2xl">
          <div className="flex items-center mb-4">
             <button onClick={prevStep} className="mr-4"><ChevronLeft/></button>
             <h2 className="text-2xl font-bold font-serif">Tus Intereses</h2>
          </div>
          <p className="text-slate-400 text-sm mb-6">Ayúdanos a personalizar tu feed y recomendaciones.</p>

          <div className="flex-1 overflow-y-auto space-y-6">
             <div>
                <h3 className="text-sm font-bold text-white mb-3">¿Qué tipo de empleo buscas?</h3>
                <div className="flex flex-wrap gap-2">
                   {JOB_TYPES_PREF.map(type => (
                      <button
                        key={type}
                        onClick={() => toggleSelection(formData.jobTypes, type, 'jobTypes')}
                        className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                           formData.jobTypes.includes(type) 
                           ? 'bg-student-accent text-slate-900 border-student-accent' 
                           : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                         {type}
                      </button>
                   ))}
                </div>
             </div>

             <div>
                <h3 className="text-sm font-bold text-white mb-3">Sectores de interés</h3>
                <div className="flex flex-wrap gap-2">
                   {CAREER_SECTORS.map(sec => (
                      <button
                        key={sec}
                        onClick={() => toggleSelection(formData.sectors, sec, 'sectors')}
                        className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${
                           formData.sectors.includes(sec) 
                           ? 'bg-student-secondary text-slate-900 border-student-secondary' 
                           : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-500'
                        }`}
                      >
                         {sec}
                      </button>
                   ))}
                </div>
             </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800">
             <button onClick={nextStep} className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-lg">Ver mi perfil</button>
          </div>
        </div>
      </div>
     );
  }

  // 6. Profile Preview (Dynamic)
  if (step === 6) {
    // Logic to create display chips from state
    const displayTags = [];
    if (formData.jobTypes.length > 0) displayTags.push(formData.jobTypes[0]);
    if (formData.sectors.length > 0) displayTags.push(formData.sectors[0]);
    
    // Fallback if empty
    if (displayTags.length === 0) displayTags.push('Estudiante');

    const remainingCount = (formData.jobTypes.length + formData.sectors.length) - displayTags.length;

    return (
      <div className={`fixed inset-0 ${gradientBg} text-white flex flex-col items-center justify-center p-6 z-50 animate-fadeIn`}>
        <button onClick={prevStep} className="absolute top-6 left-6 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white">
           <ChevronLeft />
        </button>

        <div className="text-center mb-8">
           <h1 className="text-4xl font-bold font-serif mb-2">Los perfiles lo conectan todo</h1>
           <p className="text-white/80 text-sm">Así es como te verán los reclutadores.</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 w-full max-w-sm shadow-2xl flex flex-col items-center transform transition-transform hover:scale-105 duration-300">
           <div className="relative mb-4">
              <div className="w-24 h-24 rounded-full bg-slate-700 flex items-center justify-center text-3xl font-bold text-slate-400 border-4 border-slate-800">
                {formData.firstName?.[0]}{formData.lastName?.[0]}
              </div>
              <button className="absolute bottom-0 right-0 p-1.5 bg-slate-800 rounded-full border border-slate-600">
                 <Pen size={12} />
              </button>
           </div>
           
           <h2 className="text-xl font-bold mb-1">{formData.firstName} {formData.lastName}</h2>
           <p className="text-sm text-slate-400 mb-6 text-center px-4">
              {formData.institution} {formData.gradDate ? `'${formData.gradDate.slice(-2)}` : ''} · {formData.major || 'Estudiante'}
           </p>
           
           <div className="flex gap-2 w-full justify-center flex-wrap">
              {displayTags.map((tag, i) => (
                 <div key={i} className="bg-slate-800 rounded px-3 py-2 text-xs text-center border border-slate-700 font-medium text-slate-300">
                    {tag}
                 </div>
              ))}
              {remainingCount > 0 && (
                 <div className="bg-slate-800 rounded px-3 py-2 text-xs text-center border border-slate-700 font-medium text-slate-300">
                    + {remainingCount} más
                 </div>
              )}
           </div>
        </div>

        <button 
          onClick={nextStep}
          className="w-full max-w-sm bg-white text-slate-900 font-bold py-3.5 rounded-lg mt-8 shadow-xl"
        >
          Configurar visibilidad
        </button>
      </div>
    );
  }

  // 7. Visibility Settings
  if (step === 7) {
    return (
      <div className={`fixed inset-0 ${gradientBg} text-white flex flex-col items-center justify-end z-50 animate-fadeIn`}>
         <div className="w-full h-[75vh] bg-slate-900 rounded-t-3xl p-6 flex flex-col shadow-2xl">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold font-serif mb-2 leading-tight">Privacidad y Alcance</h1>
                <p className="text-slate-400 text-sm">Tú controlas quién ve tu talento.</p>
            </div>

            <div className="flex-1 space-y-6">
                <p className="text-xs text-slate-500 font-bold uppercase">Configura la visibilidad de tu perfil</p>
                
                {/* Option 1 */}
                <div 
                   className="flex items-start gap-4 cursor-pointer"
                   onClick={() => setFormData({...formData, visibility: 'Comunidad'})}
                >
                   <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                         <span className="font-bold">Comunidad</span>
                         <span className="bg-green-600 text-white text-[10px] px-1.5 py-0.5 rounded uppercase font-bold">Recomendado</span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">Cualquiera puede ver tu perfil, enviarte mensajes y seguirte. Tienes acceso completo a la red social.</p>
                   </div>
                   <div className={`w-5 h-5 rounded-full border ${formData.visibility === 'Comunidad' ? 'border-green-500 bg-green-500' : 'border-slate-600'}`}></div>
                </div>

                 {/* Option 2 */}
                <div 
                   className="flex items-start gap-4 cursor-pointer"
                   onClick={() => setFormData({...formData, visibility: 'Empleadores'})}
                >
                   <div className="flex-1">
                      <div className="font-bold mb-1">Empleadores</div>
                      <p className="text-xs text-slate-400 leading-relaxed">Solo los reclutadores verificados pueden ver tu perfil. Tus compañeros no podrán encontrarte.</p>
                   </div>
                   <div className={`w-5 h-5 rounded-full border ${formData.visibility === 'Empleadores' ? 'border-green-500 bg-green-500' : 'border-slate-600'}`}></div>
                </div>

                {/* Option 3 */}
                <div 
                   className="flex items-start gap-4 cursor-pointer"
                   onClick={() => setFormData({...formData, visibility: 'Privado'})}
                >
                   <div className="flex-1">
                      <div className="font-bold mb-1">Privado</div>
                      <p className="text-xs text-slate-400 leading-relaxed">Modo incógnito. Nadie te ve. Solo puedes usar la app para buscar empleos, no para que te encuentren.</p>
                   </div>
                   <div className={`w-5 h-5 rounded-full border ${formData.visibility === 'Privado' ? 'border-green-500 bg-green-500' : 'border-slate-600'}`}></div>
                </div>
            </div>

            <button 
              onClick={nextStep}
              className="w-full bg-slate-800 text-white font-bold py-3.5 rounded-lg mt-4 border border-slate-700 hover:bg-slate-700"
            >
              Guardar configuración
            </button>
         </div>
      </div>
    );
  }

  // 8. Success
  if (step === 8) {
    return (
      <div className={`fixed inset-0 ${gradientBg} text-white flex flex-col items-center justify-center p-6 z-50 animate-fadeIn`}>
         {/* Floating Elements (Visual Flair) */}
         <div className="relative w-full max-w-sm h-64 mb-8">
            <div className="absolute top-0 left-10 transform -rotate-12 bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center shadow-lg font-bold">PWC</div>
            <div className="absolute top-4 right-10 transform rotate-6 bg-white text-slate-900 text-xs p-2 rounded shadow-lg font-bold">Beca</div>
            <div className="absolute bottom-10 left-0 bg-yellow-400 text-black text-xs px-2 py-1 rounded-full shadow-lg font-bold">Consejos entrevista</div>
            <div className="absolute bottom-20 right-10 bg-white w-16 h-16 rounded-lg p-2 flex items-center justify-center shadow-lg">
               <span className="text-slate-900 text-[10px] font-bold text-center leading-tight">EY Shape the future</span>
            </div>
            {/* Center Text */}
            <div className="absolute inset-0 flex items-end justify-center">
               <h1 className="text-4xl font-bold font-serif mb-8 drop-shadow-lg">¡Todo listo!</h1>
            </div>
         </div>

         <div className="max-w-xs text-center">
            <p className="text-white/90 mb-8 leading-relaxed font-medium">
               Bienvenido a TalentBridge, {formData.firstName}.<br/>
               Tu carrera empieza hoy.
            </p>
            <button 
              onClick={() => onComplete({
                 name: `${formData.firstName} ${formData.lastName}`,
                 title: formData.major,
                 university: formData.institution
              })}
              className="w-full bg-white text-slate-900 font-bold py-3.5 rounded-lg shadow-xl hover:bg-slate-100 transform transition-transform hover:scale-105"
            >
               Explorar oportunidades
            </button>
         </div>
      </div>
    );
  }

  return null;
};
