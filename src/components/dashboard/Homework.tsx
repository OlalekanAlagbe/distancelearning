import React, { useState } from 'react';
import { BookOpen, Calendar, CheckSquare, Bug, Terminal } from 'lucide-react';

export function Homework() {
  const [homeworkItems, setHomeworkItems] = useState([
    {
      id: 1,
      subject: 'Data Structures',
      topic: 'Graph Traversal (BFS & DFS)',
      dueDate: '2025-04-15',
      status: 'Pending',
      description: 'Implement BFS and DFS in any programming language of choice.',
    },
    {
      id: 2,
      subject: 'Operating Systems',
      topic: 'Memory Management',
      dueDate: '2025-04-17',
      status: 'Submitted',
      description: 'Compare paging vs segmentation and create a simulation.',
    },
    {
      id: 3,
      subject: 'Algorithms',
      topic: 'Dynamic Programming',
      dueDate: '2025-04-18',
      status: 'Pending',
      description: 'Solve 3 classic DP problems (Knapsack, LIS, Matrix Chain Multiplication).',
    },
  ]);

  const markAsSubmitted = (id: number) => {
    setHomeworkItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: 'Submitted' } : item
      )
    );
  };

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

  return (
    <div className="space-y-6 mt-8 px-4">
      <div className="rounded-t-lg px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-indigo-600 to-purple-600 text-white flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-white">CS Homework Dashboard</h1>
        <button className="px-4 py-2 bg-white text-indigo-700 rounded-md hover:bg-gray-100 transition-colors font-medium">
          Submit Work
        </button>
      </div>
      <div className="grid gap-6">
        {homeworkItems.map((hw) => (
          <div key={hw.id} className="bg-white rounded-lg shadow p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Terminal className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{hw.subject}</h3>
                  <p className="text-sm text-gray-500">{hw.topic}</p>
                </div>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  hw.status === 'Submitted'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {hw.status}
              </span>
            </div>

            <p className="text-gray-600">{hw.description}</p>

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span>Due: {formatDate(hw.dueDate)}</span>
              </div>

              {hw.status === 'Pending' && (
                <button
                  onClick={() => markAsSubmitted(hw.id)}
                  className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700 text-sm"
                >
                  <CheckSquare className="h-4 w-4" />
                  <span>Mark as Done</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
