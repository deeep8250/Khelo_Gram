import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupSelect from './pages/SignupSelect';
import SignupOrganizer from './pages/SignupOrganizer';
import SignupTeam from './pages/SignupTeam';
import HomePage from './pages/HomePage';
import TournamentDetails from './pages/TournamentDetails';
import OrgPublicProfile from './pages/OrgPublicProfile';
import TeamDashboard from './pages/TeamDashboard';
import OrgDashboard from './pages/OrgDashboard';
import CreateTournament from './pages/CreateTournament';
import CreateTeam from './pages/CreateTeam';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const hideNavRoutes = ['/', '/login', '/signup', '/signup/organizer', '/signup/team'];
  const showNav = !hideNavRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200">
      {showNav && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      {!hideNavRoutes.includes(location.pathname) && location.pathname === '/' && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupSelect />} />
            <Route path="/signup/organizer" element={<SignupOrganizer />} />
            <Route path="/signup/team" element={<SignupTeam />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/tournament/:id" element={<TournamentDetails />} />
            <Route path="/organizer/:id" element={<OrgPublicProfile />} />
            <Route path="/profile/team" element={<TeamDashboard />} />
            <Route path="/profile/organizer" element={<OrgDashboard />} />
            <Route path="/create-tournament" element={<CreateTournament />} />
            <Route path="/create-team" element={<CreateTeam />} />
          </Routes>
        </Layout>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;