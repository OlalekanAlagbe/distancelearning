import React from 'react';
import { Bell, AlertCircle, Info, Calendar, ChevronRight, ChevronLeft } from 'lucide-react';

export function Notices() {
  const notices = [
    {
      id: 1,
      title: 'Final Exam Timetable Released - 2025 Spring Semester',
      content: 'The Computer Science department has published the final examination schedule. All 300-500 level exams will hold from April 15-30, 2025. Check your student portal for your personalized timetable.',
      type: 'important',
      date: '2025-03-15',
      department: 'Computer Science Department',
      courseAffected: 'All CSC courses'
    },
    {
      id: 2,
      title: 'Hackathon: Lagos Tech Fest 2025',
      content: 'Register for the annual inter-university hackathon hosted by UNILAG. Theme: "AI Solutions for African Challenges". Winners get internship opportunities at Flutterwave and Andela.',
      type: 'event',
      date: '2025-03-14',
      department: 'Faculty of Engineering',
      deadline: 'March 30, 2025'
    },
    {
      id: 3,
      title: 'Server Maintenance - CS Lab Systems',
      content: 'There will be scheduled maintenance on all Computer Science lab servers from 10pm March 20 to 6am March 21. All cloud services and student projects hosted on department servers will be temporarily unavailable.',
      type: 'info',
      date: '2025-03-13',
      department: 'IT Support Unit',
      affectedSystems: 'All CS lab machines and department servers'
    },
    {
      id: 4,
      title: 'Guest Lecture: Prof. Adeola Ojo on Blockchain',
      content: 'Join us for a special lecture on "Blockchain Applications in African Fintech" by Prof. Adeola Ojo from Covenant University. March 25th, 2025 at 2pm in the Faculty of Engineering Auditorium.',
      type: 'event',
      date: '2025-03-12',
      department: 'Computer Science Department',
      credits: 'Counts towards seminar attendance requirement'
    }
  ];

  const getNoticeIcon = (type: string) => {
    switch (type) {
      case 'important':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'event':
        return <Calendar className="h-5 w-5 text-green-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getNoticeColor = (type: string) => {
    switch (type) {
      case 'important':
        return 'bg-red-50 border-red-100 hover:border-red-200';
      case 'event':
        return 'bg-green-50 border-green-100 hover:border-green-200';
      default:
        return 'bg-blue-50 border-blue-100 hover:border-blue-200';
    }
  };

  const getNoticeBadge = (type: string) => {
    switch (type) {
      case 'important':
        return <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">Urgent</span>;
      case 'event':
        return <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Event</span>;
      default:
        return <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Information</span>;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div className="flex items-center">
              <div className="p-2 bg-indigo-100 rounded-lg mr-3">
                <Bell className="h-6 w-6 text-indigo-600" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Department Notices</h2>
                <p className="text-sm text-gray-500">Universal School Of Aviation - Computer Science</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base">
              View All Notices
            </button>
          </div>

          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className={`p-5 rounded-lg border ${getNoticeColor(notice.type)} transition-colors hover:shadow-sm`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-0.5">
                    {getNoticeIcon(notice.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-lg font-semibold text-gray-900 truncate">{notice.title}</h3>
                        {getNoticeBadge(notice.type)}
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">{notice.date}</span>
                    </div>
                    <p className="mt-2 text-gray-600">{notice.content}</p>
                    
                    <div className="mt-3 pt-3 border-t border-gray-200 flex flex-col xs:flex-row justify-between gap-3">
                      <div className="space-y-1">
                        <span className="text-xs text-gray-500 block">From: {notice.department}</span>
                        {notice.courseAffected && (
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">Affects: {notice.courseAffected}</span>
                        )}
                        {notice.deadline && (
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Deadline: {notice.deadline}</span>
                        )}
                      </div>
                      <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium flex items-center self-start xs:self-auto">
                        <span>View details</span>
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <nav className="flex items-center space-x-1">
              <button className="p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm font-medium">
                1
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm">
                2
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm">
                3
              </button>
              <button className="p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}