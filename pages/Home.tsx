import React from 'react';
import { ArrowRight, Search, Briefcase, Zap, Globe, Shield } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-100/40 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Conecta con el <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Talento del Futuro</span> Más Rápido.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              TalentBridge usa IA avanzada para cerrar la brecha entre quienes buscan empleo y los empleadores. 
              Matching inteligente, selección automatizada y preparación interactiva.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('jobs')}
                className="px-8 py-4 rounded-full bg-brand-600 hover:bg-brand-700 text-white font-semibold text-lg transition-all shadow-lg shadow-brand-200 flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Buscar Empleos
              </button>
              <button 
                onClick={() => onNavigate('tools')}
                className="px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-lg transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Zap className="w-5 h-5 text-amber-500" />
                Probar Herramientas IA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">¿Por qué TalentBridge?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">No somos solo una bolsa de trabajo. Somos una plataforma de aceleración de carrera impulsada por Gemini.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-6 h-6 text-brand-600" />,
                title: "Bolsa de Trabajo Inteligente",
                desc: "Listados seleccionados de las mejores empresas tecnológicas, actualizados diariamente con datos salariales verificados."
              },
              {
                icon: <Zap className="w-6 h-6 text-amber-500" />,
                title: "Optimización con IA",
                desc: "Recibe retroalimentación instantánea sobre tu currículum y optimízalo para el rol específico que deseas."
              },
              {
                icon: <Shield className="w-6 h-6 text-emerald-500" />,
                title: "Reclutadores Verificados",
                desc: "Conecta directamente con gerentes de contratación verificados. Se acabó el ghosting."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-400 mb-2">10k+</div>
              <div className="text-slate-400">Empleos Activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-400 mb-2">500+</div>
              <div className="text-slate-400">Empresas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-400 mb-2">95%</div>
              <div className="text-slate-400">Tasa de Match</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-400 mb-2">24/7</div>
              <div className="text-slate-400">Soporte IA</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
