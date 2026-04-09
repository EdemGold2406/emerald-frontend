import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();
  const[showTeacherLogins, setShowTeacherLogins] = useState(false);

  // Static Placeholder Accounts for Testing
  const teacherAccounts =[
    {
      id: 1,
      name: "Mr. Bassey",
      email: "bassey@efa.sch.ng",
      password: "password123",
      roles: { isSubjectTeacher: true, isClassTeacher: false, isHOD: false },
      assignments: { subjects:["JSS 1 Mathematics", "JSS 2 Mathematics"] }
    },
    {
      id: 2,
      name: "Mrs. Okon",
      email: "okon@efa.sch.ng",
      password: "password123",
      roles: { isSubjectTeacher: true, isClassTeacher: true, isHOD: false },
      assignments: { subjects: ["JSS 1 English"], className: "JSS 1" }
    },
    {
      id: 3,
      name: "Dr. Uche",
      email: "uche@efa.sch.ng",
      password: "password123",
      roles: { isSubjectTeacher: true, isClassTeacher: false, isHOD: true },
      assignments: { subjects: ["SS 3 Physics"], department: "Sciences" }
    }
  ];

  const handleTeacherLogin = (teacher) => {
    // We pass the teacher object to the dashboard so it knows what to display
    navigate('/teacher', { state: { user: teacher } });
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="w-24 h-24 bg-emeraldYellow rounded-full flex items-center justify-center font-bold text-emeraldGreen text-3xl mb-6 border-4 border-emeraldGreen shadow-lg">EF</div>
      <h2 className="text-3xl font-bold text-emeraldGreen mb-8 text-center">Welcome to Emerald Field</h2>
      
      {!showTeacherLogins ? (
        <div className="flex flex-col space-y-4 w-72">
          <button onClick={() => navigate('/admin')} className="bg-emeraldGreen text-white py-3 rounded font-bold shadow hover:bg-green-700 transition">Login as Admin</button>
          
          <button onClick={() => setShowTeacherLogins(true)} className="bg-emeraldYellow text-emeraldGreen border border-emeraldGreen py-3 rounded font-bold shadow hover:bg-yellow-400 transition">Login as Teacher</button>
          
          <button onClick={() => navigate('/student')} className="bg-gray-800 text-white py-3 rounded font-bold shadow hover:bg-gray-900 transition">Login as Student</button>
        </div>
      ) : (
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-xl border-t-4 border-emeraldYellow">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-emeraldGreen text-xl">Teacher Logins</h3>
            <button onClick={() => setShowTeacherLogins(false)} className="text-red-500 font-bold hover:underline">Cancel</button>
          </div>
          <p className="text-sm text-gray-500 mb-4">Click "Quick Login" to simulate entering the email and password.</p>
          
          <div className="space-y-4">
            {teacherAccounts.map((teacher) => (
              <div key={teacher.id} className="border p-3 rounded bg-gray-50 flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-800">{teacher.name}</p>
                  <p className="text-xs text-gray-500">E: {teacher.email}</p>
                  <p className="text-xs text-gray-500">P: {teacher.password}</p>
                  <div className="flex gap-1 mt-1">
                    {teacher.roles.isSubjectTeacher && <span className="bg-blue-100 text-blue-800 text-[10px] px-1 rounded font-bold">Subject</span>}
                    {teacher.roles.isClassTeacher && <span className="bg-green-100 text-green-800 text-[10px] px-1 rounded font-bold">Class ({teacher.assignments.className})</span>}
                    {teacher.roles.isHOD && <span className="bg-purple-100 text-purple-800 text-[10px] px-1 rounded font-bold">HOD ({teacher.assignments.department})</span>}
                  </div>
                </div>
                <button onClick={() => handleTeacherLogin(teacher)} className="bg-emeraldGreen text-white px-3 py-1 text-sm rounded font-bold hover:bg-green-700">Quick Login</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginScreen;
