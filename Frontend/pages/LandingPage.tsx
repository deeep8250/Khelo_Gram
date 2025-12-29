import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Trophy,
  Users,
  Calendar,
  GitGraph,
  Zap,
  CreditCard,
} from "lucide-react";
import Footer from "../components/Footer";
import ChatBotButton from "../components/ChatBotButton";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-200">
      {/* Navigation for Landing */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <Trophy className="h-8 w-8 text-primary" />
          <span className="ml-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Khelo <span className="text-primary">Gram</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            About
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-sky-600 transition-colors shadow-sm"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl   leading-tight sm:leading-snug lg:leading-[1.25] lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Play More <br />
            Manage Easy <span className="text-primary">Win Together.</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-lg">
            Create matches, join matches, and represent yourself and your team.
            Everything you need in one simple platform.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="bg-primary text-white px-8 py-3 rounded-lg text-base font-semibold hover:bg-sky-600 transition-colors shadow-lg shadow-primary/20"
            >
              Get Started
            </button>

            <button className="mr-auto bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-8 py-3 rounded-lg text-base font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              View Demo
            </button>
          </div>

          <div className="mt-8 flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img
                className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-900"
                src="cricket.png"
                alt="User"
              />
              <img
                className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-900"
                src="basket.png"
                alt="User"
              />
              <img
                className="h-8 w-8 rounded-full border-2 border-white dark:border-slate-900"
                src="football.png"
                alt="User"
              />
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Trusted by 2,000+ organizers
            </p>
          </div>
        </div>
        <div className="relative">
          <video
            src={"/hero-video.mp4"}
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full h-full object-cover"
          >
            Your browser does not support the video tag.
          </video>

          {/* <div className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50">
                  <div className="flex items-center justify-between mb-2">
                     <div className="flex items-center text-green-600 dark:text-green-400 font-semibold text-sm">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        Registration Complete
                     </div>
                     <span className="text-xs text-slate-500 dark:text-slate-400">Ready to Start</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                     <div className="bg-primary h-full w-3/4"></div>
                  </div>
                  <div className="mt-1 flex justify-between text-xs text-slate-500 dark:text-slate-400">
                     <span>64 Teams</span>
                  </div>
               </div> */}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-slate-50 dark:bg-slate-900 py-10 transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="h-10 w-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-3">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Tournaments Hosted
              </h3>
              <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                0
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="h-10 w-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-3">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Teams Registered
              </h3>
              <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                0
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
              <div className="h-10 w-10 bg-blue-50 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-primary mb-3">
                <Calendar className="h-5 w-5" />
              </div>
              <h3 className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Scores Recorded
              </h3>
              <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                0
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 lg:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Everything you need to manage the game
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Streamline your workflow with tools designed specifically for
            organizers, from local leagues to esports championships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-200 dark:hover:border-primary/50 transition-colors">
            <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-primary mb-6">
              <GitGraph className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Empowering Village Talent
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Give local players a stage to showcase their skills beyond
              boundaries. From small villages to bigger platforms, real talent
              finally gets noticed.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-200 dark:hover:border-primary/50 transition-colors">
            <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-primary mb-6">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Organize Local Tournaments Easily
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Anyone can create a tournament for their village or town. Bring
              teams together and turn local matches into memorable events.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-200 dark:hover:border-primary/50 transition-colors">
            <div className="h-12 w-12 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-primary mb-6">
              <CreditCard className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Fair Play & Equal Opportunity
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              No favoritism, no shortcuts — just pure sportsmanship. Every
              player gets a fair chance to prove their talent on the ground.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 dark:bg-slate-950 py-20 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="h-14 w-14 bg-slate-800 dark:bg-slate-800 rounded-full flex items-center justify-center text-primary">
              <Trophy className="h-7 w-7" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to organize your best tournament?
          </h2>
          <p className="text-lg text-slate-400 mb-10">
            Join thousands of organizers using our platform today. It's free to
            get started.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/signup")}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <Footer />
          <ChatBotButton />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
