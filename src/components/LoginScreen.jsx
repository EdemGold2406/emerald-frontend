import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [showTeacherLogins, setShowTeacherLogins] = useState(false);

  // Static Placeholder Accounts for Testing
  const teacherAccounts =[
    { id: 1, name: "Mr. Bassey", email: "bassey@efa.sch.ng", password: "password123", roles: { isSubjectTeacher: true, isClassTeacher: false, isHOD: false }, assignments: { subjects:["JSS 1 Mathematics"] } },
    { id: 2, name: "Mrs. Okon", email: "okon@efa.sch.ng", password: "password123", roles: { isSubjectTeacher: true, isClassTeacher: true, isHOD: false }, assignments: { subjects: ["JSS 1 English"], className: "JSS 1" } },
    { id: 3, name: "Dr. Uche", email: "uche@efa.sch.ng", password: "password123", roles: { isSubjectTeacher: true, isClassTeacher: false, isHOD: true }, assignments: { subjects:["SS 3 Physics"], department: "Sciences" } }
  ];

  const handleTeacherLogin = (teacher) => {
    navigate('/teacher', { state: { user: teacher } });
  };

  return (
    <div className="min-h-[85vh] flex flex-col justify-center max-w-6xl mx-auto w-full px-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT COLUMN: Bold Typography (Like B&O Studios) */}
        <div>
          <p className="text-emeraldYellow tracking-widest text-sm font-bold uppercase mb-4">Emerald Field Portal</p>
          <h1 className="font-display text-6xl md:text-8xl text-white font-bold leading-[0.9] uppercase tracking-tight mb-8">
            Pursuit Of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emeraldGreen to-emeraldYellow">
              Learning
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-md leading-relaxed mb-8">
            Welcome to the elite digital campus. Please select your designation below to access your secure workspace and academic tools.
          </p>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 rounded-full border border-darkBorder flex items-center justify-center bg-darkSurface shadow-xl">
              <span className="font-display text-2xl text-emeraldYellow">EF</span>
            </div>
            <span className="text-sm text-gray-500 font-medium uppercase tracking-widest">Est. 2025</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Sleek Login Cards (Like the Pricing Tiers) */}
        <div>
          {!showTeacherLogins ? (
            <div className="space-y-4">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Select Gateway</p>
              
              <button onClick={() => navigate('/admin')} className="w-full group relative flex items-center justify-between p-6 bg-darkSurface border border-darkBorder hover:border-emeraldGreen transition-all duration-300 rounded">
                <span className="font-display text-2xl text-white uppercase tracking-wide group-hover:text-emeraldGreen transition-colors">Admin Gateway</span>
                <span className="text-emeraldGreen opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">→</span>
              </button>

              <button onClick={() => setShowTeacherLogins(true)} className="w-full group relative flex items-center justify-between p-6 bg-darkSurface border border-darkBorder hover:border-emeraldYellow transition-all duration-300 rounded">
                <span className="font-display text-2xl text-white uppercase tracking-wide group-hover:text-emeraldYellow transition-colors">Faculty / Staff</span>
                <span className="text-emeraldYellow opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">→</span>
              </button>

              <button onClick={() => navigate('/student')} className="w-full group relative flex items-center justify-between p-6 bg-darkSurface border border-darkBorder hover:border-white transition-all duration-300 rounded">
                <span className="font-display text-2xl text-white uppercase tracking-wide">Student / Parent</span>
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-[-10px] group-hover:translate-x-0 duration-300">→</span>
              </button>
            </div>
          ) : (
            <div className="bg-darkSurface border border-darkBorder p-8 rounded relative">
              <button onClick={() => setShowTeacherLogins(false)} className="absolute top-6 right-6 text-xs text-gray-500 hover:text-white uppercase tracking-widest transition-colors">← Go Back</button>
              
              <p className="text-emeraldYellow tracking-widest text-xs font-bold uppercase mb-2">Simulation</p>
              <h3 className="font-display text-3xl text-white uppercase mb-8">Faculty Login</h3>
              
              <div className="space-y-4">
                {teacherAccounts.map((teacher) => (
                  <div key={teacher.id} className="border border-darkBorder bg-[#0f0f0f] p-4 rounded flex justify-between items-center hover:border-gray-600 transition-colors">
                    <div>
                      <p className="font-bold text-white">{teacher.name}</p>
                      <p className="text-xs text-gray-500 mt-1 font-mono">{teacher.email}</p>
                    </div>
                    <button onClick={() => handleTeacherLogin(teacher)} className="bg-white text-black px-4 py-2 text-sm uppercase tracking-wide font-bold hover:bg-emeraldYellow transition-colors rounded">
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
