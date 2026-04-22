import React, { useState } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');

  // ==========================================
  // MOCK DATA (From Legacy Videos)
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

  const subjectsList =[
    { id: 1, name: "AGRIC SCIENCE", desc: "J.S.S CLASSES", school: "Junior High School" },
    { id: 2, name: "ART AND CRAFT", desc: "LITTLE RAINBOW", school: "Year School" },
    { id: 3, name: "BASIC SCI & TECH", desc: "YEAR SCHOOL", school: "Year School" },
    { id: 4, name: "BEAUTY AND COSMETOLOGY", desc: "S.S.S CLASSES", school: "Senior High School" },
    { id: 5, name: "COMPUTER STUDIES", desc: "S.S.S CLASSES", school: "Senior High School" }
  ];

  const termsList =[
    { id: 1, name: "Term II", desc: "OUR JOURNEY OF 10 YEARS", session: "2025/2026", fees: "₦275,000" },
    { id: 2, name: "Term I", desc: "OUR JOURNEY OF 10 YEARS", session: "2025/2026", fees: "₦265,000" },
    { id: 3, name: "Term III", desc: "OUR JOURNEY OF 10 YEARS", session: "2024/2025", fees: "₦265,000" }
  ];

  const gradesList =[
    { id: 1, percent: "86 - 100", grade: "A1", desc: "EXCELLENT", school: "1" },
    { id: 2, percent: "80 - 85", grade: "B2", desc: "VERY GOOD", school: "1" },
    { id: 3, percent: "76 - 79", grade: "B3", desc: "GOOD", school: "1" },
    { id: 4, percent: "70 - 75", grade: "C4", desc: "CREDIT", school: "1" },
    { id: 5, percent: "0 - 39", grade: "F9", desc: "FAIL", school: "1" }
  ];

  const broadsheetData =[
    { name: "BRONISLAWA NGOZIKA", math: 65, english: 70, science: 80, civic: 60, total: 275, average: 68.75, remark: "B+" },
    { name: "ELDORA ECHENG", math: 90, english: 85, science: 88, civic: 92, total: 355, average: 88.75, remark: "A1" },
    { name: "ETHIENE ESSIEN", math: 45, english: 50, science: 48, civic: 55, total: 198, average: 49.50, remark: "C4" }
  ];

  const openModal = (title) => { setModalTitle(title); setShowModal(true); };

  // ==========================================
  // UI COMPONENTS
  // ==========================================

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
            { id: 'subjects', label: '📚 Subjects' },
            { id: 'terms', label: '📅 Term & Session' },
            { id: 'grades', label: '📈 Grade Settings' },
            { id: 'broadsheet', label: '📑 Broadsheets' }
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
        
        {/* 1. OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-display uppercase tracking-wider text-gray-900 dark:text-white mb-6">System Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[
                { label: 'Students', value: stats.students, color: 'border-emeraldGreen' },
                { label: 'Teachers', value: stats.teachers, color: 'border-emeraldYellow' },
                { label: 'Classes', value: stats.classes, color: 'border-blue-500' },
                { label: 'Subjects', value: stats.subjects, color: 'border-purple-500' },
                { label: 'Terms', value: stats.terms, color: 'border-gray-800 dark:border-gray-400' }
              ].map(stat => (
                <div key={stat.label} className={`bg-white dark:bg-darkSurface p-4 rounded-lg shadow-sm border-t-4 ${stat.color} border border-gray-100 dark:border-darkBorder transition-colors`}>
                  <p className="text-gray-500 dark:text-gray-400 font-bold uppercase text-[10px] tracking-widest">{stat.label}</p>
                  <h3 className="text-2xl font-display text-gray-900 dark:text-white mt-1">{stat.value}</h3>
                </div>
              ))}
            </div>
            
            <div className="bg-white dark:bg-darkSurface p-6 rounded border border-gray-200 dark:border-darkBorder transition-colors">
              <h3 className="font-display uppercase tracking-wider text-emeraldGreen dark:text-emeraldYellow mb-4">Quick Imports</h3>
              <div className="flex gap-4 flex-wrap">
                 <button className="bg-gray-100 dark:bg-[#111] border border-gray-300 dark:border-darkBorder text-gray-800 dark:text-white px-4 py-2 rounded text-sm font-bold hover:border-emeraldGreen transition-colors">Import Students by Term</button>
                 <button className="bg-gray-100 dark:bg-[#111] border border-gray-300 dark:border-darkBorder text-gray-800 dark:text-white px-4 py-2 rounded text-sm font-bold hover:border-emeraldGreen transition-colors">Import by Class</button>
              </div>
            </div>
          </div>
        )}

        {/* 2. STUDENTS RECORD */}
        {activeTab === 'students' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display uppercase tracking-wider text-gray-900 dark:text-white mb-4">Students Record</h2>
            
            {/* Cohort Locks & Unlocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-2">
                <button className="w-full border border-red-200 bg-red-50 text-red-600 dark:bg-red-900/20 dark:border-red-900 dark:text-red-400 py-2 text-sm font-bold rounded">Lock High School Students</button>
                <button className="w-full border border-blue-200 bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:border-blue-900 dark:text-blue-400 py-2 text-sm font-bold rounded">Unlock High School Students</button>
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
              <div className="p-4 border-b border-gray-200 dark:border-darkBorder">
                <input type="text" placeholder="search Student's name..." className="w-full md:w-1/3 border border-gray-300 dark:border-darkBorder bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white p-2 rounded text-sm outline-none focus:border-emeraldGreen" />
              </div>
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-darkBorder text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest">
                    <th className="p-3">#</th><th className="p-3">Reg.No</th><th className="p-3">First Name</th><th className="p-3">Other Name</th><th className="p-3">Surname</th><th className="p-3">Email</th><th className="p-3">DOB</th><th className="p-3">Gender</th><th className="p-3">Password</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200 text-sm">
                  {students.map((s, i) => (
                    <tr key={s.id} className="border-b border-gray-100 dark:border-darkBorder hover:bg-gray-50 dark:hover:bg-[#1a1a1a]">
                      <td className="p-3">{i+1}</td><td className="p-3 font-mono text-xs">{s.regNo}</td><td className="p-3">{s.firstName}</td><td className="p-3">{s.otherName}</td><td className="p-3 font-bold">{s.surname}</td>
                      <td className="p-3 text-emeraldGreen dark:text-emeraldYellow">{s.email}</td><td className="p-3">{s.dob}</td><td className="p-3">{s.gender}</td><td className="p-3 font-mono text-xs">{s.pass}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. TEACHERS */}
        {activeTab === 'teachers' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display uppercase tracking-wider text-gray-900 dark:text-white mb-4">129 Teachers</h2>
            <div className="bg-white dark:bg-darkSurface shadow-sm border border-gray-200 dark:border-darkBorder rounded overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-darkBorder text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest">
                    <th className="p-3">#</th><th className="p-3">Name</th><th className="p-3">Start Year</th><th className="p-3">Email</th><th className="p-3">Password</th><th className="p-3">Level</th><th className="p-3">Status</th><th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200 text-sm">
                  {teachers.map((t, i) => (
                    <tr key={t.id} className="border-b border-gray-100 dark:border-darkBorder hover:bg-gray-50 dark:hover:bg-[#1a1a1a]">
                      <td className="p-3">{i+1}</td><td className="p-3 font-bold">{t.name}</td><td className="p-3">{t.startYear}</td><td className="p-3 text-emeraldGreen dark:text-emeraldYellow">{t.email}</td>
                      <td className="p-3 font-mono text-xs">{t.pass}</td><td className="p-3">{t.level}</td>
                      <td className="p-3">
                        {t.hasClass && <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded text-xs font-bold block mb-1 text-center">Assigned Class</span>}
                        <span className="text-xs">{t.status}</span>
                      </td>
                      <td className="p-3">
                        <div className="grid grid-cols-2 gap-1 w-48">
                          <button onClick={() => openModal('Assign Subjects')} className="bg-emeraldGreen text-white text-[10px] py-1 px-2 rounded hover:opacity-80">Assign Subjects</button>
                          <button className="bg-blue-500 text-white text-[10px] py-1 px-2 rounded hover:opacity-80">Edit</button>
                          <button onClick={() => openModal('Assign Class')} className="bg-teal-600 text-white text-[10px] py-1 px-2 rounded hover:opacity-80">Make Class Teacher</button>
                          <button className="bg-red-500 text-white text-[10px] py-1 px-2 rounded hover:opacity-80">Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 4. CLASSES */}
        {activeTab === 'classes' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display uppercase tracking-wider text-gray-900 dark:text-white mb-4">Class List</h2>
            <div className="bg-white dark:bg-darkSurface shadow-sm border border-gray-200 dark:border-darkBorder rounded overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead><tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-darkBorder text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest"><th className="p-4">Class</th><th className="p-4">Description</th><th className="p-4">Max in Class</th><th className="p-4">Level</th><th className="p-4">Action</th></tr></thead>
                <tbody className="text-gray-800 dark:text-gray-200 text-sm">
                  {classesList.map(c => (
                    <tr key={c.id} className="border-b border-gray-100 dark:border-darkBorder hover:bg-gray-50 dark:hover:bg-[#1a1a1a]">
                      <td className="p-4 font-bold">{c.class}</td><td className="p-4">{c.desc}</td><td className="p-4">{c.max}</td><td className="p-4">{c.level}</td>
                      <td className="p-4"><button className="bg-emeraldYellow text-emeraldGreen px-3 py-1 rounded text-xs font-bold hover:opacity-80 transition-opacity">Edit</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 5. SUBJECTS (Restored with Action buttons) */}
        {activeTab === 'subjects' && (
          <div className="animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-display uppercase tracking-wider text-gray-900 dark:text-white">Subjects</h2>
              <button className="bg-emeraldGreen text-white px-4 py-2 rounded text-sm font-bold hover:opacity-80 transition-opacity">+ Add Subject</button>
            </div>
            <div className="bg-white dark:bg-darkSurface shadow-sm border border-gray-200 dark:border-darkBorder rounded overflow-hidden">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                  <tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-darkBorder text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest">
                    <th className="p-4">#</th><th className="p-4">Subject Name</th><th className="p-4">Subject Description</th><th className="p-4">School</th><th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200 text-sm">
                  {subjectsList.map((s, i) => (
                    <tr key={s.id} className="border-b border-gray-100 dark:border-darkBorder hover:bg-gray-50 dark:hover:bg-[#1a1a1a]">
                      <td className="p-4">{i+1}</td><td className="p-4 font-bold">{s.name}</td><td className="p-4">{s.desc}</td><td className="p-4">{s.school}</td>
                      <td className="p-4 flex gap-2">
                        <button className="bg-emeraldYellow text-emeraldGreen px-3 py-1 rounded text-xs font-bold hover:opacity-80 transition-opacity">Edit</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded text-xs font-bold hover:opacity-80 transition-opacity">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 6. TERMS */}
        {activeTab === 'terms' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display uppercase tracking-wider text-gray-900 dark:text-white mb-4">Term List</h2>
            <div className="bg-white dark:bg-darkSurface shadow-sm border border-gray-200 dark:border-darkBorder rounded overflow-x-auto">
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead><tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-darkBorder text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest"><th className="p-4">Name</th><th className="p-4">Description</th><th className="p-4">Session</th><th className="p-4">Fee Schedule</th></tr></thead>
                <tbody className="text-gray-800 dark:text-gray-200 text-sm">
                  {termsList.map((t, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-darkBorder hover:bg-gray-50 dark:hover:bg-[#1a1a1a]">
                      <td className="p-4 font-bold">{t.name}</td><td className="p-4">{t.desc}</td><td className="p-4">{t.session}</td><td className="p-4 font-mono">{t.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 7. GRADE SETTINGS (Restored with Action buttons) */}
        {activeTab === 'grades' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display uppercase tracking-wider text-gray-900 dark:text-white mb-4">GradeSettings List</h2>
            <div className="bg-white dark:bg-darkSurface shadow-sm border border-gray-200 dark:border-darkBorder rounded overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-[#111] border-b border-gray-200 dark:border-darkBorder text-gray-500 dark:text-gray-400 text-xs uppercase tracking-widest">
                    <th className="p-4">Percentage</th><th className="p-4">Grade</th><th className="p-4">Description</th><th className="p-4">School</th><th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="text-gray-800 dark:text-gray-200 text-sm">
                  {gradesList.map((g, i) => (
                    <tr key={i} className="border-b border-gray-100 dark:border-darkBorder hover:bg-gray-50 dark:hover:bg-[#1a1a1a]">
                      <td className="p-4 font-mono">{g.percent}</td><td className="p-4 font-bold text-emeraldGreen dark:text-emeraldYellow">{g.grade}</td><td className="p-4">{g.desc}</td><td className="p-4">{g.school}</td>
                      <td className="p-4 flex gap-2">
                        <button className="text-blue-500 hover:text-blue-400 hover:underline text-sm font-bold">Edit</button> 
                        <span className="text-gray-300 dark:text-gray-600">|</span> 
                        <button className="text-red-500 hover:text-red-400 hover:underline text-sm font-bold">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 8. RESULTS / BROADSHEETS */}
        {activeTab === 'broadsheet' && (
          <div className="animate-fade-in">
            <h2 className="text-2xl font-display uppercase tracking-wider text-gray-900 dark:text-white mb-4">Exam Broadsheet Collation</h2>
            
            {/* Filters */}
            <div className="bg-white dark:bg-darkSurface p-4 rounded border border-gray-200 dark:border-darkBorder mb-6 flex flex-col md:flex-row gap-4">
              <select className="flex-1 p-2 border border-gray-300 dark:border-darkBorder rounded bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white outline-none">
                <option>Select Class (e.g. J.S.S 1 WOLE SOYINKA A)</option>
              </select>
              <select className="flex-1 p-2 border border-gray-300 dark:border-darkBorder rounded bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white outline-none">
                <option>Select Term (e.g. Term III 2025/2026)</option>
              </select>
              <select className="flex-1 p-2 border border-gray-300 dark:border-darkBorder rounded bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white outline-none">
                <option>Select Sheet (Grand Total)</option>
              </select>
              <button className="bg-emeraldGreen text-white px-6 py-2 rounded font-bold hover:opacity-80">Fetch</button>
            </div>

            {/* Print Button */}
            <div className="mb-4">
               <button className="bg-red-500 text-white px-4 py-2 text-sm rounded font-bold hover:bg-red-600">PDF Export / Print</button>
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
                    <th className="p-3 border-l border-gray-200 dark:border-darkBorder text-emeraldGreen dark:text-emeraldYellow">Total</th>
                    <th className="p-3 text-emeraldGreen dark:text-emeraldYellow">Average</th>
                    <th className="p-3 text-emeraldGreen dark:text-emeraldYellow">Remark</th>
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

      {/* GLOBAL MODAL FOR ACTIONS */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white dark:bg-darkSurface rounded p-6 max-w-sm w-full shadow-2xl border border-gray-200 dark:border-darkBorder relative transition-colors">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-white font-bold transition-colors">✕</button>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-darkBorder pb-2">{modalTitle}</h3>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Please select the options below to complete the assignment for this staff member.</p>
            
            <select className="w-full mb-4 p-2 border border-gray-300 dark:border-darkBorder rounded bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white outline-none focus:border-emeraldGreen transition-colors">
               <option>Select Option...</option>
               <option>J.S.S 1 WOLE SOYINKA A</option>
               <option>J.S.S 2 CHINUA ACHEBE A</option>
            </select>
            
            <button onClick={() => setShowModal(false)} className="w-full bg-emeraldGreen text-white py-2 rounded font-bold hover:opacity-80 transition-opacity">Submit</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default AdminDashboard;
