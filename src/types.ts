export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: 'Web' | 'Mobile' | 'Design' | 'AI';
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  completedDate: string;
  featured: boolean;
  metrics?: string;
}

export interface TimelineEvent {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education' | 'award';
  skills: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: string;
}

export interface GuestbookMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
  avatarColor: string; // Tailind bg class
  rating?: number; // 1-5 optional star rating
}
