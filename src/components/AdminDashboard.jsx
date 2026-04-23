import React, { useState, useEffect } from 'react';
import { SchoolService } from '../services/SchoolService';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('teachers');
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load real data on mount
  useEffect(() => {
    loadData();
  }, [activeTab]);

  const loadData = async () => {
    setLoading(true);
    if (activeTab === 'teachers') {
      const data = await SchoolService.fetchTeachers();
      setTeachers(data);
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-darkBase transition-colors">
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-darkSurface border-r dark:border-darkBorder p-6 shadow-sm">
        <h2 className="text-emeraldGreen font-bold mb-8 uppercase text-sm">Admin Gateway</h2>
        <nav className="space-y-4">
          {['students', 'teachers', 'classes', 'subjects'].map(m => (
            <button key={m} onClick={() => setActiveTab(m)} className={`block w-full text-left font-bold uppercase text-[11px] ${activeTab === m ? 'text-emeraldGreen' : 'text-gray-400'}`}>
              {m}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-xl font-bold mb-6 dark:text-white uppercase tracking-wider">{activeTab} Management</h1>
        
        {loading ? <p className="dark:text-white">Loading...</p> : (
          <div className="bg-white dark:bg-darkSurface border dark:border-darkBorder rounded shadow-sm overflow-hidden">
            <table className="w-full text-left text-xs uppercase">
              <thead className="bg-gray-100 dark:bg-[#111] text-gray-500 dark:text-gray-300">
                <tr><th className="p-4">Name</th><th className="p-4">Email</th><th className="p-4">Actions</th></tr>
              </thead>
              <tbody className="dark:text-gray-300">
                {teachers.map(t => (
                  <tr key={t.id} className="border-b dark:border-darkBorder">
                    <td className="p-4 font-bold">{t.name}</td>
                    <td className="p-4 text-emeraldGreen">{t.email}</td>
                    <td className="p-4 flex gap-2">
                      <button onClick={() => SchoolService.assignSubject(t.id, 1)} className="bg-emeraldGreen text-white px-2 py-1 rounded text-[10px] hover:opacity-80">Assign Subjects</button>
                      <button onClick={() => SchoolService.makeClassTeacher(t.id,
