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
  { key: 'algorithms', label: 'Algorithms', icon: 'bi-123', color: '#1d6ff2' },
  { key: 'java', label: 'Java', icon: 'bi-cup-hot', color: '#1d6ff2' },
  { key: 'python', label: 'Python', icon: 'bi-filetype-py', color: '#1d6ff2' },
  { key: 'javascript', label: 'JavaScript', icon: 'bi-filetype-js', color: '#1d6ff2' },
  { key: 'angular', label: 'Angular', icon: '🅰️', color: '#1d6ff2' },
  { key: 'springboot', label: 'Spring Boot', icon: 'bi-tree', color: '#1d6ff2' },
  { key: 'sql', label: 'SQL', icon: 'bi-database', color: '#1d6ff2' },
  { key: 'django', label: 'Django', icon: 'bi-filetype-py', color: '#1d6ff2' },
  { key: 'fastapi', label: 'FastAPI', icon: 'bi-lightning-charge', color: '#1d6ff2' },
  { key: 'comptabilite', label: 'Comptabilité & Gestion', icon: 'bi-bar-chart', color: '#1d6ff2' },
  { key: 'sage-femme', label: 'Sage-Femme d\'État', icon: 'bi-heart-pulse', color: '#1d6ff2' },
  { key: 'marketing-digital', label: 'Marketing Digital', icon: 'bi-megaphone', color: '#1d6ff2' },
  { key: 'developpement-personnel', label: 'Développement Personnel', icon: 'bi-flower2', color: '#1d6ff2' },
  { key: 'virtual', label: 'Classes Virtuelles', icon: 'bi-camera-video', color: '#1d6ff2' }
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
