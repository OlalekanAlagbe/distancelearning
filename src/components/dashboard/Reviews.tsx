import React from 'react';
import { Star, MessageSquare, ThumbsUp, ThumbsDown, ChevronLeft, ChevronRight } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      id: 1,
      teacherName: 'Prof. Adebayo Ojo',
      subject: 'Data Structures & Algorithms',
      rating: 5,
      comment: 'Exceptional lecturer who breaks down complex algorithms into understandable concepts. His dynamic programming lectures are legendary!',
      date: '2025-03-15',
      helpful: 42,
      notHelpful: 1,
      courseCode: 'CSC 301'
    },
    {
      id: 2,
      teacherName: 'Dr. Ngozi Eze',
      subject: 'Artificial Intelligence',
      rating: 4,
      comment: 'Very knowledgeable about machine learning concepts. Her practical sessions with TensorFlow are extremely valuable. Could provide more sample datasets though.',
      date: '2025-03-14',
      helpful: 28,
      notHelpful: 3,
      courseCode: 'CSC 402'
    },
    {
      id: 3,
      teacherName: 'Prof. Chinedu Okoro',
      subject: 'Computer Networks',
      rating: 5,
      comment: 'Makes networking protocols come alive with real-world examples from African tech infrastructure. The best lecturer for understanding TCP/IP in our context.',
      date: '2025-03-12',
      helpful: 37,
      notHelpful: 0,
      courseCode: 'CSC 305'
    },
    {
      id: 4,
      teacherName: 'Dr. Amina Mohammed',
      subject: 'Database Systems',
      rating: 4,
      comment: 'Excellent at teaching relational algebra and SQL optimization. Her NoSQL lectures could use more practical examples from African startups.',
      date: '2025-03-10',
      helpful: 19,
      notHelpful: 2,
      courseCode: 'CSC 303'
    }
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
            <div className="flex items-center">
              <MessageSquare className="h-6 w-6 text-indigo-600 mr-2" />
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Computer Science Lecturer Reviews</h2>
                <p className="text-sm text-gray-500">Ratings from University of Lagos students</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm sm:text-base">
              Write a Review
            </button>
          </div>

          <div className="space-y-5">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 rounded-lg p-5 sm:p-6 border border-gray-200 hover:border-indigo-200 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">{review.teacherName}</h3>
                      <span className="text-xs bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full">
                        {review.courseCode}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{review.subject}</p>
                  </div>
                  <span className="text-sm text-gray-500 whitespace-nowrap">{review.date}</span>
                </div>

                <div className="mt-3 flex items-center">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {review.rating.toFixed(1)}/5.0
                  </span>
                </div>

                <p className="mt-3 text-gray-700">{review.comment}</p>

                <div className="mt-4 flex flex-col xs:flex-row items-start xs:items-center justify-between gap-3">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-indigo-600 transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-sm font-medium">{review.helpful} helpful</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors">
                      <ThumbsDown className="h-4 w-4" />
                      <span className="text-sm">{review.notHelpful}</span>
                    </button>
                  </div>
                  <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
                    Report this review
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <nav className="flex items-center space-x-1">
              <button className="p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button className="px-3 py-1 rounded-md bg-indigo-600 text-white text-sm font-medium">
                1
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm">
                2
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm">
                3
              </button>
              <button className="p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                <ChevronRight className="h-4 w-4" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}