import React, { useState, useEffect } from 'react';
import { SchoolService } from '../services/SchoolService';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData(activeTab);
  }, [activeTab]);

  const loadData = async (tab) => {
    setLoading(true);
    let result = [];
    if (tab === 'students') result = await SchoolService.fetchStudents();
    if (tab === 'teachers') result = await SchoolService.fetchTeachers();
    // Add additional modules here (classes, subjects, etc.)
    setData(result || []);
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-darkBase transition-colors">
      {/* Sidebar - Consistent for all modules */}
      <div className="w-64 bg-white dark:bg-darkSurface border-r dark:border-darkBorder p-6 shadow-sm">
        <h2 className="text-emeraldGreen dark:text-emeraldYellow font-bold mb-8 uppercase tracking-widest text-sm">Admin Gateway</h2>
        <nav className="space-y-4">
          {['students', 'teachers', 'classes', 'subjects', 'terms', 'grades', 'broadsheet'].map(m => (
            <button 
              key={m} 
              onClick={() => setActiveTab(m)} 
              className={`block w-full text-left font-bold uppercase text-[11px] ${activeTab === m ? 'text-emeraldGreen' : 'text-gray-400 dark:text-gray-600'}`}
            >
              {m}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-xl font-bold mb-6 dark:text-white uppercase tracking-wider">{activeTab} Record</h1>
        
        {loading ? (
          <p className="dark:text-white">Loading {activeTab}...</p>
        ) : (
          <div className="bg-white dark:bg-darkSurface border dark:border-darkBorder rounded shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs uppercase">
              <thead className="bg-gray-100 dark:bg-[#111] text-gray-500 dark:text-gray-300">
                <tr>
                  {activeTab === 'students' && <><th className="p-4">Reg.No</th><th className="p-4">Name</th><th className="p-4">Email</th></>}
                  {activeTab === 'teachers' && <><th className="p-4">Name</th><th className="p-4">Email</th><th className="p-4">Status</th></>}
                </tr>
              </thead>
              <tbody className="dark:text-gray-300">
                {data.map(item => (
                  <tr key={item.id} className="border-b dark:border-darkBorder hover:bg-gray-50 dark:hover:bg-[#1a1a1a]">
                    {activeTab === 'students' && (
                      <>
                        <td className="p-4 font-mono">{item.reg_no || 'N/A'}</td>
                        <td className="p-4 font-bold">{item.first_name} {item.surname}</td>
                        <td className="p-4 text-emeraldGreen">{item.email}</td>
                      </>
                    )}
                    {activeTab === 'teachers' && (
                      <>
                        <td className="p-4 font-bold">{item.first_name} {item.surname}</td>
                        <td className="p-4 text-emeraldGreen">{item.email}</td>
                        <td className="p-4">{item.status || 'Active'}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
