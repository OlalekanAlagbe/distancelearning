import React from 'react';
import { BookOpen, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export function Syllabus() {
  const syllabusData = [
    {
      subject: 'Data Structures & Algorithms',
      units: [
        {
          name: 'Fundamentals of DSA',
          topics: [
            { name: 'Arrays and Linked Lists', status: 'completed', completion: 100 },
            { name: 'Stacks and Queues', status: 'completed', completion: 100 },
            { name: 'Trees & Graphs', status: 'in-progress', completion: 60 },
            { name: 'Searching & Sorting', status: 'pending', completion: 0 }
          ]
        },
        {
          name: 'Algorithm Design Techniques',
          topics: [
            { name: 'Divide and Conquer', status: 'completed', completion: 100 },
            { name: 'Dynamic Programming', status: 'in-progress', completion: 40 },
            { name: 'Greedy Algorithms', status: 'pending', completion: 0 }
          ]
        }
      ]
    },
    {
      subject: 'Computer Networks',
      units: [
        {
          name: 'Network Fundamentals',
          topics: [
            { name: 'OSI Model', status: 'completed', completion: 100 },
            { name: 'IP Addressing', status: 'completed', completion: 100 },
            { name: 'TCP/UDP Protocols', status: 'in-progress', completion: 75 }
          ]
        },
        {
          name: 'Network Security',
          topics: [
            { name: 'Firewalls & VPNs', status: 'in-progress', completion: 30 },
            { name: 'Encryption Basics', status: 'pending', completion: 0 },
            { name: 'Authentication Methods', status: 'pending', completion: 0 }
          ]
        }
      ]
    }
  ];

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
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">
        <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="flex items-center">
            <BookOpen className="h-6 w-6 text-white mr-2" />
            <h2 className="text-xl md:text-2xl font-bold text-white">Syllabus Progress</h2>
          </div>
        </div>

        <div className="p-6 space-y-10">
          {syllabusData.map((subject) => (
            <div key={subject.subject} className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">{subject.subject}</h3>

              {subject.units.map((unit) => (
                <div
                  key={unit.name}
                  className="bg-gray-50 rounded-lg p-5 border border-gray-100 shadow-sm hover:shadow-md transition"
                >
                  <h4 className="text-md font-medium text-gray-800 mb-4">{unit.name}</h4>

                  <div className="space-y-4">
                    {unit.topics.map((topic) => (
                      <div key={topic.name} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(topic.status)}
                          <span className="text-sm text-gray-700">{topic.name}</span>
                        </div>

                        <div className="flex items-center space-x-4">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-indigo-600 h-2 rounded-full"
                              style={{ width: `${topic.completion}%` }}
                            />
                          </div>

                          <span
                            className={`px-2 py-1 text-xs rounded-full ${getStatusColor(
                              topic.status
                            )}`}
                          >
                            {topic.status === 'completed'
                              ? 'Completed'
                              : topic.status === 'in-progress'
                              ? 'In Progress'
                              : 'Pending'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
