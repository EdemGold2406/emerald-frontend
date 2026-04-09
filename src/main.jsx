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
        {/* Universal Navigation Bar */}
        <nav className="bg-emeraldGreen text-white p-4 shadow-md flex justify-between items-center sticky top-0 z-40">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition">
            <div className="w-10 h-10 bg-emeraldYellow rounded-full flex items-center justify-center font-bold text-emeraldGreen shadow-sm">EF</div>
            <h1 className="text-xl font-bold tracking-wide">Emerald Field</h1>
          </Link>
          <Link to="/" className="bg-white text-emeraldGreen px-3 py-1 rounded text-sm font-bold shadow hover:bg-gray-100 transition">Log Out</Link>
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
