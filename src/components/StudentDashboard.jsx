import React, { useState } from 'react';

const StudentDashboard = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [expandedSubject, setExpandedSubject] = useState(null);

  const student = { name: "Alice Asuquo", studentClass: "JSS 1", fees: "₦150,000", resumption: "May 10, 2026", theme: "Pursuit of Learning and Character", termRemark: "Alice has shown outstanding character and great improvement this term. Keep it up!" };
  const assignments =[
    { id: 1, subject: "Mathematics", title: "Algebra Worksheet 2", dueDate: "April 15, 2026" },
    { id: 2, subject: "English", title: "Essay: The Term Theme", dueDate: "April 18, 2026" }
  ];
  const results =[
    { id: 1, subject: "Mathematics", cat1: 18, cat2: 15, misc: 8, exam: 45, total: 86, grade: "A", remark: "Excellent calculation skills." },
    { id: 2, subject: "English Language", cat1: 14, cat2: 16, misc: 7, exam: 40, total: 77, grade: "B", remark: "Good effort, but improve on comprehension." }
  ];

  const toggleSubject = (id) => {
    setExpandedSubject(expandedSubject === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-2xl border-4 border-emeraldGreen relative">
            <h3 className="text-2xl font-bold text-emeraldGreen mb-4">Notice: Next Term Info</h3>
            <p className="text-gray-700 mb-2"><strong>Theme:</strong> {student.theme}</p>
            <p className="text-gray-700 mb-2"><strong>Resumes:</strong> {student.resumption}</p>
            <p className="text-gray-700 mb-6 text-xl"><strong>School Fees:</strong> {student.fees}</p>
            <button onClick={() => setShowPopup(false)} className="bg-emeraldYellow text-emeraldGreen border-2 border-emeraldGreen w-full py-3 rounded font-bold text-lg hover:bg-yellow-400">View My Results</button>
          </div>
        </div>
      )}

      <div className="bg-emeraldGreen text-white p-6 rounded-lg shadow-md mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">{student.name}</h2>
          <p className="text-emeraldYellow font-bold text-lg">Class: {student.studentClass}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-bold text-emeraldGreen border-b-2 border-emeraldYellow pb-2">My Subjects & Results</h3>
          {results.map((res) => (
            <div key={res.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <button onClick={() => toggleSubject(res.id)} className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 transition focus:outline-none">
                <span className="font-bold text-gray-800 text-lg">{res.subject}</span>
                <div className="flex items-center space-x-4">
                  <span className="font-bold text-emeraldGreen text-lg">{res.total}%</span>
                  <span className={`font-bold w-8 text-center rounded ${res.grade === 'A' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>{res.grade}</span>
                  <span className="text-gray-400 text-sm">{expandedSubject === res.id ? '▲' : '▼'}</span>
                </div>
              </button>
              {expandedSubject === res.id && (
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="grid grid-cols-4 gap-4 text-center mb-4">
                    <div className="bg-gray-100 p-2 rounded"><p className="text-xs text-gray-500 font-bold uppercase">CAT 1</p><p className="font-bold">{res.cat1}</p></div>
                    <div className="bg-gray-100 p-2 rounded"><p className="text-xs text-gray-500 font-bold uppercase">CAT 2</p><p className="font-bold">{res.cat2}</p></div>
                    <div className="bg-gray-100 p-2 rounded"><p className="text-xs text-gray-500 font-bold uppercase">Misc</p><p className="font-bold">{res.misc}</p></div>
                    <div className="bg-emeraldGreen text-white p-2 rounded shadow-inner"><p className="text-xs font-bold uppercase">Exam</p><p className="font-bold">{res.exam}</p></div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-400"><p className="text-sm text-gray-700"><strong>Teacher's Remark:</strong> {res.remark}</p></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-emeraldYellow">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center"><span className="mr-2">📚</span> Class Assignments</h3>
            <ul className="space-y-3">
              {assignments.map(assignment => (
                <li key={assignment.id} className="border-b pb-2 last:border-0 last:pb-0">
                  <p className="font-bold text-sm text-emeraldGreen">{assignment.subject}</p>
                  <p className="text-gray-700">{assignment.title}</p>
                  <p className="text-xs text-red-500 font-bold mt-1">Due: {assignment.dueDate}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md border-t-4 border-emeraldGreen">
             <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center"><span className="mr-2">📝</span> Class Teacher's Report</h3>
            <p className="text-gray-700 text-sm italic">"{student.termRemark}"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
