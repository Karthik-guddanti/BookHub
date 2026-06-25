import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const Navbar = () => {
  const { user, logout } = useAuth(); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-white text-2xl font-poppins font-bold hover:text-blue-100 transition-colors duration-300"
          >
            📚 BookHub
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            {user ? (
              <>
                <span className="text-blue-100 font-poppins text-sm">
                  👤 {user.username} <span className="text-xs bg-blue-500 px-2 py-1 rounded-full ml-2">{user.role}</span>
                </span>
                <button 
                  onClick={handleLogout} 
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-poppins font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="text-blue-100 hover:text-white font-poppins font-medium transition-colors duration-300"
                >
                  Login
                </Link>
                <Link 
                  to="/signup" 
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-poppins font-medium transition-all duration-300 transform hover:scale-105"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;