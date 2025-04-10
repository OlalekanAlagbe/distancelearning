import React from 'react';
import { BookOpen, Calendar, Clock, AlertCircle } from 'lucide-react';

export function Exams() {
  const examsList = [
    {
      id: 1,
      subject: 'Advanced Mathematics',
      topic: 'Calculus Final Examination',
      date: '2025-03-15',
      time: '09:00 AM - 12:00 PM',
      duration: '3 hours',
      room: 'Online - Virtual Room 1',
      status: 'Upcoming',
      instructions: [
        'Ensure stable internet connection',
        'Keep webcam on during examination',
        'No physical calculators allowed (virtual calculator provided)',
        'Submit answers within the time limit'
      ]
    },
    {
      id: 2,
      subject: 'Physics in Practice',
      topic: 'Quantum Mechanics Mid-term',
      date: '2025-03-10',
      time: '02:00 PM - 04:00 PM',
      duration: '2 hours',
      room: 'Online - Virtual Room 2',
      status: 'Upcoming',
      instructions: [
        'Complete all sections',
        'Show detailed working for numerical problems',
        'Use provided formula sheet only',
        'Time management is crucial'
      ]
    },
    {
      id: 3,
      subject: 'English Literature',
      topic: 'Shakespeare Analysis',
      date: '2025-02-28',
      time: '10:00 AM - 12:00 PM',
      duration: '2 hours',
      room: 'Online - Virtual Room 3',
      status: 'Completed',
      grade: 'A',
      feedback: 'Excellent analysis of themes and character development'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="">
          <div className="flex items-center justify-between mb-6 px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg">
            <h2 className="text-xl font-semibold text-white">Online Examinations</h2>
            <button className="bg-white text-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-700">
              View Past Results
            </button>
          </div>

          <div className="space-y-6">
            {examsList.map((exam) => (
              <div key={exam.id} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{exam.subject}</h3>
                      <p className="text-sm text-gray-500">{exam.topic}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      exam.status === 'Completed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {exam.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Date: {exam.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Time: {exam.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Duration: {exam.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-5 w-5 text-gray-400" />
                    <span className="text-sm text-gray-600">Room: {exam.room}</span>
                  </div>
                </div>

                {exam.status === 'Upcoming' && (
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <div className="flex items-start space-x-2 mb-2">
                      <AlertCircle className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <h4 className="font-medium text-gray-900">Important Instructions:</h4>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-6">
                      {exam.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex space-x-4">
                      <button className="flex-1 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                        Enter Exam
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50">
                        Download Guidelines
                      </button>
                    </div>
                  </div>
                )}

                {exam.status === 'Completed' && (
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-500">Grade</p>
                        <p className="text-lg font-semibold text-green-600">{exam.grade}</p>
                      </div>
                      <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                        View Detailed Results
                      </button>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      Feedback: {exam.feedback}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}