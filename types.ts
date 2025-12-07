export enum UserRole {
  STUDENT = 'STUDENT',
  RECRUITER = 'RECRUITER',
  NONE = 'NONE'
}

export interface SoftSkill {
  subject: string;
  A: number; // Current Level
  fullMark: number;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  avatar: string; // URL
  title: string;
  bio: string;
  softSkills: SoftSkill[];
  hardSkills: { name: string; level: number }[]; // 0-100
  experience: Experience[];
}

export interface JobOffer {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Internship' | 'Part-time';
  description: string;
  matchScore: number; // 0-100
  tags: string[];
}

export interface Candidate {
  id: string;
  name: string;
  role: string;
  avatar: string;
  aiScore: number; // 0-100
  status: 'New' | 'Screening' | 'Interview' | 'Offer' | 'Rejected';
  appliedDate: string;
  topSkills: string[];
}

export interface AnalyticsData {
  name: string;
  value: number;
}