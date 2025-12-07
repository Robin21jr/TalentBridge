import React, { useState } from 'react';
import { Candidate } from '../../types';
import { Eye, CheckCircle, XCircle, MoreHorizontal, BrainCircuit } from 'lucide-react';
import { analyzeMatch } from '../../services/geminiService';

interface Props {
  candidates: Candidate[];
}

export const CandidateTable: React.FC<Props> = ({ candidates }) => {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [aiAnalysis, setAiAnalysis] = useState<string>('');
  const [analyzing, setAnalyzing] = useState(false);

  const getStatusBadge = (status: Candidate['status']) => {
    const styles = {
      'New': 'bg-blue-100 text-blue-700',
      'Screening': 'bg-yellow-100 text-yellow-700',
      'Interview': 'bg-purple-100 text-purple-700',
      'Offer': 'bg-green-100 text-green-700',
      'Rejected': 'bg-red-100 text-red-700',
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${styles[status]}`}>
        {status}
      </span>
    );
  };

  const handleAiAnalyze = async (candidate: Candidate) => {
    if (analyzing) return;
    setAnalyzing(true);
    setSelectedCandidate(candidate.id);
    setAiAnalysis(''); // clear previous
    
    // Simulate job title for context
    const result = await analyzeMatch(candidate.name, candidate.role, candidate.aiScore);
    setAiAnalysis(result);
    setAnalyzing(false);
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
      <table className="w-full text-left text-sm text-slate-600">
        <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-semibold text-slate-500">
          <tr>
            <th className="px-6 py-4">Candidate</th>
            <th className="px-6 py-4">Applied Role</th>
            <th className="px-6 py-4 text-center">AI Score</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {candidates.map((candidate) => (
            <React.Fragment key={candidate.id}>
              <tr className="hover:bg-slate-50 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={candidate.avatar} alt={candidate.name} className="w-8 h-8 rounded-full object-cover" />
                    <div>
                      <div className="font-medium text-slate-900">{candidate.name}</div>
                      <div className="text-xs text-slate-400">{candidate.appliedDate}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium">{candidate.role}</td>
                <td className="px-6 py-4 text-center">
                  <div className="inline-flex items-center gap-1 font-bold text-slate-700">
                    <span className={`${candidate.aiScore > 90 ? 'text-green-600' : candidate.aiScore > 80 ? 'text-blue-600' : 'text-orange-500'}`}>
                      {candidate.aiScore}
                    </span>
                    <span className="text-slate-300">/100</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  {getStatusBadge(candidate.status)}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={() => handleAiAnalyze(candidate)}
                      className="p-2 text-recruiter-primary hover:bg-recruiter-primary/10 rounded-full transition-colors"
                      title="AI Analysis"
                    >
                      <BrainCircuit size={16} />
                    </button>
                    <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
                      <MoreHorizontal size={16} />
                    </button>
                  </div>
                </td>
              </tr>
              {selectedCandidate === candidate.id && (
                <tr className="bg-recruiter-primary/5 animate-fadeIn">
                  <td colSpan={5} className="px-6 py-4">
                    <div className="flex gap-4">
                       <div className="p-2 bg-white rounded border border-recruiter-primary/20 shadow-sm w-full">
                          <h4 className="text-xs font-bold text-recruiter-primary uppercase mb-2 flex items-center gap-2">
                            <BrainCircuit size={12}/> AI Insight
                          </h4>
                          {analyzing ? (
                            <div className="text-slate-500 text-sm animate-pulse">Generating insights...</div>
                          ) : (
                            <p className="text-slate-700 text-sm leading-relaxed">{aiAnalysis}</p>
                          )}
                          <div className="mt-2 flex justify-end">
                             <button 
                                onClick={() => setSelectedCandidate(null)}
                                className="text-xs text-slate-400 hover:text-slate-600 underline"
                             >
                               Close
                             </button>
                          </div>
                       </div>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};