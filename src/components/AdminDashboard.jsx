import React, { useState, useEffect } from 'react';
import { SchoolService } from '../services/SchoolService';

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load real data from Backend
  useEffect(() => {
    SchoolService.fetchStudents().then(data => {
      setStudents(data);
      setLoading(false);
    });
  }, []);

  const handleLock = async (level, locked) => {
    await SchoolService.toggleLock(level, locked);
    alert(`Cohort ${level} ${locked ? 'Locked' : 'Unlocked'}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-darkBase">
      <div className="flex-1 p-8">
        <h1 className="text-xl font-bold mb-6 dark:text-white uppercase tracking-wider">Students Record</h1>
        
        {/* Lock Buttons Linked to Service */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <button onClick={() => handleLock('High School', true)} className="bg-red-50 text-red-600 border border-red-200 py-2 text-[10px] font-bold rounded">LOCK HIGH SCHOOL</button>
            <button onClick={() => handleLock('High School', false)} className="bg-blue-50 text-blue-600 border border-blue-200 py-2 text-[10px] font-bold rounded">UNLOCK HIGH SCHOOL</button>
        </div>

        {/* Real Data Table */}
        <div className="bg-white dark:bg-darkSurface border dark:border-darkBorder rounded overflow-hidden">
          {loading ? <p className="p-8 dark:text-white">Loading students...</p> : (
            <table className="w-full text-left text-xs uppercase">
              <thead className="bg-gray-100 dark:bg-darkBorder text-gray-500">
                <tr><th className="p-4">Reg.No</th><th className="p-4">Name</th><th className="p-4">Action</th></tr>
              </thead>
              <tbody className="dark:text-gray-300">
                {students.map(s => (
                  <tr key={s.id} className="border-b dark:border-darkBorder">
                    <td className="p-4 font-mono">{s.reg_no}</td>
                    <td className="p-4 font-bold">{s.first_name} {s.surname}</td>
                    <td className="p-4"><button className="text-emeraldGreen font-bold underline">Edit</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
