import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { AnalyticsData } from '../../types';

interface Props {
  funnelData: AnalyticsData[];
  skillData: AnalyticsData[];
}

const COLORS = ['#15803d', '#22c55e', '#4ade80', '#2dd4bf'];

export const AnalyticsWidgets: React.FC<Props> = ({ funnelData, skillData }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Funnel Chart */}
      <div className="bg-white p-6 rounded-lg border border-green-100 shadow-sm">
        <h3 className="text-lg font-bold text-recruiter-text mb-4">Embudo de Contratación</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={funnelData} layout="vertical" margin={{ left: 20 }}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={80} tick={{ fontSize: 12, fill: '#14532d' }} />
              <Tooltip cursor={{ fill: '#f0fdf4' }} contentStyle={{ borderRadius: '8px', border: '1px solid #dcfce7', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              <Bar dataKey="value" fill="#15803d" radius={[0, 4, 4, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Skills Distribution */}
      <div className="bg-white p-6 rounded-lg border border-green-100 shadow-sm">
        <h3 className="text-lg font-bold text-recruiter-text mb-4">Habilidades de Candidatos</h3>
        <div className="h-64 flex items-center justify-center">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={skillData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {skillData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center gap-4 mt-2">
           {skillData.map((entry, index) => (
             <div key={entry.name} className="flex items-center gap-1 text-xs text-slate-500">
               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[index % COLORS.length] }}></div>
               {entry.name}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};
