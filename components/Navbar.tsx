import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Trophy, Bell, Sun, Moon, LogOut, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { role, logout, isDarkMode, toggleTheme } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  // Determine active tab based on path
  const isActive = (path: string) => {
    // Active state style
    const activeStyle = 'text-primary font-semibold';
    const inactiveStyle = 'text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary';

    if (path.startsWith('/create')) {
        return location.pathname.includes('create') ? activeStyle : inactiveStyle;
    }
    return location.pathname === path ? activeStyle : inactiveStyle;
  };

  // Dynamic routing based on Role
  const getCreateLink = () => {
    if (role === 'organizer') return '/create-tournament';
    if (role === 'team') return '/create-team';
    // Default fallback if role not loaded yet, or guest accessing public area
    return '/login'; 
  };

  const getProfileLink = () => {
    if (role === 'organizer') return '/profile/organizer';
    if (role === 'team') return '/profile/team';
    return '/login';
  };

  const handleLogout = () => {
      logout();
      navigate('/login');
  };

  return (
    <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => navigate(role === 'guest' ? '/' : '/home')}>
            <Trophy className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-bold text-slate-900 dark:text-white">Khelo_gram</span>
          </div>
          
          {role !== 'guest' && (
            <div className="hidden md:flex items-center space-x-8">
                <Link to="/home" className={isActive('/home')}>Home</Link>
                <Link to={getCreateLink()} className={isActive('/create-tournament') || isActive('/create-team')}>
                    {role === 'organizer' ? 'Create Tournament' : 'Create Team'}
                </Link>
                <Link to={getProfileLink()} className={isActive('/profile/organizer') || isActive('/profile/team')}>Profile</Link> 
            </div>
          )}

          <div className="flex items-center space-x-4">
            {role !== 'guest' && (
                <div className="relative hidden sm:block">
                <input 
                    type="text" 
                    placeholder="Search..." 
                    className="bg-slate-100 dark:bg-slate-800 border-none rounded-full py-1.5 px-4 text-sm focus:ring-2 focus:ring-primary outline-none w-48 lg:w-64 text-slate-900 dark:text-slate-100"
                />
                </div>
            )}
            
            <button 
                onClick={toggleTheme}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {role !== 'guest' ? (
                <>
                    <button className="text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200">
                        <Bell className="h-5 w-5" />
                    </button>
                    <div className="relative">
                        <div 
                            className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs cursor-pointer border border-blue-200"
                            onClick={() => setShowProfileMenu(!showProfileMenu)}
                        >
                            {role === 'organizer' ? 'OR' : 'TM'}
                        </div>
                        {showProfileMenu && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg py-1 border border-slate-200 dark:border-slate-700">
                                <button onClick={() => { navigate(getProfileLink()); setShowProfileMenu(false); }} className="block w-full text-left px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">
                                    Profile
                                </button>
                                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-slate-100 dark:hover:bg-slate-700 flex items-center">
                                    <LogOut className="h-4 w-4 mr-2" /> Logout
                                </button>
                            </div>
                        )}
                    </div>
                </>
            ) : (
                 <div className="flex gap-2">
                    <button onClick={() => navigate('/login')} className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary">Login</button>
                    <button onClick={() => navigate('/signup')} className="text-sm font-medium bg-primary text-white px-3 py-1.5 rounded hover:bg-sky-600">Sign Up</button>
                 </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;