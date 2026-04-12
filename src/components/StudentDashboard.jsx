import React, { useState } from 'react';

const StudentDashboard = () => {
  const[showPopup, setShowPopup] = useState(true);
  const [expandedSubject, setExpandedSubject] = useState(null);

  const student = { name: "Alice Asuquo", studentClass: "JSS 1", fees: "₦150,000", resumption: "May 10, 2026", theme: "Pursuit of Learning and Character", termRemark: "Alice has shown outstanding character and great improvement this term. Keep it up!" };
  const assignments =[{ id: 1, subject: "Mathematics", title: "Algebra Worksheet 2", dueDate: "April 15, 2026" }];
  const results =[{ id: 1, subject: "Mathematics", cat1: 18, cat2: 15, misc: 8, exam: 45, total: 86, grade: "A", remark: "Excellent calculation skills." }];

  return (
    <div className="max-w-6xl mx-auto">
      {/* POPUP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-darkSurface rounded-lg p-6 max-w-md w-full shadow-2xl border-4 border-emeraldGreen relative transition-colors">
            <h3 className="text-2xl font-display uppercase tracking-wider text-emeraldGreen dark:text-emeraldYellow mb-4">Notice: Next Term Info</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2"><strong>Theme:</strong> {student.theme}</p>
            <p className="text-gray-700 dark:text-gray-300 mb-6 text-xl"><strong>School Fees:</strong> {student.fees}</p>
            <button onClick={() => setShowPopup(false)} className="bg-emeraldYellow text-emeraldGreen border-2 border-emeraldGreen w-full py-3 rounded font-bold text-lg hover:bg-yellow-400">View My Results</button>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="bg-emeraldGreen dark:bg-[#0f0f0f] border dark:border-darkBorder text-white p-6 rounded-lg shadow-md mb-6 flex justify-between items-center transition-colors">
        <div>
          <h2 className="text-3xl font-display tracking-wide uppercase">{student.name}</h2>
          <p className="text-emeraldYellow font-bold text-lg">Class: {student.studentClass}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-display uppercase tracking-widest text-emeraldGreen dark:text-emeraldYellow border-b-2 border-gray-200 dark:border-darkBorder pb-2">My Subjects & Results</h3>
          {results.map((res) => (
            <div key={res.id} className="bg-white dark:bg-darkSurface border border-gray-200 dark:border-darkBorder rounded-lg shadow-sm overflow-hidden transition-colors">
              <button onClick={() => setExpandedSubject(expandedSubject === res.id ? null : res.id)} className="w-full flex justify-between items-center p-4 bg-gray-50 dark:bg-[#111] hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition focus:outline-none">
                <span className="font-bold text-gray-800 dark:text-white text-lg">{res.subject}</span>
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-emeraldGreen dark:text-emeraldYellow text-lg">{res.total}%</span>
                  <span className="text-gray-400 text-sm">{expandedSubject === res.id ? '▲' : '▼'}</span>
                </div>
              </button>
              {expandedSubject === res.id && (
                <div className="p-4 border-t border-gray-200 dark:border-darkBorder bg-white dark:bg-darkSurface">
                  <div className="grid grid-cols-4 gap-4 text-center mb-4">
                    <div className="bg-gray-100 dark:bg-[#0a0a0a] border dark:border-darkBorder p-2 rounded"><p className="text-xs text-gray-500 font-bold uppercase">CAT 1</p><p className="font-bold text-gray-900 dark:text-white">{res.cat1}</p></div>
                    {/* Repeat for others... */}
                    <div className="bg-emeraldGreen text-white p-2 rounded shadow-inner"><p className="text-xs font-bold uppercase">Exam</p><p className="font-bold">{res.exam}</p></div>
                  </div>
                  <div className="bg-blue-50 dark:bg-[#0f172a] p-3 rounded border-l-4 border-blue-400 dark:border-blue-500">
                    <p className="text-sm text-gray-700 dark:text-gray-300"><strong>Remark:</strong> {res.remark}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-darkSurface p-5 rounded-lg shadow-md border-t-4 border-emeraldYellow dark:border-darkBorder transition-colors">
            <h3 className="text-lg font-display uppercase tracking-widest text-gray-800 dark:text-white mb-4">📚 Assignments</h3>
            <ul className="space-y-3">
              {assignments.map(assignment => (
                <li key={assignment.id} className="border-b dark:border-darkBorder pb-2">
                  <p className="font-bold text-sm text-emeraldGreen dark:text-emeraldYellow">{assignment.subject}</p>
                  <p className="text-gray-700 dark:text-gray-300">{assignment.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
