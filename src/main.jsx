import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import LoginScreen from './components/LoginScreen';
import AdminLayout from './components/Admin/AdminLayout'; // Updated path
import EmeraldAgent from './components/Shared/EmeraldAgent'; // Updated path

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');
  const [isAgentOpen, setIsAgentOpen] = useState(false);

  useEffect(() => {
    document.documentElement.className = isDarkMode ? 'dark' : '';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-darkBase text-gray-900 dark:text-gray-100 transition-colors">
        
        {/* Navigation Bar */}
        <nav className="bg-white dark:bg-darkSurface border-b dark:border-darkBorder p-4 flex justify-between items-center sticky top-0 z-40">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 border-2 border-emeraldGreen rounded-full flex items-center justify-center font-bold text-emeraldGreen">EF</div>
            <h1 className="text-xl font-display uppercase tracking-widest text-emeraldGreen dark:text-white">Emerald Field</h1>
          </Link>
          
          <div className="flex items-center space-x-4">
            <button onClick={() => setIsAgentOpen(true)} className="bg-emeraldGreen text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:opacity-80 transition-all">
              ✨ Ask Emerald
            </button>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="text-xl">{isDarkMode ? '☀️' : '🌙'}</button>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<LoginScreen />} />
            <Route path="/admin" element={<AdminLayout />} />
          </Routes>
        </main>

        {/* Global Agent - Visible on every page */}
        <EmeraldAgent isOpen={isAgentOpen} setIsOpen={setIsAgentOpen} />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
