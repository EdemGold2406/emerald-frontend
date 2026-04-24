import React, { useState, useEffect } from 'react';
import { SchoolService } from '../../services/SchoolService';

const StudentsModule = () => {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState('none'); // 'none', 'bulk', 'individual'

  useEffect(() => { load(); }, []);
  const load = async () => { const res = await SchoolService.fetchStudents(); setStudents(res); };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-bold dark:text-white uppercase tracking-wider">Students Management</h1>
        <div className="space-x-2">
          <button onClick={() => { setModalMode('bulk'); setShowModal(true); }} className="bg-emeraldGreen text-white px-4 py-2 rounded text-xs font-bold">+ Upload Batch</button>
          <button onClick={() => { setModalMode('individual'); setShowModal(true); }} className="bg-emeraldGreen text-white px-4 py-2 rounded text-xs font-bold">+ Add Individual</button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex gap-4 mb-6">
        <input placeholder="Search name..." className="w-1/3 p-2 bg-white dark:bg-darkSurface border dark:border-darkBorder rounded text-sm" />
        <select className="p-2 bg-white dark:bg-darkSurface border dark:border-darkBorder rounded text-sm"><option>Class Filter</option></select>
        <select className="p-2 bg-white dark:bg-darkSurface border dark:border-darkBorder rounded text-sm"><option>Category Filter</option></select>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-darkSurface border dark:border-darkBorder rounded overflow-hidden">
        <table className="w-full text-left text-xs uppercase">
          <thead className="bg-gray-100 dark:bg-[#111] text-gray-500">
            <tr><th className="p-4">Name</th><th className="p-4">Username</th><th className="p-4">Password</th><th className="p-4">Actions</th></tr>
          </thead>
          <tbody className="dark:text-gray-300">
            {students.map(s => (
              <tr key={s.id} className="border-b dark:border-darkBorder">
                <td className="p-4 font-bold">{s.first_name} {s.surname}</td>
                <td className="p-4 text-emeraldGreen">{s.email}</td>
                <td className="p-4 font-mono">{s.password || '••••••'}</td>
                <td className="p-4 space-x-2">
                  <button className="text-blue-500 underline">Edit Credentials</button>
                  <button className="text-red-500 underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Switcher */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-darkSurface p-8 rounded shadow-xl w-full max-w-md">
            <h2 className="text-lg font-bold mb-6 dark:text-white uppercase">{modalMode === 'bulk' ? 'Batch Upload' : 'Add Individual'}</h2>
            {modalMode === 'bulk' ? (
                <div className="space-y-4">
                    <input type="file" className="text-sm dark:text-white" />
                    <button className="w-full bg-emeraldGreen text-white py-2 rounded font-bold">Process Sheets</button>
                </div>
            ) : (
                <div className="space-y-4">
                    <input placeholder="First Name" className="w-full border p-2 rounded" />
                    <input placeholder="Surname" className="w-full border p-2 rounded" />
                    <button className="w-full bg-emeraldGreen text-white py-2 rounded font-bold">Create Account</button>
                </div>
            )}
            <button onClick={() => setShowModal(false)} className="mt-4 w-full text-gray-400 text-xs uppercase">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsModule;
