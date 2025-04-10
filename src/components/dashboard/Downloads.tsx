import React from 'react';
import { Download, FileText, Video, BookOpen } from 'lucide-react';

export function Downloads() {
  const downloadItems = [
    {
      id: 1,
      title: 'Course Materials - Introduction to Biology',
      type: 'PDF',
      size: '2.3 MB',
      date: '2024-01-15',
      icon: FileText
    },
    {
      id: 2,
      title: 'Recorded Lecture - Cell Structure',
      type: 'MP4',
      size: '156 MB',
      date: '2024-01-14',
      icon: Video
    },
    {
      id: 3,
      title: 'Study Guide - Chemistry Fundamentals',
      type: 'PDF',
      size: '1.8 MB',
      date: '2024-01-13',
      icon: BookOpen
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-900">Download Center</h1>
        <span className="text-sm text-gray-500">{downloadItems.length} items available</span>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="divide-y divide-gray-200">
          {downloadItems.map((item) => {
            const ItemIcon = item.icon;
            return (
              <div key={item.id} className="p-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <ItemIcon className="h-5 w-5 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">{item.title}</h3>
                      <div className="flex items-center space-x-4 mt-1">
                        <span className="text-xs text-gray-500">{item.type}</span>
                        <span className="text-xs text-gray-500">{item.size}</span>
                        <span className="text-xs text-gray-500">{item.date}</span>
                      </div>
                    </div>
                  </div>
                  <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}