import React, { useState } from 'react';
import { JobCard } from '../components/JobCard';
import { Job } from '../types';
import { Search, Filter } from 'lucide-react';

// Mock Data
const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Ingeniero Frontend Senior',
    company: 'TechFlow',
    location: 'San Francisco, CA (Remoto)',
    type: 'Tiempo completo',
    salary: '$140k - $180k',
    description: 'Buscamos un experto en React para liderar nuestro equipo frontend. Serás responsable de la arquitectura y mentoría.',
    postedAt: 'hace 2 días',
    tags: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: '2',
    title: 'Diseñador de Producto',
    company: 'Creative Studio',
    location: 'New York, NY',
    type: 'Tiempo completo',
    salary: '$110k - $150k',
    description: 'Únete a nuestro galardonado equipo de diseño. Necesitamos a alguien con un portafolio sólido en UI/UX y sistemas de diseño.',
    postedAt: 'hace 4 horas',
    tags: ['Figma', 'UI/UX', 'Prototipado'],
  },
  {
    id: '3',
    title: 'Desarrollador Backend (Go)',
    company: 'Streamline',
    location: 'Remoto',
    type: 'Contrato',
    salary: '$80/hr',
    description: 'Ayúdanos a escalar nuestro pipeline de procesamiento de datos en tiempo real. Se requiere experiencia con Go y Kafka.',
    postedAt: 'hace 1 semana',
    tags: ['Go', 'Kafka', 'PostgreSQL'],
  },
  {
    id: '4',
    title: 'Científico de Investigación IA',
    company: 'NeuralNet',
    location: 'Boston, MA',
    type: 'Tiempo completo',
    salary: '$180k - $250k',
    description: 'Trabaja en el ajuste fino de LLMs y sistemas de generación aumentada por recuperación (RAG) de vanguardia.',
    postedAt: 'hace 3 días',
    tags: ['Python', 'PyTorch', 'LLMs'],
  },
  {
    id: '5',
    title: 'Gerente de Marketing',
    company: 'GrowthBox',
    location: 'Austin, TX',
    type: 'Tiempo completo',
    salary: '$90k - $120k',
    description: 'Lidera nuestras iniciativas de crecimiento B2B. Debes tener experiencia con SEO, marketing de contenidos y anuncios pagados.',
    postedAt: 'hace 5 días',
    tags: ['SEO', 'Marketing', 'Analítica'],
  },
];

export const Jobs: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('Todos');

  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterType === 'Todos' || job.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Explorar Oportunidades</h1>
          <p className="text-slate-500 mt-1">Encuentra tu próximo rol entre {MOCK_JOBS.length} listados activos.</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 mb-8 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text"
            placeholder="Buscar por título, empresa o habilidades..."
            className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-slate-400" />
          <select 
            className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 outline-none bg-white text-slate-700 cursor-pointer"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="Todos">Todos los tipos</option>
            <option value="Tiempo completo">Tiempo completo</option>
            <option value="Medio tiempo">Medio tiempo</option>
            <option value="Contrato">Contrato</option>
            <option value="Remoto">Remoto</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-slate-500">
            <p className="text-lg">No se encontraron empleos que coincidan con tus criterios.</p>
            <button 
              onClick={() => {setSearchTerm(''); setFilterType('Todos');}}
              className="mt-4 text-brand-600 font-medium hover:underline"
            >
              Borrar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
