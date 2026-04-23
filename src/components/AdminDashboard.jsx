import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('students');
  const [file, setFile] = useState(null);

  // Mock for Legacy Data
  const students = [
    { id: 1, regNo: "EFA/JS/19/0342", name: "ADIYA BASSEY ASUQUO", email: "aasuquo1@efa.sch.ng", status: "Active" }
  ];

  const CohortLock = ({ title }) => (
    <div className="flex gap-2">
      <button className="flex-1 bg-red-50 text-red-600 border border-red-200 py-2 text-[10px] font-bold rounded hover:bg-red-100">Lock {title}</button>
      <button className="flex-1 bg-blue-50 text-blue-600 border border-blue-200 py-2 text-[10px] font-bold rounded hover:bg-blue-100">Unlock {title}</button>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-darkBase">
      <div className="w-64 bg-white dark:bg-darkSurface border-r dark:border-darkBorder p-6">
        <h2 className="text-emeraldGreen font-bold mb-8 uppercase text-sm">Admin Dashboard</h2>
        <nav className="space-y-4">
          {['students', 'teachers', 'classes', 'subjects', 'terms', 'grades', 'broadsheet'].map(m => (
            <button key={m} onClick={() => setActiveTab(m)} className={`block w-full text-left font-bold uppercase text-[11px] ${activeTab === m ? 'text-emeraldGreen' : 'text-gray-400'}`}>
              {m}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex-1 p-8">
        {activeTab === 'students' && (
          <div className="animate-fade-in">
            <h1 className="text-xl font-bold mb-6 dark:text-white">STUDENTS RECORD</h1>
            
            {/* Legacy Lock System */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <CohortLock title="High School" />
              <CohortLock title="Year School" />
              <CohortLock title="Early Years" />
            </div>

            {/* Student Table */}
            <div className="bg-white dark:bg-darkSurface border dark:border-darkBorder rounded shadow-sm">
              <div className="p-4 border-b dark:border-darkBorder">
                <input placeholder="Search Student's name..." className="w-full md:w-1/3 bg-gray-50 dark:bg-darkBase border dark:border-darkBorder p-2 text-sm rounded dark:text-white" />
              </div>
              <table className="w-full text-left text-xs uppercase">
                <thead className="bg-gray-100 dark:bg-darkBorder text-gray-500">
                  <tr><th className="p-4">Reg.No</th><th className="p-4">Name</th><th className="p-4">Email</th><th className="p-4">Action</th></tr>
                </thead>
                <tbody className="dark:text-gray-300">
                  {students.map(s => (
                    <tr key={s.id} className="border-b dark:border-darkBorder">
                      <td className="p-4 font-mono">{s.regNo}</td>
                      <td className="p-4 font-bold">{s.name}</td>
                      <td className="p-4 text-emeraldGreen">{s.email}</td>
                      <td className="p-4"><button className="text-blue-500 font-bold hover:underline">Edit</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
