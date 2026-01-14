import { useNavigate } from "react-router-dom";
import { Trophy, Users, ArrowRight } from "lucide-react";
import { UserRoundPen } from "lucide-react";

const SignupSelect: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">

      {/* NAVBAR */}
      <nav className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 h-16 flex items-center px-4 sm:px-6 lg:px-8 justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <Trophy className="h-6 w-6 text-primary" />
          <span className="ml-2 text-lg font-bold text-slate-900 dark:text-white">
            Tournament Manager
          </span>
        </div>
        <button
          onClick={() => navigate("/login")}
          className="text-sm font-medium bg-blue-50 dark:bg-slate-800 text-primary px-4 py-2 rounded-lg hover:bg-blue-100 dark:hover:bg-slate-700"
        >
          Log In
        </button>
      </nav>

      {/* MAIN CONTENT */}
      <div className="flex-grow flex flex-col items-center justify-center p-4">

        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Join the Tournament <br /> Platform
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Select your role to get started with the ultimate competition manager.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl w-full">

          {/* TEAM CARD */}
          <div className="bg-white dark:bg-slate-900 p-4 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center">
            <div className="w-full h-1 bg-gradient-to-r from-blue-300 to-cyan-300 mb-4 md:mb-8 rounded-full" />

            <div className="h-12 w-12 md:h-20 md:w-20 bg-blue-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <Users className="h-6 w-6 md:h-10 md:w-10 text-primary" />
            </div>

            <h2 className="text-sm md:text-2xl font-bold text-slate-900 dark:text-white mb-2 md:mb-4">
              User / Player
            </h2>

            <p className="text-xs md:text-base text-slate-500 dark:text-slate-400 mb-4 md:mb-8">
              Join tournaments, track stats & play.
            </p>

            <button
              onClick={() => navigate("/signup/team")}
              className="w-full bg-primary text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-sky-600 transition-colors flex items-center justify-center"
            >
              Sign Up
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>

          {/* ORGANIZER CARD */}
          <div className="bg-white dark:bg-slate-900 p-4 md:p-8 rounded-xl md:rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 text-center flex flex-col items-center">
            <div className="w-full h-1 bg-gradient-to-r from-purple-300 to-pink-300 mb-4 md:mb-8 rounded-full" />

            <div className="h-12 w-12 md:h-20 md:w-20 bg-purple-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 md:mb-6">
              <UserRoundPen className="h-6 w-6 md:h-10 md:w-10 text-sky-500" />
            </div>

            <h2 className="text-sm md:text-2xl font-bold text-slate-900 dark:text-white mb-2 md:mb-4">
              Organizer
            </h2>

            <p className="text-xs md:text-base text-slate-500 dark:text-slate-400 mb-4 md:mb-8">
              Create & manage tournaments.
            </p>

            <button
              onClick={() => navigate("/signup/organizer")}
              className="w-full bg-white dark:bg-slate-900 text-primary border-2 border-primary py-2 md:py-3 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors flex items-center justify-center"
            >
              Sign Up
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>

        </div>

        <p className="mt-12 text-slate-500 dark:text-slate-400">
          Already have an account?{" "}
          <a href="/#/login" className="text-primary font-semibold hover:underline">
            Log in here
          </a>
        </p>
      </div>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-slate-400 dark:text-slate-500">
        <div className="space-x-8 mb-4">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
          <a href="#" className="hover:text-primary">Help Center</a>
        </div>
        <p>© 2026 Tournament Manager. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default SignupSelect;
