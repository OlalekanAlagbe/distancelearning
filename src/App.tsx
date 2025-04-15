import React, { useState } from 'react';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CourseCatalog } from './components/CourseCatalog';
import { CourseRecommendations } from './components/CourseRecommendations';
import { PrerequisiteCheck } from './components/PrerequisiteCheck';
import { CourseDetail } from './components/CourseDetail';
import { Footer } from './components/Footer';
import { StudentDashboard } from './components/StudentDashboard';
import { ChatBot } from './components/ChatBot';
import { Course, User, AuthState } from './types';

const sampleCourses: Course[] = [
  {
    id: '1',
    title: 'Advanced Mathematics',
    description: 'Master advanced mathematical concepts including calculus, algebra, and statistics',
    prerequisites: [],
    duration: '12 weeks',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    fullDescription: 'Dive deep into advanced mathematical concepts with our comprehensive course. From complex calculus to advanced statistics, this course covers everything you need to excel in mathematics.',
    learningOutcomes: [
      "Master calculus concepts and advanced integration techniques",
      "Understand complex algebraic structures and their applications",
      "Apply statistical methods to real-world data analysis",
      "Develop problem-solving skills for mathematical challenges"
    ],
    videoUrl: "https://www.youtube.com/embed/L3LMbpZIKhQ"
  },
  {
    id: '2',
    title: 'English Literature',
    description: 'Explore classic and contemporary literature while developing critical analysis skills',
    prerequisites: [],
    duration: '10 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1474932430478-367dbb6832c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    videoUrl: "https://www.youtube.com/embed/N9QVBmSM1lk"
  },
  {
    id: '3',
    title: 'Chemistry Fundamentals',
    description: 'Learn the basics of chemistry including atomic structure, chemical bonding, and reactions',
    prerequisites: [],
    duration: '8 weeks',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    videoUrl: "https://www.youtube.com/embed/bka20Q9TN6M"
  },
  {
    id: '4',
    title: 'Physics in Practice',
    description: 'Understand the fundamental laws of physics and their real-world applications',
    prerequisites: ['1'],
    duration: '14 weeks',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    videoUrl: "https://www.youtube.com/embed/ZM8ECpBuQYE"
  },
  {
    id: '5',
    title: 'World Geography',
    description: 'Explore the physical and cultural geography of countries around the world',
    prerequisites: [],
    duration: '8 weeks',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    videoUrl: "https://www.youtube.com/embed/B8GTPvFn74c"
  },
  {
    id: '6',
    title: 'Agricultural Science',
    description: 'Learn modern farming techniques, soil science, and sustainable agriculture',
    prerequisites: [],
    duration: '12 weeks',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0c7c34?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    videoUrl: "https://www.youtube.com/embed/xGKKsgzLy00"
  },
  {
    id: '7',
    title: 'Biology Essentials',
    description: 'Discover the fundamentals of life sciences, from cells to ecosystems',
    prerequisites: [],
    duration: '10 weeks',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    videoUrl: "https://www.youtube.com/embed/QnQe0xW_JY4"
  }
];

function App() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null
  });
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [showPrerequisiteCheck, setShowPrerequisiteCheck] = useState(false);
  const [showCourseDetail, setShowCourseDetail] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (email: string, password: string) => {
    setAuthState({
      isAuthenticated: true,
      user: {
        id: '1',
        name: 'Precious Omope',
        email: email,
        enrolledCourses: ['1']
      }
    });
    setShowDashboard(true);
  };

  const handleSignup = (name: string, email: string, password: string) => {
    setAuthState({
      isAuthenticated: true,
      user: {
        id: '1',
        name: name,
        email: email,
        enrolledCourses: []
      }
    });
    setShowDashboard(true);
  };

  const handleLogout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null
    });
    setShowDashboard(false);
    setSelectedCourse(null);
    setShowPrerequisiteCheck(false);
    setShowCourseDetail(false);
  };

  const handleCourseSelect = (course: Course) => {
    setSelectedCourse(course);
    setShowCourseDetail(true);
    setShowDashboard(false);
  };

  const handleEnrollment = () => {
    if (authState.user && selectedCourse) {
      setAuthState({
        ...authState,
        user: {
          ...authState.user,
          enrolledCourses: [...authState.user.enrolledCourses, selectedCourse.id]
        }
      });
      setShowPrerequisiteCheck(false);
      setShowCourseDetail(false);
      setSelectedCourse(null);
      setShowDashboard(true);
    }
  };

  if (!authState.isAuthenticated) {
    return showSignup ? (
      <Signup 
        onSignup={handleSignup}
        onSwitchToLogin={() => setShowSignup(false)}
      />
    ) : (
      <Login 
        onLogin={handleLogin}
        onSwitchToSignup={() => setShowSignup(true)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {showDashboard && authState.user ? (
        <>
          <Navbar 
            userName={authState.user.name} 
            userEmail={authState.user.email}
            onDashboardClick={() => setShowDashboard(true)}
            onCoursesClick={() => setShowDashboard(false)}
            onLogout={handleLogout}
          />
          <StudentDashboard
            userName={authState.user.name}
            userEmail={authState.user.email}
          />
        </>
      ) : (
        <>
          <Navbar 
            userName={authState.user?.name}
            userEmail={authState.user?.email}
            onDashboardClick={() => setShowDashboard(true)}
            onCoursesClick={() => setShowDashboard(false)}
            onLogout={handleLogout}
          />
          {showPrerequisiteCheck && selectedCourse && authState.user ? (
            <PrerequisiteCheck
              course={selectedCourse}
              userCompletedCourses={authState.user.enrolledCourses}
              onContinue={handleEnrollment}
            />
          ) : showCourseDetail && selectedCourse ? (
            <CourseDetail
              course={selectedCourse}
              onBack={() => setShowCourseDetail(false)}
              onEnroll={() => setShowPrerequisiteCheck(true)}
            />
          ) : (
            <>
              <Hero />
              <CourseRecommendations
                recommendations={sampleCourses.filter(course => 
                  !authState.user?.enrolledCourses.includes(course.id)
                ).slice(0, 3)}
                onSelectCourse={handleCourseSelect}
              />
              <CourseCatalog
                courses={sampleCourses}
                onSelectCourse={handleCourseSelect}
              />
            </>
          )}
          <Footer />
        </>
      )}
      {authState.isAuthenticated && <ChatBot />}
    </div>
  );
}

export default App;