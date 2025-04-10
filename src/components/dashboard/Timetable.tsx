import React from 'react';
import { Calendar, Clock, User, BookOpen } from 'lucide-react';

export function Timetable() {
  const timetableData = [
    { 
      day: 'Monday', 
      periods: [
        { time: '9:00 AM - 10:30 AM', subject: 'Data Structures', teacher: 'Prof. Adebayo Ojo', venue: 'Lab 3' },
        { time: '10:45 AM - 12:15 PM', subject: 'Computer Architecture', teacher: 'Dr. Ngozi Eze', venue: 'LT 2' },
        { time: '1:30 PM - 3:00 PM', subject: 'Discrete Mathematics', teacher: 'Dr. Chukwuma Okeke', venue: 'Room 101' }
      ]
    },
    { 
      day: 'Tuesday', 
      periods: [
        { time: '9:00 AM - 10:30 AM', subject: 'Algorithms', teacher: 'Prof. Ibrahim Musa', venue: 'Lab 1' },
        { time: '10:45 AM - 12:15 PM', subject: 'Database Systems', teacher: 'Dr. Amina Mohammed', venue: 'LT 3' },
        { time: '1:30 PM - 3:00 PM', subject: 'Operating Systems', teacher: 'Prof. Olumide Adeleke', venue: 'Room 205' }
      ]
    },
    { 
      day: 'Wednesday', 
      periods: [
        { time: '9:00 AM - 10:30 AM', subject: 'Artificial Intelligence', teacher: 'Dr. Fatima Bello', venue: 'Lab 2' },
        { time: '10:45 AM - 12:15 PM', subject: 'Computer Networks', teacher: 'Prof. Emeka Nwankwo', venue: 'LT 1' },
        { time: '1:30 PM - 3:00 PM', subject: 'Software Engineering', teacher: 'Dr. Yemi Alade', venue: 'Room 104' }
      ]
    },
    { 
      day: 'Thursday', 
      periods: [
        { time: '9:00 AM - 10:30 AM', subject: 'Cybersecurity', teacher: 'Prof. Chinedu Okoro', venue: 'Lab 4' },
        { time: '10:45 AM - 12:15 PM', subject: 'Cloud Computing', teacher: 'Dr. Funmilayo Adekunle', venue: 'LT 2' },
        { time: '1:30 PM - 3:00 PM', subject: 'Machine Learning', teacher: 'Prof. Bola Tinubu', venue: 'Room 202' }
      ]
    },
    { 
      day: 'Friday', 
      periods: [
        { time: '9:00 AM - 10:30 AM', subject: 'Web Development', teacher: 'Dr. Ifeanyi Onyema', venue: 'Lab 1' },
        { time: '10:45 AM - 12:15 PM', subject: 'Mobile App Development', teacher: 'Prof. Aisha Balarabe', venue: 'LT 3' },
        { time: '1:30 PM - 3:00 PM', subject: 'Research Seminar', teacher: 'Dr. Okey Ndibe', venue: 'Auditorium' }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-indigo-600 mr-3 p-1.5 bg-indigo-50 rounded-lg" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Computer Science Timetable</h2>
                <p className="text-sm text-gray-500 mt-1">300 Level - Second Semester 2024/2025</p>
              </div>
            </div>
            <button className="hidden sm:flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <Clock className="h-4 w-4" />
              <span>Current Class</span>
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="overflow-x-auto">
            {/* Desktop View */}
            <table className="hidden md:table min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lecturer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Venue</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {timetableData.map((day) => (
                  day.periods.map((period, index) => (
                    <tr key={`${day.day}-${index}`} className="hover:bg-gray-50">
                      {index === 0 && (
                        <td rowSpan={day.periods.length} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-100">
                          {day.day}
                        </td>
                      )}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{period.time}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{period.subject}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{period.teacher}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{period.venue}</td>
                    </tr>
                  ))
                ))}
              </tbody>
            </table>

            {/* Mobile View */}
            <div className="md:hidden space-y-4">
              {timetableData.map((day) => (
                <div key={day.day} className="border border-gray-200 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                    <h3 className="font-medium text-gray-900">{day.day}</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {day.periods.map((period, index) => (
                      <div key={index} className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-indigo-50 p-2 rounded-lg">
                            <Clock className="h-5 w-5 text-indigo-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{period.subject}</h4>
                            <p className="text-sm text-gray-500 mt-1">{period.time}</p>
                            <div className="mt-2 grid grid-cols-2 gap-2">
                              <div className="flex items-center text-sm text-gray-600">
                                <User className="h-4 w-4 mr-1 text-gray-400" />
                                {period.teacher}
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <BookOpen className="h-4 w-4 mr-1 text-gray-400" />
                                {period.venue}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2 text-sm">
              Download Timetable (PDF)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}