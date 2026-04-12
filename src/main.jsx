import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LoginScreen from './components/LoginScreen';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  // State for Dark Mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply the 'dark' class to the HTML body when toggled
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      {/* Notice the dark:bg-darkBase - This automatically changes background based on the mode */}
      <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-darkBase text-gray-900 dark:text-gray-100 transition-colors duration-300">
        
        {/* Navigation Bar */}
        <nav className="bg-white dark:bg-darkBase border-b border-gray-200 dark:border-darkBorder p-4 md:p-6 flex justify-between items-center sticky top-0 z-40 transition-colors duration-300">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 border-2 border-emeraldGreen dark:border-darkBorder rounded-full flex items-center justify-center font-display font-bold text-emeraldGreen dark:text-emeraldYellow group-hover:border-emeraldYellow transition-colors">EF</div>
            <h1 className="text-xl md:text-2xl font-display uppercase tracking-widest text-emeraldGreen dark:text-white">Emerald Field</h1>
          </Link>
          
          <div className="flex items-center space-x-6">
            {/* Dark Mode Toggle Button */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className="text-2xl hover:scale-110 transition-transform"
              title="Toggle Dark Mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <Link to="/" className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-emeraldGreen dark:hover:text-white transition-colors hidden md:block">Sign Out</Link>
          </div>
        </nav>

        {/* Dynamic Page Content */}
        <main className="flex-grow p-4 md:p-8">
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
