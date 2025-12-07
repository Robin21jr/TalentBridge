import React from 'react';
import { Sprout } from 'lucide-react';

export const Inbox: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-4 flex flex-col">
       <div className="flex items-center gap-3 mb-4">
         <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-slate-300 text-xs font-bold">M</div>
         <h1 className="text-xl font-bold">Buzón</h1>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center text-center">
         <div className="w-24 h-24 mb-4 relative">
            <Sprout size={64} className="text-lime-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute inset-0 border-2 border-slate-700 rounded-full opacity-20 animate-ping"></div>
         </div>
         <h2 className="text-white font-medium mb-1">No hay conversaciones</h2>
      </div>
    </div>
  );
};
