import { StudentProfile, JobOffer, Candidate, SoftSkill, AnalyticsData, FeedPost, Event } from './types';

// --- Lists for Onboarding ---
export const SPANISH_UNIVERSITIES = [
  "Universidad de Granada",
  "Universidad de Sevilla",
  "Universidad Complutense de Madrid",
  "Universidad de Barcelona",
  "Universidad Autónoma de Madrid",
  "Universidad Politécnica de Madrid",
  "Universidad Politécnica de Valencia",
  "Universidad de Valencia",
  "Universidad de Salamanca",
  "Universidad de Zaragoza",
  "Universidad del País Vasco",
  "Universidad de Málaga",
  "Universidad de Murcia",
  "Universidad de Alicante",
  "Universidad de Oviedo",
  "Universidad de Santiago de Compostela",
  "Universidad de Castilla-La Mancha",
  "Universidad de La Laguna",
  "Universidad de Alcalá",
  "Universidad Carlos III de Madrid",
  "Universidad Rey Juan Carlos",
  "Universitat Pompeu Fabra",
  "Universitat Autònoma de Barcelona",
  "UNED (Universidad Nacional de Educación a Distancia)",
  "Universidad de Navarra",
  "Universidad Pontificia Comillas",
  "IE University",
  "Universidad de Deusto"
];

export const CAREER_SECTORS = [
  "Tecnología y Software",
  "Ciencia de Datos",
  "Diseño y Creatividad",
  "Ingeniería",
  "Marketing y Ventas",
  "Finanzas y Banca",
  "Salud y Medicina",
  "Educación",
  "Consultoría",
  "Recursos Humanos"
];

export const JOB_TYPES_PREF = [
  "Tiempo completo",
  "Medio tiempo",
  "Prácticas / Becas",
  "Remoto",
  "Freelance"
];

// --- Student Data ---
export const MOCK_SOFT_SKILLS: SoftSkill[] = [
  { subject: 'Comunicación', A: 120, fullMark: 150 },
  { subject: 'Trabajo en equipo', A: 98, fullMark: 150 },
  { subject: 'Liderazgo', A: 86, fullMark: 150 },
  { subject: 'Creatividad', A: 99, fullMark: 150 },
  { subject: 'Resolución de problemas', A: 130, fullMark: 150 },
  { subject: 'Adaptabilidad', A: 110, fullMark: 150 },
];

export const CURRENT_STUDENT: StudentProfile = {
  id: 's1',
  name: 'Miriam García',
  title: 'Desarrolladora Full Stack',
  university: 'Universidad de Granada',
  major: 'Matemáticas',
  graduationDate: 'mayo de 2028',
  bio: 'Desarrolladora creativa apasionada por UI/UX y la integración de IA. Gamificando la web div a div.',
  avatar: '', // Empty to show default placeholder UI
  softSkills: MOCK_SOFT_SKILLS,
  hardSkills: [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 60 },
  ],
  experience: [
    {
      id: 'e1',
      role: 'Becaria Frontend',
      company: 'TechFlow',
      duration: 'Jun 2023 - Ago 2023',
      description: 'Construcción de widgets para dashboard usando React y D3.',
    }
  ]
};

export const JOB_OFFERS: JobOffer[] = [
  {
    id: 'j1',
    title: 'Programa de Graduados en Transformación',
    company: 'FDM Group',
    location: 'Leeds, Inglaterra',
    salary: '25k - 30k GBP/año',
    type: 'Tiempo completo',
    description: 'Lanza tu carrera en transformación empresarial.',
    matchScore: 92,
    tags: ['Negocios', 'Graduado'],
    isNew: true
  },
  {
    id: 'j2',
    title: 'Asistente de Servicios de Soporte',
    company: 'Element',
    location: 'High Wycombe, Inglaterra',
    salary: 'Competitivo',
    type: 'Medio tiempo',
    description: 'Apoya a nuestro equipo de laboratorio con la gestión de muestras.',
    matchScore: 85,
    tags: ['Ciencia', 'Soporte'],
    isNew: true
  },
  {
    id: 'j3',
    title: 'Terapeuta Ocupacional - Abingdon',
    company: 'Oxford Health NHS Foundation Trust',
    location: 'Abingdon, Inglaterra',
    salary: 'NHS Banda 5',
    type: 'Medio tiempo',
    description: 'Únete a nuestro equipo de terapia comunitaria.',
    matchScore: 64,
    tags: ['Salud', 'Terapia'],
    isNew: true
  },
  {
    id: 'j4',
    title: 'Embajador de Marca',
    company: 'KatKin',
    location: 'Remoto',
    salary: '18.00 GBP/hr',
    type: 'Medio tiempo',
    description: 'Representa a la marca de comida para gatos más fresca del Reino Unido.',
    matchScore: 78,
    tags: ['Marketing', 'Ventas'],
  }
];

