import React, { useState, useEffect } from 'react';
import { SchoolService } from '../../services/SchoolService';

const StudentsModule = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { load(); }, []);

  const load = async () => { 
    setLoading(true);
    const res = await SchoolService.fetchStudents(); 
    setStudents(res || []); 
    setLoading(false);
  };

  // DELETE HANDLER: Uses SchoolService -> Backend -> Supabase
  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this student?")) {
      await SchoolService.deleteStudent(id);
      load(); // Refresh table
    }
  };

  // EDIT HANDLER: Will trigger a modal
  const handleEdit = (student) => {
    alert(`Edit functionality for ${student.first_name} coming next!`);
    // Here we will eventually open a modal populated with student data
  };

  return (
    <div className="animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold dark:text-white uppercase tracking-wider">Students Management</h1>
        <button className="bg-emeraldGreen text-white px-4 py-2 rounded text-xs font-bold hover:opacity-80">+ Add Student</button>
      </div>

      <div className="bg-white dark:bg-darkSurface border dark:border-darkBorder rounded shadow-sm overflow-hidden">
        <table className="w-full text-left text-xs uppercase">
          <thead className="bg-gray-100 dark:bg-[#111] text-gray-500">
            <tr>
              <th className="p-4">Reg.No</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody className="dark:text-gray-300">
            {students.map(s => (
              <tr key={s.id} className="border-b dark:border-darkBorder hover:bg-gray-50 dark:hover:bg-[#1a1a1a]">
                <td className="p-4">{s.reg_no || 'N/A'}</td>
                <td className="p-4 font-bold">{s.first_name} {s.surname}</td>
                <td className="p-4">{s.email}</td>
                <td className="p-4 flex gap-3">
                  <button onClick={() => handleEdit(s)} className="text-blue-500 hover:text-blue-400 font-bold underline">Edit</button>
                  <button onClick={() => handleDelete(s.id)} className="text-red-500 hover:text-red-400 font-bold underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsModule;
