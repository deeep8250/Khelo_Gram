import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image as ImageIcon, Shield, MapPin, Users, Trophy, Upload, Plus, Trash2, Globe, Phone } from 'lucide-react';

const CreateTeam: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-12 transition-colors duration-200">
       <div className="max-w-4xl mx-auto px-4 py-8">
           <div className="mb-8">
               <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Create New Team</h1>
               <p className="text-slate-500 dark:text-slate-400 mt-1">Build your squad profile and start competing in tournaments.</p>
           </div>

           <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 transition-colors duration-200">
               <form className="space-y-8">
                   
                   {/* Logo Upload */}
                   <div>
                       <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Team Logo <span className="text-red-500">*</span></label>
                       <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 p-12 flex flex-col items-center justify-center text-center hover:border-primary dark:hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors cursor-pointer group">
                           <div className="h-12 w-12 bg-white dark:bg-slate-800 rounded-lg shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary mb-3">
                               <Shield className="h-6 w-6" />
                           </div>
                           <p className="text-sm font-bold text-slate-900 dark:text-white">Click to upload <span className="font-normal text-slate-500 dark:text-slate-400">or drag and drop</span></p>
                           <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">SVG, PNG, JPG or GIF (MAX. 500x500px)</p>
                       </div>
                   </div>

                   {/* Basic Info */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                           <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Team Name <span className="text-red-500">*</span></label>
                           <input type="text" placeholder="e.g. Phoenix Strikers" className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800 dark:text-white transition-colors" />
                       </div>
                       <div>
                           <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Primary Game/Sport <span className="text-red-500">*</span></label>
                           <select className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-slate-900 dark:text-white bg-white dark:bg-slate-800 transition-colors">
                               <option>Football</option>
                               <option>Cricket</option>
                               <option>Valorant</option>
                               <option>BGMI</option>
                               <option>CS2</option>
                               <option>Basketball</option>
                           </select>
                       </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                           <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Location (City) <span className="text-red-500">*</span></label>
                           <div className="relative">
                               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                   <MapPin className="h-5 w-5" />
                               </div>
                               <input type="text" placeholder="e.g. Mumbai, India" className="block w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800 dark:text-white transition-colors" />
                           </div>
                       </div>
                       <div>
                           <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Founded Year</label>
                           <input type="text" placeholder="e.g. 2024" className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800 dark:text-white transition-colors" />
                       </div>
                   </div>

                   {/* Description */}
                   <div>
                       <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Team Bio / Description</label>
                       <textarea rows={4} className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800 dark:text-white resize-none transition-colors" placeholder="Tell us about your team, achievements, playstyle..."></textarea>
                   </div>

                   {/* Roster */}
                   <div>
                       <div className="flex items-center justify-between mb-4">
                            <h3 className="flex items-center text-lg font-bold text-slate-900 dark:text-white">
                               <Users className="h-5 w-5 text-primary mr-2" /> Active Roster
                            </h3>
                            <button type="button" className="text-primary font-bold text-sm flex items-center hover:underline">
                                <Plus className="h-4 w-4 mr-1" /> Add Player
                            </button>
                       </div>
                       
                       <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 space-y-4">
                           {/* Player Row 1 */}
                           <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                               <div className="flex-grow w-full md:w-auto">
                                   <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Player Name</label>
                                   <input type="text" placeholder="e.g. Rahul Sharma" className="block w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-primary focus:border-primary bg-white dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 transition-colors" />
                               </div>
                               <div className="flex-grow w-full md:w-auto">
                                   <label className="block text-xs font-bold text-slate-400 uppercase mb-1">In-Game ID / Role</label>
                                   <input type="text" placeholder="e.g. Captain / Striker" className="block w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-primary focus:border-primary bg-white dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 transition-colors" />
                               </div>
                               <div className="w-full md:w-auto pt-5">
                                   <button type="button" className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors w-full md:w-auto flex justify-center"><Trash2 className="h-5 w-5" /></button>
                               </div>
                           </div>
                           
                           {/* Player Row 2 */}
                           <div className="flex flex-col md:flex-row gap-3 items-start md:items-center">
                               <div className="flex-grow w-full md:w-auto">
                                   <label className="block text-xs font-bold text-slate-400 uppercase mb-1">Player Name</label>
                                   <input type="text" placeholder="Player Name" className="block w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-primary focus:border-primary bg-white dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 transition-colors" />
                               </div>
                               <div className="flex-grow w-full md:w-auto">
                                   <label className="block text-xs font-bold text-slate-400 uppercase mb-1">In-Game ID / Role</label>
                                   <input type="text" placeholder="Role" className="block w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-primary focus:border-primary bg-white dark:bg-slate-700 dark:text-white dark:placeholder-slate-400 transition-colors" />
                               </div>
                               <div className="w-full md:w-auto pt-5">
                                   <button type="button" className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors w-full md:w-auto flex justify-center"><Trash2 className="h-5 w-5" /></button>
                               </div>
                           </div>
                       </div>
                   </div>

                    {/* Socials & Contact */}
                   <div>
                       <h3 className="flex items-center text-lg font-bold text-slate-900 dark:text-white mb-4">
                           <Globe className="h-5 w-5 text-primary mr-2" /> Social & Contact
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           <div>
                               <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Contact Email</label>
                               <input type="email" placeholder="team@example.com" className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800 dark:text-white transition-colors" />
                           </div>
                           <div>
                               <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Phone / WhatsApp</label>
                               <div className="relative">
                                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                       <Phone className="h-4 w-4" />
                                   </div>
                                   <input type="text" placeholder="+91 00000 00000" className="block w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800 dark:text-white transition-colors" />
                               </div>
                           </div>
                       </div>
                   </div>

                   {/* Achievements */}
                   <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-xl border border-yellow-200 dark:border-yellow-800">
                       <h3 className="flex items-center text-lg font-bold text-yellow-800 dark:text-yellow-500 mb-4">
                           <Trophy className="h-5 w-5 mr-2" /> Major Achievements
                       </h3>
                       <div className="space-y-3">
                           <input type="text" placeholder="e.g. Winner of Mumbai City Cup 2023" className="block w-full px-4 py-2 border border-yellow-300 dark:border-yellow-700 bg-white dark:bg-slate-800 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 placeholder-yellow-300/50 dark:text-white transition-colors" />
                           <input type="text" placeholder="Add another achievement..." className="block w-full px-4 py-2 border border-yellow-300 dark:border-yellow-700 bg-white dark:bg-slate-800 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 placeholder-yellow-300/50 dark:text-white transition-colors" />
                       </div>
                   </div>

                   <div className="flex justify-end pt-4">
                       <button type="button" onClick={() => navigate('/profile/team')} className="bg-primary text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-sky-600 transition-colors shadow-sm flex items-center">
                           <Upload className="h-5 w-5 mr-2" /> Create Team Profile
                       </button>
                   </div>
               </form>
           </div>
       </div>
    </div>
  );
};

export default CreateTeam;