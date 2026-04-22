import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const[showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  // ==========================================
  // MOCK DATA 
  // ==========================================
  const stats = { students: 1131, terms: 17, subjects: 83, classes: 38, teachers: 129 };

  const students =[
    { id: 1, regNo: "EFA/JS/19/0342", firstName: "ADIYA", otherName: "BASSEY", surname: "ASUQUO", email: "aasuquo1@efa.sch.ng", dob: "20 June, 2015", gender: "F", pass: "fRg4jAzu" },
    { id: 2, regNo: "EFA/JS/17/0212", firstName: "AIINA", otherName: "LINA", surname: "ITU", email: "aitu5@efa.sch.ng", dob: "02 April, 2015", gender: "F", pass: "SsqzHPtV" },
    { id: 3, regNo: "EFA/JS/18/0257", firstName: "BEATRICESHARON", otherName: "OCHEKE", surname: "OGBU", email: "bogbu6@efa.sch.ng", dob: "21 May, 2015", gender: "F", pass: "uH9EING" }
  ];

  const teachers =[
    { id: 1, name: "ABRAHAM MAURICE", startYear: 2019, email: "amaurice@efs.sedu.ng", pass: "s2x2I7W", level: "Year School", status: "Full Staff", hasClass: true },
    { id: 2, name: "AFOLABI SAMUEL SUNDAY", startYear: 2022, email: "asamuel@efs.sedu.ng", pass: "geb1oK5", level: "Year School", status: "Staff", hasClass: true }
  ];

  const classesList =[
    { id: 1, class: "J.S.S 1", desc: "WOLE SOYINKA A", max: 22, level: "Junior High School" },
    { id: 2, class: "J.S.S 1", desc: "WOLE SOYINKA B", max: 22, level: "Junior High School" }
  ];

  // Mock Broadsheet Data
  const broadsheetData =[
    { name: "BRONISLAWA NGOZIKA", math: 65, english: 70, science: 80, civic: 60, total: 275, average: 68.75, remark: "B+" },
    { name: "ELDORA ECHENG", math: 90, english: 85, science: 88, civic: 92, total: 355, average: 88.75, remark: "A1" },
    { name: "ETHIENE ESSIEN", math: 45, english: 50, science: 48, civic: 55, total: 198, average: 49.50, remark: "C4" }
  ];

  const openModal = (title) => { setModalTitle(title); setShowModal(true); };

  return (
    <div className="flex flex-col md:flex-row min-h-screen -m-4 md:-m-8 transition-colors duration-300">
      
      {/* SIDEBAR NAVIGATION */}
      <div className="w-full md:w-64 bg-white dark:bg-[#0a0a0a] border-r border-gray-200 dark:border-darkBorder p-6 shadow-sm z-10 transition-colors">
        <h2 className="text-xl font-display uppercase tracking-widest text-emeraldGreen dark:text-emeraldYellow mb-8">Admin Gateway</h2>
        <nav className="space-y-1">
          {[
            { id: 'overview', label: '📊 Dashboard' },
            { id: 'students', label: '🎓 Students Record' },
            { id: 'teachers', label: '👨‍🏫 Teachers & Staff' },
            { id: 'classes', label: '🏫 Class List' },
            { id: 'broadsheet', label: '📑 Broadsheets' }, // NEW TAB
            { id: 'terms', label: '📅 Term & Session' }
          ].map(tab => (
            <button 
              key={tab.id} 
              onClick={() => setActiveTab(tab.id)} 
              className={`w-full text-left px-4 py-3 rounded text-sm font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === tab.id ? 'bg-emeraldGreen text-white shadow-md' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-darkSurface'
              }`}
            >
               {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 p-4 md:p-8 bg-gray-50 dark:bg-darkBase transition-colors w-full overflow-x-hidden">
        
        {/* OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-display uppercase tracking-wider text-gray-900 dark:text-white mb-6">System Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Students', value: stats.students, color: 'border-emeraldGreen' },
                { label: 'Teachers', value: stats.teachers, color: 'border-emeraldYellow' },
                { label: 'Classes', value: stats.classes, color: 'border-blue-500' },
                { label: 'Terms', value: stats.terms, color: 'border-purple-500' }
              ].map(stat => (
                <div key={stat.label} className={`bg-white dark:bg-darkSurface p-4 rounded-lg shadow-sm border-t-4 ${stat.color} border border-gray-100 dark:border-darkBorder transition-colors`}>
                  <p className="text-gray-500 dark:text-gray-400 font-bold uppercase text-[10px] tracking-widest">{stat.label}</p>
                  <h3 className="text-2xl font-display text-gray-900 dark:text-white mt-1">{stat.value}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STUDENTS RECORD (With Lock/Unlock) */}
        {activeTab === 'students' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display uppercase tracking-wider text-gray-900 dark:text-white mb-4">Students Record</h2>
            
            {/* Cohort Locks & Unlocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-2">
                <button className="w-full border border-red-200 bg-red-50 text-red-600 dark:bg-red-900/20 dark:border-red-900 dark:text-red-400 py-2 text-sm font-bold rounded">Lock High School Students (Visible)</button>
                <button className="w-full border border-blue-200 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:border-blue-900 dark:text-blue-400 py-2 text-sm font-bold rounded">Unlock High School Students (Hidden)</button>
              </div>
              <div className="space-y-2">
                <button className="w-full border border-red-200 bg-red-50 text-red-600 dark:bg-red-900/20 dark:border-red-900 dark:text-red-400 py-2 text-sm font-bold rounded">Lock Year School Students</button>
                <button className="w-full border border-blue-200 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:border-blue-900 dark:text-blue-400 py-2 text-sm font-bold rounded">Unlock Year School Students</button>
              </div>
              <div className="space-y-2">
                <button className="w-full border border-red-200 bg-red-50 text-red-600 dark:bg-red-900/20 dark:border-red-900 dark:text-red-400 py-2 text-sm font-bold rounded">Lock Early Years Students</button>
                <button className="w-full border border-blue-200 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:border-blue-900 dark:text-blue-400 py-2 text-sm font-bold rounded">Unlock Early Years Students</button>
              </div>
            </div>

            <div className="bg-white dark:bg-darkSurface shadow-sm border border-gray-200 dark:border-darkBorder rounded overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-darkBorder text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest">
                    <th className="p-3">#</th><th className="p-3">Reg.No</th><th className="p-3">Name</th><th className="p-3">Email</th><th className="p-3">Password</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200 text-sm">
                  {students.map((s, i) => (
                    <tr key={s.id} className="border-b border-gray-100 dark:border-darkBorder hover:bg-gray-50 dark:hover:bg-[#1a1a1a]">
                      <td className="p-3">{i+1}</td><td className="p-3 font-mono text-xs">{s.regNo}</td><td className="p-3 font-bold">{s.surname}, {s.firstName}</td>
                      <td className="p-3 text-emeraldGreen dark:text-emeraldYellow">{s.email}</td><td className="p-3 font-mono text-xs">{s.pass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* RESULTS / BROADSHEETS (NEW) */}
        {activeTab === 'broadsheet' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display uppercase tracking-wider text-gray-900 dark:text-white mb-4">Exam Broadsheet Collation</h2>
            
            {/* Filters */}
            <div className="bg-white dark:bg-darkSurface p-4 rounded border border-gray-200 dark:border-darkBorder mb-6 flex flex-col md:flex-row gap-4">
              <select className="flex-1 p-2 border border-gray-300 dark:border-darkBorder rounded bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white outline-none">
                <option>Select Class (e.g. JSS 1 WOLE SOYINKA A)</option>
              </select>
              <select className="flex-1 p-2 border border-gray-300 dark:border-darkBorder rounded bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white outline-none">
                <option>Select Term (e.g. Term III 2025/2026)</option>
              </select>
              <select className="flex-1 p-2 border border-gray-300 dark:border-darkBorder rounded bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white outline-none">
                <option>Select Sheet (Grand Total)</option>
              </select>
              <button className="bg-emeraldGreen text-white px-6 py-2 rounded font-bold">Fetch</button>
            </div>

            {/* Print Button */}
            <div className="mb-4">
               <button className="bg-red-500 text-white px-4 py-2 text-sm rounded font-bold">PDF Export / Print</button>
            </div>

            {/* Master Sheet Table */}
            <div className="bg-white dark:bg-darkSurface shadow-sm border border-gray-200 dark:border-darkBorder rounded overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-darkBorder text-gray-500 dark:text-gray-400 text-[10px] uppercase tracking-widest text-center">
                    <th className="p-3 text-left">S/No</th>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 border-l border-gray-200 dark:border-darkBorder">Mathematics</th>
                    <th className="p-3 border-l border-gray-200 dark:border-darkBorder">English</th>
                    <th className="p-3 border-l border-gray-200 dark:border-darkBorder">Basic Science</th>
                    <th className="p-3 border-l border-gray-200 dark:border-darkBorder">Civic Ed.</th>
                    <th className="p-3 border-l border-gray-200 dark:border-darkBorder text-emeraldGreen">Total</th>
                    <th className="p-3 text-emeraldGreen">Average</th>
                    <th className="p-3 text-emeraldGreen">Remark</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200 text-sm text-center">
                  {broadsheetData.map((b, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-darkBorder hover:bg-gray-50 dark:hover:bg-[#1a1a1a]">
                      <td className="p-3 text-left">{i+1}</td>
                      <td className="p-3 font-bold text-left">{b.name}</td>
                      <td className="p-3 border-l border-gray-100 dark:border-darkBorder">{b.math}</td>
                      <td className="p-3 border-l border-gray-100 dark:border-darkBorder">{b.english}</td>
                      <td className="p-3 border-l border-gray-100 dark:border-darkBorder">{b.science}</td>
                      <td className="p-3 border-l border-gray-100 dark:border-darkBorder">{b.civic}</td>
                      <td className="p-3 border-l border-gray-100 dark:border-darkBorder font-bold text-emeraldGreen dark:text-emeraldYellow">{b.total}</td>
                      <td className="p-3 font-bold text-emeraldGreen dark:text-emeraldYellow">{b.average}</td>
                      <td className="p-3 font-bold">{b.remark}</td>
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
