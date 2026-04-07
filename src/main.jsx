import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  const[showPopup, setShowPopup] = useState(true); // Popup for school fees/announcements

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="bg-emeraldGreen text-white p-4 shadow-md flex justify-between items-center">
        <div className="flex items-center space-x-3">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-emeraldYellow rounded-full flex items-center justify-center font-bold text-emeraldGreen">EF</div>
          <h1 className="text-xl font-bold">Emerald Field School</h1>
        </div>
        <button className="bg-emeraldYellow text-emeraldGreen px-4 py-2 rounded font-bold hover:bg-yellow-400">Login</button>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-8">
        <h2 className="text-2xl font-bold mb-6 text-emeraldGreen">Admin Dashboard</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldGreen">
            <h3 className="font-bold text-lg mb-2">Upload Students (Excel)</h3>
            <input type="file" className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-emeraldGreen file:text-white hover:file:bg-green-700" />
            <button className="bg-emeraldGreen text-white px-4 py-2 rounded w-full">Upload</button>
          </div>

          <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldYellow">
            <h3 className="font-bold text-lg mb-2">Manage Classes</h3>
            <p className="text-gray-600 mb-4">Assign teachers, edit subjects, and trigger Auto-Promotion.</p>
            <button className="bg-emeraldYellow text-emeraldGreen font-bold px-4 py-2 rounded w-full">View Classes</button>
          </div>

          <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldGreen">
            <h3 className="font-bold text-lg mb-2">Publish Results</h3>
            <p className="text-gray-600 mb-4">Share results via Email & Telegram.</p>
            <button className="bg-emeraldGreen text-white px-4 py-2 rounded w-full">Share Results</button>
          </div>
        </div>
      </main>

      {/* Pop-up Modal for Fees/Resumption (As Requested) */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl border-2 border-emeraldGreen">
            <h3 className="text-xl font-bold text-emeraldGreen mb-2">Notice: Next Term Info</h3>
            <p className="text-gray-700 mb-2"><strong>Theme:</strong> Pursuit of Learning and Character</p>
            <p className="text-gray-700 mb-2"><strong>Resumption Date:</strong> May 10, 2026</p>
            <p className="text-gray-700 mb-6"><strong>School Fees:</strong> ₦150,000</p>
            <button onClick={() => setShowPopup(false)} className="bg-emeraldGreen text-white w-full py-2 rounded font-bold">Acknowledge & Continue</button>
          </div>
        </div>
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