export const FEED_POSTS: FeedPost[] = [
  {
    id: 'p1',
    author: 'Dipshan Sharma',
    authorRole: 'CCCU \'28 · BSc (Hons) Comput...',
    timeAgo: '33 min',
    content: "🚀 ¡Nuevo Post en el Blog!\n\nAcabo de publicar una nueva guía sobre cómo crear un sitio web de portafolio simple y profesional, especialmente para principiantes, estudiantes y cualquiera que intente comenzar su carrera tecnológica.",
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
    isEmployer: false,
    likes: 24,
    comments: 5
  },
  {
    id: 'p2',
    author: 'Michiel van Berkel',
    authorRole: 'Raidical · Operaciones',
    authorAvatar: 'https://i.pravatar.cc/150?u=michiel',
    timeAgo: '1 h',
    content: "**Piensa rápido. Construye más rápido. Sal antes.**\n\nLa nueva cohorte de Raidical Academy comienza en febrero '26.\nEsto no es un curso. Es donde construyes y lanzas empresas reales de IA rápidamente.",
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=600',
    isEmployer: true,
    likes: 156,
    comments: 32
  },
  {
    id: 'p3',
    author: 'Cisco Systems, Inc.',
    authorRole: 'Internet y Software',
    timeAgo: '2 d',
    content: "La preparación es imprescindible, la comunicación es clave. Los expertos de Cisco te muestran cómo dominar tu próxima entrevista.",
    isEmployer: true,
    likes: 890,
    comments: 45
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: 'Microsoft: Días de Datos Fabric',
    organizer: 'Microsoft',
    date: 'mar, 4 nov',
    time: '9:00',
    type: 'Virtual',
    category: 'Networking',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg'
  },
  {
    id: 'e2',
    title: 'Programa de Mentoría',
    organizer: 'Covington',
    date: 'jue, 6 nov',
    time: '10:00',
    type: 'Presencial',
    category: 'Taller'
  }
];

// --- Recruiter Data ---
export const CANDIDATES: Candidate[] = [
  {
    id: 'c1',
    name: 'Alex Rivera',
    role: 'Desarrollador Full Stack',
    avatar: 'https://picsum.photos/150/150',
    aiScore: 92,
    status: 'New',
    appliedDate: '2023-10-25',
    topSkills: ['React', 'TypeScript', 'Creatividad'],
  },
  {
    id: 'c2',
    name: 'Sarah Chen',
    role: 'Ingeniera Backend',
    avatar: 'https://picsum.photos/151/151',
    aiScore: 88,
    status: 'Screening',
    appliedDate: '2023-10-24',
    topSkills: ['Node.js', 'PostgreSQL', 'Diseño de Sistemas'],
  },
  {
    id: 'c3',
    name: 'Jordan Smith',
    role: 'Desarrollador Frontend',
    avatar: 'https://picsum.photos/152/152',
    aiScore: 74,
    status: 'Rejected',
    appliedDate: '2023-10-20',
    topSkills: ['Vue.js', 'CSS', 'Trabajo en equipo'],
  },
  {
    id: 'c4',
    name: 'Emily Davis',
    role: 'Desarrolladora Full Stack',
    avatar: 'https://picsum.photos/153/153',
    aiScore: 95,
    status: 'Interview',
    appliedDate: '2023-10-22',
    topSkills: ['React', 'Next.js', 'GraphQL'],
  },
  {
    id: 'c5',
    name: 'Michael Brown',
    role: 'Ingeniero DevOps',
    avatar: 'https://picsum.photos/154/154',
    aiScore: 81,
    status: 'Offer',
    appliedDate: '2023-10-18',
    topSkills: ['AWS', 'Docker', 'Kubernetes'],
  }
];

