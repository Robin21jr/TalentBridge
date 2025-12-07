import React, { useState } from 'react';
import { JobOffer, StudentProfile } from '../../types';
import { Briefcase, MapPin, DollarSign, Cpu } from 'lucide-react';
import { analyzeMatch } from '../../services/geminiService';

interface Props {
  job: JobOffer;
  student: StudentProfile;
}

export const JobCard: React.FC<Props> = ({ job, student }) => {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (analysis) return; // Don't fetch again if already present
    setLoading(true);
    const result = await analyzeMatch(student.name, job.title, job.matchScore);
    setAnalysis(result);
    setLoading(false);
  };

  const getMatchColor = (score: number) => {
    if (score >= 90) return 'text-green-400 border-green-400 bg-green-400/10';
    if (score >= 75) return 'text-yellow-400 border-yellow-400 bg-yellow-400/10';
    return 'text-slate-400 border-slate-400 bg-slate-400/10';
  };

  return (
    <div className="bg-student-card rounded-2xl p-5 mb-4 border border-slate-700 shadow-xl relative overflow-hidden group hover:border-student-accent transition-colors duration-300">
      {/* Compatibility Badge */}
      <div className={`absolute top-4 right-4 px-3 py-1 rounded-full border text-xs font-bold flex items-center gap-1 ${getMatchColor(job.matchScore)}`}>
        <Cpu size={12} />
        {job.matchScore}% Match
      </div>

      <div className="flex flex-col gap-2 mb-4">
        <h3 className="text-xl font-bold text-white leading-tight">{job.title}</h3>
        <span className="text-sm text-slate-400 font-medium">{job.company}</span>
      </div>

      <div className="flex flex-wrap gap-3 mb-4 text-xs text-slate-300">
        <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded">
          <MapPin size={12} /> {job.location}
        </div>
        <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded">
          <DollarSign size={12} /> {job.salary}
        </div>
        <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded">
          <Briefcase size={12} /> {job.type}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider text-student-secondary font-bold px-2 py-0.5 border border-student-secondary/30 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {analysis && (
        <div className="bg-student-dark/50 p-3 rounded-lg mb-4 text-xs text-slate-300 border border-slate-700 animate-fadeIn">
          <p className="font-semibold text-student-accent mb-1 flex items-center gap-1">
             <Cpu size={12}/> Análisis IA:
          </p>
          {analysis}
        </div>
      )}

      <div className="flex gap-3 mt-2">
        <button className="flex-1 bg-white text-student-dark font-bold py-2 rounded-xl hover:bg-slate-200 transition-colors">
          Aplicar
        </button>
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="bg-transparent border border-student-accent text-student-accent font-bold py-2 px-4 rounded-xl hover:bg-student-accent/10 transition-colors disabled:opacity-50"
        >
          {loading ? 'Pensando...' : '¿Por qué encajo?'}
        </button>
      </div>
    </div>
  );
};      <div className="flex flex-col gap-2 mb-4">
        <h3 className="text-xl font-bold text-white leading-tight">{job.title}</h3>
        <span className="text-sm text-slate-400 font-medium">{job.company}</span>
      </div>

      <div className="flex flex-wrap gap-3 mb-4 text-xs text-slate-300">
        <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded">
          <MapPin size={12} /> {job.location}
        </div>
        <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded">
          <DollarSign size={12} /> {job.salary}
        </div>
        <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded">
          <Briefcase size={12} /> {job.type}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {job.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider text-student-secondary font-bold px-2 py-0.5 border border-student-secondary/30 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {analysis && (
        <div className="bg-student-dark/50 p-3 rounded-lg mb-4 text-xs text-slate-300 border border-slate-700 animate-fadeIn">
          <p className="font-semibold text-student-accent mb-1 flex items-center gap-1">
             <Cpu size={12}/> AI Analysis:
          </p>
          {analysis}
        </div>
      )}

      <div className="flex gap-3 mt-2">
        <button className="flex-1 bg-white text-student-dark font-bold py-2 rounded-xl hover:bg-slate-200 transition-colors">
          Apply Now
        </button>
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="bg-transparent border border-student-accent text-student-accent font-bold py-2 px-4 rounded-xl hover:bg-student-accent/10 transition-colors disabled:opacity-50"
        >
          {loading ? 'Thinking...' : 'Why Match?'}
        </button>
      </div>
    </div>
  );
};
