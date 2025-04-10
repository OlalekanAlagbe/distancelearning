import React from 'react';
import { Mail, Phone, MapPin, Calendar, User } from 'lucide-react';

interface ProfileProps {
  userName: string;
  userEmail: string;
}

export function Profile({ userName, userEmail }: ProfileProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-12">
          <div className="flex items-center justify-center">
            <div className="h-32 w-32 rounded-full bg-white p-2">
              <div className="h-full w-full rounded-full bg-indigo-100 flex items-center justify-center">
                <User className="h-16 w-16 text-indigo-600" />
              </div>
            </div>
          </div>
          <h1 className="mt-4 text-center text-3xl font-bold text-white">{userName}</h1>
          <p className="mt-2 text-center text-indigo-100">Matric No: BSC-LOS39/01/22</p>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-sm font-medium text-gray-900">{userEmail}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-sm font-medium text-gray-900">+(234)8146568078</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Date of Birth</p>
                    <p className="text-sm font-medium text-gray-900">September 15, 1995</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Address</p>
                    <p className="text-sm font-medium text-gray-900">
                      123 Learning Street, Education City, ST 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-900">Academic Information</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Current Program</p>
                  <p className="text-sm font-medium text-gray-900">Bachelor of Computer Science</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Enrollment Year</p>
                  <p className="text-sm font-medium text-gray-900">2022</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Academic Status</p>
                  <p className="text-sm font-medium text-indigo-600">Active</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">GPA</p>
                  <p className="text-sm font-medium text-gray-900">3.8/4.0</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Enrolled Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {['Advanced Mathematics', 'Physics in Practice', 'English Literature'].map((course) => (
                <div key={course} className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-900">{course}</p>
                  <p className="text-sm text-gray-500">Current Semester</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}