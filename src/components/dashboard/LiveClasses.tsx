import React from 'react';
import { Video, Users, Clock, Calendar } from 'lucide-react';

export function LiveClasses() {
  const upcomingClasses = [
    {
      id: 1,
      subject: 'Data Structures & Algorithms',
      topic: 'Trees and Graph Traversals',
      instructor: 'Dr. Adebayo Yusuf',
      time: '10:00 AM - 11:30 AM',
      date: '2025-03-15',
      platform: 'Zoom',
      meetingId: 'DSA-301',
      participants: 42,
    },
    {
      id: 2,
      subject: 'Artificial Intelligence',
      topic: 'Introduction to Neural Networks',
      instructor: 'Prof. Fatima Bello',
      time: '1:00 PM - 2:30 PM',
      date: '2025-03-15',
      platform: 'Google Meet',
      meetingId: 'AI-204',
      participants: 38,
    },
    {
      id: 3,
      subject: 'Web Development',
      topic: 'Building Responsive UIs with React',
      instructor: 'Mr. Ekene Chinedu',
      time: '11:00 AM - 12:30 PM',
      date: '2025-03-16',
      platform: 'Zoom',
      meetingId: 'WD-112',
      participants: 30,
    },
  ];

  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('en-NG', options);
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-5">
          <h2 className="text-xl md:text-2xl font-bold text-white">Upcoming Live Classes</h2>
        </div>

        <div className="p-6 space-y-6">
          {upcomingClasses.map((class_) => (
            <div key={class_.id} className="bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{class_.subject}</h3>
                <span className="bg-indigo-100 text-indigo-800 px-3 py-1 text-sm rounded-full font-medium">
                  {class_.platform}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-indigo-500" />
                  <span>{formatDate(class_.date)}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-indigo-500" />
                  <span>{class_.time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-indigo-500" />
                  <span>{class_.participants} participants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Video className="h-5 w-5 text-indigo-500" />
                  <span>Meeting ID: {class_.meetingId}</span>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-semibold">Topic:</span> {class_.topic}
                </p>
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Instructor:</span> {class_.instructor}
                </p>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Join Class
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium">
                  View Materials
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
