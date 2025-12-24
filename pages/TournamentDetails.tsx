import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Share2, MapPin, ExternalLink, Trophy, Phone, Mail, MessageCircle } from 'lucide-react';

const TournamentDetails: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-12 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <button onClick={() => navigate('/home')} className="mb-6 flex items-center text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to Tournaments
            </button>

            {/* Header Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 mb-6 relative transition-colors duration-200">
               <div className="absolute top-8 right-8">
                   <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors">
                      <Share2 className="h-5 w-5" />
                   </button>
               </div>
               <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase">Registration Open</span>
                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-3 py-1 rounded-full text-xs font-bold uppercase">Football</span>
               </div>
               <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Mumbai Premier League 2024</h1>
               <div className="flex items-center text-slate-600 dark:text-slate-400 cursor-pointer hover:text-primary dark:hover:text-primary transition-colors" onClick={() => navigate('/organizer/1')}>
                   <span className="bg-blue-500 text-white p-0.5 rounded-full mr-2"><svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4"><path d="M20 6L9 17l-5-5"/></svg></span>
                   Hosted by: <span className="font-semibold text-primary ml-1">Mumbai District Football Association</span>
               </div>
            </div>

            {/* Info Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex items-center transition-colors duration-200">
                    <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mr-4">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Age Criteria</p>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">Under 21 Years</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex items-center transition-colors duration-200">
                    <div className="h-12 w-12 bg-green-50 dark:bg-green-900/30 rounded-lg flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                    </div>
                    <div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Entry Fee</p>
                        <p className="text-lg font-bold text-slate-900 dark:text-white">₹2,500 <span className="text-xs font-normal text-slate-500 dark:text-slate-400">per team</span></p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Prize Pool */}
                    <div>
                        <div className="flex items-center mb-4">
                            <Trophy className="h-5 w-5 text-primary mr-2" />
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white">Prize Pool</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6 text-center">
                                <div className="h-10 w-10 bg-yellow-100 dark:bg-yellow-800/50 rounded-full flex items-center justify-center text-yellow-600 dark:text-yellow-400 mx-auto mb-3">
                                   <Trophy className="h-5 w-5" />
                                </div>
                                <p className="text-xs font-bold text-yellow-700 dark:text-yellow-500 uppercase tracking-widest mb-1">CHAMPION</p>
                                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">₹1,00,000</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center">
                                <div className="h-10 w-10 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 mx-auto mb-3 font-bold">2</div>
                                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-1">RUNNER UP</p>
                                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">₹50,000</p>
                            </div>
                            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-6 text-center">
                                <div className="h-10 w-10 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-400 mx-auto mb-3 font-bold">3</div>
                                <p className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest mb-1">THIRD PLACE</p>
                                <p className="text-2xl font-extrabold text-slate-900 dark:text-white">₹25,000</p>
                            </div>
                        </div>
                    </div>

                    {/* Details */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-200">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">Important Details</h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
                            <p className="mb-6">
                                Welcome to the Mumbai Premier League 2024! This tournament aims to bring together the best local talent from across Mumbai for a week of competitive football. Please ensure all team members meet the age criteria specified above.
                            </p>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Rules & Regulations</h3>
                            <ul className="list-disc pl-5 space-y-2 mb-6">
                                <li>All teams must report 30 minutes before their scheduled match time.</li>
                                <li>Standard FIFA rules apply unless otherwise stated by the referee.</li>
                                <li>Substitution limit: 5 players per match.</li>
                                <li>Teams are responsible for their own kits and equipment.</li>
                            </ul>
                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">Facility Information</h3>
                            <p>
                                Locker rooms are available for all participating teams. Vada Pav, snacks, and beverages will be available at the stadium canteen. Parking is limited, so public transport is recommended.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column - Sidebar */}
                <div className="space-y-6">
                    {/* Organizer Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-200">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-wider">ORGANIZER</p>
                        <div className="flex items-center mb-6">
                            <img src="https://picsum.photos/100/100?random=8" className="h-12 w-12 rounded-full mr-4 border border-slate-100 dark:border-slate-700" alt="Rajesh Kumar" />
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Rajesh Kumar</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Chairperson</p>
                            </div>
                        </div>
                         <div className="flex items-center mb-6">
                            <img src="https://picsum.photos/100/100?random=9" className="h-12 w-12 rounded-full mr-4 border border-slate-100 dark:border-slate-700" alt="Amit Verma" />
                            <div>
                                <p className="font-bold text-slate-900 dark:text-white">Amit Verma</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Vice Chairperson</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-200">
                         <p className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-wider">CONTACT INFORMATION</p>
                         <button className="w-full bg-green-500 text-white font-bold py-3 rounded-lg mb-6 flex items-center justify-center hover:bg-green-600 transition-colors shadow-sm">
                             <MessageCircle className="h-5 w-5 mr-2" /> Message on WhatsApp
                         </button>
                         <div className="space-y-4">
                             <div className="flex items-start">
                                 <Phone className="h-4 w-4 text-slate-400 mt-1 mr-3" />
                                 <div>
                                     <p className="text-xs text-slate-500 dark:text-slate-400 font-bold">PHONE</p>
                                     <p className="text-sm font-medium text-primary">+91 98765 43210</p>
                                 </div>
                             </div>
                              <div className="flex items-start">
                                 <Mail className="h-4 w-4 text-slate-400 mt-1 mr-3" />
                                 <div>
                                     <p className="text-xs text-slate-500 dark:text-slate-400 font-bold">EMAIL</p>
                                     <p className="text-sm font-medium text-primary">contact@khelogram.com</p>
                                 </div>
                             </div>
                         </div>
                    </div>

                    {/* Location Map */}
                     <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-200">
                        <p className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-wider">LOCATION</p>
                        <div className="bg-slate-100 dark:bg-slate-800 rounded-lg h-32 w-full mb-4 overflow-hidden relative">
                             <img src="https://mt1.google.com/vt/lyrs=m&x=19305&y=13284&z=15" className="w-full h-full object-cover opacity-80" alt="Map" />
                             <div className="absolute inset-0 flex items-center justify-center">
                                 <MapPin className="h-8 w-8 text-red-500 fill-current" />
                             </div>
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">Cooperage Football Ground</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Maharshi Karve Road, Nariman Point, Mumbai 400021</p>
                        <a href="#" className="flex items-center text-primary text-xs font-bold mt-3 hover:underline">
                            Get Directions <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                     </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TournamentDetails;