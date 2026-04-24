import React, { useState, useEffect } from 'react';
import { SchoolService } from '../../services/SchoolService';

const StudentsModule = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({ first_name: '', surname: '', reg_no: '' });

  useEffect(() => { load(); }, []);

  const load = async () => { 
    setLoading(true);
    const res = await SchoolService.fetchStudents(); 
    setStudents(res || []); 
    setLoading(false);
  };

  // HANDLER: Create new student in DB
  const handleAdd = async () => {
    if (!newStudent.first_name || !newStudent.surname) return alert("Fill in name fields");
    await SchoolService.addIndividualStudent(newStudent);
    setIsModalOpen(false);
    setNewStudent({ first_name: '', surname: '', reg_no: '' }); // Reset form
    load(); // Refresh table
  };

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this student?")) {
      await SchoolService.deleteStudent(id);
      load();
    }
  };

  return (
    <div className="animate-fade-in p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold dark:text-white uppercase tracking-wider">Students Management</h1>
        <button onClick={() => setIsModalOpen(true)} className="bg-emeraldGreen text-white px-4 py-2 rounded text-xs font-bold hover:opacity-80">+ Add Student</button>
      </div>

      <div className="bg-white dark:bg-darkSurface border dark:border-darkBorder rounded shadow-sm overflow-hidden">
        <table className="w-full text-left text-xs uppercase">
          <thead className="bg-gray-100 dark:bg-[#111] text-gray-500">
            <tr><th className="p-4">Reg.No</th><th className="p-4">Name</th><th className="p-4">Email</th><th className="p-4">Actions</th></tr>
          </thead>
          <tbody className="dark:text-gray-300">
            {students.map(s => (
              <tr key={s.id} className="border-b dark:border-darkBorder hover:bg-gray-50 dark:hover:bg-[#1a1a1a]">
                <td className="p-4">{s.reg_no || 'N/A'}</td>
                <td className="p-4 font-bold">{s.first_name} {s.surname}</td>
                <td className="p-4 text-emeraldGreen">{s.email}</td>
                <td className="p-4 flex gap-3">
                  <button className="text-blue-500 hover:text-blue-400 font-bold underline">Edit</button>
                  <button onClick={() => handleDelete(s.id)} className="text-red-500 hover:text-red-400 font-bold underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ADD STUDENT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-darkSurface p-6 rounded shadow-xl w-96 border dark:border-darkBorder">
            <h2 className="font-bold mb-4 dark:text-white uppercase">Add New Student</h2>
            <input placeholder="First Name" onChange={(e) => setNewStudent({...newStudent, first_name: e.target.value})} className="w-full p-2 mb-2 border rounded bg-transparent dark:text-white" />
            <input placeholder="Surname" onChange={(e) => setNewStudent({...newStudent, surname: e.target.value})} className="w-full p-2 mb-2 border rounded bg-transparent dark:text-white" />
            <input placeholder="Reg No" onChange={(e) => setNewStudent({...newStudent, reg_no: e.target.value})} className="w-full p-2 mb-4 border rounded bg-transparent dark:text-white" />
            <div className="flex gap-2">
                <button onClick={() => setIsModalOpen(false)} className="flex-1 bg-gray-200 dark:bg-gray-700 p-2 rounded font-bold">Cancel</button>
                <button onClick={handleAdd} className="flex-1 bg-emeraldGreen text-white p-2 rounded font-bold">Save Student</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsModule;
