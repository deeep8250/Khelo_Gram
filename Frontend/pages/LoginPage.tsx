import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Eye, EyeOff, Lock, Mail, User, Shield } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [loginRole, setLoginRole] = useState<'team' | 'organizer'>('team');

  const handleLogin = (e: React.FormEvent) => {
      e.preventDefault();
      // In a real app, you would validate credentials here.
      // For this UI demo, we set the role based on the selected tab and redirect.
      login(loginRole);
      navigate('/home');
  };

  return (
    <div className="min-h-screen flex bg-white dark:bg-slate-900 transition-colors duration-200">
      {/* Left Side - Image/Branding */}
      <div className="hidden lg:flex w-1/2 bg-slate-900 relative flex-col justify-end p-12 text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2071"
          alt="Esports Arena"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 mb-8">
            <div className="flex gap-4 mb-12">
               <img src="https://picsum.photos/300/180?random=1" className="w-48 rounded-lg shadow-lg border-2 border-slate-700" alt="Screen 1" />
               <img src="https://picsum.photos/300/180?random=2" className="w-48 rounded-lg shadow-lg border-2 border-slate-700" alt="Screen 2" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Elevate Your Game</h1>
            <p className="text-slate-300 text-lg mb-8 max-w-md">
                The ultimate platform for professional tournament management. Organize, compete, and win with seamless tools designed for champions.
            </p>
            <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                   <img className="h-10 w-10 rounded-full border-2 border-slate-900" src="https://picsum.photos/100/100?random=1" alt="U" />
                   <img className="h-10 w-10 rounded-full border-2 border-slate-900" src="https://picsum.photos/100/100?random=2" alt="U" />
                   <img className="h-10 w-10 rounded-full border-2 border-slate-900" src="https://picsum.photos/100/100?random=3" alt="U" />
                </div>
                <div className="flex items-center text-sm font-medium">
                    <Trophy className="h-4 w-4 mr-2" />
                    Join 10k+ Organizers
                </div>
            </div>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
         <div className="w-full max-w-md">
            <div className="flex items-center mb-8">
               <div className="h-8 w-8 bg-blue-100 rounded flex items-center justify-center text-primary">
                  <Trophy className="h-5 w-5" />
               </div>
               <span className="ml-3 font-bold text-lg text-slate-900 dark:text-white">Tournament Manager</span>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome back!</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-6">Please login to your account to continue.</p>

            {/* Role Toggle for Demo Purposes */}
            <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-lg flex mb-6">
                <button 
                    onClick={() => setLoginRole('team')}
                    className={`flex-1 py-2 rounded-md text-sm font-semibold flex items-center justify-center transition-all ${loginRole === 'team' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                    <User className="w-4 h-4 mr-2" /> Team / Player
                </button>
                <button 
                    onClick={() => setLoginRole('organizer')}
                    className={`flex-1 py-2 rounded-md text-sm font-semibold flex items-center justify-center transition-all ${loginRole === 'organizer' ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'}`}
                >
                    <Shield className="w-4 h-4 mr-2" /> Organizer
                </button>
            </div>

            <form className="space-y-6" onSubmit={handleLogin}>
               <div>
                  <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Email or Username</label>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Mail className="h-5 w-5" />
                     </div>
                     <input 
                        type="text" 
                        className="block w-full pl-10 pr-3 py-2.5 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400" 
                        placeholder={loginRole === 'team' ? "manager@team.com" : "admin@org.com"}
                        defaultValue={loginRole === 'team' ? "player@example.com" : "admin@organization.com"}
                     />
                  </div>
               </div>
               
               <div>
                  <div className="flex items-center justify-between mb-2">
                     <label className="block text-sm font-medium text-slate-900 dark:text-slate-300">Password</label>
                     <a href="#" className="text-sm font-medium text-primary hover:text-sky-600">Forgot password?</a>
                  </div>
                  <div className="relative">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                        <Lock className="h-5 w-5" />
                     </div>
                     <input 
                        type={showPassword ? "text" : "password"}
                        className="block w-full pl-10 pr-10 py-2.5 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400"
                        placeholder="••••••••"
                        defaultValue="password123"
                     />
                     <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-slate-400" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                     </div>
                  </div>
               </div>

               <button type="submit" className="w-full bg-primary text-white py-2.5 rounded-lg font-semibold hover:bg-sky-600 transition-colors shadow-lg shadow-primary/30">
                  Sign In as {loginRole === 'team' ? 'Team' : 'Organizer'}
               </button>
            </form>

            <div className="mt-8 mb-8 relative">
               <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-200 dark:border-slate-700"></div>
               </div>
               <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-slate-900 text-slate-500">Or continue with</span>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <button className="flex items-center justify-center px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors dark:text-slate-300">
                  <span className="font-bold mr-2 text-lg">G</span> <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Google</span>
               </button>
               <button className="flex items-center justify-center px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors dark:text-slate-300">
                  <span className="text-[#5865F2] mr-2">
                     <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.2 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09 0 .11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
                     </svg>
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Discord</span>
               </button>
            </div>

            <p className="mt-8 text-center text-sm text-slate-500">
               Don't have an account? <a href="/#/signup" className="text-primary font-semibold hover:underline">Register here</a>
            </p>
         </div>
      </div>
    </div>
  );
};

export default LoginPage;