import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-8 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-2xl w-full animate-fadeIn">
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl font-poppins font-bold text-gray-900 mb-4 leading-tight">
          Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BookHub</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-600 font-roboto mb-8 leading-relaxed max-w-xl mx-auto">
          Your personal digital library. Manage your collection as an admin, or discover amazing books as a user.
        </p>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          <div className="p-4 bg-white rounded-lg shadow-soft">
            <div className="text-3xl mb-2">📚</div>
            <p className="text-sm text-gray-700 font-poppins">Organize Books</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-soft">
            <div className="text-3xl mb-2">🔍</div>
            <p className="text-sm text-gray-700 font-poppins">Discover Collection</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-soft">
            <div className="text-3xl mb-2">⭐</div>
            <p className="text-sm text-gray-700 font-poppins">Rate & Review</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {user ? (
            <Link
              to={user.role === 'admin' ? '/admin/dashboard' : '/dashboard'}
              className="px-8 py-4 text-lg font-poppins font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Go to Your Dashboard →
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                className="px-8 py-4 text-lg font-poppins font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-8 py-4 text-lg font-poppins font-semibold text-blue-600 bg-white border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Footer Info */}
        <p className="mt-12 text-sm text-gray-500 font-roboto">
          Join thousands of book lovers managing their personal library with BookHub
        </p>
      </div>
    </div>
  );
};

export default Home;