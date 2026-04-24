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
                   
                    /*students tab*\
                    
                    {activeTab === 'students' && (
  <div className="animate-fade-in">
    <h1 className="text-xl font-bold mb-6 dark:text-white uppercase tracking-wider">STUDENT PROVISIONING</h1>
    
    {/* Provisioning Modes */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      {/* Bulk Upload */}
      <div className="bg-white dark:bg-darkSurface p-6 border dark:border-darkBorder rounded shadow-sm">
        <h3 className="font-bold mb-4 dark:text-emeraldYellow">Bulk Upload (Excel)</h3>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4 text-xs dark:text-white" />
        <button onClick={handleBulkUpload} className="bg-emeraldGreen text-white px-4 py-2 rounded text-xs font-bold hover:opacity-80">UPLOAD BATCH</button>
      </div>

      {/* Individual Add */}
      <div className="bg-white dark:bg-darkSurface p-6 border dark:border-darkBorder rounded shadow-sm">
        <h3 className="font-bold mb-4 dark:text-emeraldYellow">Individual Add</h3>
        <div className="flex flex-col gap-2">
            <input placeholder="First Name" className="border dark:border-darkBorder bg-transparent p-2 text-sm rounded dark:text-white" />
            <input placeholder="Surname" className="border dark:border-darkBorder bg-transparent p-2 text-sm rounded dark:text-white" />
            <button className="bg-blue-600 text-white py-2 rounded text-xs font-bold">ADD STUDENT</button>
        </div>
      </div>
    </div>

    {/* Search & Data Table */}
    <div className="bg-white dark:bg-darkSurface border dark:border-darkBorder rounded overflow-hidden">
      <div className="p-4 border-b dark:border-darkBorder">
        <input placeholder="Search records..." className="w-full bg-gray-50 dark:bg-darkBase border dark:border-darkBorder p-2 text-sm rounded dark:text-white" />
      </div>
      <table className="w-full text-left text-xs uppercase">
        <thead className="bg-gray-100 dark:bg-[#111] text-gray-500">
            <tr><th className="p-4">Reg.No</th><th className="p-4">Name</th><th className="p-4">Actions</th></tr>
        </thead>
        <tbody className="dark:text-gray-300">
          {data.map(s => (
            <tr key={s.id} className="border-b dark:border-darkBorder">
              <td className="p-4">{s.reg_no}</td>
              <td className="p-4 font-bold">{s.first_name} {s.surname}</td>
              <td className="p-4 flex gap-2">
                <button className="text-blue-500 font-bold underline">Edit</button>
                <button className="text-red-500 font-bold underline">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
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
