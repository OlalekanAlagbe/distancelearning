import React from 'react';
import { Download, FileText, Video, BookOpen, Code, Database, Cpu, Terminal, Zap } from 'lucide-react';

export function Downloads() {
  const downloadItems = [
    {
      id: 1,
      title: 'Data Structures Lecture Slides - Week 3',
      type: 'PDF',
      size: '4.7 MB',
      date: '2024-03-15',
      course: 'CSC 301',
      icon: Code,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-100'
    },
    {
      id: 2,
      title: 'Algorithm Analysis Video Tutorial',
      type: 'MP4',
      size: '245 MB',
      date: '2024-03-14',
      course: 'CSC 302',
      icon: Video,
      iconColor: 'text-red-600',
      iconBg: 'bg-red-100'
    },
    {
      id: 3,
      title: 'Database Systems Lab Manual',
      type: 'PDF',
      size: '3.2 MB',
      date: '2024-03-12',
      course: 'CSC 303',
      icon: Database,
      iconColor: 'text-green-600',
      iconBg: 'bg-green-100'
    },
    {
      id: 5,
      title: 'Computer Architecture Practical Guide',
      type: 'PDF',
      size: '5.1 MB',
      date: '2024-03-10',
      course: 'CSC 304',
      icon: Cpu,
      iconColor: 'text-purple-600',
      iconBg: 'bg-purple-100'
    },
    {
      id: 6,
      title: 'Operating Systems Command Cheat Sheet',
      type: 'PDF',
      size: '1.5 MB',
      date: '2024-03-08',
      course: 'CSC 305',
      icon: Terminal,
      iconColor: 'text-orange-600',
      iconBg: 'bg-orange-100'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Computer Science Resources</h1>
            <p className="text-sm text-gray-500">
            Universal School Of Aviation</p>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-sm bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">
              {downloadItems.length} resources available
            </span>
            <button className="flex items-center space-x-1 px-3 py-1.5 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition-colors">
              <Zap className="h-4 w-4" />
              <span>Quick Download All</span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {downloadItems.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-start sm:items-center space-x-4">
                      <div className={`p-2 ${item.iconBg} rounded-lg flex-shrink-0`}>
                        <ItemIcon className={`h-5 w-5 ${item.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-gray-900">{item.title}</h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-0.5 rounded">
                            {item.course}
                          </span>
                          <span className="text-xs text-gray-500">{item.type}</span>
                          <span className="text-xs text-gray-500">{item.size}</span>
                          <span className="text-xs text-gray-500">{item.date}</span>
                        </div>
                      </div>
                    </div>
                    <button className="flex items-center space-x-2 px-3 py-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-500 border border-indigo-100 rounded-lg hover:bg-indigo-50 transition-colors self-start sm:self-auto">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <button className="flex items-center space-x-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
            <span>Previous</span>
          </button>
          <span>Page 1 of 3</span>
          <button className="flex items-center space-x-1 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors">
            <span>Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}