import { useState } from "react";

import { useNavigate } from 'react-router-dom';
import { Trophy, ArrowLeft, Mail, MapPin, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';


const SignupTeam: React.FC = () => {
   const navigate = useNavigate();
   const { login } = useAuth();
   const [showPassword, setShowPassword] = useState(false);

   const [password, setPassword] = useState("");

   const getPasswordStrength = (pwd: string) => {
      if (!pwd) return null;

      const hasLetter = /[a-zA-Z]/.test(pwd);
      const hasNumber = /\d/.test(pwd);
      const hasSpecial = /[^a-zA-Z0-9]/.test(pwd);

       if (pwd.length < 4) {
         return { label: "Weak", color: "bg-red-500", width: "25%", text: "text-red-500" };
      }

      if (hasLetter  && hasSpecial && pwd.length >= 5 && !hasNumber) {
         return { label: "Medium", color: "bg-yellow-500", width: "60%", text: "text-yellow-500" };
      }

      if (hasLetter && hasNumber && hasSpecial && pwd.length >= 7) {
         return { label: "Strong", color: "bg-green-500", width: "100%", text: "text-green-500" };
      }

      return { label: "Weak", color: "bg-red-500", width: "25%", text: "text-red-500" };
   };


   const handleSignup = () => {
      login('team');
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
            <button onClick={() => navigate('/')} className="flex items-center text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
               <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
            </button>
         </nav>

         <div className="max-w-3xl mx-auto px-4 mt-8">
            <div className="mb-6 text-center">
               <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Create Your Account</h1>
               <p className="text-slate-500 dark:text-slate-400 mt-2">Join the Summer Championship 2026. Enter your team details below to secure a spot.</p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border-t-4 border-t-primary border-b border-x border-slate-200 dark:border-slate-800 p-8 transition-colors duration-200">
               <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
                  {/* Section 1: User Details */}
                  <div>
                     <h3 className="flex items-center text-lg font-bold text-slate-900 dark:text-white mb-6">
                        <div className="p-1 bg-blue-50 dark:bg-blue-900/30 rounded mr-2"><div className="h-2 w-2 bg-primary rounded-full"></div></div> User Details
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Your Name</label>
                           <input type="text" placeholder="Enter Your Name" className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-colors" />
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Email Address</label>
                           <div className="relative">
                              <input type="email" placeholder="abc@gmail.com" className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-800 dark:text-white pr-10 transition-colors" />
                              <Mail className="absolute right-3 top-3.5 h-5 w-5 text-slate-400" />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Section 2: Contact Verification */}
                  <div>
                     <h3 className="flex items-center text-lg font-bold text-slate-900 dark:text-white mb-6">
                        <div className="p-1 bg-blue-50 dark:bg-blue-900/30 rounded mr-2"><PhoneIcon /></div> Contact Verification
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <div>
                           <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Mobile Number</label>
                           <div className="flex gap-2">
                              <input
                                 type="tel"
                                 inputMode="numeric"
                                 placeholder="123567890"
                                 maxLength={10}
                                 minLength={10}
                                 pattern="[0-9]{10}" className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-colors" />
                              <button type="button" className="bg-primary text-white font-medium px-4 py-2 rounded-lg hover:bg-sky-600 text-sm whitespace-nowrap shadow-sm">
                                 Send OTP
                              </button>
                           </div>
                           <p className="text-xs text-slate-400 mt-2">We will send a one-time password to this number.</p>
                        </div>
                        <div>
                           <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Enter OTP</label>
                           <div className="relative">
                              <input type="text"
                                 inputMode="numeric"
                                 maxLength={6} placeholder="- - - - - -" className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 bg-white dark:bg-slate-800 dark:text-white text-center tracking-widest transition-colors" />
                              <span className="absolute right-3 top-3.5 text-xs font-bold text-green-600 cursor-pointer">Verify</span>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Section 3: Location */}
                  <div>
                     <h3 className="flex items-center text-lg font-bold text-slate-900 dark:text-white mb-6">
                        <div className="p-1 bg-blue-50 dark:bg-blue-900/30 rounded mr-2"><MapPin className="h-4 w-4 text-primary" /></div> Location
                     </h3>
                     <div className="space-y-6">
                        <div>
                           <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Address</label>
                           <input type="text" placeholder="Street address, P.O. box, etc." className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-colors" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                              <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">State / Province</label>
                              <select className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-800 transition-colors">
                                 <option className="">Select a state</option>
                              </select>
                           </div>
                           <div>
                              <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">Pin / Zip Code</label>
                              <input type="text" maxLength={6} placeholder="e.g. 902107" className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-colors" />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Section 4: Security */}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div>
                        <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">
                           Password
                        </label>

                        <div className="relative">
                           <input
                              type={showPassword ? "text" : "password"}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 transition-colors"
                              placeholder="••••••••" maxLength={8} minLength={8}
                           />

                           <div
                              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-slate-400"
                              onClick={() => setShowPassword(!showPassword)}
                           >
                              {showPassword ? (
                                 <EyeOff className="h-5 w-5" />
                              ) : (
                                 <Eye className="h-5 w-5" />
                              )}
                           </div>
                        </div>

                        {password && (() => {
                           const strength = getPasswordStrength(password);
                           if (!strength) return null;

                           return (
                              <>
                                 <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 mt-2 rounded-full overflow-hidden">
                                    <div
                                       className={`h-full transition-all duration-300 ${strength.color}`}
                                       style={{ width: strength.width }}
                                    />
                                 </div>
                                 <p className={`text-xs mt-1 font-medium ${strength.text}`}>
                                    Password strength: {strength.label}
                                 </p>
                              </>
                           );
                        })()}
                     </div>

                     <div>
                        <label className="block text-sm font-medium text-slate-900 dark:text-slate-300 mb-2">
                           Confirm Password
                        </label>
                        <input
                           type="password"
                           className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 transition-colors"
                           placeholder="••••••••" maxLength={8} minLength={8}
                        />
                     </div>
                  </div>


                  <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                     <p className="text-sm text-slate-500 dark:text-slate-400">
                        By registering, you agree to our <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
                     </p>
                     <button
                        type="submit"
                        className="bg-primary text-white px-8 py-3 rounded-lg font-bold hover:bg-sky-600 transition-colors shadow-sm w-full md:w-auto"
                     >
                        Register Team
                     </button>
                  </div>
               </form>
            </div>

            <p className="mt-8 text-center text-slate-500 dark:text-slate-400">
               Already have an account? <a href="/#/login" className="text-primary font-semibold hover:underline">Log in here</a>
            </p>
         </div>
      </div>
   );
};

// Helper component just for icon usage simplicity inside this file
const PhoneIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
);

export default SignupTeam;
