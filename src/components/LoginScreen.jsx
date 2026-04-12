import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();
  const[showTeacherLogins, setShowTeacherLogins] = useState(false);

  const teacherAccounts =[
    { id: 1, name: "Mr. Bassey", email: "bassey@efa.sch.ng", password: "password123", roles: { isSubjectTeacher: true, isClassTeacher: false, isHOD: false }, assignments: { subjects:["JSS 1 Mathematics"] } },
    { id: 2, name: "Mrs. Okon", email: "okon@efa.sch.ng", password: "password123", roles: { isSubjectTeacher: true, isClassTeacher: true, isHOD: false }, assignments: { subjects: ["JSS 1 English"], className: "JSS 1" } },
    { id: 3, name: "Dr. Uche", email: "uche@efa.sch.ng", password: "password123", roles: { isSubjectTeacher: true, isClassTeacher: false, isHOD: true }, assignments: { subjects:["SS 3 Physics"], department: "Sciences" } }
  ];

  return (
    <div className="min-h-[85vh] flex flex-col justify-center max-w-6xl mx-auto w-full px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: School Content */}
        <div>
          <p className="text-emeraldGreen dark:text-emeraldYellow tracking-widest text-sm font-bold uppercase mb-4 transition-colors">EmeraldField Schools</p>
          <h1 className="font-display text-5xl md:text-7xl text-gray-900 dark:text-white font-bold leading- uppercase tracking-tight mb-6 transition-colors">
            In Pursuit Of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emeraldGreen to-emeraldYellow">
              Learning & Character
            </span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md leading-relaxed mb-8 transition-colors">
            To be the foremost educational institution in the world, with a clear focus on excellence and moral upbringing of the child.
          </p>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full border-2 border-emeraldGreen dark:border-darkBorder flex items-center justify-center bg-white dark:bg-darkSurface shadow-xl transition-colors">
              <span className="font-display text-2xl text-emeraldGreen dark:text-emeraldYellow">EF</span>
            </div>
            <span className="text-sm text-gray-500 font-medium uppercase tracking-widest">Est. 2025</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Gateways */}
        <div>
          {!showTeacherLogins ? (
            <div className="space-y-4">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Select Gateway</p>
              
              <button onClick={() => navigate('/admin')} className="w-full group relative flex items-center justify-between p-6 bg-white dark:bg-darkSurface border border-gray-200 dark:border-darkBorder hover:border-emeraldGreen dark:hover:border-emeraldGreen shadow-sm hover:shadow-md transition-all duration-300 rounded">
                <span className="font-display text-2xl text-gray-900 dark:text-white uppercase tracking-wide group-hover:text-emeraldGreen transition-colors">Admin Gateway</span>
                <span className="text-emeraldGreen opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">→</span>
              </button>

              <button onClick={() => setShowTeacherLogins(true)} className="w-full group relative flex items-center justify-between p-6 bg-white dark:bg-darkSurface border border-gray-200 dark:border-darkBorder hover:border-emeraldYellow dark:hover:border-emeraldYellow shadow-sm hover:shadow-md transition-all duration-300 rounded">
                <span className="font-display text-2xl text-gray-900 dark:text-white uppercase tracking-wide group-hover:text-emeraldYellow transition-colors">Faculty / Staff</span>
                <span className="text-emeraldYellow opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">→</span>
              </button>

              <button onClick={() => navigate('/student')} className="w-full group relative flex items-center justify-between p-6 bg-white dark:bg-darkSurface border border-gray-200 dark:border-darkBorder hover:border-gray-900 dark:hover:border-white shadow-sm hover:shadow-md transition-all duration-300 rounded">
                <span className="font-display text-2xl text-gray-900 dark:text-white uppercase tracking-wide">Student / Parent</span>
                <span className="text-gray-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">→</span>
              </button>
            </div>
          ) : (
            <div className="bg-white dark:bg-darkSurface border border-gray-200 dark:border-darkBorder p-8 rounded relative shadow-lg transition-colors">
              <button onClick={() => setShowTeacherLogins(false)} className="absolute top-6 right-6 text-xs text-gray-500 hover:text-emeraldGreen dark:hover:text-white uppercase tracking-widest transition-colors">← Go Back</button>
              
              <p className="text-emeraldGreen dark:text-emeraldYellow tracking-widest text-xs font-bold uppercase mb-2">Simulation</p>
              <h3 className="font-display text-3xl text-gray-900 dark:text-white uppercase mb-8">Faculty Login</h3>
              
              <div className="space-y-4">
                {teacherAccounts.map((teacher) => (
                  <div key={teacher.id} className="border border-gray-200 dark:border-darkBorder bg-gray-50 dark:bg-[#0f0f0f] p-4 rounded flex justify-between items-center hover:border-emeraldGreen dark:hover:border-emeraldGreen transition-colors">
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white">{teacher.name}</p>
                      <p className="text-xs text-gray-500 mt-1 font-mono">{teacher.email}</p>
                    </div>
                    <button onClick={() => navigate('/teacher', { state: { user: teacher } })} className="bg-emeraldGreen dark:bg-white text-white dark:text-black px-4 py-2 text-sm uppercase tracking-wide font-bold hover:opacity-80 transition-opacity rounded">
                      Login
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
