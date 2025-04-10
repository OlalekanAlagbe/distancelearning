import React from 'react';
import { GraduationCap, Search, Bell, User, LayoutDashboard, BookOpen } from 'lucide-react';

interface NavbarProps {
  userName?: string;
  onDashboardClick?: () => void;
  onCoursesClick?: () => void;
}

export function Navbar({ userName, onDashboardClick, onCoursesClick }: NavbarProps) {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">EduLearn</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={onDashboardClick}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <LayoutDashboard className="h-5 w-5" />
              <span>Dashboard</span>
            </button>
            
            <button
              onClick={onCoursesClick}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              <BookOpen className="h-5 w-5" />
              <span>Courses</span>
            </button>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Search courses..."
                type="search"
              />
            </div>

            <button className="p-2 rounded-full text-gray-400 hover:text-gray-500 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
            </button>

            <div className="ml-4 flex items-center">
              <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center">
                <User className="h-5 w-5 text-indigo-600" />
              </div>
              <span className="ml-2 text-sm font-medium text-gray-700">{userName || 'Guest'}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}