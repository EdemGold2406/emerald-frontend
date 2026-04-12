import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Import our newly separated components
import LoginScreen from './components/LoginScreen';
import AdminDashboard from './components/AdminDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import StudentDashboard from './components/StudentDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50">
        {/* Navigation Bar */}
        <nav className="bg-darkBase border-b border-darkBorder text-white p-6 flex justify-between items-center sticky top-0 z-40">
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="w-10 h-10 border border-darkBorder rounded-full flex items-center justify-center font-display text-emeraldYellow group-hover:border-emeraldYellow transition-colors">EF</div>
            <h1 className="text-2xl font-display uppercase tracking-widest">Emerald Field</h1>
          </Link>
          <Link to="/" className="text-xs tracking-widest uppercase text-gray-500 hover:text-white transition-colors">End Session</Link>
        </nav>

        {/* Dynamic Page Content Router */}
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
