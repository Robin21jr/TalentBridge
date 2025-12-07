import React, { useState } from 'react';
import { UserRole } from './types';
import { CURRENT_STUDENT, JOB_OFFERS, CANDIDATES, HIRING_FUNNEL, SKILL_DISTRIBUTION } from './constants';
import { SoftSkillsChart } from './components/student/RadarChart';
import { JobCard } from './components/student/JobCard';
import { CandidateTable } from './components/recruiter/CandidateTable';
import { AnalyticsWidgets } from './components/recruiter/AnalyticsWidgets';
import { Smartphone, LayoutDashboard, Menu, Bell, User, Search, Briefcase } from 'lucide-react';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.NONE);
  const [activeTab, setActiveTab] = useState('feed'); // For student view

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
              <h2 className="text-3xl font-bold mb-2">Student App</h2>
              <p className="text-slate-400">Gamified profile, smart matching, and career growth.</p>
            </div>
            <div className="flex items-center gap-2 text-student-accent font-bold">
              Enter Platform <span>→</span>
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
              <h2 className="text-3xl font-bold mb-2">Recruiter Dashboard</h2>
              <p className="text-slate-500">AI-powered hiring, analytics, and candidate management.</p>
            </div>
            <div className="flex items-center gap-2 text-recruiter-primary font-bold">
              Access Dashboard <span>→</span>
            </div>
          </div>

        </div>
      </div>
    );
  }

  // --- STUDENT VIEW ---
  if (role === UserRole.STUDENT) {
    return (
      <div className="min-h-screen bg-student-dark text-white font-sans selection:bg-student-accent selection:text-white pb-20 md:pb-0">
        <header className="sticky top-0 z-50 bg-student-dark/90 backdrop-blur-md border-b border-slate-800 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-student-accent to-student-secondary"></div>
            <h1 className="font-bold text-xl tracking-tight">TalentBridge</h1>
          </div>
          <div className="flex gap-4">
             <Bell className="text-slate-400" />
             <button onClick={() => setRole(UserRole.NONE)} className="text-xs bg-slate-800 px-3 py-1 rounded-full">Exit</button>
          </div>
        </header>

        <main className="max-w-md mx-auto p-4 space-y-6">
          
          {/* Smart Profile Summary */}
          <section className="bg-student-card rounded-3xl p-6 shadow-xl border border-slate-700">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                 <img src={CURRENT_STUDENT.avatar} alt="Profile" className="w-16 h-16 rounded-full border-2 border-student-accent" />
                 <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-student-card rounded-full"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold">{CURRENT_STUDENT.name}</h2>
                <p className="text-sm text-slate-400">{CURRENT_STUDENT.title}</p>
              </div>
            </div>
            
            <div className="mb-6">
               <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold mb-3">Soft Skills Radar</h3>
               <SoftSkillsChart data={CURRENT_STUDENT.softSkills} />
            </div>

            <div className="space-y-3">
               <h3 className="text-xs uppercase tracking-widest text-slate-500 font-bold">Hard Skills</h3>
               {CURRENT_STUDENT.hardSkills.map(skill => (
                 <div key={skill.name} className="space-y-1">
                   <div className="flex justify-between text-xs font-medium">
                     <span>{skill.name}</span>
                     <span className="text-student-accent">{skill.level}%</span>
                   </div>
                   <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-student-accent to-student-secondary" style={{ width: `${skill.level}%` }}></div>
                   </div>
                 </div>
               ))}
            </div>
          </section>

          {/* Matching Feed */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <span className="text-student-secondary">★</span> Top Matches
              </h2>
              <span className="text-xs text-slate-400">Based on your profile</span>
            </div>
            <div className="space-y-4">
               {JOB_OFFERS.map(job => (
                 <JobCard key={job.id} job={job} student={CURRENT_STUDENT} />
               ))}
            </div>
          </section>

        </main>
        
        {/* Mobile Navigation */}
        <nav className="fixed bottom-0 left-0 right-0 bg-student-dark border-t border-slate-800 p-4 flex justify-around items-center md:hidden z-50">
           <button className="text-student-accent flex flex-col items-center gap-1">
             <Briefcase size={20} />
             <span className="text-[10px] font-bold">Jobs</span>
           </button>
           <button className="text-slate-500 flex flex-col items-center gap-1">
             <Search size={20} />
             <span className="text-[10px]">Explore</span>
           </button>
           <button className="text-slate-500 flex flex-col items-center gap-1">
             <User size={20} />
             <span className="text-[10px]">Profile</span>
           </button>
        </nav>
      </div>
    );
  }

  // --- RECRUITER VIEW ---
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
             <User size={18} /> Candidates
           </a>
           <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-lg font-medium transition-colors">
             <Briefcase size={18} /> Jobs
           </a>
         </nav>
         
         <div className="mt-auto pt-6 border-t border-slate-100">
            <button onClick={() => setRole(UserRole.NONE)} className="text-sm text-slate-500 hover:text-slate-800 flex items-center gap-2">
               Log Out
            </button>
         </div>
      </aside>

      {/* Main Content */}
      <main className="lg:pl-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
           <h2 className="text-lg font-semibold text-slate-800">Talent Command Center</h2>
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
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Total Candidates</p>
                <p className="text-2xl font-bold text-slate-800">1,248</p>
             </div>
             <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Active Jobs</p>
                <p className="text-2xl font-bold text-slate-800">12</p>
             </div>
             <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Avg. Match Score</p>
                <p className="text-2xl font-bold text-recruiter-primary">84%</p>
             </div>
             <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 uppercase font-bold mb-1">Interviews This Week</p>
                <p className="text-2xl font-bold text-slate-800">28</p>
             </div>
          </div>

          <AnalyticsWidgets funnelData={HIRING_FUNNEL} skillData={SKILL_DISTRIBUTION} />

          <div className="mb-4 flex justify-between items-center">
             <h3 className="text-lg font-bold text-slate-800">Recent Applications</h3>
             <div className="flex gap-2">
                <button className="px-3 py-1.5 text-sm border border-slate-200 rounded-md bg-white text-slate-600 hover:bg-slate-50">Filter</button>
                <button className="px-3 py-1.5 text-sm bg-recruiter-primary text-white rounded-md hover:bg-sky-600 transition-colors">Export CSV</button>
             </div>
          </div>

          <CandidateTable candidates={CANDIDATES} />
        </div>
      </main>
    </div>
  );
};

export default App;