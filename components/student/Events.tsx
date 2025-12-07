import React from 'react';
import { Calendar, CheckCircle, Search, SlidersHorizontal, Bookmark } from 'lucide-react';
import { EVENTS } from '../../constants';

export const Events: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 pb-20">
      <div className="flex items-center justify-between mb-4">
         <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 text-xs font-bold">M</div>
            <h1 className="text-xl font-bold">Eventos</h1>
         </div>
         <div className="flex gap-4 text-white">
            <Calendar size={24} />
            <CheckCircle size={24} />
         </div>
      </div>

      <div className="relative mb-4">
         <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
         <input 
           type="text" 
           placeholder="Buscar"
           className="w-full bg-slate-900 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:border-slate-600 outline-none placeholder-slate-500"
         />
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
         <button className="p-2 border border-slate-700 rounded-lg bg-slate-900"><SlidersHorizontal size={16} /></button>
         <button className="px-3 py-2 border border-slate-700 rounded-lg bg-black text-xs font-medium whitespace-nowrap">Categoría</button>
         <button className="px-3 py-2 border border-slate-700 rounded-lg bg-black text-xs font-medium whitespace-nowrap">Medio</button>
         <button className="px-3 py-2 border border-slate-700 rounded-lg bg-black text-xs font-medium whitespace-nowrap">Fecha</button>
      </div>

      {/* Quick Categories */}
      <div className="grid grid-cols-2 gap-3 mb-6">
         {[
            { label: 'Ferias de empleo en tu institución', icon: '🌍', color: 'text-cyan-400' },
            { label: 'Eventos de empleadores del centro', icon: '🫐', color: 'text-blue-400' },
            { label: 'Eventos de asesoramiento', icon: '🪄', color: 'text-white' },
            { label: 'Eventos organizados por empleadores', icon: '👥', color: 'text-cyan-200' },
         ].map((cat, i) => (
            <div key={i} className="bg-slate-900 p-4 rounded-xl flex items-start gap-3 border border-slate-800">
               <span className="text-xl">{cat.icon}</span>
               <span className="text-xs font-bold leading-tight">{cat.label}</span>
            </div>
         ))}
      </div>

      <div className="flex justify-end mb-4">
         <button className="text-xs font-medium flex items-center gap-1 text-slate-300">
            <SlidersHorizontal size={12} /> Relevancia
         </button>
      </div>

      <div className="space-y-4">
         {EVENTS.map(event => (
            <div key={event.id} className="border-b border-slate-800 pb-4 last:border-0 flex gap-4">
               <img src={event.image || `https://ui-avatars.com/api/?name=${event.organizer}`} className="w-12 h-12 rounded object-contain bg-white p-1" alt={event.organizer} />
               <div className="flex-1">
                  <div className="text-xs text-slate-400 mb-0.5">{event.organizer}</div>
                  <div className="font-bold text-sm mb-1">{event.title}</div>
                  <div className="text-xs text-slate-500 mb-2">{event.date} · {event.type} · {event.time}</div>
                  <div className="flex gap-2">
                     <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded border border-slate-700">Consejo</span>
                     <span className="bg-slate-800 text-slate-300 text-[10px] px-2 py-0.5 rounded border border-slate-700">{event.category}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-2">El evento es hoy</div>
               </div>
               <Bookmark className="text-slate-500" size={20} />
            </div>
         ))}
      </div>
    </div>
  );
};
