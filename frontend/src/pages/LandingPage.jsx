import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDumbbell } from 'react-icons/ai';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <AiFillDumbbell className="h-8 w-8 text-violet-500" />
              <span className="text-xl font-bold text-violet-500">FitSphere</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/signin" className="btn-primary">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-violet-500 py-20 fade-in">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">
              Transform Your Fitness Journey
            </h1>
            <p className="text-lg sm:text-xl mb-12">
              Track workouts, achieve goals, and stay motivated with FitSphere.
              Your all-in-one fitness companion.
            </p>
            <Link to="/signup" className="btn-secondary text-lg px-8 py-3">
              Get Started Free
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to succeed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <AiFillDumbbell className="h-12 w-12 text-violet-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Workout Tracking</h3>
              <p className="text-gray-600">
                Log your workouts and track your progress over time.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <AiFillDumbbell className="h-12 w-12 text-violet-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Custom Plans</h3>
              <p className="text-gray-600">
                Get personalized workout plans tailored to your goals.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <AiFillDumbbell className="h-12 w-12 text-violet-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Progress Analytics</h3>
              <p className="text-gray-600">
                Visualize your fitness journey with detailed analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-violet-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to start your fitness journey?
          </h2>
          <Link to="/signup" className="btn-primary text-lg px-8 py-3">
            Join Now
          </Link>
        </div>
      </section>
    </div>
  );
}
