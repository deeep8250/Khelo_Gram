import React from "react";
import { Trophy, Github } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* KHELO GRAM (NO CHANGE FOR MOBILE) */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <Trophy className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                Khelo<span className="text-primary"> Gram</span>
              </span>
            </div>

            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-xs">
              The{" "}
              <span className="font-medium text-slate-800 dark:text-slate-300">
                #1 platform
              </span>{" "}
              for tournament organizers. Manage brackets, registrations, and
              live scores effortlessly.
            </p>
          </div>

          {/* OTHER INFORMATION (DESKTOP ONLY CHANGE) */}
          <div className="text-center md:col-span-3">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-6">
              OTHER INFORMATION
            </h3>

            <ul className="grid grid-cols-3 gap-x-6 gap-y-3 justify-items-center text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Team Members
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  API
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-slate-100 dark:border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            © 2025 Khelo Gram Inc. All rights reserved.
          </p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/deeep8250/Khelo_Gram"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
            >
              <Github className="h-5 w-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
