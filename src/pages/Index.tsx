
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, GraduationCap, Calendar, Users, LineChart } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const Index = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center mb-16 py-10">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Navigate Your Academic Journey With Precision
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Personalized roadmaps that align your interests, goals, and academic progress into actionable steps for success.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" className="bg-compass-600 hover:bg-compass-700">
              <Link to="/assessment" className="flex items-center">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="bg-compass-100 rounded-xl p-8 relative z-10 shadow-lg border border-compass-200 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl">
              <div className="flex justify-center">
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white rounded-full opacity-80 animate-pulse"></div>
                  <img 
                    src="/lovable-uploads/e7a07023-1ccc-4571-87da-8ee437ae569a.png" 
                    alt="IIIT Vadodara Logo" 
                    className="relative z-10 w-56 h-56 object-contain"
                  />
                </div>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-medium text-compass-800">Indian Institute of Information Technology</h3>
                <p className="text-compass-600 font-medium">Vadodara</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-gray-100 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">93% of students</p>
                  <p className="text-sm text-gray-500">found their ideal path</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-white p-3 rounded-lg shadow-md border border-compass-100 animate-fade-in">
              <div className="flex items-center space-x-2">
                <div className="bg-compass-100 p-1.5 rounded-full">
                  <GraduationCap className="h-5 w-5 text-compass-600" />
                </div>
                <p className="font-medium text-compass-700">Academic Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Complete Academic Companion</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just help with studies—we help you navigate college life strategically, balancing academics, career growth, and personal interests.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="bg-compass-100 p-3 rounded-full w-fit mb-4">
              <GraduationCap className="h-6 w-6 text-compass-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalized Roadmaps</h3>
            <p className="text-gray-600">
              Tailored academic paths based on your unique interests, goals, and current progress.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="bg-compass-100 p-3 rounded-full w-fit mb-4">
              <Calendar className="h-6 w-6 text-compass-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Integrated Daily Planner</h3>
            <p className="text-gray-600">
              Intelligently prioritize tasks while ensuring you continue learning your preferred skills.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="bg-compass-100 p-3 rounded-full w-fit mb-4">
              <Users className="h-6 w-6 text-compass-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Mentorship Network</h3>
            <p className="text-gray-600">
              Connect with alumni, faculty, and seniors for personalized guidance and insights.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="bg-compass-100 p-3 rounded-full w-fit mb-4">
              <LineChart className="h-6 w-6 text-compass-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Dynamic Adaptation</h3>
            <p className="text-gray-600">
              Our system recalibrates your roadmap if interests change, keeping you motivated and on track.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="bg-compass-100 p-3 rounded-full w-fit mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-compass-600">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M7 7h10" />
                <path d="M7 12h10" />
                <path d="M7 17h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Smart Recommendations</h3>
            <p className="text-gray-600">
              Get suggestions for workshops, seminars, and clubs based on your goals and progress.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
            <div className="bg-compass-100 p-3 rounded-full w-fit mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-compass-600">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Resource Library</h3>
            <p className="text-gray-600">
              Access curated articles, videos, and study materials aligned with your interests.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-compass-600 text-white rounded-xl p-8 md:p-12 mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Chart Your Course?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Start building your personalized academic roadmap today and take control of your college journey.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-compass-600 hover:bg-gray-100">
          <Link to="/assessment">
            Create Your Roadmap
          </Link>
        </Button>
      </div>
    </PageLayout>
  );
};

export default Index;
