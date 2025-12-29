import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Calendar, LayoutGrid, List, SlidersHorizontal, RotateCcw } from 'lucide-react';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const tournaments = [
    {
      id: '1',
      title: 'Mumbai Masters 2024',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070',
      location: 'Mumbai, Maharashtra',
      date: 'Jul 15 - Jul 18',
      entry: '₹500.00',
      pool: '₹50,000',
      tag: 'OPEN',
      tagColor: 'bg-black text-white'
    },
    {
      id: '2',
      title: 'Delhi Neon Nights',
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&q=80&w=2070',
      location: 'Online (India Region)',
      date: 'Aug 02 - Aug 05',
      entry: 'Free',
      pool: '₹12,000',
      tag: 'FILLING FAST',
      tagColor: 'bg-purple-900 text-white'
    },
    {
      id: '3',
      title: 'Bangalore Apex Cup',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80&w=2071',
      location: 'Bengaluru, Karnataka',
      date: 'Sep 10 - Sep 12',
      entry: '₹1,000.00',
      pool: '₹1,50,000',
      tag: 'INVITATIONAL',
      tagColor: 'bg-slate-900 text-white'
    },
    {
      id: '4',
      title: 'Chennai Midnight Madness',
      image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&q=80&w=2070',
      location: 'Chennai, Tamil Nadu',
      date: 'Oct 05 - Oct 06',
      entry: '₹750.00',
      pool: '₹35,000',
      tag: '',
      tagColor: ''
    },
    {
      id: '5',
      title: 'Hyderabad Console Wars',
      image: 'https://images.unsplash.com/photo-1593305841991-05c29736f0dc?auto=format&fit=crop&q=80&w=2070',
      location: 'Hyderabad, Telangana',
      date: 'Oct 20 - Oct 22',
      entry: '₹250.00',
      pool: '₹20,000',
      tag: '',
      tagColor: ''
    },
    {
      id: '6',
      title: 'Pune Code & Compete',
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b91add1?auto=format&fit=crop&q=80&w=2070',
      location: 'Pune, Maharashtra',
      date: 'Nov 01 - Nov 03',
      entry: '₹600.00',
      pool: '₹80,000',
      tag: '',
      tagColor: ''
    }
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen py-8 transition-colors duration-200">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Search */}
          <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-8 gap-4">
             <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Ready to compete, Arjun?</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-1">Find your next challenge and dominate the leaderboard.</p>
             </div>
             <div className="relative w-full md:w-auto md:min-w-[300px]">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Search className="h-4 w-4" />
                 </div>
                 <input 
                   type="text" 
                   placeholder="Search tournaments..." 
                   className="block w-full pl-10 pr-4 py-2.5 border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 rounded-lg focus:ring-primary focus:border-primary text-sm shadow-sm dark:text-white placeholder-slate-400"
                 />
             </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
             <div className="flex flex-wrap gap-3">
                <div className="relative">
                   <select className="appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-4 pr-10 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                      <option>Location</option>
                      <option>Online</option>
                      <option>Mumbai</option>
                   </select>
                   <div className="absolute right-3 top-2.5 pointer-events-none text-slate-400">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L5 5L9 1"/></svg>
                   </div>
                </div>
                 <div className="relative">
                   <select className="appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-4 pr-10 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                      <option>Prize Pool</option>
                      <option>High to Low</option>
                      <option>Free Entry</option>
                   </select>
                   <div className="absolute right-3 top-2.5 pointer-events-none text-slate-400">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L5 5L9 1"/></svg>
                   </div>
                </div>
                 <div className="relative">
                   <select className="appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-4 pr-10 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                      <option>Game Title</option>
                      <option>Valorant</option>
                      <option>Football</option>
                   </select>
                   <div className="absolute right-3 top-2.5 pointer-events-none text-slate-400">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L5 5L9 1"/></svg>
                   </div>
                </div>
                 <div className="relative">
                   <select className="appearance-none bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg py-2 pl-4 pr-10 text-sm font-medium text-slate-700 dark:text-slate-300 hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer">
                      <option>Date</option>
                      <option>This Week</option>
                      <option>Next Month</option>
                   </select>
                   <div className="absolute right-3 top-2.5 pointer-events-none text-slate-400">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L5 5L9 1"/></svg>
                   </div>
                </div>
             </div>
             
             <div className="flex items-center gap-4">
                <button className="text-primary font-medium text-sm hover:underline flex items-center">
                    <RotateCcw className="h-3 w-3 mr-1" /> Reset Filters
                </button>
                <div className="flex bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-1">
                   <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white' : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                   >
                    <LayoutGrid className="h-4 w-4" />
                   </button>
                   <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white' : 'text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
                   >
                    <List className="h-4 w-4" />
                   </button>
                </div>
             </div>
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Upcoming Tournaments</h2>

          {/* Grid */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
             {tournaments.map((t) => (
                <div key={t.id} className={`bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-md transition-shadow group cursor-pointer ${viewMode === 'list' ? 'flex flex-row h-48' : ''}`} onClick={() => navigate(`/tournament/${t.id}`)}>
                   <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-1/3' : 'h-48'}`}>
                      <img src={t.image} alt={t.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      {t.tag && (
                         <span className={`absolute top-4 right-4 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${t.tagColor}`}>
                            {t.tag}
                         </span>
                      )}
                   </div>
                   <div className={`p-5 ${viewMode === 'list' ? 'w-2/3 flex flex-col justify-between' : ''}`}>
                      <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white line-clamp-1">{t.title}</h3>
                            {viewMode === 'grid' && (
                                <div className="text-slate-300 hover:text-yellow-400 cursor-pointer">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                                </div>
                            )}
                          </div>
                          
                          <div className={`space-y-2 mb-6 ${viewMode === 'list' ? 'mb-2' : ''}`}>
                             <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                                <MapPin className="h-4 w-4 mr-2 text-slate-400" /> {t.location}
                             </div>
                             <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                                <Calendar className="h-4 w-4 mr-2 text-slate-400" /> {t.date}
                             </div>
                             <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                                <svg className="h-4 w-4 mr-2 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                                Entry: <span className="text-slate-900 dark:text-white font-medium ml-1">{t.entry}</span>
                             </div>
                          </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                         <div>
                            <p className="text-xs text-slate-500 uppercase font-semibold">Prize Pool</p>
                            <p className="text-lg font-bold text-primary">{t.pool}</p>
                         </div>
                         <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-sky-600 transition-colors">
                            Details
                         </button>
                      </div>
                   </div>
                </div>
             ))}
          </div>

          <div className="mt-12 flex justify-center">
             <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="flex items-center text-primary font-semibold hover:underline">
                 View All Tournaments <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
             </button>
          </div>
       </div>
    </div>
  );
};

export default HomePage;