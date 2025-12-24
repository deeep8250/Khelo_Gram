import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Mail, Phone, Lock, Eye, EyeOff, MapPin } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const SignupOrganizer: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSignup = () => {
      login('organizer');
      navigate('/home');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-12 transition-colors duration-200">
        {/* Header */}
       <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-16 flex items-center px-4 sm:px-6 lg:px-8 justify-between sticky top-0 z-10 transition-colors duration-200">
           <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
             <Trophy className="h-6 w-6 text-primary" />
             <span className="ml-2 text-lg font-bold text-slate-900 dark:text-white">Tournament Manager</span>
           </div>
           <div className="flex items-center space-x-4">
              <a href="/#/login" className="text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">Login</a>
              <button className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors">
                Sign Up
              </button>
           </div>
       </nav>

       <div className="max-w-3xl mx-auto px-4 mt-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 transition-colors duration-200">
             <div className="mb-8 border-b border-slate-100 dark:border-slate-800 pb-6">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Create Organizer Account</h1>
                <p className="text-slate-500 dark:text-slate-400">Manage your tournaments efficiently. Join us today.</p>
             </div>

             <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
                {/* Org Name */}
                <div>
                   <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Organization/Club Name</label>
                   <input type="text" placeholder="e.g. City Chess Club" className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 transition-colors" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Email Address</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                <Mail className="h-5 w-5" />
                            </div>
                            <input type="email" placeholder="name@example.com" className="block w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 transition-colors" />
                        </div>
                    </div>
                    {/* Mobile */}
                     <div>
                        <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Mobile Number</label>
                        <div className="flex gap-2">
                             <div className="relative flex-grow">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <input type="text" placeholder="+1 (555) 000-0000" className="block w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 transition-colors" />
                            </div>
                            <button type="button" className="bg-blue-50 dark:bg-blue-900/30 text-primary font-medium px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 text-sm whitespace-nowrap transition-colors">
                                Get OTP
                            </button>
                        </div>
                    </div>
                </div>

                {/* OTP Verification */}
                <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-lg border border-slate-200 dark:border-slate-700 border-dashed">
                   <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center text-sm font-semibold text-slate-700 dark:text-slate-200">
                         <Lock className="h-4 w-4 mr-2 text-primary" /> Verify OTP
                      </div>
                      <span className="text-xs text-slate-400">Sent to mobile</span>
                   </div>
                   <input type="text" placeholder="- - - - - -" className="block w-full md:w-48 text-center tracking-widest px-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary text-lg transition-colors" />
                </div>

                {/* Address */}
                <div>
                    <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Full Address</label>
                    <textarea rows={3} placeholder="Street address, Suite, Unit, etc." className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 resize-none transition-colors"></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Pin Code</label>
                      <input type="text" placeholder="Zip/Postal Code" className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 transition-colors" />
                   </div>
                   <div>
                      <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">State / Province</label>
                      <select className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary text-slate-500 dark:text-slate-300 bg-white transition-colors">
                         <option>Enter State</option>
                         <option>New York</option>
                         <option>California</option>
                         <option>Texas</option>
                      </select>
                   </div>
                </div>

                {/* Password */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Password</label>
                        <div className="relative">
                            <input 
                                type={showPassword ? "text" : "password"}
                                className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 transition-colors"
                                placeholder="••••••••"
                            />
                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-slate-400" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                            </div>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 mt-2 rounded-full overflow-hidden">
                           <div className="bg-red-500 h-full w-1/4"></div>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Weak password</p>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Confirm Password</label>
                        <input 
                                type="password"
                                className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 transition-colors"
                                placeholder="••••••••"
                            />
                    </div>
                </div>

                <div className="flex items-center pt-4">
                   <input 
                    id="terms" 
                    type="checkbox" 
                    className="h-5 w-5 text-primary border-slate-300 dark:border-slate-600 rounded focus:ring-primary bg-white dark:bg-slate-800"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                   />
                   <label htmlFor="terms" className="ml-2 block text-sm text-slate-900 dark:text-slate-300">
                      I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                   </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-primary text-white py-3.5 rounded-lg font-bold text-lg hover:bg-sky-600 transition-colors shadow-sm shadow-primary/30"
                >
                   Complete Registration
                </button>

                <p className="text-center text-sm text-slate-500 dark:text-slate-400">
                    Already have an account? <a href="/#/login" className="text-primary font-semibold hover:underline">Login</a>
                </p>

             </form>
          </div>
          
          <div className="mt-8 text-center text-slate-400 text-sm">
             © 2023 Tournament Manager Inc. All rights reserved.
          </div>
       </div>
    </div>
  );
};

export default SignupOrganizer;