export const HIRING_FUNNEL: AnalyticsData[] = [
  { name: 'Aplicaron', value: 450 },
  { name: 'Filtrados', value: 200 },
  { name: 'Entrevista', value: 80 },
  { name: 'Oferta', value: 15 },
  { name: 'Contratado', value: 10 },
];

export const SKILL_DISTRIBUTION: AnalyticsData[] = [
  { name: 'React', value: 35 },
  { name: 'Python', value: 25 },
  { name: 'Java', value: 15 },
  { name: 'Diseño', value: 25 },
];export const JOB_OFFERS: JobOffer[] = [
  {
    id: 'j1',
    title: 'Junior React Engineer',
    company: 'NeonDigital',
    location: 'Remote',
    salary: '$60k - $80k',
    type: 'Full-time',
    description: 'Looking for a creative frontend dev to join our gamification squad.',
    matchScore: 92,
    tags: ['React', 'Tailwind', 'Gamification'],
  },
  {
    id: 'j2',
    title: 'UX/UI Designer',
    company: 'CreativeMinds',
    location: 'New York, NY',
    salary: '$70k - $90k',
    type: 'Full-time',
    description: 'Design intuitive mobile experiences for Gen Z.',
    matchScore: 85,
    tags: ['Figma', 'Prototyping', 'Mobile'],
  },
  {
    id: 'j3',
    title: 'AI Research Intern',
    company: 'FutureLabs',
    location: 'San Francisco, CA',
    salary: '$50/hr',
    type: 'Internship',
    description: 'Assist in training LLMs for creative writing.',
    matchScore: 64,
    tags: ['Python', 'PyTorch', 'LLM'],
  }
];

// --- Recruiter Data ---
export const CANDIDATES: Candidate[] = [
  {
    id: 'c1',
    name: 'Alex Rivera',
    role: 'Full Stack Developer',
    avatar: 'https://picsum.photos/150/150',
    aiScore: 92,
    status: 'New',
    appliedDate: '2023-10-25',
    topSkills: ['React', 'TypeScript', 'Creativity'],
  },
  {
    id: 'c2',
    name: 'Sarah Chen',
    role: 'Backend Engineer',
    avatar: 'https://picsum.photos/151/151',
    aiScore: 88,
    status: 'Screening',
    appliedDate: '2023-10-24',
    topSkills: ['Node.js', 'PostgreSQL', 'System Design'],
  },
  {
    id: 'c3',
    name: 'Jordan Smith',
    role: 'Frontend Developer',
    avatar: 'https://picsum.photos/152/152',
    aiScore: 74,
    status: 'Rejected',
    appliedDate: '2023-10-20',
    topSkills: ['Vue.js', 'CSS', 'Teamwork'],
  },
  {
    id: 'c4',
    name: 'Emily Davis',
    role: 'Full Stack Developer',
    avatar: 'https://picsum.photos/153/153',
    aiScore: 95,
    status: 'Interview',
    appliedDate: '2023-10-22',
    topSkills: ['React', 'Next.js', 'GraphQL'],
  },
  {
    id: 'c5',
    name: 'Michael Brown',
    role: 'DevOps Engineer',
    avatar: 'https://picsum.photos/154/154',
    aiScore: 81,
    status: 'Offer',
    appliedDate: '2023-10-18',
    topSkills: ['AWS', 'Docker', 'Kubernetes'],
  }
];

export const HIRING_FUNNEL: AnalyticsData[] = [
  { name: 'Applied', value: 450 },
  { name: 'Screened', value: 200 },
  { name: 'Interview', value: 80 },
  { name: 'Offer', value: 15 },
  { name: 'Hired', value: 10 },
];

export const SKILL_DISTRIBUTION: AnalyticsData[] = [
  { name: 'React', value: 35 },
  { name: 'Python', value: 25 },
  { name: 'Java', value: 15 },
  { name: 'Design', value: 25 },
];
