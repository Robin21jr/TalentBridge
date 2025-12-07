import React from 'react';
import { Search as SearchIcon, Briefcase, Bookmark } from 'lucide-react';

export const Search: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 pb-20">
      <div className="flex items-center gap-3 mb-4">
         <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 text-xs font-bold">M</div>
         <h1 className="text-xl font-bold">Buscar</h1>
      </div>

      <div className="relative mb-8">
         <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
         <input 
           type="text" 
           placeholder="Empleos, eventos, usuarios"
           className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-3 text-sm focus:border-slate-600 outline-none placeholder-slate-500"
         />
      </div>

      <section className="mb-8">
         <h2 className="text-sm font-medium text-slate-300 mb-4">Selección de empleos para desarrolladores e ingenieros</h2>
         
         <div className="space-y-4">
            {[
               { company: 'NxtCure', role: 'Desarrollador Full Stack', pay: '18 - 20 GBP/hr', img: 'https://ui-avatars.com/api/?name=N&background=333&color=fff' },
               { company: 'TalkingPets.ai', role: 'Desarrollador iOS', pay: '30,00 GBP/hr', img: 'https://ui-avatars.com/api/?name=T&background=sky&color=fff' },
               { company: 'The Mobile Store LTD', role: 'Creador Herramientas IA', pay: 'Medio tiempo', img: 'https://ui-avatars.com/api/?name=M&background=333&color=fff' }
            ].map((job, i) => (
               <div key={i} className="flex gap-4 items-start border-b border-slate-800 pb-4 last:border-0">
                  <img src={job.img} className="w-12 h-12 rounded bg-slate-800" alt={job.company} />
                  <div className="flex-1">
                     <div className="text-xs text-slate-400 mb-0.5">{job.company}</div>
                     <div className="font-bold text-sm mb-1">{job.role}</div>
                     <div className="text-xs text-slate-500">{job.pay} · Medio tiempo</div>
                  </div>
                  <Bookmark className="text-slate-500" size={20} />
               </div>
            ))}
         </div>
         <button className="w-full py-3 mt-2 border border-slate-800 rounded-lg text-sm font-medium hover:bg-slate-900 transition-colors">
            Ver más
         </button>
      </section>

      <section>
         <h2 className="text-sm font-medium text-slate-300 mb-4">Buenas opciones para científicos de datos</h2>
         <div className="flex gap-4 items-start border-b border-slate-800 pb-4">
             <div className="w-12 h-12 bg-red-900 rounded flex items-center justify-center text-xs font-bold text-red-200">INSPEC</div>
             <div className="flex-1">
                <div className="text-xs text-slate-400 mb-0.5">INSPEC International Ltd</div>
                <div className="font-bold text-sm mb-1">Sujeto de prueba evaluación PPE</div>
             </div>
             <Bookmark className="text-slate-500" size={20} />
         </div>
      </section>
    </div>
  );
};
