import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { Course } from '../types';

interface PrerequisiteCheckProps {
  course: Course;
  userCompletedCourses: string[];
  onContinue: () => void;
}

export function PrerequisiteCheck({ course, userCompletedCourses, onContinue }: PrerequisiteCheckProps) {
  const hasPrerequisites = course.prerequisites.every(prereq => 
    userCompletedCourses.includes(prereq)
  );

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex items-center justify-center mb-6">
          {hasPrerequisites ? (
            <CheckCircle className="h-12 w-12 text-green-500" />
          ) : (
            <AlertCircle className="h-12 w-12 text-red-500" />
          )}
        </div>
        
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Prerequisite Check
        </h2>

        <div className="space-y-4">
          {course.prerequisites.map((prereq, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50"
            >
              {userCompletedCourses.includes(prereq) ? (
                <CheckCircle className="h-5 w-5 text-green-500" />
              ) : (
                <AlertCircle className="h-5 w-5 text-red-500" />
              )}
              <span className="text-gray-700">{prereq}</span>
            </div>
          ))}
        </div>

        {hasPrerequisites ? (
          <button
            onClick={onContinue}
            className="mt-8 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Continue to Enrollment
          </button>
        ) : (
          <div className="mt-8 p-4 bg-red-50 rounded-md">
            <p className="text-red-700 text-center">
              Please complete the required prerequisites before enrolling in this course.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}