import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const[showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  // --- RICH FAKE DATA ---
  const classes =[
    { id: 1, name: "JSS 1", population: 45, classTeacher: "Mrs. Okon" },
    { id: 2, name: "JSS 2", population: 42, classTeacher: "Ms. Ada" },
    { id: 3, name: "JSS 3", population: 38, classTeacher: "Mr. Chuks" },
    { id: 4, name: "SS 1 Sciences", population: 30, classTeacher: "Dr. Uche" },
    { id: 5, name: "SS 1 Arts", population: 28, classTeacher: "Mr. Bassey" },
    { id: 6, name: "SS 3 Sciences", population: 35, classTeacher: "Mrs. Nwachukwu" }
  ];

  const subjects =[
    { id: 1, name: "Mathematics", classes: "JSS 1 - SS 3", hod: "Dr. Uche" },
    { id: 2, name: "English Language", classes: "JSS 1 - SS 3", hod: "Mrs. Okon" },
    { id: 3, name: "Basic Science", classes: "JSS 1 - JSS 3", hod: "Dr. Uche" },
    { id: 4, name: "Physics", classes: "SS 1 - SS 3", hod: "Dr. Uche" },
    { id: 5, name: "Civic Education", classes: "JSS 1 - SS 3", hod: "Mr. Chuks" }
  ];

  const teachers =[
    { id: 1, name: "Mr. Bassey", email: "bassey@efa.sch.ng", pass: "Efa-2026-1042", role: "Subject Teacher" },
    { id: 2, name: "Mrs. Okon", email: "okon@efa.sch.ng", pass: "Efa-2026-8832", role: "Class Teacher (JSS1)" },
    { id: 3, name: "Dr. Uche", email: "uche@efa.sch.ng", pass: "Efa-2026-9921", role: "HOD Sciences" },
    { id: 4, name: "Ms. Ada", email: "ada@efa.sch.ng", pass: "Efa-2026-4411", role: "Subject Teacher" },
    { id: 5, name: "Mr. Chuks", email: "chuks@efa.sch.ng", pass: "Efa-2026-7729", role: "Class Teacher (JSS3)" }
  ];

  const students =[
    { id: 1, name: "Alice Asuquo", class: "JSS 1", email: "aasuquo@efa.sch.ng" },
    { id: 2, name: "David Mark", class: "JSS 1", email: "dmark@efa.sch.ng" },
    { id: 3, name: "Mary Slessor", class: "JSS 2", email: "mslessor@efa.sch.ng" },
    { id: 4, name: "John Doe", class: "SS 1 Sciences", email: "jdoe@efa.sch.ng" },
    { id: 5, name: "Sarah Connor", class: "SS 3 Sciences", email: "sconnor@efa.sch.ng" }
  ];

  const triggerModal = (type) => { setModalType(type); setShowModal(true); };

  const ActionButtons = ({ onView }) => (
    <div className="flex space-x-2">
      <button onClick={onView} className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200 px-2 py-1 rounded text-xs font-bold transition-colors">View</button>
      <button className="bg-emeraldYellow text-emeraldGreen px-2 py-1 rounded text-xs font-bold transition-colors">Edit</button>
      <button className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 px-2 py-1 rounded text-xs font-bold transition-colors">Delete</button>
    </div>
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen -m-4 md:-m-8">
      
      {/* SIDEBAR */}
      <div className="w-full md:w-64 bg-gray-800 dark:bg-[#0a0a0a] border-r dark:border-darkBorder text-white p-6 shadow-lg transition-colors">
        <h2 className="text-xl font-display uppercase tracking-widest text-emeraldYellow mb-8">Admin Control</h2>
        <nav className="space-y-2">
          {['overview', 'classes', 'subjects', 'teachers', 'students', 'settings'].map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`w-full text-left p-3 rounded font-bold capitalize transition-colors ${activeTab === tab ? 'bg-emeraldGreen dark:bg-darkSurface border dark:border-emeraldGreen' : 'hover:bg-gray-700 dark:hover:bg-darkSurface'}`}>
               {tab === 'settings' ? '⚙️ Settings' : `📁 ${tab}`}
            </button>
          ))}
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 p-8 bg-gray-50 dark:bg-darkBase transition-colors">
        
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-3xl font-display uppercase tracking-wider text-emeraldGreen dark:text-white mb-6">System Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-darkSurface p-6 rounded-lg shadow-sm border-l-4 border-emeraldGreen dark:border-l-emeraldGreen border dark:border-darkBorder transition-colors">
                <p className="text-gray-500 dark:text-gray-400 font-bold uppercase text-xs">Total Students</p>
                <h3 className="text-4xl font-display text-gray-900 dark:text-white mt-2">842</h3>
              </div>
              <div className="bg-white dark:bg-darkSurface p-6 rounded-lg shadow-sm border-l-4 border-emeraldYellow dark:border-l-emeraldYellow border dark:border-darkBorder transition-colors">
                <p className="text-gray-500 dark:text-gray-400 font-bold uppercase text-xs">Active Teachers</p>
                <h3 className="text-4xl font-display text-gray-900 dark:text-white mt-2">45</h3>
              </div>
              <div className="bg-white dark:bg-darkSurface p-6 rounded-lg shadow-sm border-l-4 border-gray-800 dark:border-l-gray-500 border dark:border-darkBorder transition-colors">
                <p className="text-gray-500 dark:text-gray-400 font-bold uppercase text-xs">Current Session</p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2">2025/2026 - Term 1</h3>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Tables (Classes, Subjects, Teachers, Students) */}
        {['classes', 'subjects', 'teachers', 'students'].includes(activeTab) && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-display uppercase tracking-wider text-emeraldGreen dark:text-white capitalize">{activeTab} Module</h2>
              <button className="bg-emeraldGreen text-white px-4 py-2 rounded font-bold shadow hover:opacity-80">+ Add New</button>
            </div>
            
            <div className="bg-white dark:bg-darkSurface shadow-sm border dark:border-darkBorder rounded-lg overflow-hidden transition-colors">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-[#111] border-b-2 border-emeraldGreen dark:border-darkBorder text-gray-700 dark:text-gray-300">
                    <th className="p-4 uppercase text-xs tracking-wider">Name</th>
                    <th className="p-4 uppercase text-xs tracking-wider">Details</th>
                    <th className="p-4 uppercase text-xs tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200">
                  {(activeTab === 'classes' ? classes : activeTab === 'subjects' ? subjects : activeTab === 'teachers' ? teachers : students).map(item => (
                    <tr key={item.id} className="border-b dark:border-darkBorder hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors">
                      <td className="p-4 font-bold">{item.name}</td>
                      <td className="p-4 text-sm">
                        {item.population && `${item.population} Students | Tr: ${item.classTeacher}`}
                        {item.classes && `Offered in: ${item.classes} | HOD: ${item.hod}`}
                        {item.role && <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded text-xs">{item.role}</span>}
                        {item.class && `${item.class} | ${item.email}`}
                      </td>
                      <td className="p-4"><ActionButtons onView={() => triggerModal('viewActivity')} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === 'settings' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-darkSurface p-6 rounded shadow-sm border dark:border-darkBorder border-t-4 border-t-emeraldGreen transition-colors">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">Term & Session Setup</h3>
              <div className="space-y-4">
                <div><label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">Term Theme</label><input type="text" defaultValue="Pursuit of Learning and Character" className="w-full border dark:border-darkBorder bg-transparent dark:text-white p-2 rounded" /></div>
                <div><label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1">School Fees</label><input type="text" defaultValue="₦150,000" className="w-full border dark:border-darkBorder bg-transparent dark:text-white p-2 rounded" /></div>
                <button className="bg-emeraldGreen text-white w-full py-2 rounded font-bold mt-4 hover:opacity-80">Save Configuration</button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
