import React from 'react';
import { BookOpen, Calendar, Clock, AlertCircle, Code, Cpu, Database, Network, Terminal, Zap } from 'lucide-react';

export function Exams() {
  const examsList = [
    {
      id: 1,
      subject: 'Data Structures & Algorithms',
      topic: 'Final Examination - Practical Implementation',
      date: '2025-03-15',
      time: '09:00 AM - 12:00 PM',
      duration: '3 hours',
      room: 'Online - CodeJudge Platform',
      status: 'Upcoming',
      icon: <Code className="h-5 w-5 text-blue-600" />,
      iconBg: 'bg-blue-100',
      instructions: [
        'The exam will consist of 6 coding problems of varying difficulty',
        'You may use any standard library functions',
        'No external resources allowed - the IDE will be locked down',
        'All code must be written in Python, Java, or C++',
        'Runtime and memory efficiency will be graded',
        'Submit all solutions before the time limit'
      ],
      specialRequirements: 'Webcam + Screen recording enabled'
    },
    {
      id: 2,
      subject: 'Computer Networks',
      topic: 'Mid-term Examination',
      date: '2025-03-10',
      time: '02:00 PM - 04:00 PM',
      duration: '2 hours',
      room: 'Online - Virtual Lab 2',
      status: 'Upcoming',
      icon: <Network className="h-5 w-5 text-purple-600" />,
      iconBg: 'bg-purple-100',
      instructions: [
        'The exam includes packet analysis questions',
        'You will need to use Wireshark for some questions',
        'Show all calculations for network addressing problems',
        'Diagrams must be drawn using the provided tool',
        'Theoretical questions require detailed explanations'
      ],
      specialRequirements: 'Wireshark installed (test version provided)'
    },
    {
      id: 3,
      subject: 'Database Systems',
      topic: 'SQL Practical Assessment',
      date: '2025-02-28',
      time: '10:00 AM - 12:00 PM',
      duration: '2 hours',
      room: 'Online - SQL Sandbox',
      status: 'Completed',
      icon: <Database className="h-5 w-5 text-green-600" />,
      iconBg: 'bg-green-100',
      grade: 'A',
      feedback: 'Excellent query optimization and schema design. 95% query efficiency score.',
      performanceStats: 'Completed all 8 queries with average runtime of 120ms'
    }
  ];

  // Group exams by status
  const upcomingExams = examsList.filter(exam => exam.status === 'Upcoming');
  const completedExams = examsList.filter(exam => exam.status === 'Completed');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100">
        <div className="p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Computer Science Exams</h1>
              <p className="text-sm text-gray-600 mt-1">Track your upcoming and completed assessments</p>
            </div>
            <div className="flex space-x-2 w-full sm:w-auto">
              <button className="text-sm bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center flex-1 sm:flex-none sm:w-auto">
                <Zap className="h-4 w-4 mr-1.5" />
                Quick Guide
              </button>
              <button className="text-sm border border-gray-300 text-gray-700 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors flex-1 sm:flex-none sm:w-auto">
                Past Results
              </button>
            </div>
          </div>

          {/* Upcoming Exams */}
          {upcomingExams.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center">
                <Calendar className="h-4 w-4 text-indigo-600 mr-2" />
                Upcoming Exams ({upcomingExams.length})
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                {upcomingExams.map((exam) => (
                  <div key={exam.id} className="bg-white rounded-lg p-4 border border-gray-200 hover:border-indigo-200 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`h-10 w-10 rounded-lg ${exam.iconBg} flex items-center justify-center`}>
                          {exam.icon}
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-gray-900">{exam.subject}</h3>
                          <p className="text-xs text-gray-500">{exam.topic}</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Upcoming
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-2 mb-3 text-xs sm:text-sm">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                        <span>{exam.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                        <span>{exam.time} ({exam.duration})</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Terminal className="h-3.5 w-3.5 text-gray-400 flex-shrink-0" />
                        <span className="truncate">{exam.room}</span>
                      </div>
                    </div>

                    {exam.specialRequirements && (
                      <div className="mb-3 p-2 bg-blue-50 rounded border border-blue-100 text-xs">
                        <p className="text-blue-800 flex items-start">
                          <AlertCircle className="h-3.5 w-3.5 mr-1.5 mt-0.5 flex-shrink-0" />
                          <span><span className="font-medium">Requirements:</span> {exam.specialRequirements}</span>
                        </p>
                      </div>
                    )}

                    <div className="mt-3 border-t border-gray-200 pt-3">
                      <div className="flex items-start space-x-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <h4 className="text-sm font-medium text-gray-900">Instructions:</h4>
                      </div>
                      <ul className="space-y-1.5 text-xs text-gray-600 ml-6">
                        {exam.instructions.map((instruction, index) => (
                          <li key={index} className="relative before:absolute before:-left-3 before:top-1.5 before:h-1 before:w-1 before:rounded-full before:bg-gray-400">
                            {instruction}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-col xs:flex-row gap-2">
                        <button className="text-xs sm:text-sm bg-indigo-600 text-white px-3 py-1.5 rounded hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center">
                          <Terminal className="h-3.5 w-3.5 mr-1.5" />
                          Practice Now
                        </button>
                        <button className="text-xs sm:text-sm border border-gray-300 text-gray-700 px-3 py-1.5 rounded hover:bg-gray-50 transition-colors font-medium">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Completed Exams */}
          {completedExams.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-200 flex items-center">
                <BookOpen className="h-4 w-4 text-green-600 mr-2" />
                Completed Exams ({completedExams.length})
              </h2>
              <div className="grid gap-4">
                {completedExams.map((exam) => (
                  <div key={exam.id} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`h-10 w-10 rounded-lg ${exam.iconBg} flex items-center justify-center`}>
                          {exam.icon}
                        </div>
                        <div>
                          <h3 className="text-base font-medium text-gray-900">{exam.subject}</h3>
                          <p className="text-xs text-gray-500">{exam.topic}</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Completed
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3 text-sm">
                      <div>
                        <p className="text-xs text-gray-500">Date</p>
                        <p className="text-gray-700">{exam.date}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Grade</p>
                        <p className="text-lg font-bold text-green-600">{exam.grade}</p>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <p className="text-xs text-gray-500">Performance</p>
                        <p className="text-gray-700 text-sm">{exam.performanceStats}</p>
                      </div>
                    </div>

                    <div className="mt-3 border-t border-gray-200 pt-3">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 mb-1">Feedback</h4>
                          <p className="text-xs text-gray-600">{exam.feedback}</p>
                        </div>
                        <button className="text-xs sm:text-sm text-indigo-600 hover:text-indigo-700 font-medium px-2.5 py-1 rounded bg-indigo-50 hover:bg-indigo-100 transition-colors self-start sm:self-auto">
                          View Analysis
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}