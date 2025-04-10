import React from 'react';
import { Lightbulb, Users, Trophy } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative bg-indigo-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Transform your future</span>
                <span className="block text-indigo-300">with online learning</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Access world-class education from anywhere. Learn at your own pace with expert-led courses in various disciplines.
              </p>
              <div className="mt-8 flex gap-8 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="flex justify-center">
                    <Lightbulb className="h-8 w-8 text-indigo-300" />
                  </div>
                  <p className="mt-2 text-white">Expert Teachers</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <Users className="h-8 w-8 text-indigo-300" />
                  </div>
                  <p className="mt-2 text-white">Global Community</p>
                </div>
                <div className="text-center">
                  <div className="flex justify-center">
                    <Trophy className="h-8 w-8 text-indigo-300" />
                  </div>
                  <p className="mt-2 text-white">Certified Learning</p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"
          alt="Students learning"
        />
      </div>
    </div>
  );
}