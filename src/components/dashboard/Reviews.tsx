import React from 'react';
import { Star, MessageSquare, ThumbsUp, ThumbsDown } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      id: 1,
      teacherName: 'Dr. Sarah Johnson',
      subject: 'Advanced Mathematics',
      rating: 5,
      comment: 'Excellent teaching methods and very clear explanations. Makes complex topics easy to understand.',
      date: '2025-03-15',
      helpful: 24,
      notHelpful: 2
    },
    {
      id: 2,
      teacherName: 'Prof. Michael Chen',
      subject: 'Physics in Practice',
      rating: 4,
      comment: 'Great practical examples and demonstrations. Could improve on providing more practice problems.',
      date: '2025-03-14',
      helpful: 18,
      notHelpful: 3
    },
    {
      id: 3,
      teacherName: 'Dr. Emily Brown',
      subject: 'English Literature',
      rating: 5,
      comment: 'Passionate about the subject and encourages critical thinking. Excellent discussion sessions.',
      date: '2025-03-13',
      helpful: 31,
      notHelpful: 1
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
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <MessageSquare className="h-6 w-6 text-indigo-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Teacher Reviews</h2>
            </div>
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Write a Review
            </button>
          </div>

          <div className="space-y-6">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 rounded-lg p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{review.teacherName}</h3>
                    <p className="text-sm text-gray-500">{review.subject}</p>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>

                <div className="mt-2 flex items-center">
                  <div className="flex">{renderStars(review.rating)}</div>
                  <span className="ml-2 text-sm text-gray-500">
                    {review.rating.toFixed(1)}
                  </span>
                </div>

                <p className="mt-4 text-gray-600">{review.comment}</p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                      <ThumbsUp className="h-4 w-4" />
                      <span className="text-sm">{review.helpful}</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
                      <ThumbsDown className="h-4 w-4" />
                      <span className="text-sm">{review.notHelpful}</span>
                    </button>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-700 text-sm font-medium">
                    Report Review
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                Previous
              </button>
              <button className="px-3 py-1 rounded-md bg-indigo-600 text-white">1</button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                2
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                3
              </button>
              <button className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200">
                Next
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}