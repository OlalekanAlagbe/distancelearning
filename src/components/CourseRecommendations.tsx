import React from 'react';
import { Sparkles } from 'lucide-react';
import { Course } from '../types';

interface CourseRecommendationsProps {
  recommendations: Course[];
  onSelectCourse: (course: Course) => void;
}

export function CourseRecommendations({ recommendations, onSelectCourse }: CourseRecommendationsProps) {
  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Sparkles className="mx-auto h-12 w-12 text-indigo-600" />
          <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
            Recommended for You
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Based on your interests and learning history
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recommendations.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => onSelectCourse(course)}
            >
              <img
                className="h-48 w-full object-cover"
                src={course.thumbnail}
                alt={course.title}
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                <p className="mt-2 text-sm text-gray-500">{course.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-500">{course.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}