import React from 'react';
import { Video, Users, Clock, Calendar, BookOpen, UserCircle, Link, Info } from 'lucide-react';

export function LiveClasses() {
  const upcomingClasses = [
    {
      id: 1,
      subject: 'Data Structures',
      topic: 'Trees and Graph Traversal',
      instructor: 'Prof. Adebayo Ojo',
      time: '09:00 AM - 10:30 AM',
      date: '2025-03-15',
      platform: 'Zoom',
      meetingId: '789-654-321',
      participants: 42,
      level: '300 Level'
    },
    {
      id: 2,
      subject: 'Database Systems',
      topic: 'SQL Optimization Techniques',
      instructor: 'Dr. Ngozi Eze',
      time: '11:00 AM - 12:30 PM',
      date: '2025-03-15',
      platform: 'Google Meet',
      meetingId: '456-123-789',
      participants: 38,
      level: '300 Level'
    },
    {
      id: 3,
      subject: 'Operating Systems',
      topic: 'Process Scheduling Algorithms',
      instructor: 'Prof. Chinedu Okoro',
      time: '02:00 PM - 03:30 PM',
      date: '2025-03-16',
      platform: 'Microsoft Teams',
      meetingId: '321-987-654',
      participants: 35,
      level: '300 Level'
    },
    {
      id: 4,
      subject: 'Computer Networks',
      topic: 'TCP/IP Protocol Suite',
      instructor: 'Dr. Amina Mohammed',
      time: '10:00 AM - 11:30 AM',
      date: '2025-03-17',
      platform: 'Zoom',
      meetingId: '654-321-987',
      participants: 28,
      level: '300 Level'
    }
  ];

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Computer Science Live Classes</h2>
              <p className="text-sm text-gray-500 mt-1 flex items-center">
                <Info className="h-4 w-4 mr-1" /> All times are in West Africa Time (WAT)
              </p>
            </div>
            <button className="bg-indigo-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 shadow-sm hover:shadow-md flex items-center gap-2 text-sm sm:text-base">
              <Link className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>Meeting Links</span>
            </button>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {upcomingClasses.map((classItem) => (
              <div key={classItem.id} className="border border-gray-200 rounded-xl p-4 sm:p-6 hover:shadow-md transition-shadow duration-200">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 sm:mb-4 gap-2 sm:gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{classItem.subject}</h3>
                    <span className="inline-block mt-1 px-2 py-0.5 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                      {classItem.level}
                    </span>
                  </div>
                  <span className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium ${
                    classItem.platform === 'Zoom' 
                      ? 'bg-purple-100 text-purple-800' 
                      : classItem.platform === 'Google Meet' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                  }`}>
                    {classItem.platform}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{formatDate(classItem.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{classItem.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">{classItem.participants} students</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Video className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-500" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">ID: {classItem.meetingId}</span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-3 sm:pt-4 mb-3 sm:mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                        <span className="font-medium text-gray-800">Topic:</span> {classItem.topic}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 flex items-center">
                        <UserCircle className="h-3 w-3 sm:h-4 sm:w-4 mr-1 text-gray-500" />
                        <span className="font-medium text-gray-800">Lecturer:</span> {classItem.instructor}
                      </p>
                    </div>
                    <div className="flex space-x-2 sm:space-x-3">
                      <button className="bg-indigo-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                        <Video className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Join</span>
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                        <BookOpen className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>Materials</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center justify-center gap-1 sm:gap-2 mx-auto text-sm sm:text-base">
              View all classes
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}