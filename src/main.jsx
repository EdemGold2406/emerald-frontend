import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

// --- 1. LOGIN SCREEN (Role Selector for testing) ---
const LoginScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="w-24 h-24 bg-emeraldYellow rounded-full flex items-center justify-center font-bold text-emeraldGreen text-3xl mb-6 border-4 border-emeraldGreen">EF</div>
      <h2 className="text-3xl font-bold text-emeraldGreen mb-8">Welcome to Emerald Field</h2>
      <div className="flex flex-col space-y-4 w-64">
        <button onClick={() => navigate('/admin')} className="bg-emeraldGreen text-white py-3 rounded font-bold shadow hover:bg-green-700">Login as Admin</button>
        <button onClick={() => navigate('/teacher')} className="bg-emeraldYellow text-emeraldGreen border border-emeraldGreen py-3 rounded font-bold shadow hover:bg-yellow-400">Login as Teacher</button>
        <button onClick={() => navigate('/student')} className="bg-gray-800 text-white py-3 rounded font-bold shadow hover:bg-gray-900">Login as Student</button>
      </div>
    </div>
  );
};

// --- 2. ADMIN VIEW ---
const AdminDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-emeraldGreen">Admin Workspace</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldGreen">
          <h3 className="font-bold text-lg mb-2">Upload Students</h3>
          <input type="file" className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:bg-emeraldGreen file:text-white" />
          <button className="bg-emeraldGreen text-white px-4 py-2 rounded w-full">Process Excel</button>
        </div>
        <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldYellow">
          <h3 className="font-bold text-lg mb-2">Manage System</h3>
          <button className="bg-emeraldYellow text-emeraldGreen font-bold px-4 py-2 rounded w-full mb-2">Edit Classes & Subjects</button>
          <button className="bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded w-full border border-gray-400">Promote All Students (End of Year)</button>
        </div>
      </div>
    </div>
  );
};

// --- 3. TEACHER VIEW ---
const TeacherDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-emeraldGreen">Teacher Portal</h2>
      <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldGreen max-w-3xl">
        <h3 className="font-bold text-lg mb-4">Upload Results (JSS 1 - Mathematics)</h3>
        <div className="grid grid-cols-5 gap-4 font-bold text-sm bg-gray-100 p-2 rounded mb-2">
          <div className="col-span-2">Student Name</div>
          <div>CAT 1 (20)</div>
          <div>CAT 2 (20)</div>
          <div>Misc (10)</div>
        </div>
        {/* Mock Student Row */}
        <div className="grid grid-cols-5 gap-4 mb-4 items-center">
          <div className="col-span-2 text-gray-700">Alice Asuquo</div>
          <input type="number" placeholder="0" className="border p-2 rounded w-full" max="20" />
          <input type="number" placeholder="0" className="border p-2 rounded w-full" max="20" />
          <input type="number" placeholder="0" className="border p-2 rounded w-full" max="10" />
        </div>
        <button className="bg-emeraldGreen text-white px-6 py-2 rounded">Save Results</button>
      </div>
    </div>
  );
};

// --- 4. STUDENT / PARENT VIEW ---
const StudentDashboard = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    <div>
      {/* Pop-up for Fees/Resumption triggers here for students/parents */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl border-4 border-emeraldGreen relative">
            <h3 className="text-2xl font-bold text-emeraldGreen mb-4">School Announcement</h3>
            <p className="text-gray-700 mb-2"><strong>Theme:</strong> Pursuit of Learning and Character</p>
            <p className="text-gray-700 mb-2"><strong>Next Term Resumes:</strong> May 10, 2026</p>
            <p className="text-gray-700 mb-6 text-xl"><strong>School Fees:</strong> ₦150,000</p>
            <button onClick={() => setShowPopup(false)} className="bg-emeraldYellow text-emeraldGreen border-2 border-emeraldGreen w-full py-3 rounded font-bold text-lg">View My Results</button>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold mb-6 text-emeraldGreen">My Results - Term 1</h2>
      <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldYellow max-w-4xl">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b-2 border-emeraldGreen">
              <th className="p-3">Subject</th>
              <th className="p-3">CAT 1</th>
              <th className="p-3">CAT 2</th>
              <th className="p-3">Misc</th>
              <th className="p-3">Exam</th>
              <th className="p-3">Total</th>
              <th className="p-3">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-3 font-bold text-gray-700">Mathematics</td>
              <td className="p-3">18</td>
              <td className="p-3">15</td>
              <td className="p-3">8</td>
              <td className="p-3">45</td>
              <td className="p-3 font-bold text-emeraldGreen">86</td>
              <td className="p-3 font-bold">A</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-6 flex space-x-4">
          <button className="bg-emeraldGreen text-white px-4 py-2 rounded">Download Transcript (PDF)</button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP LAYOUT ---
const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans bg-gray-50">
        {/* Navigation Bar */}
        <nav className="bg-emeraldGreen text-white p-4 shadow-md flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emeraldYellow rounded-full flex items-center justify-center font-bold text-emeraldGreen">EF</div>
            <h1 className="text-xl font-bold">Emerald Field Portal</h1>
          </Link>
          <Link to="/" className="text-emeraldYellow hover:text-white font-bold text-sm">Logout / Switch Role</Link>
        </nav>

        {/* Dynamic Page Content */}
        <main className="flex-grow p-8">
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
