import React, { createContext, useContext, useState, useEffect } from 'react';

type UserRole = 'guest' | 'team' | 'organizer';

interface AuthContextType {
  role: UserRole;
  login: (role: UserRole) => void;
  logout: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [role, setRole] = useState<UserRole>('guest');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
    
    // Check session for role (mock persistence)
    const savedRole = localStorage.getItem('userRole') as UserRole;
    if (savedRole) {
      setRole(savedRole);
    }
  }, []);

  const login = (newRole: UserRole) => {
    setRole(newRole);
    localStorage.setItem('userRole', newRole);
  };

  const logout = () => {
    setRole('guest');
    localStorage.removeItem('userRole');
  };

  const toggleTheme = () => {
    setIsDarkMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <AuthContext.Provider value={{ role, login, logout, isDarkMode, toggleTheme }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};