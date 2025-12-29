import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit2, Bell, Moon, LogOut, ChevronDown, Plus, MoreVertical, X, MapPin, Image as ImageIcon, Send } from 'lucide-react';
import { Member } from '../types';

const TeamDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [showCreatePost, setShowCreatePost] = useState(false);

  const roster: Member[] = [
    { id: '1', name: 'Rahul Sharma', email: 'rahul.sharma@example.com', role: 'Captain', status: 'Active', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100' },
    { id: '2', name: 'Priya Patel', email: 'priya.patel@example.com', role: 'Member', status: 'Active', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100' },
    { id: '3', name: 'Arjun Singh', email: 'arjun.s@example.com', role: 'Member', status: 'Pending', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100' },
    { id: '4', name: 'Anjali Gupta', email: 'anjali.g@example.com', role: 'Member', status: 'Active', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100' },
    { id: '5', name: 'Vikram Malhotra', email: 'vikram.m@example.com', role: 'Member', status: 'Active', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=100' },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen pb-12 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Left Sidebar */}
                <div className="col-span-1 space-y-6">
                    {/* Team Profile Card */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 text-center transition-colors duration-200">
                        <div className="relative inline-block mb-4">
                            <div className="h-28 w-28 rounded-full bg-slate-900 dark:bg-slate-800 border-4 border-white dark:border-slate-700 shadow-lg mx-auto flex items-center justify-center overflow-hidden">
                                <img src="https://illustrations.popsy.co/amber/shield.svg" className="h-20 w-20" alt="Team Logo" />
                            </div>
                            <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-md hover:bg-sky-600 transition-colors">
                                <Edit2 className="h-4 w-4" />
                            </button>
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Bengaluru Strikers</h2>
                        <div className="flex items-center justify-center text-slate-500 dark:text-slate-400 text-sm mt-1 mb-6">
                            <MapPin className="h-3 w-3 mr-1" /> Bengaluru, KA, India
                        </div>
                        <button className="w-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold py-2.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                            Edit Profile
                        </button>
                    </div>

                    {/* Settings Panel */}
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors duration-200">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Settings</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-primary mr-3">
                                        <Bell className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-white text-sm">Notifications</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Email & Push</p>
                                    </div>
                                </div>
                                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input type="checkbox" name="toggle" id="toggle1" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white dark:bg-slate-800 border-4 appearance-none cursor-pointer translate-x-5 border-primary" defaultChecked/>
                                    <label htmlFor="toggle1" className="toggle-label block overflow-hidden h-5 rounded-full bg-primary cursor-pointer"></label>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-lg bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-3">
                                        <Moon className="h-5 w-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-slate-900 dark:text-white text-sm">Dark Mode</p>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">Appearance</p>
                                    </div>
                                </div>
                                <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                                    <input type="checkbox" name="toggle" id="toggle2" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white dark:bg-slate-800 border-4 appearance-none cursor-pointer border-slate-300 dark:border-slate-600"/>
                                    <label htmlFor="toggle2" className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-300 dark:bg-slate-600 cursor-pointer"></label>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                <p className="flex items-center text-sm font-medium text-slate-900 dark:text-white mb-3">
                                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 8l6 6"/></svg> Language
                                </p>
                                <div className="relative">
                                    <select className="block w-full pl-3 pr-10 py-2 text-base border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md border bg-slate-50 dark:bg-slate-800 dark:text-white transition-colors">
                                        <option>English (US)</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                        <ChevronDown className="h-4 w-4 text-slate-400" />
                                    </div>
                                </div>
                            </div>

                            <button onClick={() => navigate('/')} className="w-full flex items-center justify-center text-red-500 bg-red-50 dark:bg-red-900/20 font-bold py-3 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors mt-6">
                                <LogOut className="h-4 w-4 mr-2" /> Log Out
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="lg:col-span-3">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Team Roster</h1>
                            <p className="text-slate-500 dark:text-slate-400 mt-1">Total Participants: <span className="font-bold text-slate-900 dark:text-white">12</span></p>
                        </div>
                        <div className="flex gap-3">
                            {/* Demo Trigger for Create Post */}
                            <button onClick={() => setShowCreatePost(true)} className="bg-slate-800 dark:bg-slate-700 text-white px-4 py-2.5 rounded-lg font-bold flex items-center hover:bg-slate-900 dark:hover:bg-slate-600 text-sm transition-colors">
                                <Plus className="h-4 w-4 mr-2" /> Post
                            </button>
                            <button className="bg-primary text-white px-5 py-2.5 rounded-lg font-bold flex items-center hover:bg-sky-600 transition-colors shadow-sm">
                                <Plus className="h-4 w-4 mr-2" /> Add Participant
                            </button>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-200">
                        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
                            <thead className="bg-slate-50 dark:bg-slate-800">
                                <tr>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Name</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Role</th>
                                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">Status</th>
                                    <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-slate-900 divide-y divide-slate-100 dark:divide-slate-800">
                                {roster.map((member) => (
                                    <tr key={member.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10">
                                                    <img className="h-10 w-10 rounded-full object-cover" src={member.avatar} alt="" />
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-bold text-slate-900 dark:text-white">{member.name}</div>
                                                    <div className="text-xs text-slate-500 dark:text-slate-400">{member.email}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${member.role === 'Captain' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-300' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'}`}>
                                                {member.role}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                             <div className="flex items-center">
                                                <div className={`h-2 w-2 rounded-full mr-2 ${member.status === 'Active' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{member.status}</span>
                                             </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                                                <MoreVertical className="h-5 w-5" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="bg-slate-50 dark:bg-slate-800 px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between transition-colors duration-200">
                            <span className="text-sm text-slate-500 dark:text-slate-400">Showing 1 to 5 of 12 entries</span>
                            <div className="flex space-x-2">
                                <button className="p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 disabled:opacity-50 transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg></button>
                                <button className="p-2 rounded hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Create Post Modal */}
        {showCreatePost && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
                <div className="bg-white dark:bg-slate-900 rounded-2xl w-full max-w-lg shadow-2xl transform transition-all border border-slate-200 dark:border-slate-800">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Create New Post</h3>
                        <button onClick={() => setShowCreatePost(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors">
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        {/* Image Uploader */}
                        <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-800/50 p-8 flex flex-col items-center justify-center text-center hover:border-primary dark:hover:border-primary hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors cursor-pointer group">
                             <div className="h-12 w-12 bg-white dark:bg-slate-800 rounded-lg shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary mb-3">
                                 <ImageIcon className="h-6 w-6" />
                             </div>
                             <p className="text-sm font-bold text-slate-900 dark:text-white">Click to upload image</p>
                             <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        
                        {/* Caption */}
                        <div>
                            <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Caption</label>
                            <textarea 
                                rows={4}
                                className="block w-full p-4 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-xl focus:ring-primary focus:border-primary placeholder-slate-400 dark:placeholder-slate-500 text-sm resize-none dark:text-white transition-colors"
                                placeholder="What's happening with your team? Share an update..."
                            ></textarea>
                        </div>

                        <div className="flex space-x-3">
                            <button className="flex items-center px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <span className="mr-2">#</span> Tag Player
                            </button>
                             <button className="flex items-center px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                <MapPin className="h-4 w-4 mr-2" /> Add Location
                            </button>
                        </div>
                    </div>
                    <div className="p-6 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
                        <button onClick={() => setShowCreatePost(false)} className="px-6 py-2.5 rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Cancel</button>
                        <button onClick={() => setShowCreatePost(false)} className="bg-primary text-white px-6 py-2.5 rounded-lg font-bold hover:bg-sky-600 transition-colors flex items-center shadow-sm">
                            <Send className="h-4 w-4 mr-2" /> Post Update
                        </button>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default TeamDashboard;