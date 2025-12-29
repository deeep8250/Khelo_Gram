import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Share2, ArrowRight, UserPlus, Phone, Mail, Globe, MapPin, MessageCircle, ExternalLink, Trophy, Wallet } from 'lucide-react';

const OrgPublicProfile: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-12 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
             <button onClick={() => navigate('/tournament/1')} className="mb-6 flex items-center text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to Tournament Details
            </button>

            {/* Profile Header */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-sm border border-slate-200 dark:border-slate-800 mb-8 transition-colors duration-200">
               <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                   <div className="flex items-center mb-6 md:mb-0">
                       <div className="h-24 w-24 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 flex items-center justify-center mr-6">
                           <img src="https://illustrations.popsy.co/amber/surr-sitting.svg" alt="Logo" className="h-20 w-20" />
                       </div>
                       <div>
                           <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 inline-block">Verified Organizer</span>
                           <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">Mumbai District Football <br/>Association</h1>
                           <div className="flex items-center text-slate-500 dark:text-slate-400 mt-2">
                               <MapPin className="h-4 w-4 mr-1" /> Mumbai, Maharashtra, India
                           </div>
                       </div>
                   </div>
                   <div className="flex space-x-3">
                       <button className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold flex items-center hover:bg-sky-600 transition-colors shadow-sm">
                           <UserPlus className="h-4 w-4 mr-2" /> Follow
                       </button>
                       <button className="p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                           <Share2 className="h-5 w-5" />
                       </button>
                   </div>
               </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                 <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex items-center transition-colors duration-200">
                    <div className="h-14 w-14 bg-orange-50 dark:bg-orange-900/20 rounded-full flex items-center justify-center text-orange-500 mr-5">
                        <Trophy className="h-7 w-7" />
                    </div>
                    <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">TOURNAMENTS ORGANIZED</p>
                        <p className="text-3xl font-extrabold text-slate-900 dark:text-white">42</p>
                    </div>
                </div>
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 flex items-center transition-colors duration-200">
                    <div className="h-14 w-14 bg-green-50 dark:bg-green-900/20 rounded-full flex items-center justify-center text-green-500 mr-5">
                        <Wallet className="h-7 w-7" />
                    </div>
                    <div>
                         <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">PRIZE DISTRIBUTED</p>
                        <p className="text-3xl font-extrabold text-slate-900 dark:text-white">₹2.5 Crore</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Active Tournaments */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="flex items-center text-xl font-bold text-slate-900 dark:text-white">
                                <svg className="w-5 h-5 mr-2 text-green-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
                                Active Tournaments
                            </h2>
                            <span className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded">1 Live</span>
                        </div>
                        
                        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
                            <div className="h-48 relative">
                                <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=2070" className="w-full h-full object-cover" alt="Banner" />
                                <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase">Live Now</div>
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                                    <h3 className="text-white font-bold text-xl">Mumbai Premier League 2024</h3>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center gap-6 text-sm text-slate-500 dark:text-slate-400 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                                    <span className="flex items-center"><svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Oct 15 - Nov 20, 2024</span>
                                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-2" /> Cooperage Ground</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex gap-8">
                                        <div>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase">PRIZE POOL</p>
                                            <p className="text-slate-900 dark:text-white font-bold">₹1,75,000</p>
                                        </div>
                                         <div>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase">TEAMS</p>
                                            <p className="text-slate-900 dark:text-white font-bold">32/32</p>
                                        </div>
                                    </div>
                                    <div className="text-slate-300 dark:text-slate-600">
                                        <ArrowRight className="h-6 w-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Completed Tournaments */}
                     <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="flex items-center text-xl font-bold text-slate-900 dark:text-white">
                                <svg className="w-5 h-5 mr-2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4 8 4v14M10 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4"/></svg>
                                Completed Tournaments
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             {/* Card 1 */}
                             <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-200">
                                <div className="h-40 relative">
                                    <img src="https://illustrations.popsy.co/amber/business-deal.svg" className="w-full h-full object-cover bg-slate-100 dark:bg-slate-800" alt="Completed" />
                                    <div className="absolute top-3 right-3 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded uppercase opacity-90">Completed</div>
                                    <div className="absolute bottom-3 left-4">
                                        <h3 className="text-slate-900 font-bold text-lg drop-shadow-sm bg-white/80 px-2 rounded">Monsoon Corporate Cup</h3>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">August 2024</p>
                                    <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-3">
                                        <div className="flex items-center">
                                            <Trophy className="h-3 w-3 text-yellow-500 mr-1" />
                                            <p className="text-xs text-slate-600 dark:text-slate-400">Winner: <span className="font-bold text-slate-900 dark:text-white">HDFC Bank FC</span></p>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-slate-300 dark:text-slate-600" />
                                    </div>
                                </div>
                             </div>

                             {/* Card 2 */}
                             <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-200">
                                <div className="h-40 relative">
                                    <img src="https://illustrations.popsy.co/amber/success.svg" className="w-full h-full object-cover bg-amber-50 dark:bg-amber-900/10" alt="Completed" />
                                    <div className="absolute top-3 right-3 bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded uppercase opacity-90">Completed</div>
                                    <div className="absolute bottom-3 left-4">
                                        <h3 className="text-slate-900 font-bold text-lg drop-shadow-sm bg-white/80 px-2 rounded">U-19 District Championship</h3>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">May 2024</p>
                                    <div className="flex justify-between items-center border-t border-slate-100 dark:border-slate-800 pt-3">
                                        <div className="flex items-center">
                                            <Trophy className="h-3 w-3 text-yellow-500 mr-1" />
                                            <p className="text-xs text-slate-600 dark:text-slate-400">Winner: <span className="font-bold text-slate-900 dark:text-white">Andheri Sports Club</span></p>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-slate-300 dark:text-slate-600" />
                                    </div>
                                </div>
                             </div>
                        </div>
                        <button className="w-full mt-6 py-3 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-600 dark:text-slate-300 font-bold text-sm hover:bg-white dark:hover:bg-slate-800 hover:shadow-sm transition-all">
                            View All Past Tournaments
                        </button>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                    {/* About Us */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-200">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-4">About Us</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                            The Mumbai District Football Association (MDFA) is the official governing body for football in Mumbai. Established to promote and develop football at all levels, MDFA organizes various tournaments, leagues, and coaching programs for players of all ages. Our mission is to foster a vibrant football culture and provide opportunities for local talent to shine.
                        </p>
                        
                        <p className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-wider">CORE COMMITTEE</p>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full border border-slate-100 dark:border-slate-700 overflow-hidden mr-3">
                                    <img src="https://illustrations.popsy.co/amber/gentleman.svg" className="h-full w-full object-cover" alt="Member" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm">Rajesh Kumar</p>
                                    <p className="text-xs text-primary font-medium">Chairperson</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full border border-slate-100 dark:border-slate-700 overflow-hidden mr-3">
                                    <img src="https://illustrations.popsy.co/amber/man-with-glasses.svg" className="h-full w-full object-cover" alt="Member" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm">Amit Verma</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Vice Chairperson</p>
                                </div>
                            </div>
                             <div className="flex items-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 p-2 -mx-2 rounded-lg transition-colors">
                                <div className="h-10 w-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mr-3 text-slate-500 dark:text-slate-300 text-xs font-bold">
                                    +4
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 dark:text-white text-sm">View All Members</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">Organization Staff</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                     <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-200">
                         <p className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-wider">CONTACT INFORMATION</p>
                         <button className="w-full bg-green-500 text-white font-bold py-3 rounded-lg mb-6 flex items-center justify-center hover:bg-green-600 transition-colors shadow-sm">
                             <MessageCircle className="h-5 w-5 mr-2" /> Message on WhatsApp
                         </button>
                         <div className="space-y-5">
                             <div className="flex items-start">
                                 <Phone className="h-4 w-4 text-slate-400 mt-1 mr-3" />
                                 <div>
                                     <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-0.5">PHONE</p>
                                     <a href="#" className="text-sm font-medium text-primary hover:underline">+91 98765 43210</a>
                                 </div>
                             </div>
                              <div className="flex items-start">
                                 <Mail className="h-4 w-4 text-slate-400 mt-1 mr-3" />
                                 <div>
                                     <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-0.5">EMAIL</p>
                                     <a href="#" className="text-sm font-medium text-primary hover:underline">mdfa@khelogram.com</a>
                                 </div>
                             </div>
                              <div className="flex items-start">
                                 <Globe className="h-4 w-4 text-slate-400 mt-1 mr-3" />
                                 <div>
                                     <p className="text-xs text-slate-500 dark:text-slate-400 font-bold mb-0.5">WEBSITE</p>
                                     <a href="#" className="text-sm font-medium text-primary hover:underline">www.mdfa.com</a>
                                 </div>
                             </div>
                         </div>
                    </div>
                    
                    {/* HQ Map */}
                     <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-200">
                         <p className="text-xs font-bold text-slate-400 uppercase mb-4 tracking-wider">HEADQUARTERS</p>
                          <div className="bg-slate-100 dark:bg-slate-800 rounded-lg h-32 w-full mb-4 overflow-hidden relative">
                             <img src="https://mt1.google.com/vt/lyrs=m&x=19305&y=13284&z=15" className="w-full h-full object-cover opacity-80" alt="Map" />
                             <div className="absolute inset-0 flex items-center justify-center">
                                 <MapPin className="h-8 w-8 text-red-500 fill-current" />
                             </div>
                        </div>
                        <h4 className="font-bold text-slate-900 dark:text-white text-sm">MDFA Office</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">Cooperage Football Ground, Maharshi Karve Road, Nariman Point, Mumbai 400021</p>
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

export default OrgPublicProfile;