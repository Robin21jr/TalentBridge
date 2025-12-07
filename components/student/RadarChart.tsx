import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { SoftSkill } from '../../types';

interface Props {
  data: SoftSkill[];
}

export const SoftSkillsChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-64 relative">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid stroke="#475569" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
          <Radar
            name="Skills"
            dataKey="A"
            stroke="#4ade80"
            strokeWidth={3}
            fill="#4ade80"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-2 h-2 bg-student-accent rounded-full animate-pulse shadow-[0_0_15px_rgba(74,222,128,0.8)]"></div>
      </div>
    </div>
  );
};