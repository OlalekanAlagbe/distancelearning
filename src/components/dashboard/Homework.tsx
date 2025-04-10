import React from 'react';
import { BookOpen, Calendar, CheckSquare, AlertCircle, Clock, Upload } from 'lucide-react';

export function Homework() {
  const homeworkItems = [
    {
      id: 1,
      subject: 'Data Structures',
      code: 'CSC 301',
      topic: 'Binary Search Tree Implementation',
      dueDate: '2025-03-18',
      status: 'Pending',
      description: 'Implement all operations for a self-balancing BST with test cases',
      lecturer: 'Prof. Adebayo Ojo',
      attachments: 2
    },
    {
      id: 2,
      subject: 'Database Systems',
      code: 'CSC 305',
      topic: 'SQL Query Optimization',
      dueDate: '2025-03-15',
      status: 'Submitted',
      description: 'Analyze and optimize 5 complex SQL queries with explanations',
      lecturer: 'Dr. Ngozi Eze',
      attachments: 1
    },
    {
      id: 3,
      subject: 'Computer Networks',
      code: 'CSC 307',
      topic: 'TCP Protocol Analysis',
      dueDate: '2025-03-20',
      status: 'Overdue',
      description: 'Write a report on TCP congestion control mechanisms',
      lecturer: 'Prof. Emeka Nwankwo',
      attachments: 3
    },
    {
      id: 4,
      subject: 'Operating Systems',
      code: 'CSC 303',
      topic: 'Process Scheduling Simulation',
      dueDate: '2025-03-22',
      status: 'Pending',
      description: 'Implement round-robin and priority scheduling algorithms',
      lecturer: 'Dr. Amina Mohammed',
      attachments: 0
    }
  ];

  const formatDate = (dateString: string) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getStatusDetails = (status: string) => {
    switch (status) {
      case 'Submitted':
        return { color: 'bg-green-100 text-green-800', icon: <CheckSquare className="h-4 w-4" /> };
      case 'Overdue':
        return { color: 'bg-red-100 text-red-800', icon: <AlertCircle className="h-4 w-4" /> };
      default:
        return { color: 'bg-yellow-100 text-yellow-800', icon: <Clock className="h-4 w-4" /> };
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Computer Science Assignments</h1>
            <p className="text-sm text-gray-500 mt-1">300 Level - Second Semester 2024/2025</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md">
            <Upload className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Submit Assignment</span>
          </button>
        </div>

        <div className="grid gap-4 sm:gap-6">
          {homeworkItems.map((homework) => {
            const statusDetails = getStatusDetails(homework.status);
            
            return (
              <div
                key={homework.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-semibold text-gray-900">{homework.subject}</h3>
                        <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                          {homework.code}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{homework.lecturer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 ${statusDetails.color}`}>
                      {statusDetails.icon}
                      {homework.status}
                    </span>
                  </div>
                </div>

                <div className="pl-16 sm:pl-16 space-y-3">
                  <div>
                    <h4 className="text-md font-medium text-gray-800">{homework.topic}</h4>
                    <p className="text-sm text-gray-600 mt-1">{homework.description}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-gray-500" />
                        <span>Due: {formatDate(homework.dueDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        <span>{homework.attachments} {homework.attachments === 1 ? 'attachment' : 'attachments'}</span>
                      </div>
                    </div>

                    {homework.status !== 'Submitted' && (
                      <button className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                        {homework.status === 'Overdue' ? (
                          <>
                            <AlertCircle className="h-4 w-4" />
                            <span>Submit Late</span>
                          </>
                        ) : (
                          <>
                            <CheckSquare className="h-4 w-4" />
                            <span>Mark as Complete</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-6">
          <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2 text-sm">
            View all assignments
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}