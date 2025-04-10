import React from 'react';
import { Book } from 'lucide-react';
import { Course } from '../types';

interface CourseCatalogProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

export function CourseCatalog({ courses, onSelectCourse }: CourseCatalogProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <Book className="mx-auto h-12 w-12 text-indigo-600" />
        <h2 className="mt-2 text-3xl font-extrabold text-gray-900">Course Catalog</h2>
        <p className="mt-4 text-lg text-gray-500">
          Browse our selection of available courses
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
            onClick={() => onSelectCourse(course)}
          >
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src={course.thumbnail}
                alt={course.title}
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">
                  {course.level}
                </p>
                <div className="block mt-2">
                  <p className="text-xl font-semibold text-gray-900">{course.title}</p>
                  <p className="mt-3 text-base text-gray-500">{course.description}</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="text-sm text-gray-500">
                  Duration: {course.duration}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}