import React from 'react';
import { Calendar } from 'lucide-react';

export function Timetable() {
  const timetableData = [
    {
      day: 'Monday',
      periods: [
        { time: '9:00 AM', subject: 'Introduction to Programming', teacher: 'Dr. Adebayo' },
        { time: '10:30 AM', subject: 'Discrete Mathematics', teacher: 'Prof. Okonkwo' },
        { time: '12:00 PM', subject: 'Communication Skills', teacher: 'Ms. Eze' },
      ],
    },
    {
      day: 'Tuesday',
      periods: [
        { time: '9:00 AM', subject: 'Computer Architecture', teacher: 'Dr. Musa' },
        { time: '10:30 AM', subject: 'Data Structures & Algorithms', teacher: 'Prof. Adeola' },
        { time: '12:00 PM', subject: 'Software Engineering', teacher: 'Mr. Ogunleye' },
      ],
    },
    {
      day: 'Wednesday',
      periods: [
        { time: '9:00 AM', subject: 'Database Systems', teacher: 'Dr. Hassan' },
        { time: '10:30 AM', subject: 'Discrete Mathematics', teacher: 'Prof. Okonkwo' },
        { time: '12:00 PM', subject: 'Operating Systems', teacher: 'Mrs. Olabisi' },
      ],
    },
    {
      day: 'Thursday',
      periods: [
        { time: '9:00 AM', subject: 'Web Development', teacher: 'Mr. Ekene' },
        { time: '10:30 AM', subject: 'Computer Architecture', teacher: 'Dr. Musa' },
        { time: '12:00 PM', subject: 'Cybersecurity Fundamentals', teacher: 'Prof. Fatima' },
      ],
    },
    {
      day: 'Friday',
      periods: [
        { time: '9:00 AM', subject: 'Artificial Intelligence', teacher: 'Dr. Ojo' },
        { time: '10:30 AM', subject: 'Mobile App Development', teacher: 'Mrs. Ajayi' },
        { time: '12:00 PM', subject: 'Project Supervision', teacher: 'All Lecturers' },
      ],
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg max-w-5xl mx-auto my-8 border border-gray-100">
      <div className="px-6 py-5 border-b border-gray-200 flex items-center justify-between bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-2xl">
        <div className="flex items-center">
          <Calendar className="h-6 w-6 text-white mr-3" />
          <h2 className="text-xl font-bold text-white">Computer Science Class Timetable</h2>
        </div>
      </div>
      <div className="p-6">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-100 uppercase text-xs font-semibold text-gray-600">
              <tr>
                <th scope="col" className="px-6 py-3">Time</th>
                <th scope="col" className="px-6 py-3">Course</th>
                <th scope="col" className="px-6 py-3">Lecturer</th>
              </tr>
            </thead>
            {timetableData.map((day, dayIndex) => (
              <tbody key={day.day} className="divide-y divide-gray-200">
                <tr>
                  <td colSpan={3} className="px-6 py-4 bg-indigo-50 font-semibold text-indigo-700">
                    {day.day}
                  </td>
                </tr>
                {day.periods.map((period, periodIndex) => (
                  <tr key={`${dayIndex}-${periodIndex}`} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">{period.time}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{period.subject}</td>
                    <td className="px-6 py-4">{period.teacher}</td>
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
