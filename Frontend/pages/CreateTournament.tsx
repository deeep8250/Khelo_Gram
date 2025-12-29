import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Image as ImageIcon, Phone, MessageSquare, Trash2, Plus, Upload, Trophy, Users } from 'lucide-react';

const CreateTournament: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-12 transition-colors duration-200">
       <div className="max-w-4xl mx-auto px-4 py-8">
           <div className="mb-8">
               <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Create New Tournament</h1>
               <p className="text-slate-500 dark:text-slate-400 mt-1">Fill in the details below to launch your tournament.</p>
           </div>

           <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 p-8 transition-colors duration-200">
               <form className="space-y-8">
                   
                   {/* Banner Upload */}
                   <div>
                       <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Tournament Banner / Logo <span className="text-red-500">*</span></label>
                       <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 p-12 flex flex-col items-center justify-center text-center hover:border-primary dark:hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors cursor-pointer group">
                           <div className="h-12 w-12 bg-white dark:bg-slate-800 rounded-lg shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary mb-3">
                               <ImageIcon className="h-6 w-6" />
                           </div>
                           <p className="text-sm font-bold text-slate-900 dark:text-white">Click to upload <span className="font-normal text-slate-500 dark:text-slate-400">or drag and drop</span></p>
                           <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                       </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                           <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Tournament Name <span className="text-red-500">*</span></label>
                           <input type="text" placeholder="e.g. Monsoon Cup 2024" className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800 dark:text-white transition-colors" />
                       </div>
                       <div>
                           <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Location <span className="text-red-500">*</span></label>
                           <div className="relative">
                               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                   <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                               </div>
                               <input type="text" placeholder="e.g. Mumbai, India (or Online)" className="block w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800 dark:text-white transition-colors" />
                           </div>
                       </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                           <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Age Criteria</label>
                           <select className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary text-slate-900 dark:text-white bg-white dark:bg-slate-800 transition-colors">
                               <option>Open for All</option>
                               <option>Under 21</option>
                               <option>Under 18</option>
                           </select>
                       </div>
                        <div>
                           <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Total Teams Participating <span className="text-red-500">*</span></label>
                           <input type="number" placeholder="e.g. 16" className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800 dark:text-white transition-colors" />
                       </div>
                   </div>

                   <div>
                       <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Entry Fee (₹)</label>
                       <input type="text" placeholder="e.g. 500" className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800 dark:text-white transition-colors" />
                   </div>

                   {/* Prize Pool */}
                   <div>
                       <h3 className="flex items-center text-lg font-bold text-slate-900 dark:text-white mb-4">
                           <Trophy className="h-5 w-5 text-primary mr-2" /> Prize Pool Details
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                           <div className="md:col-span-1">
                               <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">Total Prize Money</label>
                               <div className="relative">
                                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 dark:text-slate-400 font-bold">₹</div>
                                   <input type="text" placeholder="0" className="block w-full pl-7 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white transition-colors" />
                               </div>
                           </div>
                           <div className="md:col-span-1">
                               <label className="block text-xs font-bold text-yellow-600 dark:text-yellow-500 uppercase mb-2">1st Prize</label>
                               <div className="relative">
                                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 dark:text-slate-400 font-bold">₹</div>
                                   <input type="text" placeholder="0" className="block w-full pl-7 pr-4 py-3 border border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 dark:border-yellow-700 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 dark:text-white transition-colors" />
                               </div>
                           </div>
                           <div className="md:col-span-1">
                               <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">2nd Prize</label>
                               <div className="relative">
                                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 dark:text-slate-400 font-bold">₹</div>
                                   <input type="text" placeholder="0" className="block w-full pl-7 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white transition-colors" />
                               </div>
                           </div>
                           <div className="md:col-span-1">
                               <label className="block text-xs font-bold text-slate-500 dark:text-slate-400 uppercase mb-2">3rd Prize</label>
                               <div className="relative">
                                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 dark:text-slate-400 font-bold">₹</div>
                                   <input type="text" placeholder="0" className="block w-full pl-7 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary dark:bg-slate-800 dark:text-white transition-colors" />
                               </div>
                           </div>
                       </div>
                   </div>

                   {/* Other Details */}
                   <div>
                       <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Other Details</label>
                       <textarea rows={4} className="block w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800 dark:text-white resize-none transition-colors" placeholder="Describe the format, rules, maps, or any specific instructions..."></textarea>
                   </div>

                    {/* Important Notice */}
                   <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-100 dark:border-red-900/50">
                       <label className="block text-sm font-bold text-slate-900 dark:text-red-200 mb-2">Important Notice</label>
                       <input type="text" className="block w-full px-4 py-2 bg-white dark:bg-slate-800 border border-red-200 dark:border-red-800 rounded text-red-600 dark:text-red-400 placeholder-red-300 dark:placeholder-red-700 focus:ring-red-500 focus:border-red-500 transition-colors" placeholder="Any crucial information participants must know before registering..." />
                   </div>

                    {/* Contacts */}
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                           <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">Contact Number <span className="text-red-500">*</span></label>
                           <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                   <Phone className="h-4 w-4" />
                               </div>
                               <input type="text" placeholder="+91 98765 43210" className="block w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800 dark:text-white transition-colors" />
                           </div>
                       </div>
                       <div>
                           <label className="block text-sm font-bold text-slate-900 dark:text-slate-300 mb-2">WhatsApp Number</label>
                           <div className="relative">
                               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                                   <MessageSquare className="h-4 w-4" />
                               </div>
                               <input type="text" placeholder="+91 98765 43210" className="block w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 dark:bg-slate-800 dark:text-white transition-colors" />
                           </div>
                       </div>
                   </div>

                   {/* Members */}
                   <div>
                       <div className="flex items-center justify-between mb-4">
                            <h3 className="flex items-center text-lg font-bold text-slate-900 dark:text-white">
                               <Users className="h-5 w-5 text-primary mr-2" /> Members
                            </h3>
                            <button type="button" className="text-primary font-bold text-sm flex items-center hover:underline">
                                <Plus className="h-4 w-4 mr-1" /> Add Member
                            </button>
                       </div>
                       
                       <div className="space-y-3">
                           <div className="flex gap-3">
                               <input type="text" placeholder="Member Name" className="block w-1/2 px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-colors" />
                               <input type="text" placeholder="Designation (e.g. Admin)" className="block w-1/2 px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-colors" />
                               <button type="button" className="p-3 text-red-400 hover:text-red-600 transition-colors"><Trash2 className="h-5 w-5" /></button>
                           </div>
                            <div className="flex gap-3">
                               <input type="text" placeholder="Member Name" className="block w-1/2 px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-colors" />
                               <input type="text" placeholder="Designation (e.g. Moderator)" className="block w-1/2 px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 bg-slate-50 dark:bg-slate-800 dark:text-white transition-colors" />
                               <button type="button" className="p-3 text-red-400 hover:text-red-600 transition-colors"><Trash2 className="h-5 w-5" /></button>
                           </div>
                       </div>
                   </div>

                   <div className="flex justify-end pt-4">
                       <button type="button" className="bg-primary text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-sky-600 transition-colors shadow-sm flex items-center">
                           <Upload className="h-5 w-5 mr-2" /> Publish Tournament
                       </button>
                   </div>
               </form>
           </div>
       </div>
    </div>
  );
};

export default CreateTournament;