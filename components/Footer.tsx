import React from 'react';
import { Trophy, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
               <Trophy className="h-6 w-6 text-primary" />
               <span className="ml-2 text-lg font-bold text-slate-900 dark:text-white">Khelo_gram</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
              The #1 platform for tournament organizers. Brackets, registration, and live scores made easy.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">PRODUCT</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">API</a></li>
            </ul>
          </div>

           <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>

           <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">LEGAL</h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary dark:hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-100 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 dark:text-slate-500">© 2024 Khelo_gram Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Twitter className="h-5 w-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
            <Github className="h-5 w-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;