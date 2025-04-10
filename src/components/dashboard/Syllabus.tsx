import React from 'react';
import { BookOpen, CheckCircle, Clock, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

export function Syllabus() {
  const syllabusData = [
    {
      subject: 'Data Structures & Algorithms',
      code: 'CSC 301',
      units: [
        {
          name: 'Fundamental Data Structures',
          topics: [
            { name: 'Arrays & Linked Lists', status: 'completed', completion: 100 },
            { name: 'Stacks & Queues', status: 'completed', completion: 100 },
            { name: 'Trees & Binary Search Trees', status: 'in-progress', completion: 75 },
            { name: 'Graphs & Traversals', status: 'pending', completion: 0 }
          ]
        },
        {
          name: 'Algorithm Design',
          topics: [
            { name: 'Sorting Algorithms', status: 'completed', completion: 100 },
            { name: 'Searching Algorithms', status: 'in-progress', completion: 40 },
            { name: 'Dynamic Programming', status: 'pending', completion: 0 },
            { name: 'Greedy Algorithms', status: 'pending', completion: 0 }
          ]
        }
      ]
    },
    {
      subject: 'Database Systems',
      code: 'CSC 305',
      units: [
        {
          name: 'Relational Databases',
          topics: [
            { name: 'SQL Fundamentals', status: 'completed', completion: 100 },
            { name: 'Database Design & Normalization', status: 'completed', completion: 100 },
            { name: 'Transactions & Concurrency', status: 'in-progress', completion: 60 }
          ]
        },
        {
          name: 'NoSQL Databases',
          topics: [
            { name: 'Document Databases (MongoDB)', status: 'in-progress', completion: 30 },
            { name: 'Key-Value Stores', status: 'pending', completion: 0 },
            { name: 'Graph Databases', status: 'pending', completion: 0 }
          ]
        }
      ]
    },
    {
      subject: 'Computer Networks',
      code: 'CSC 307',
      units: [
        {
          name: 'Network Fundamentals',
          topics: [
            { name: 'OSI & TCP/IP Models', status: 'completed', completion: 100 },
            { name: 'IP Addressing & Subnetting', status: 'in-progress', completion: 80 },
            { name: 'Routing Protocols', status: 'pending', completion: 0 }
          ]
        },
        {
          name: 'Network Security',
          topics: [
            { name: 'Cryptography Basics', status: 'pending', completion: 0 },
            { name: 'Firewalls & VPNs', status: 'pending', completion: 0 }
          ]
        }
      ]
    }
  ];

  const [expandedSubjects, setExpandedSubjects] = React.useState<Record<string, boolean>>(
    syllabusData.reduce((acc, subject) => ({ ...acc, [subject.subject]: true }), {})
  );

  const toggleSubject = (subject: string) => {
    setExpandedSubjects(prev => ({ ...prev, [subject]: !prev[subject] }));
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600 mr-3 p-1.5 bg-indigo-50 rounded-lg" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Computer Science Syllabus</h2>
                <p className="text-sm text-gray-500 mt-1">300 Level - Second Semester 2024/2025</p>
              </div>
            </div>
            <button className="hidden sm:flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <CheckCircle className="h-4 w-4" />
              <span>Overall Progress: 48%</span>
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="space-y-6">
            {syllabusData.map((subject) => (
              <div key={subject.subject} className="border border-gray-200 rounded-lg overflow-hidden">
                <div 
                  className="bg-gray-50 p-4 sm:p-6 flex justify-between items-center cursor-pointer hover:bg-gray-100"
                  onClick={() => toggleSubject(subject.subject)}
                >
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{subject.subject}</h3>
                    <p className="text-sm text-gray-500 mt-1">{subject.code} • Lecturer: {getNigerianLecturer(subject.subject)}</p>
                  </div>
                  {expandedSubjects[subject.subject] ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>

                {expandedSubjects[subject.subject] && (
                  <div className="p-4 sm:p-6 space-y-6">
                    {subject.units.map((unit) => (
                      <div key={unit.name} className="space-y-4">
                        <h4 className="text-md font-medium text-gray-800 border-b pb-2">{unit.name}</h4>
                        
                        <div className="space-y-4">
                          {unit.topics.map((topic) => (
                            <div key={topic.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                              <div className="flex items-center space-x-3 flex-1">
                                {getStatusIcon(topic.status)}
                                <span className="text-sm sm:text-base text-gray-700">{topic.name}</span>
                              </div>
                              
                              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 w-full sm:w-auto">
                                <div className="w-full sm:w-40 bg-gray-200 rounded-full h-2">
                                  <div
                                    className="bg-indigo-600 h-2 rounded-full"
                                    style={{ width: `${topic.completion}%` }}
                                  />
                                </div>
                                
                                <span
                                  className={`px-3 py-1 text-xs sm:text-sm rounded-full ${getStatusColor(
                                    topic.status
                                  )} text-center sm:text-left min-w-[100px]`}
                                >
                                  {topic.status === 'completed'
                                    ? 'Completed'
                                    : topic.status === 'in-progress'
                                    ? `${topic.completion}% Complete`
                                    : 'Pending'}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-2 text-sm sm:text-base">
              Download Full Syllabus (PDF)
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

// Helper function to get Nigerian lecturers
function getNigerianLecturer(subject: string): string {
  const lecturers: Record<string, string> = {
    'Data Structures & Algorithms': 'Prof. Adebayo Ojo',
    'Database Systems': 'Dr. Ngozi Eze',
    'Computer Networks': 'Prof. Emeka Nwankwo'
  };
  return lecturers[subject] || 'Lecturer TBA';
}