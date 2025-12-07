import { StudentProfile, JobOffer, Candidate, SoftSkill, AnalyticsData } from './types';

// --- Student Data ---
export const MOCK_SOFT_SKILLS: SoftSkill[] = [
  { subject: 'Communication', A: 120, fullMark: 150 },
  { subject: 'Teamwork', A: 98, fullMark: 150 },
  { subject: 'Leadership', A: 86, fullMark: 150 },
  { subject: 'Creativity', A: 99, fullMark: 150 },
  { subject: 'Problem Solving', A: 130, fullMark: 150 },
  { subject: 'Adaptability', A: 110, fullMark: 150 },
];

export const CURRENT_STUDENT: StudentProfile = {
  id: 's1',
  name: 'Alex Rivera',
  avatar: 'https://picsum.photos/150/150',
  title: 'Full Stack Developer',
  bio: 'Creative developer passionate about UI/UX and AI integration. Gamifying the web one div at a time.',
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
      role: 'Frontend Intern',
      company: 'TechFlow',
      duration: 'Jun 2023 - Aug 2023',
      description: 'Built dashboard widgets using React and D3.',
    }
  ]
};

export const JOB_OFFERS: JobOffer[] = [
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