import React from 'react';
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <GraduationCap className="h-10 w-10 text-indigo-400" />
              <span className="ml-3 text-2xl font-bold text-white">EduLearn</span>
            </div>
            <p className="text-gray-400 text-base">
              Empowering minds through quality online education. Join our global community of learners.
            </p>
            <div className="flex space-x-6">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Courses
                </h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Mathematics</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Sciences</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Languages</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Technology</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Help Center</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact Us</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Community</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Resources</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Press</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
                  <li><a href="#" className="text-base text-gray-300 hover:text-white">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            © 2025 EduLearn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}