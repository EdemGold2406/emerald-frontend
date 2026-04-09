import React, { useState } from 'react';
import { useLocation, Navigate } from 'react-router-dom';

const TeacherDashboard = () => {
  const location = useLocation();
  const user = location.state?.user; // Gets the teacher logged in from LoginScreen

  // If someone tries to visit /teacher without logging in, send them back
  if (!user) {
    return <Navigate to="/" />;
  }

  // Determine the default tab based on their highest role
  const defaultTab = user.roles.isSubjectTeacher ? 'subject' : (user.roles.isClassTeacher ? 'class' : 'hod');
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Teacher Profile Header */}
      <div className="bg-emeraldGreen text-white p-6 rounded-lg shadow-md mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">{user.name}</h2>
          <p className="text-emeraldYellow font-bold text-sm mt-1">{user.email}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-bold opacity-90">Active Roles:</p>
          <div className="flex gap-2 mt-1 justify-end">
            {user.roles.isSubjectTeacher && <span className="bg-white text-emeraldGreen text-xs px-2 py-1 rounded font-bold">Subject Teacher</span>}
            {user.roles.isClassTeacher && <span className="bg-emeraldYellow text-emeraldGreen text-xs px-2 py-1 rounded font-bold">Class Teacher</span>}
            {user.roles.isHOD && <span className="bg-gray-800 text-emeraldYellow text-xs px-2 py-1 rounded font-bold">HOD</span>}
          </div>
        </div>
      </div>

      {/* Dynamic Tab Navigation (Only shows tabs the teacher has access to) */}
      <div className="flex border-b border-gray-300 mb-6 space-x-4">
        {user.roles.isSubjectTeacher && (
          <button onClick={() => setActiveTab('subject')} className={`pb-2 px-4 font-bold ${activeTab === 'subject' ? 'border-b-4 border-emeraldGreen text-emeraldGreen' : 'text-gray-500 hover:text-gray-800'}`}>
            Subject Teacher Workspace
          </button>
        )}
        {user.roles.isClassTeacher && (
          <button onClick={() => setActiveTab('class')} className={`pb-2 px-4 font-bold ${activeTab === 'class' ? 'border-b-4 border-emeraldGreen text-emeraldGreen' : 'text-gray-500 hover:text-gray-800'}`}>
            Class Teacher Workspace
          </button>
        )}
        {user.roles.isHOD && (
          <button onClick={() => setActiveTab('hod')} className={`pb-2 px-4 font-bold ${activeTab === 'hod' ? 'border-b-4 border-emeraldGreen text-emeraldGreen' : 'text-gray-500 hover:text-gray-800'}`}>
            HOD Workspace
          </button>
        )}
      </div>

      {/* --- TAB CONTENT --- */}

      {/* 1. SUBJECT TEACHER VIEW */}
      {activeTab === 'subject' && user.roles.isSubjectTeacher && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldGreen">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-xl text-gray-800">Upload Results & Assignments</h3>
            <select className="border p-2 rounded text-emeraldGreen font-bold border-emeraldGreen outline-none">
              {user.assignments.subjects.map(sub => <option key={sub}>{sub}</option>)}
            </select>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-emeraldGreen text-sm">
                  <th className="p-3">Student Name</th>
                  <th className="p-3">CAT 1 (20)</th>
                  <th className="p-3">CAT 2 (20)</th>
                  <th className="p-3">Misc (10)</th>
                  <th className="p-3">Exam (50)</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-bold text-gray-700">Alice Asuquo</td>
                  <td className="p-3"><input type="number" className="border p-1 w-16 rounded text-center" defaultValue="18" max="20" /></td>
                  <td className="p-3"><input type="number" className="border p-1 w-16 rounded text-center" defaultValue="15" max="20" /></td>
                  <td className="p-3"><input type="number" className="border p-1 w-16 rounded text-center" defaultValue="8" max="10" /></td>
                  <td className="p-3"><input type="number" className="border p-1 w-16 rounded text-center" defaultValue="45" max="50" /></td>
                  <td className="p-3"><button className="bg-gray-200 text-gray-800 px-3 py-1 rounded text-sm font-bold hover:bg-gray-300">Add Remark</button></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-end">
             <button className="bg-emeraldGreen text-white px-6 py-2 rounded font-bold shadow hover:bg-green-700">Save All Scores</button>
          </div>
        </div>
      )}

      {/* 2. CLASS TEACHER VIEW */}
      {activeTab === 'class' && user.roles.isClassTeacher && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldYellow">
          <h3 className="font-bold text-xl text-gray-800 mb-2">Class Manager: {user.assignments.className}</h3>
          <p className="text-gray-600 mb-6">Review all results for your class and provide end-of-term remarks.</p>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded p-4 flex flex-col md:flex-row gap-4 items-center bg-gray-50">
              <div className="flex-grow">
                <p className="font-bold text-lg text-emeraldGreen">Alice Asuquo</p>
                <p className="text-sm text-gray-500">Current Average: 84% | Status: Excellent</p>
              </div>
              <textarea placeholder="Type your end of term remark here..." className="border p-2 rounded w-full md:w-1/2 text-sm resize-none" rows="2"></textarea>
              <button className="bg-emeraldYellow text-emeraldGreen px-4 py-2 rounded font-bold shadow hover:bg-yellow-400">Save Remark</button>
            </div>
          </div>
        </div>
      )}

      {/* 3. HOD VIEW */}
      {activeTab === 'hod' && user.roles.isHOD && (
        <div className="bg-white p-6 rounded shadow border-t-4 border-gray-800">
          <h3 className="font-bold text-xl text-gray-800 mb-2">HOD Overview: {user.assignments.department} Department</h3>
          <p className="text-gray-600 mb-6">Review performance across all classes and approve results before publishing.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border rounded p-4 shadow-sm">
              <h4 className="font-bold text-emeraldGreen border-b pb-2 mb-2">Pending Approvals</h4>
              <p className="text-sm text-gray-700 flex justify-between py-1">JSS 1 Mathematics Upload <span>by Mr. Bassey</span></p>
              <button className="mt-3 bg-emeraldGreen text-white w-full py-2 rounded text-sm font-bold">Review & Approve</button>
            </div>
             <div className="border rounded p-4 shadow-sm bg-gray-50">
              <h4 className="font-bold text-gray-800 border-b pb-2 mb-2">Department Average</h4>
              <h1 className="text-4xl font-bold text-emeraldGreen mt-4 text-center">76%</h1>
              <p className="text-center text-xs text-gray-500 mt-1">Across 4 Subjects</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeacherDashboard;
