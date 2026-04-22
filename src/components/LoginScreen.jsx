import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();
  const [showTeacherLogins, setShowTeacherLogins] = useState(false);

  const teacherAccounts =[
    { id: 1, name: "Mr. Bassey", email: "bassey@efa.sch.ng", password: "password123", roles: { isSubjectTeacher: true, isClassTeacher: false, isHOD: false }, assignments: { subjects:["JSS 1 Mathematics"] } },
    { id: 2, name: "Mrs. Okon", email: "okon@efa.sch.ng", password: "password123", roles: { isSubjectTeacher: true, isClassTeacher: true, isHOD: false }, assignments: { subjects: ["JSS 1 English"], className: "JSS 1" } }
  ];

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* HERO / GATEWAY SECTION */}
      <div className="min-h-[85vh] flex flex-col justify-center max-w-6xl mx-auto w-full px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-emeraldGreen dark:text-emeraldYellow tracking-widest text-sm font-bold uppercase mb-4 transition-colors">EmeraldField Schools</p>
            <h1 className="font-display text-5xl md:text-7xl text-gray-900 dark:text-white font-bold uppercase tracking-tight mb-6 transition-colors">
              In Pursuit Of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emeraldGreen to-emeraldYellow">
                Learning & Character
              </span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-md leading-relaxed mb-8 transition-colors">
              Welcome to the digital portal. Please select your designation below to access your secure workspace and academic tools.
            </p>
          </div>

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
                    <div key={teacher.id} className="border border-gray-200 dark:border-darkBorder bg-gray-50 dark:bg-[#0f0f0f] p-4 rounded flex justify-between items-center hover:border-emeraldGreen transition-colors">
                      <div><p className="font-bold text-gray-900 dark:text-white">{teacher.name}</p><p className="text-xs text-gray-500 mt-1 font-mono">{teacher.email}</p></div>
                      <button onClick={() => navigate('/teacher', { state: { user: teacher } })} className="bg-emeraldGreen dark:bg-white text-white dark:text-black px-4 py-2 text-sm uppercase font-bold rounded">Login</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ABOUT THE SCHOOL SECTION */}
      <div className="w-full bg-white dark:bg-darkSurface border-y border-gray-200 dark:border-darkBorder py-20 transition-colors">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-4xl text-gray-900 dark:text-white uppercase mb-6">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10">To be the foremost educational institution in the world, with a clear focus on excellence and moral upbringing of the child.</p>
            
            <h2 className="font-display text-4xl text-gray-900 dark:text-white uppercase mb-6">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">We aim to become flag bearers of excellent education with the right facilities that support learning in a holistic way for both children and parents.</p>
          </div>
          <div className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-darkBorder p-8 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl text-emeraldGreen dark:text-emeraldYellow mb-4">Our School</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-8 leading-relaxed">EmeraldField Schools is a Nursery, Primary and High school offering crèche and special needs services. Children are from the ages of Six months to Sixteen years.</p>
            
            <h3 className="font-bold text-xl text-emeraldGreen dark:text-emeraldYellow mb-4">Our Philosophy</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">Each life affects the other and the other affects the next; therefore, treat others the way you want to be treated. No child is left behind.</p>
          </div>
        </div>
      </div>

      {/* FEATURES / LEARNING OUTCOMES */}
      <div className="w-full py-20 bg-gray-50 dark:bg-darkBase transition-colors">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-emeraldGreen dark:text-emeraldYellow tracking-widest text-sm font-bold uppercase mb-2 text-center">Learning Outcomes</p>
          <h2 className="font-display text-4xl text-gray-900 dark:text-white uppercase mb-12 text-center">Check The Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Critical thinking skills', 'Organization', 'Collaboration & problem solving', 'A keen sense of identity', 'Social & academic excellence', 'Giving back to the community'].map((feature, i) => (
              <div key={i} className="bg-white dark:bg-darkSurface border border-gray-200 dark:border-darkBorder p-6 rounded shadow-sm text-center">
                <h4 className="font-bold text-gray-800 dark:text-gray-200">{feature}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTACT & FOOTER */}
      <footer className="w-full bg-emeraldGreen dark:bg-[#0a0a0a] text-white py-12 border-t dark:border-darkBorder transition-colors">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="font-display text-2xl uppercase tracking-widest mb-6">EmeraldField Schools</h2>
            <p className="text-sm opacity-80 mb-6 italic">"In pursuit of learning and character."</p>
            <p className="text-sm opacity-80 mb-2">Behind First Bank, No.2 Ekorinim Road</p>
            <p className="text-sm opacity-80 mb-2">Off Murtala Mohammed Highway, Calabar</p>
            <p className="text-sm font-bold text-emeraldYellow mt-4">+234 809 909 9414</p>
            <p className="text-sm font-bold text-emeraldYellow">emeraldfieldschools@gmail.com</p>
          </div>
          <div>
             <h3 className="font-bold uppercase tracking-widest mb-6">Contact Us</h3>
             <form className="space-y-4">
               <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-white/10 dark:bg-darkSurface border border-white/20 outline-none text-sm placeholder-gray-300" />
               <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-white/10 dark:bg-darkSurface border border-white/20 outline-none text-sm placeholder-gray-300" />
               <textarea placeholder="Message" rows="3" className="w-full p-2 rounded bg-white/10 dark:bg-darkSurface border border-white/20 outline-none text-sm placeholder-gray-300 resize-none"></textarea>
               <button type="button" className="bg-emeraldYellow text-emeraldGreen px-6 py-2 rounded font-bold uppercase text-sm w-full">Send Message</button>
             </form>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-white/20 text-center text-xs opacity-60">
          © Copyright EmeraldField Schools 2026. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
};

export default LoginScreen;
