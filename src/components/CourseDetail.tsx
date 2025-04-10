import React, { useState } from 'react';
import { Clock, Users, Award, BookOpen, ArrowLeft, PlayCircle, CheckCircle, BookOpen as Book, Target } from 'lucide-react';
import { Course } from '../types';

interface CourseDetailProps {
  course: Course;
  onBack: () => void;
  onEnroll: () => void;
}

export function CourseDetail({ course, onBack, onEnroll }: CourseDetailProps) {
  const [showVideo, setShowVideo] = useState(false);

  const handleEnrollClick = () => {
    setShowVideo(true);
    onEnroll();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-indigo-600 hover:text-indigo-700 mb-6"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Courses
      </button>

      <div className="bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="relative h-96">
          {showVideo ? (
            <div className="w-full h-full">
              <iframe
                className="w-full h-full"
                src={course.videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ"}
                title={`${course.title} Introduction`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <>
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setShowVideo(true)}
                  className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300"
                >
                  <PlayCircle className="h-16 w-16 text-white" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-4xl font-bold text-white mb-4">{course.title}</h1>
                <p className="text-xl text-gray-200">{course.description}</p>
              </div>
            </>
          )}
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 bg-indigo-50 p-6 rounded-xl">
            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <Clock className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Duration</p>
                <p className="text-lg font-semibold text-gray-900">{course.duration}</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <Award className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Level</p>
                <p className="text-lg font-semibold text-gray-900">{course.level}</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <Users className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Enrolled</p>
                <p className="text-lg font-semibold text-gray-900">{course.studentsEnrolled || '2,500+'}</p>
              </div>
            </div>
            <div className="flex items-center bg-white p-4 rounded-lg shadow-sm">
              <Book className="h-8 w-8 text-indigo-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">Modules</p>
                <p className="text-lg font-semibold text-gray-900">{course.modules || '12'} Modules</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="h-6 w-6 mr-2 text-indigo-600" />
                  Course Overview
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {course.fullDescription || course.description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Target className="h-6 w-6 mr-2 text-indigo-600" />
                  What You'll Learn
                </h3>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <ul className="space-y-4">
                    {(course.learningOutcomes || [
                      "Master fundamental concepts and principles",
                      "Apply theoretical knowledge to real-world scenarios",
                      "Develop critical thinking and problem-solving skills",
                      "Complete hands-on projects and assessments"
                    ]).map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Course Highlights</h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <span className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                      <BookOpen className="h-4 w-4 text-indigo-600" />
                    </span>
                    Comprehensive study materials
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                      <Users className="h-4 w-4 text-indigo-600" />
                    </span>
                    Interactive group sessions
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                      <Award className="h-4 w-4 text-indigo-600" />
                    </span>
                    Certificate upon completion
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-100 to-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Start Learning?</h3>
                <p className="text-gray-600 mb-6">
                  Join thousands of students who have already enrolled in this course and start your learning journey today.
                </p>
                <button
                  onClick={handleEnrollClick}
                  className="w-full bg-indigo-600 text-white py-4 px-6 rounded-lg hover:bg-indigo-700 
                    transition-colors duration-300 flex items-center justify-center space-x-2 text-lg font-semibold"
                >
                  <PlayCircle className="h-6 w-6" />
                  <span>{showVideo ? 'Watch Course Video' : 'Start Learning Now'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}