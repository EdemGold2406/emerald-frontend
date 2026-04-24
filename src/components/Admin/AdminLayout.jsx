import React, { useState } from 'react';
import StudentsModule from './StudentsModule';
import TeachersModule from './TeachersModule';

const AdminLayout = () => {
  const [activeModule, setActiveModule] = useState('students');

  const modules = {
    students: <StudentsModule />,
    teachers: <TeachersModule />
    // We add classes, subjects, broadsheets here later
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-darkBase transition-colors">
      <div className="w-64 bg-white dark:bg-darkSurface border-r dark:border-darkBorder p-6 shadow-sm">
        <h2 className="text-emeraldGreen font-bold mb-8 uppercase text-sm tracking-widest">Admin Gateway</h2>
        <nav className="space-y-4">
          {['students', 'teachers', 'classes', 'subjects'].map(m => (
            <button key={m} onClick={() => setActiveModule(m)} className={`block w-full text-left font-bold uppercase text-[11px] ${activeModule === m ? 'text-emeraldGreen' : 'text-gray-400 dark:text-gray-600'}`}>
              {m}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex-1 p-8">{modules[activeModule]}</div>
    </div>
  );
};

export default AdminLayout;
