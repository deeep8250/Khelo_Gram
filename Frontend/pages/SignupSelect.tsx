import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Users, GitMerge, ArrowRight } from 'lucide-react';

const SignupSelect: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
       <nav className="bg-white border-b border-slate-200 h-16 flex items-center px-4 sm:px-6 lg:px-8 justify-between">
           <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
             <Trophy className="h-6 w-6 text-primary" />
             <span className="ml-2 text-lg font-bold text-slate-900">Tournament Manager</span>
           </div>
           <button onClick={() => navigate('/login')} className="text-sm font-medium bg-blue-50 text-primary px-4 py-2 rounded-lg hover:bg-blue-100">
             Log In
           </button>
       </nav>

       <div className="flex-grow flex flex-col items-center justify-center p-4">
          <div className="text-center mb-12">
             <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Join the Tournament <br/>Platform</h1>
             <p className="text-slate-500 text-lg">Select your role to get started with the ultimate competition manager.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full">
             {/* Team Card */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow text-center flex flex-col items-center">
                <div className="w-full h-1 bg-gradient-to-r from-blue-300 to-cyan-300 mb-8 rounded-full"></div>
                <div className="h-20 w-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                   <Users className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">I am a Team / Player</h2>
                <p className="text-slate-500 mb-8">Join tournaments, track your statistics, manage your roster, and compete for prizes.</p>
                <button 
                  onClick={() => navigate('/signup/team')}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors flex items-center justify-center"
                >
                   Sign Up as Team <ArrowRight className="h-4 w-4 ml-2" />
                </button>
             </div>

             {/* Organizer Card */}
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-shadow text-center flex flex-col items-center">
                <div className="w-full h-1 bg-gradient-to-r from-purple-300 to-pink-300 mb-8 rounded-full"></div>
                <div className="h-20 w-20 bg-purple-50 rounded-full flex items-center justify-center mb-6">
                   <GitMerge className="h-10 w-10 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">I am an Organizer</h2>
                <p className="text-slate-500 mb-8">Create brackets, manage schedules, handle registration, and host professional events.</p>
                <button 
                  onClick={() => navigate('/signup/organizer')}
                  className="w-full bg-white text-primary border-2 border-primary py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
                >
                   Sign Up as Organizer <ArrowRight className="h-4 w-4 ml-2" />
                </button>
             </div>
          </div>

          <p className="mt-12 text-slate-500">
             Already have an account? <a href="/#/login" className="text-primary font-semibold hover:underline">Log in here</a>.
          </p>
       </div>
       
       <footer className="py-8 text-center text-sm text-slate-400">
           <div className="space-x-8 mb-4">
              <a href="#" className="hover:text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-primary">Terms of Service</a>
              <a href="#" className="hover:text-primary">Help Center</a>
           </div>
           <p>© 2023 Tournament Manager. All rights reserved.</p>
       </footer>
    </div>
  );
};

export default SignupSelect;