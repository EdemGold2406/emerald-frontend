import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const TeacherDashboard = () => {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) return <Navigate to="/" />;

  const defaultTab = user.roles.isSubjectTeacher ? 'subject' : (user.roles.isClassTeacher ? 'class' : 'hod');
  const [activeTab, setActiveTab] = useState(defaultTab);

  // Fake Data for the tables
  const classList =[
    { id: 1, name: "Alice Asuquo", cat1: 18, cat2: 15, misc: 8, exam: 45 },
    { id: 2, name: "David Mark", cat1: 12, cat2: 14, misc: 7, exam: 30 },
    { id: 3, name: "Mary Slessor", cat1: 20, cat2: 19, misc: 10, exam: 48 },
    { id: 4, name: "John Doe", cat1: 15, cat2: 16, misc: 8, exam: 40 },
    { id: 5, name: "Sarah Connor", cat1: 19, cat2: 18, misc: 9, exam: 47 }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* HEADER */}
      <div className="bg-emeraldGreen dark:bg-[#0a0a0a] border dark:border-darkBorder text-white p-6 rounded-lg shadow-md mb-6 flex justify-between items-center transition-colors">
        <div>
          <h2 className="text-3xl font-display uppercase tracking-widest">{user.name}</h2>
          <p className="text-emeraldYellow font-bold text-sm mt-1">{user.email}</p>
        </div>
      </div>

      {/* TABS */}
      <div className="flex border-b border-gray-300 dark:border-darkBorder mb-6 space-x-4">
        {user.roles.isSubjectTeacher && <button onClick={() => setActiveTab('subject')} className={`pb-2 px-4 font-bold uppercase tracking-wider text-sm ${activeTab === 'subject' ? 'border-b-4 border-emeraldGreen text-emeraldGreen dark:text-emeraldYellow dark:border-emeraldYellow' : 'text-gray-500 dark:text-gray-400'}`}>Subject View</button>}
        {user.roles.isClassTeacher && <button onClick={() => setActiveTab('class')} className={`pb-2 px-4 font-bold uppercase tracking-wider text-sm ${activeTab === 'class' ? 'border-b-4 border-emeraldGreen text-emeraldGreen dark:text-emeraldYellow dark:border-emeraldYellow' : 'text-gray-500 dark:text-gray-400'}`}>Class Manager</button>}
        {user.roles.isHOD && <button onClick={() => setActiveTab('hod')} className={`pb-2 px-4 font-bold uppercase tracking-wider text-sm ${activeTab === 'hod' ? 'border-b-4 border-emeraldGreen text-emeraldGreen dark:text-emeraldYellow dark:border-emeraldYellow' : 'text-gray-500 dark:text-gray-400'}`}>HOD Overview</button>}
      </div>

      {/* CONTENT */}
      {activeTab === 'subject' && (
        <div className="bg-white dark:bg-darkSurface p-6 rounded shadow-sm border dark:border-darkBorder border-t-4 border-t-emeraldGreen transition-colors">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-xl text-gray-900 dark:text-white">Upload Results</h3>
            <select className="border dark:border-darkBorder bg-transparent dark:text-white p-2 rounded text-emeraldGreen font-bold outline-none">
              {user.assignments.subjects.map(sub => <option key={sub}>{sub}</option>)}
            </select>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-[#111] border-b-2 border-emeraldGreen text-xs uppercase tracking-wider text-gray-700 dark:text-gray-300">
                  <th className="p-3">Student Name</th>
                  <th className="p-3">CAT 1 (20)</th>
                  <th className="p-3">CAT 2 (20)</th>
                  <th className="p-3">Misc (10)</th>
                  <th className="p-3">Exam (50)</th>
                </tr>
              </thead>
              <tbody className="text-gray-800 dark:text-gray-200">
                {classList.map((student) => (
                  <tr key={student.id} className="border-b dark:border-darkBorder hover:bg-gray-50 dark:hover:bg-[#1a1a1a]">
                    <td className="p-3 font-bold">{student.name}</td>
                    <td className="p-3"><input type="number" defaultValue={student.cat1} className="border dark:border-darkBorder bg-transparent p-1 w-16 rounded text-center" /></td>
                    <td className="p-3"><input type="number" defaultValue={student.cat2} className="border dark:border-darkBorder bg-transparent p-1 w-16 rounded text-center" /></td>
                    <td className="p-3"><input type="number" defaultValue={student.misc} className="border dark:border-darkBorder bg-transparent p-1 w-16 rounded text-center" /></td>
                    <td className="p-3"><input type="number" defaultValue={student.exam} className="border dark:border-darkBorder bg-transparent p-1 w-16 rounded text-center" /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="mt-6 bg-emeraldGreen text-white px-6 py-2 rounded font-bold shadow hover:opacity-80">Save All Scores</button>
        </div>
      )}

      {activeTab === 'class' && (
        <div className="bg-white dark:bg-darkSurface p-6 rounded shadow-sm border dark:border-darkBorder border-t-4 border-t-emeraldYellow transition-colors">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-6">Class Remarks: {user.assignments.className}</h3>
          <div className="space-y-4">
            {classList.map((student) => (
              <div key={student.id} className="border dark:border-darkBorder rounded p-4 flex flex-col md:flex-row gap-4 items-center bg-gray-50 dark:bg-[#111]">
                <div className="flex-grow">
                  <p className="font-bold text-lg text-emeraldGreen dark:text-emeraldYellow">{student.name}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Current Average: {student.cat1 + student.cat2 + student.misc + student.exam}%</p>
                </div>
                <textarea placeholder="Type end of term remark..." className="border dark:border-darkBorder bg-transparent dark:text-white p-2 rounded w-full md:w-1/2 text-sm resize-none" rows="2"></textarea>
              </div>
            ))}
            <button className="bg-emeraldYellow text-emeraldGreen px-6 py-2 rounded font-bold shadow hover:opacity-80">Publish Remarks</button>
          </div>
        </div>
      )}

      {activeTab === 'hod' && (
        <div className="bg-white dark:bg-darkSurface p-6 rounded shadow-sm border dark:border-darkBorder border-t-4 border-t-gray-800 transition-colors">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-6">HOD Overview: {user.assignments.department}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border dark:border-darkBorder rounded p-4 shadow-sm bg-gray-50 dark:bg-[#111]">
              <h4 className="font-bold text-emeraldGreen dark:text-emeraldYellow border-b dark:border-darkBorder pb-2 mb-4">Pending Approvals</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 flex justify-between py-2 border-b dark:border-darkBorder">SS 1 Physics <span>by Mr. Bassey</span></p>
              <p className="text-sm text-gray-700 dark:text-gray-300 flex justify-between py-2 border-b dark:border-darkBorder">SS 3 Chemistry <span>by Ms. Ada</span></p>
              <button className="mt-4 bg-emeraldGreen text-white w-full py-2 rounded font-bold hover:opacity-80">Approve All</button>
            </div>
             <div className="border dark:border-darkBorder rounded p-4 shadow-sm flex flex-col items-center justify-center">
              <h4 className="font-bold text-gray-800 dark:text-gray-200">Department Average</h4>
              <h1 className="text-6xl font-display text-emeraldGreen dark:text-emeraldYellow mt-4">76%</h1>
              <p className="text-xs text-gray-500 mt-2">Across 4 Subjects</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
