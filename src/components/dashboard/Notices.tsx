import React from 'react';
import { Bell, AlertCircle, Info, Calendar } from 'lucide-react';

export function Notices() {
  const notices = [
    {
      id: 1,
      title: 'Upcoming Examination Schedule',
      content: 'Final examinations for the Spring semester will be held from April 15th to April 30th, 2025. Please check your individual schedule.',
      type: 'important',
      date: '2025-03-15',
      department: 'Examination Cell'
    },
    {
      id: 2,
      title: 'Campus Maintenance Notice',
      content: 'The main library will be closed for renovations from March 20th to March 22nd, 2025. Alternative study spaces will be available in Building B.',
      type: 'info',
      date: '2025-03-14',
      department: 'Facilities Management'
    },
    {
      id: 3,
      title: 'Guest Lecture Series',
      content: 'Distinguished Professor Sarah Johnson from MIT will be conducting a special lecture on "Future of AI" on March 25th, 2025.',
      type: 'event',
      date: '2025-03-13',
      department: 'Computer Science Department'
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
        return 'bg-red-50 border-red-200';
      case 'event':
        return 'bg-green-50 border-green-200';
      default:
        return 'bg-blue-50 border-blue-200';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Bell className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Notice Board</h2>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              View All Notices
            </button>
          </div>

          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className={`p-4 rounded-lg border ${getNoticeColor(notice.type)}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    {getNoticeIcon(notice.type)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">{notice.title}</h3>
                      <span className="text-sm text-gray-500">{notice.date}</span>
                    </div>
                    <p className="mt-2 text-gray-600">{notice.content}</p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-sm text-gray-500">From: {notice.department}</span>
                      <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                Previous
              </button>
              <button className="px-3 py-1 rounded-md bg-indigo-600 text-white">1</button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                2
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                3
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}