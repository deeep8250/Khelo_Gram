
import { useNavigate } from "react-router-dom";
import {
  Trophy,
  CalendarCheck,
  Calendar,
  Handshake,
  Users,
} from "lucide-react";
import Footer from "../components/Footer";
import ChatBotButton from "../components/ChatBotButton";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen transition-colors duration-200">
      {/* Navigation for Landing */}
     <nav className="max-w-7xl bg-white dark:bg-slate-950 sticky top-0 z-50 mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        <div className="flex items-center">
          <Trophy className="h-8 w-8 text-sky-500" />
          <span className="ml-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Khelo <span className="text-sky-500">Gram</span>
          </span>
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
            className="bg-sky-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-sky-600 transition-colors shadow-sm"
          >
             Register Now
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
               Register Now
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
              Trusted by 200+ organizers
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
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-green-300 dark:hover:border-green-500/50 transition-colors">
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center text-green-600 mb-6">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Show Your Talent
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Give players from villages a chance to show their skills. Play
              well, get noticed, and move forward.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-300 dark:hover:border-blue-500/50 transition-colors">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 mb-6">
              <CalendarCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Create Local Matches
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Easily create matches for your village or nearby areas. Bring
              teams together and enjoy the game.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-8 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-orange-300 dark:hover:border-orange-500/50 transition-colors">
            <div className="h-12 w-12 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-600 mb-6">
              <Handshake className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Fair Play for Everyone
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Every team and player is treated equally. No cheating, only honest
              and fair play.
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
              Register Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <Footer />
          <ChatBotButton onOpen={() => {}} />

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
