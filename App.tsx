import React, { useState } from 'react';
import { UserRole, StudentProfile } from './types';
import { CURRENT_STUDENT, JOB_OFFERS, CANDIDATES, HIRING_FUNNEL, SKILL_DISTRIBUTION } from './constants';
import { JobCard } from './components/student/JobCard';
import { CandidateTable } from './components/recruiter/CandidateTable';
import { AnalyticsWidgets } from './components/recruiter/AnalyticsWidgets';
import { Onboarding } from './components/student/Onboarding';
import { Feed } from './components/student/Feed';
import { Search } from './components/student/Search';
import { Events } from './components/student/Events';
import { Inbox } from './components/student/Inbox';
import { Smartphone, LayoutDashboard, Bell, User, Briefcase, SlidersHorizontal, Filter, Search as SearchIcon, Calendar, MessageSquare, Home, CheckCircle, Bookmark } from 'lucide-react';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.NONE);
  // Student State
  const [onboardingComplete, setOnboardingComplete] = useState(false);
  const [activeTab, setActiveTab] = useState('feed');
  const [studentProfile, setStudentProfile] = useState<StudentProfile>(CURRENT_STUDENT);

  // --- ROLE SELECTION (SPLASH) ---
  if (role === UserRole.NONE) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Student Entrance */}
          <div 
            onClick={() => setRole(UserRole.STUDENT)}
            className="group cursor-pointer relative bg-student-dark text-white p-8 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300 h-96 flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-student-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-student-accent/30 transition-colors"></div>
            <div>
              <div className="bg-student-card w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Smartphone className="text-student-accent" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-2">App Estudiante</h2>
              <p className="text-slate-400">Perfil gamificado, matching inteligente y crecimiento profesional.</p>
            </div>
            <div className="flex items-center gap-2 text-student-accent font-bold">
              Entrar <span>→</span>
            </div>
          </div>

          {/* Recruiter Entrance */}
           <div 
            onClick={() => setRole(UserRole.RECRUITER)}
            className="group cursor-pointer relative bg-white text-slate-900 p-8 rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition-all duration-300 h-96 flex flex-col justify-between border border-slate-200"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-recruiter-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-recruiter-primary/20 transition-colors"></div>
             <div>
              <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <LayoutDashboard className="text-recruiter-primary" size={24} />
              </div>
              <h2 className="text-3xl font-bold mb-2">Panel Reclutador</h2>
              <p className="text-slate-500">Contratación con IA, analíticas y gestión de candidatos.</p>
            </div>
            <div className="flex items-center gap-2 text-recruiter-primary font-bold">
              Acceder <span>→</span>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // --- STUDENT VIEW ---
  if (role === UserRole.STUDENT) {
    
    // 1. Onboarding Flow
    if (!onboardingComplete) {
      return <Onboarding onComplete={(data) => {
        setStudentProfile({...studentProfile, ...data});
        setOnboardingComplete(true);
      }} />;
    }

    // 2. Main App Interface
    return (
      <div className="min-h-screen bg-black text-white font-sans">
        
        {/* Main Content Area */}
        <main className="max-w-md mx-auto min-h-screen bg-black relative">
           {activeTab === 'feed' && <Feed />}
           {activeTab === 'search' && <Search />}
           {activeTab === 'jobs' && (
             <div className="p-4 pb-20">
               <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 text-xs font-bold">M</div>
                     <h1 className="text-xl font-bold">Empleos</h1>
                  </div>
                  <Bookmark className="text-white" size={24} />
               </div>
               
               <div className="relative mb-4">
                 <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                 <input 
                   type="text" 
                   placeholder="Buscar"
                   className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:border-slate-600 outline-none placeholder-slate-500"
                 />
               </div>

               <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar mb-2">
                 <button className="p-2 border border-slate-700 rounded-lg bg-slate-900"><SlidersHorizontal size={16} /></button>
                 <button className="px-3 py-2 border border-slate-700 rounded-lg bg-black text-xs font-medium whitespace-nowrap">Tipo de rol</button>
                 <button className="px-3 py-2 border border-slate-700 rounded-lg bg-black text-xs font-medium whitespace-nowrap">Ubicación</button>
                 <button className="px-3 py-2 border border-slate-700 rounded-lg bg-black text-xs font-medium whitespace-nowrap">Presencial/remoto</button>
               </div>

               <div className="flex justify-between items-center mb-4">
                  <div className="text-xs text-slate-400">14.994 empleos</div>
                  <button className="text-xs font-medium flex items-center gap-1 text-slate-300">
                     <SlidersHorizontal size={12} /> Relevancia
                  </button>
               </div>

               <div className="space-y-4">
                  {JOB_OFFERS.map(job => (
                    <div key={job.id} className="border-b border-slate-800 pb-4 last:border-0 flex gap-4">
                       <div className="w-12 h-12 bg-slate-800 rounded flex items-center justify-center text-xs text-slate-500 font-bold border border-slate-700">
                          {job.company.substring(0, 3).toUpperCase()}
                       </div>
                       <div className="flex-1">
                          <div className="text-xs text-slate-400 mb-0.5">{job.company}</div>
                          <div className="font-bold text-sm mb-1 text-white leading-tight">{job.title}</div>
                          <div className="text-xs text-slate-500 mb-2">{job.salary} · {job.type}</div>
                          <div className="flex gap-2 text-[10px] text-slate-500">
                             <span>{job.location}</span>
                             {job.isNew && <span className="text-green-400">· Nuevo</span>}
                          </div>
                       </div>
                       <Bookmark className="text-slate-500" size={20} />
                    </div>
                  ))}
               </div>
             </div>
           )}
           {activeTab === 'events' && <Events />}
           {activeTab === 'inbox' && <Inbox />}
        </main>

        {/* Bottom Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 pb-safe pt-2 px-4 flex justify-between items-center z-50">
           <button 
              onClick={() => setActiveTab('feed')}
              className={`flex flex-col items-center gap-1 w-16 ${activeTab === 'feed' ? 'text-white' : 'text-slate-500'}`}
           >
             <Home size={24} strokeWidth={activeTab === 'feed' ? 2.5 : 2} />
             <span className="text-[10px] font-medium">Inicio</span>
           </button>
           <button 
              onClick={() => setActiveTab('search')}
              className={`flex flex-col items-center gap-1 w-16 ${activeTab === 'search' ? 'text-white' : 'text-slate-500'}`}
           >
             <SearchIcon size={24} strokeWidth={activeTab === 'search' ? 2.5 : 2} />
             <span className="text-[10px] font-medium">Buscar</span>
           </button>
           <button 
              onClick={() => setActiveTab('jobs')}
              className={`flex flex-col items-center gap-1 w-16 ${activeTab === 'jobs' ? 'text-white' : 'text-slate-500'}`}
           >
             <Briefcase size={24} strokeWidth={activeTab === 'jobs' ? 2.5 : 2} />
             <span className="text-[10px] font-medium">Empleos</span>
           </button>
           <button 
              onClick={() => setActiveTab('events')}
              className={`flex flex-col items-center gap-1 w-16 ${activeTab === 'events' ? 'text-white' : 'text-slate-500'}`}
           >
             <Calendar size={24} strokeWidth={activeTab === 'events' ? 2.5 : 2} />
             <span className="text-[10px] font-medium">Eventos</span>
           </button>
           <button 
              onClick={() => setActiveTab('inbox')}
              className={`flex flex-col items-center gap-1 w-16 ${activeTab === 'inbox' ? 'text-white' : 'text-slate-500'}`}
           >
             <MessageSquare size={24} strokeWidth={activeTab === 'inbox' ? 2.5 : 2} />
             <span className="text-[10px] font-medium">Buzón</span>
           </button>
        </nav>
      </div>
    );
  }

  // --- RECRUITER VIEW (Unchanged) ---
  return (
    <div className="min-h-screen bg-recruiter-bg text-recruiter-text font-sans">
      {/* Sidebar (Visual only for layout) */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 hidden lg:flex flex-col p-6 z-20">
         <div className="flex items-center gap-2 mb-10">
            <div className="w-8 h-8 rounded bg-recruiter-primary flex items-center justify-center text-white font-bold">TB</div>
            <h1 className="font-bold text-xl text-slate-800">TalentBridge</h1>
         </div>
         <nav className="space-y-1">
           <a href="#" className="flex items-center gap-3 px-4 py-3 bg-recruiter-primary/10 text-recruiter-primary rounded-lg font-medium">
             <LayoutDashboard size={18} /> Dashboard
           </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-lg font-medium transition-colors">
             <User size={18} /> Candidatos
           </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-lg font-medium transition-colors">
             <Briefcase size={18} /> Empleos
           </a>
         </nav>
         
         <div className="mt-auto pt-6 border-t border-slate-100">
            <button onClick={() => setRole(UserRole.NONE)} className="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-2">
               Cerrar Sesión
            </button>
         </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
           <h2 className="text-lg font-semibold text-slate-800">Centro de Comando de Talento</h2>
           <div className="flex items-center gap-4">
              <div className="relative">
                 <Bell size={20} className="text-slate-400" />
                 <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-200"></div>
           </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          
          {/* Stats Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
             <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Total Candidatos</p>
                <p className="text-2xl font-bold text-slate-800">1,248</p>
             </div>
             <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Empleos Activos</p>
                <p className="text-2xl font-bold text-slate-800">12</p>
             </div>
             <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Score Promedio</p>
                <p className="text-2xl font-bold text-recruiter-primary">84%</p>
             </div>
             <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Entrevistas Esta Semana</p>
                <p className="text-2xl font-bold text-slate-800">28</p>
             </div>
          </div>

          <AnalyticsWidgets funnelData={HIRING_FUNNEL} skillData={SKILL_DISTRIBUTION} />

          <div className="mb-4 flex justify-between items-center">
             <h3 className="text-lg font-bold text-slate-800">Aplicaciones Recientes</h3>
             <div className="flex gap-2">
                <button className="px-3 py-1.5 text-sm border border-slate-200 rounded-md bg-white text-slate-600 hover:bg-slate-50">Filtrar</button>
                <button className="px-3 py-1.5 text-sm bg-recruiter-primary text-white rounded-md hover:bg-sky-600 transition-colors">Exportar CSV</button>
             </div>
          </div>

          <CandidateTable candidates={CANDIDATES} />
        </div>
      </main>
    </div>
  );
};

export default App;
