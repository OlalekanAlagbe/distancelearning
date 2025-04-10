import React, { useState } from 'react';
import { 
  User, Clock, BookOpen, Video, Calendar, FileText, CheckSquare, 
  BookMarked, PenTool, Download, UserCheck, Bell, Library, Building2,
  MessageSquare, FileSpreadsheet, Menu, X
} from 'lucide-react';
import { Profile } from './dashboard/Profile';
import { Fees } from './dashboard/Fees';
import { LiveClasses } from './dashboard/LiveClasses';
import { Timetable } from './dashboard/Timetable';
import { Syllabus } from './dashboard/Syllabus';
import { Homework } from './dashboard/Homework';
import { Exams } from './dashboard/Exams';
import { Downloads } from './dashboard/Downloads';
import { Attendance } from './dashboard/Attendance';
import { Notices } from './dashboard/Notices';
import { Reviews } from './dashboard/Reviews';

interface StudentDashboardProps {
  userName: string;
  userEmail: string;
}

type TabType = 'profile' | 'fees' | 'live-classes' | 'timetable' | 'syllabus' | 
  'homework' | 'exams' | 'downloads' | 'attendance' | 'notices' | 
  'reviews';

export function StudentDashboard({ userName, userEmail }: StudentDashboardProps) {
  const [activeTab, setActiveTab] = useState<TabType>('profile');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigationItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'fees', label: 'Fees', icon: FileSpreadsheet },
    { id: 'live-classes', label: 'Live Classes', icon: Video },
    { id: 'timetable', label: 'Class Timetable', icon: Calendar },
    { id: 'syllabus', label: 'Syllabus Status', icon: BookOpen },
    { id: 'homework', label: 'Homework', icon: PenTool },
    { id: 'exams', label: 'Online Exams', icon: BookMarked },
    { id: 'downloads', label: 'Download Center', icon: Download },
    { id: 'attendance', label: 'Attendance', icon: UserCheck },
    { id: 'notices', label: 'Notice Board', icon: Bell },
    { id: 'reviews', label: 'Teachers Reviews', icon: MessageSquare }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <Profile userName={userName} userEmail={userEmail} />;
      case 'fees':
        return <Fees />;
      case 'live-classes':
        return <LiveClasses />;
      case 'timetable':
        return <Timetable />;
      case 'syllabus':
        return <Syllabus />;
      case 'homework':
        return <Homework />;
      case 'exams':
        return <Exams />;
      case 'downloads':
        return <Downloads />;
      case 'attendance':
        return <Attendance />;
      case 'notices':
        return <Notices />;
      case 'reviews':
        return <Reviews />;
      default:
        return <Profile userName={userName} userEmail={userEmail} />;
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      {/* Mobile sidebar toggle */}
      <div className="md:hidden fixed top-20 left-4 z-20">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-md bg-white shadow-lg text-gray-600 hover:text-gray-900"
        >
          {isSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div 
        className={`fixed md:static inset-y-0 left-0 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition duration-200 ease-in-out md:transition-none
        w-64 bg-white border-r border-gray-200 overflow-y-auto z-10 pt-16 md:pt-0`}
      >
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
              <User className="h-6 w-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-gray-900">{userName}</h2>
              <p className="text-xs text-gray-500">Student</p>
            </div>
          </div>
          <nav className="space-y-1">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as TabType);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                  activeTab === item.id
                    ? 'bg-indigo-50 text-indigo-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 ${
                    activeTab === item.id ? 'text-indigo-600' : 'text-gray-400'
                  }`}
                />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4 md:p-6">
        {renderContent()}
      </div>

      {/* Mobile sidebar backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-50 z-0 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}