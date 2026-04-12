import React, { useState } from 'react';

const AdminDashboard = () => {
  const[activeTab, setActiveTab] = useState('overview');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'addTeacher', 'addStudent', 'viewActivity', etc.

  // --- MOCK DATA ---
  const classes =[{ id: 1, name: "JSS 1", population: 45 }, { id: 2, name: "JSS 2", population: 42 }];
  const subjects =[{ id: 1, name: "Mathematics", classes: "JSS 1 - SS 3" }, { id: 2, name: "Physics", classes: "SS 1 - SS 3" }];
  const teachers =[
    { id: 1, name: "Mr. Bassey", email: "bassey@efa.sch.ng", pass: "Efa-2026-1042", role: "Subject Teacher" },
    { id: 2, name: "Dr. Uche", email: "uche@efa.sch.ng", pass: "Efa-2026-9921", role: "HOD Sciences" }
  ];

  // Helper to open modal
  const triggerModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  // UI Component: Actions Button
  const ActionButtons = ({ onView }) => (
    <div className="flex space-x-2">
      <button onClick={onView} className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold hover:bg-blue-200">View Activity</button>
      <button className="bg-emeraldYellow text-emeraldGreen px-2 py-1 rounded text-xs font-bold hover:bg-yellow-400">Edit</button>
      <button className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold hover:bg-red-200">Delete</button>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 -m-4 md:-m-8">
      
      {/* --- SIDEBAR --- */}
      <div className="w-full md:w-64 bg-gray-800 text-white p-6 shadow-lg">
        <h2 className="text-xl font-bold text-emeraldYellow mb-8">Admin Control Panel</h2>
        <nav className="space-y-2">
          <button onClick={() => setActiveTab('overview')} className={`w-full text-left p-3 rounded font-bold ${activeTab === 'overview' ? 'bg-emeraldGreen' : 'hover:bg-gray-700'}`}>📊 Dashboard</button>
          <button onClick={() => setActiveTab('classes')} className={`w-full text-left p-3 rounded font-bold ${activeTab === 'classes' ? 'bg-emeraldGreen' : 'hover:bg-gray-700'}`}>🏫 Manage Classes</button>
          <button onClick={() => setActiveTab('subjects')} className={`w-full text-left p-3 rounded font-bold ${activeTab === 'subjects' ? 'bg-emeraldGreen' : 'hover:bg-gray-700'}`}>📚 Manage Subjects</button>
          <button onClick={() => setActiveTab('teachers')} className={`w-full text-left p-3 rounded font-bold ${activeTab === 'teachers' ? 'bg-emeraldGreen' : 'hover:bg-gray-700'}`}>👨‍🏫 Provision Staff</button>
          <button onClick={() => setActiveTab('students')} className={`w-full text-left p-3 rounded font-bold ${activeTab === 'students' ? 'bg-emeraldGreen' : 'hover:bg-gray-700'}`}>🎓 Provision Students</button>
          <button onClick={() => setActiveTab('settings')} className={`w-full text-left p-3 rounded font-bold ${activeTab === 'settings' ? 'bg-emeraldYellow text-emeraldGreen' : 'hover:bg-gray-700'}`}>⚙️ Settings & Notices</button>
        </nav>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <div className="flex-1 p-8">
        
        {/* 1. OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-3xl font-bold text-emeraldGreen mb-6">System Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-emeraldGreen"><p className="text-gray-500">Total Students</p><h3 className="text-3xl font-bold">842</h3></div>
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-emeraldYellow"><p className="text-gray-500">Active Teachers</p><h3 className="text-3xl font-bold">45</h3></div>
              <div className="bg-white p-6 rounded-lg shadow border-l-4 border-gray-800"><p className="text-gray-500">Current Session</p><h3 className="text-xl font-bold mt-2">2025/2026 - Term 1</h3></div>
            </div>
          </div>
        )}

        {/* 2. CLASSES TAB */}
        {activeTab === 'classes' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-emeraldGreen">Classes Module</h2>
              <button className="bg-emeraldGreen text-white px-4 py-2 rounded font-bold">Add New Class</button>
            </div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead><tr className="bg-gray-100 border-b-2 border-emeraldGreen"><th className="p-4">Class Name</th><th className="p-4">Population</th><th className="p-4">Actions</th></tr></thead>
                <tbody>
                  {classes.map(c => (
                    <tr key={c.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-bold">{c.name}</td><td className="p-4">{c.population} Students</td>
                      <td className="p-4"><ActionButtons onView={() => triggerModal('viewActivity')} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. TEACHERS / STAFF PROVISIONING TAB */}
        {activeTab === 'teachers' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-emeraldGreen">Staff Provisioning</h2>
                <p className="text-sm text-gray-500">Create accounts and assign roles (Subject Teacher, Class Teacher, HOD).</p>
              </div>
              <button onClick={() => triggerModal('addTeacher')} className="bg-emeraldGreen text-white px-4 py-2 rounded font-bold shadow hover:bg-green-700">+ Provision New Teacher</button>
            </div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead><tr className="bg-gray-100 border-b-2 border-emeraldGreen"><th className="p-4">Teacher Name</th><th className="p-4">Username (Email)</th><th className="p-4">Auto-Password</th><th className="p-4">Assigned Roles</th><th className="p-4">Actions</th></tr></thead>
                <tbody>
                  {teachers.map(t => (
                    <tr key={t.id} className="border-b hover:bg-gray-50">
                      <td className="p-4 font-bold">{t.name}</td><td className="p-4 text-emeraldGreen font-bold">{t.email}</td>
                      <td className="p-4"><span className="bg-gray-200 px-2 py-1 rounded text-xs font-mono">{t.pass}</span></td>
                      <td className="p-4 text-sm">{t.role}</td>
                      <td className="p-4"><ActionButtons onView={() => triggerModal('viewActivity')} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 4. STUDENTS PROVISIONING TAB */}
        {activeTab === 'students' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-emeraldGreen">Student Provisioning</h2>
                <p className="text-sm text-gray-500">Upload Excel sheet to auto-generate usernames and passwords.</p>
              </div>
              <div className="flex space-x-2">
                <button className="bg-gray-800 text-white px-4 py-2 rounded font-bold">+ Single Student</button>
                <button className="bg-emeraldGreen text-white px-4 py-2 rounded font-bold flex items-center shadow hover:bg-green-700"><span className="mr-2">📄</span> Upload Excel</button>
              </div>
            </div>
            
            <div className="bg-blue-50 p-4 border-l-4 border-blue-500 mb-6 rounded">
              <p className="font-bold text-blue-800">Password Convention Active</p>
              <p className="text-sm text-blue-700">When accounts are created, default passwords follow the format: <strong>Efa-[Year]-[Random4Digits]</strong>. Admins can manually edit credentials by clicking "Edit" below.</p>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead><tr className="bg-gray-100 border-b-2 border-emeraldGreen"><th className="p-4">Student Name</th><th className="p-4">Class</th><th className="p-4">Generated Email</th><th className="p-4">Actions</th></tr></thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4 font-bold">Alice Asuquo</td><td className="p-4">JSS 1</td><td className="p-4 text-emeraldGreen">aasuquo@efa.sch.ng</td>
                    <td className="p-4"><ActionButtons onView={() => triggerModal('viewActivity')} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 5. SETTINGS & NOTICES TAB */}
        {activeTab === 'settings' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Term/Session Setup */}
            <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldGreen">
              <h3 className="font-bold text-xl text-gray-800 mb-4">Term & Session Setup</h3>
              <div className="space-y-4">
                <div><label className="block text-sm font-bold text-gray-700 mb-1">Session</label><input type="text" defaultValue="2025/2026" className="w-full border p-2 rounded" /></div>
                <div><label className="block text-sm font-bold text-gray-700 mb-1">Term</label><select className="w-full border p-2 rounded"><option>Term 1</option><option>Term 2</option><option>Term 3</option></select></div>
                <div><label className="block text-sm font-bold text-gray-700 mb-1">Term Theme</label><input type="text" defaultValue="Pursuit of Learning and Character" className="w-full border p-2 rounded" /></div>
                <div><label className="block text-sm font-bold text-gray-700 mb-1">Next Resumption Date</label><input type="date" className="w-full border p-2 rounded" /></div>
                <div><label className="block text-sm font-bold text-gray-700 mb-1">Default School Fees (Base)</label><input type="text" placeholder="e.g. 150000" className="w-full border p-2 rounded" /></div>
                <button className="bg-emeraldGreen text-white w-full py-2 rounded font-bold hover:bg-green-700">Save Configuration</button>
              </div>
            </div>

            {/* Notification Broadcast System */}
            <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldYellow">
              <h3 className="font-bold text-xl text-gray-800 mb-2">Broadcast Notification</h3>
              <p className="text-sm text-gray-500 mb-4">Send a pop-up notice to students/parents when they log in.</p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Target Audience</label>
                  <select className="w-full border p-2 rounded font-bold text-emeraldGreen">
                    <option value="all">Everybody (All Classes)</option>
                    <option value="primary">All Primary Classes</option>
                    <option value="jss">All JSS Classes</option>
                    <option value="ss">All SS Classes</option>
                    <option value="jss3">JSS 3 Only (Exam Notice)</option>
                    <option value="ss3">SS 3 Only (Exam Notice)</option>
                  </select>
                </div>
                <div><label className="block text-sm font-bold text-gray-700 mb-1">Notice Title</label><input type="text" placeholder="e.g. WAEC Registration Update" className="w-full border p-2 rounded" /></div>
                <div><label className="block text-sm font-bold text-gray-700 mb-1">Message</label><textarea rows="4" placeholder="Type your message here..." className="w-full border p-2 rounded resize-none"></textarea></div>
                <button className="bg-emeraldYellow text-emeraldGreen w-full py-2 rounded font-bold hover:bg-yellow-400">Publish Notice</button>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* --- GLOBAL MODALS --- */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl border-t-4 border-emeraldGreen">
            
            {/* View Activity Read-Only Modal */}
            {modalType === 'viewActivity' && (
              <div>
                <h3 className="font-bold text-xl text-gray-800 mb-4">Account Activity Log</h3>
                <p className="text-sm text-gray-600 mb-4 border-b pb-2">You are viewing actions performed by this account. Data here is read-only.</p>
                <ul className="text-sm space-y-3 mb-6 h-40 overflow-y-auto">
                  <li className="flex justify-between"><span className="text-gray-700">Uploaded JSS 1 Math Results</span><span className="text-xs text-gray-400">Today, 10:00 AM</span></li>
                  <li className="flex justify-between"><span className="text-gray-700">Logged In</span><span className="text-xs text-gray-400">Yesterday, 8:00 AM</span></li>
                </ul>
                <button onClick={() => setShowModal(false)} className="bg-gray-200 text-gray-800 w-full py-2 rounded font-bold">Close View</button>
              </div>
            )}

            {/* Add Teacher Provisioning Modal */}
            {modalType === 'addTeacher' && (
              <div>
                <h3 className="font-bold text-xl text-emeraldGreen mb-2">Provision Teacher Account</h3>
                <p className="text-xs text-gray-500 mb-4">A username and password will be auto-generated upon saving.</p>
                <div className="space-y-3 mb-6">
                  <input type="text" placeholder="Full Name (e.g. Jane Doe)" className="w-full border p-2 rounded text-sm" />
                  <label className="flex items-center space-x-2 text-sm"><input type="checkbox" /><span>Subject Teacher</span></label>
                  <label className="flex items-center space-x-2 text-sm"><input type="checkbox" /><span>Class Teacher</span></label>
                  <label className="flex items-center space-x-2 text-sm"><input type="checkbox" /><span>Head of Department (HOD)</span></label>
                </div>
                <div className="flex space-x-2">
                  <button onClick={() => setShowModal(false)} className="bg-gray-200 w-1/2 py-2 rounded font-bold">Cancel</button>
                  <button onClick={() => setShowModal(false)} className="bg-emeraldGreen text-white w-1/2 py-2 rounded font-bold">Generate Account</button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;

export default AdminDashboard;
