export interface Course {
  id: string;
  title: string;
  description: string;
  prerequisites: string[];
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  fullDescription?: string;
  learningOutcomes?: string[];
  studentsEnrolled?: string;
  modules?: number;
  videoUrl?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  enrolledCourses: string[];
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}