import React, { useState, useEffect } from 'react';
import { SchoolService } from '../services/SchoolService';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('teachers');
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // We will call the real service here once we build the teacher service
    setTeachers([
      { id: 1, name: "ABRAHAM MAURICE", email: "amaurice@efs.sedu.ng", status: "Active" },
      { id: 2, name: "AFOLABI SAMUEL", email: "asamuel@efs.sedu.ng", status: "Active" }
    ]);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-darkBase">
      {/* Sidebar - Same as before */}
      <div className="w-64 bg-white dark:bg-darkSurface border-r dark:border-darkBorder p-6">
        <h2 className="text-emeraldGreen font-bold mb-8 uppercase text-sm">Admin Gateway</h2>
        <nav className="space-y-4">
          {['students', 'teachers', 'classes', 'subjects'].map(m => (
            <button key={m} onClick={() => setActiveTab(m)} className={`block w-full text-left font-bold uppercase text-[11px] ${activeTab === m ? 'text-emeraldGreen' : 'text-gray-400'}`}>
              {m}
            </button>
          ))}
        </nav>
      </div>

      {/* Teacher Module */}
      <div className="flex-1 p-8">
        <h1 className="text-xl font-bold mb-6 dark:text-white uppercase tracking-wider">Teachers & Staff</h1>
        
        <div className="bg-white dark:bg-darkSurface border dark:border-darkBorder rounded shadow-sm overflow-hidden">
          <table className="w-full text-left text-xs uppercase">
            <thead className="bg-gray-100 dark:bg-darkBorder text-gray-500">
              <tr><th className="p-4">Name</th><th className="p-4">Email</th><th className="p-4">Action</th></tr>
            </thead>
            <tbody className="dark:text-gray-300">
              {teachers.map(t => (
                <tr key={t.id} className="border-b dark:border-darkBorder">
                  <td className="p-4 font-bold">{t.name}</td>
                  <td className="p-4 text-emeraldGreen">{t.email}</td>
                  <td className="p-4 flex gap-2">
                    <button className="bg-emeraldGreen text-white px-2 py-1 rounded">Assign Subjects</button>
                    <button className="bg-teal-600 text-white px-2 py-1 rounded">Make Class Teacher</button>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
