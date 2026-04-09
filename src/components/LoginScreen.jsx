import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="w-24 h-24 bg-emeraldYellow rounded-full flex items-center justify-center font-bold text-emeraldGreen text-3xl mb-6 border-4 border-emeraldGreen shadow-lg">EF</div>
      <h2 className="text-3xl font-bold text-emeraldGreen mb-8 text-center">Welcome to Emerald Field</h2>
      <div className="flex flex-col space-y-4 w-72">
        <button onClick={() => navigate('/admin')} className="bg-emeraldGreen text-white py-3 rounded font-bold shadow hover:bg-green-700 transition">Login as Admin</button>
        <button onClick={() => navigate('/teacher')} className="bg-emeraldYellow text-emeraldGreen border border-emeraldGreen py-3 rounded font-bold shadow hover:bg-yellow-400 transition">Login as Teacher</button>
        <button onClick={() => navigate('/student')} className="bg-gray-800 text-white py-3 rounded font-bold shadow hover:bg-gray-900 transition">Login as Student</button>
      </div>
    </div>
  );
};

export default LoginScreen;
