import React from 'react';
import { Job } from '../types';
import { Briefcase, MapPin, DollarSign, Clock } from 'lucide-react';

interface Props {
  job: Job;
}

export const JobCard: React.FC<Props> = ({ job }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors">{job.title}</h3>
          <p className="text-slate-500 font-medium">{job.company}</p>
        </div>
        {job.tags && job.tags.length > 0 && (
          <span className="bg-slate-100 text-slate-600 text-[10px] px-2 py-1 rounded-full uppercase font-bold tracking-wider">
            {job.tags[0]}
          </span>
        )}
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={16} className="text-slate-400" />
          {job.location}
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
          <DollarSign size={16} className="text-slate-400" />
          {job.salary}
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-600">
           <Clock size={16} className="text-slate-400" />
           {job.postedAt}
        </div>
      </div>

      <p className="text-sm text-slate-500 mb-4 line-clamp-2">{job.description}</p>

      <button className="w-full py-2 border border-slate-300 rounded-lg text-slate-700 font-medium hover:border-brand-600 hover:text-brand-600 transition-colors">
        Ver Detalles
      </button>
    </div>
  );
};
