import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LoginScreen from './components/LoginScreen';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';
import EmeraldAgent from './components/EmeraldAgent';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  
  // New state to control the Agent from anywhere (like the Navbar)
  const [isAgentOpen, setIsAgentOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-darkBase text-gray-900 dark:text-gray-100 transition-colors duration-300 relative overflow-x-hidden">
        
        <nav className="bg-white dark:bg-darkSurface border-b border-gray-200 dark:border-darkBorder p-4 md:p-6 flex justify-between items-center sticky top-0 z-40 transition-colors duration-300">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 border-2 border-emeraldGreen dark:border-emeraldYellow rounded-full flex items-center justify-center font-display font-bold text-emeraldGreen dark:text-emeraldYellow transition-colors">EF</div>
            <h1 className="text-xl md:text-2xl font-display uppercase tracking-widest text-emeraldGreen dark:text-white">Emerald Field</h1>
          </Link>
          
          <div className="flex items-center space-x-4 md:space-x-6">
            
            {/* Prominent Navbar Agent Button */}
            <button 
              onClick={() => setIsAgentOpen(true)}
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-emeraldGreen to-green-700 text-white px-5 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all text-sm uppercase tracking-wide border border-green-500"
            >
              <span>✨</span>
              <span>Ask Emerald</span>
            </button>

            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className="text-2xl hover:scale-110 transition-transform bg-gray-100 dark:bg-darkBase p-2 rounded-full border dark:border-darkBorder"
              title="Toggle Dark Mode"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            <Link to="/" className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-emeraldGreen dark:hover:text-white transition-colors hidden md:block">Sign Out</Link>
          </div>
        </nav>

        <main className="flex-grow p-4 md:p-8">
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/student" element={<StudentDashboard />} />
          </Routes>
        </main>

        {/* Passing the state down to the Agent */}
        <EmeraldAgent isOpen={isAgentOpen} setIsOpen={setIsAgentOpen} />
        
      </div>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
