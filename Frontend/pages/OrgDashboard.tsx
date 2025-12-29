import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Wallet, Users, Shield, Plus, MoreVertical, Bell, LogOut, ChevronDown } from 'lucide-react';
import { Member } from '../types';

const OrgDashboard: React.FC = () => {
  const navigate = useNavigate();

  const members: Member[] = [
    { id: '1', name: 'Ananya S.', role: 'Admin', status: 'Active', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100' },
    { id: '2', name: 'Rahul Verma', role: 'Moderator', status: 'Active', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100' },
    { id: '3', name: 'Chirag D.', role: 'Staff', status: 'Active', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100' },
    { id: '4', name: 'Dev K.', role: 'Staff', status: 'Active', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-12 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            {/* Header / Profile Card */}
             <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-8 flex flex-col md:flex-row items-center justify-between transition-colors duration-200">
                <div className="flex items-center mb-6 md:mb-0">
                    <div className="h-20 w-20 bg-slate-900 dark:bg-slate-800 rounded-xl flex items-center justify-center mr-6 border border-slate-800 dark:border-slate-700">
                        <img src="https://illustrations.popsy.co/amber/surr-unicorn.svg" className="h-16 w-16" alt="Logo" />
                    </div>
                    <div>
                         <div className="flex items-center gap-2 mb-1">
                             <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Blue Tigers Esports</h1>
                             <span className="bg-blue-100 dark:bg-blue-900/40 text-primary dark:text-blue-300 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Pro Organizer</span>
                         </div>
                         <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center"><span className="mr-4">Bengaluru, India</span> <span className="flex items-center text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-400">Club ID: #88392</span></p>
                    </div>
                </div>
                <button className="border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 px-5 py-2 rounded-lg font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">Edit Profile</button>
             </div>

             {/* Stats Grid */}
             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
                    <div className="flex items-center mb-4">
                        <Trophy className="h-5 w-5 text-primary mr-2" />
                        <span className="text-xs font-bold text-slate-400 uppercase">Tournaments Organized</span>
                    </div>
                    <p className="text-3xl font-extrabold text-slate-900 dark:text-white">42</p>
                </div>
                 <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
                    <div className="flex items-center mb-4">
                        <Wallet className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-xs font-bold text-slate-400 uppercase">Total Prize Distribution</span>
                    </div>
                    <p className="text-3xl font-extrabold text-slate-900 dark:text-white">₹1,25,00,000</p>
                </div>
                 <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
                    <div className="flex items-center mb-4">
                        <Users className="h-5 w-5 text-blue-500 mr-2" />
                        <span className="text-xs font-bold text-slate-400 uppercase">Total Members</span>
                    </div>
                    <p className="text-3xl font-extrabold text-slate-900 dark:text-white">12</p>
                </div>
                 <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-200">
                    <div className="flex items-center mb-4">
                        <Shield className="h-5 w-5 text-purple-500 mr-2" />
                        <span className="text-xs font-bold text-slate-400 uppercase">Total Team Participated</span>
                    </div>
                    <p className="text-3xl font-extrabold text-slate-900 dark:text-white">156</p>
                </div>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content - Tournaments List */}
                <div className="lg:col-span-2">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden min-h-[500px] transition-colors duration-200">
                        <div className="border-b border-slate-200 dark:border-slate-800">
                             <nav className="flex -mb-px px-6" aria-label="Tabs">
                                <button className="border-primary text-primary whitespace-nowrap py-4 px-1 border-b-2 font-bold text-sm mr-6">Active</button>
                                <button className="border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm mr-6 transition-colors">Upcoming</button>
                                <button className="border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors">Completed</button>
                            </nav>
                        </div>
                        
                        <div className="divide-y divide-slate-100 dark:divide-slate-800">
                            {/* Item 1 */}
                            <div className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-start">
                                        <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg mr-4 overflow-hidden">
                                             <img src="https://illustrations.popsy.co/amber/caffeine.svg" className="h-full w-full object-cover" alt="icon" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-primary transition-colors">Monsoon Cup 2024</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">Valorant • 16 Teams • ₹4,00,000 Prize Pool</p>
                                        </div>
                                    </div>
                                    <span className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded">Live</span>
                                </div>
                                <div className="pl-16 flex items-center text-xs text-slate-400 space-x-4">
                                    <span className="flex items-center"><svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Started Aug 12</span>
                                    <span className="flex items-center"><Users className="w-3 h-3 mr-1" /> 320 Participants</span>
                                </div>
                                <div className="hidden group-hover:block absolute right-6 text-slate-300 dark:text-slate-600">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                                </div>
                            </div>

                             {/* Item 2 */}
                             <div className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group relative">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-start">
                                        <div className="h-12 w-12 bg-black rounded-lg mr-4 overflow-hidden">
                                            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=100" className="h-full w-full object-cover opacity-80" alt="icon" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-primary transition-colors">Diwali Dhamaka Scrims #44</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">BGMI • 32 Teams • No Prize</p>
                                        </div>
                                    </div>
                                    <span className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded">Live</span>
                                </div>
                                <div className="pl-16 flex items-center text-xs text-slate-400 space-x-4">
                                    <span className="flex items-center"><svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Started Today</span>
                                    <span className="flex items-center"><Users className="w-3 h-3 mr-1" /> 64 Participants</span>
                                </div>
                                <div className="absolute top-1/2 right-6 -translate-y-1/2 text-slate-300 dark:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                                </div>
                            </div>

                             {/* Item 3 */}
                             <div className="p-6 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer group relative">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="flex items-start">
                                        <div className="h-12 w-12 bg-slate-400 dark:bg-slate-700 rounded-lg mr-4 flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-primary transition-colors">Winter Qualifiers (Paused)</h3>
                                            <p className="text-sm text-slate-500 dark:text-slate-400">CS2 • 8 Teams</p>
                                        </div>
                                    </div>
                                    <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-bold px-2 py-1 rounded">Paused</span>
                                </div>
                                <div className="pl-16 flex items-center text-xs text-slate-400 space-x-4">
                                    <span className="flex items-center"><svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Aug 01</span>
                                    <span className="flex items-center"><Users className="w-3 h-3 mr-1" /> 40 Participants</span>
                                </div>
                                 <div className="absolute top-1/2 right-6 -translate-y-1/2 text-slate-300 dark:text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-t border-slate-100 dark:border-slate-800 text-center">
                            <button className="text-primary font-bold text-sm hover:underline flex items-center justify-center w-full">
                                View All Tournaments <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="space-y-6">
                    {/* Members Widget */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 transition-colors duration-200">
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Members</h3>
                                <span className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-bold px-2 py-0.5 rounded ml-2">12</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {members.map(m => (
                                <div key={m.id} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img src={m.avatar} className="h-10 w-10 rounded-full object-cover mr-3" alt={m.name} />
                                        <div>
                                            <p className="text-sm font-bold text-slate-900 dark:text-white">{m.name}</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">{m.role}</p>
                                        </div>
                                    </div>
                                    <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"><MoreVertical className="h-4 w-4" /></button>
                                </div>
                            ))}
                        </div>
                        <button className="w-full bg-primary text-white font-bold py-2.5 rounded-lg mt-6 hover:bg-sky-600 transition-colors flex items-center justify-center text-sm shadow-sm">
                            <Plus className="h-4 w-4 mr-2" /> Add Member
                        </button>
                    </div>

                    {/* Preferences Widget */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 transition-colors duration-200">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">Preferences</h3>
                        
                        <div className="flex items-center justify-between mb-6">
                             <div>
                                <p className="font-bold text-sm text-slate-900 dark:text-white">Notifications</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">Email updates for matches</p>
                             </div>
                             <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                                <input type="checkbox" name="toggle" id="toggleP1" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white dark:bg-slate-800 border-4 appearance-none cursor-pointer translate-x-5 border-primary" defaultChecked/>
                                <label htmlFor="toggleP1" className="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer"></label>
                            </div>
                        </div>

                         <div className="mb-6">
                            <p className="font-bold text-sm text-slate-900 dark:text-white mb-2">Language</p>
                            <div className="relative">
                                <select className="block w-full pl-3 pr-10 py-2 text-sm border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary focus:border-primary rounded-lg border bg-slate-50 dark:bg-slate-800 dark:text-white transition-colors">
                                    <option>English (IN)</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <ChevronDown className="h-4 w-4 text-slate-400" />
                                </div>
                            </div>
                         </div>

                         <button onClick={() => navigate('/')} className="w-full flex items-center justify-center text-red-500 border border-red-100 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 font-bold py-2.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition-colors text-sm">
                            <LogOut className="h-4 w-4 mr-2" /> Logout
                        </button>
                    </div>
                </div>
             </div>
        </div>
    </div>
  );
};

export default OrgDashboard;