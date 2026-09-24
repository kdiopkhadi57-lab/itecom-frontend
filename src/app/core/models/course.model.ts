export interface Course {
  id: number;
  title: string;
  description: string;
  thumbnailUrl?: string;
  category: string;
  level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
  published: boolean;
  teacher: any;
  lessons?: Lesson[];
  totalLessons: number;
  totalDurationMinutes: number;
  createdAt: string;
}

export interface Lesson {
  id: number;
  courseId?: number;
  title: string;
  description: string;
  content?: string;
  videoUrl?: string;
  pdfUrl?: string;
  duration: number;
  orderIndex: number;
  type: 'VIDEO' | 'PDF' | 'QUIZ' | 'CODE_EXERCISE' | 'EXCEL_EXERCISE';
  completed?: boolean;
  progressPercentage?: number;
  starterCode?: string;
  language?: string;
  exercise?: boolean;
}

export interface Progress {
  courseId: number;
  courseTitle: string;
  totalLessons: number;
  completedLessons: number;
  overallPercentage: number;
}

export const COURSE_CATEGORIES = [
  { key: 'algorithms', label: 'Algorithms', icon: '🔢', color: '#6366f1' },
  { key: 'java', label: 'Java', icon: '☕', color: '#f59e0b' },
  { key: 'python', label: 'Python', icon: '🐍', color: '#10b981' },
  { key: 'javascript', label: 'JavaScript', icon: '🟨', color: '#eab308' },
  { key: 'angular', label: 'Angular', icon: '🅰️', color: '#ef4444' },
  { key: 'springboot', label: 'Spring Boot', icon: '🍃', color: '#10b981' },
  { key: 'sql', label: 'SQL', icon: '🗄️', color: '#06b6d4' },
  { key: 'django', label: 'Django', icon: '🐬', color: '#0f172a' },
  { key: 'fastapi', label: 'FastAPI', icon: '⚡', color: '#22c55e' },
  { key: 'comptabilite', label: 'Comptabilité & Gestion', icon: '📊', color: '#0ea5e9' },
  { key: 'sage-femme', label: 'Sage-Femme d\'État', icon: '🤰', color: '#ec4899' },
  { key: 'marketing-digital', label: 'Marketing Digital', icon: '📣', color: '#f97316' },
  { key: 'developpement-personnel', label: 'Développement Personnel', icon: '🌱', color: '#14b8a6' },
  { key: 'virtual', label: 'Classes Virtuelles', icon: '🎥', color: '#8b5cf6' }
];

// Catégories qui ne relèvent pas d'une filière "informatique/programmation"
export const NON_PROGRAMMING_CATEGORIES = ['comptabilite', 'sage-femme', 'marketing-digital', 'developpement-personnel', 'virtual'];

// Catégories de programmation, dérivées de COURSE_CATEGORIES
export const PROGRAMMING_CATEGORIES = COURSE_CATEGORIES
  .map(c => c.key)
  .filter(key => !NON_PROGRAMMING_CATEGORIES.includes(key));

export const SPECIALIZATION_CATEGORIES: Record<string, string[]> = {
  'genie-logiciel': ['algorithms', 'java', 'python', 'javascript', 'angular', 'springboot', 'sql', 'django', 'fastapi'],
  'reseau': ['algorithms', 'java', 'python', 'sql', 'javascript', 'springboot'],
  'comptabilite': ['comptabilite'],
  'sante': ['sage-femme'],
  'marketing-digital': ['marketing-digital'],
  'developpement-personnel': ['developpement-personnel']
};
