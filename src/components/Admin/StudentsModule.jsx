import React, { useState, useEffect } from 'react';
import { SchoolService } from '../../services/SchoolService';

const StudentsModule = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({ first_name: '', surname: '', reg_no: '' });

  useEffect(() => { load(); }, []);

  const load = async () => { 
    const res = await SchoolService.fetchStudents(); 
    setStudents(res); 
  };

  const handleAdd = async () => {
    await SchoolService.addStudent(newStudent);
    setIsModalOpen(false);
    load(); // Refresh table
  };

  const handleDelete = async (id) => {
    if(confirm("Confirm delete?")) {
        await SchoolService.deleteStudent(id);
        load();
    }
  };

  return (
    <div className="animate-fade-in p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-xl font-bold dark:text-white uppercase">Students Management</h1>
        <button onClick={() => setIsModalOpen(true)} className="bg-emeraldGreen text-white px-4 py-2 rounded text-xs font-bold">+ Add Student</button>
      </div>

      {/* Table */}
      <table className="w-full bg-white dark:bg-darkSurface border dark:border-darkBorder text-left text-xs uppercase dark:text-gray-300">
         <thead><tr className="border-b dark:border-darkBorder"><th className="p-4">Name</th><th className="p-4">Reg No</th><th className="p-4">Actions</th></tr></thead>
         <tbody>
            {students.map(s => (
                <tr key={s.id} className="border-b dark:border-darkBorder">
                    <td className="p-4 font-bold">{s.first_name} {s.surname}</td>
                    <td className="p-4">{s.reg_no}</td>
                    <td className="p-4"><button onClick={() => handleDelete(s.id)} className="text-red-500 font-bold underline">Delete</button></td>
                </tr>
            ))}
         </tbody>
      </table>

      {/* Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white dark:bg-darkSurface p-6 rounded w-80 shadow-xl">
                <h2 className="font-bold mb-4 dark:text-white">Add Student</h2>
                <input placeholder="First Name" onChange={(e) => setNewStudent({...newStudent, first_name: e.target.value})} className="w-full p-2 mb-2 border rounded" />
                <input placeholder="Surname" onChange={(e) => setNewStudent({...newStudent, surname: e.target.value})} className="w-full p-2 mb-2 border rounded" />
                <input placeholder="Reg No" onChange={(e) => setNewStudent({...newStudent, reg_no: e.target.value})} className="w-full p-2 mb-4 border rounded" />
                <button onClick={handleAdd} className="w-full bg-emeraldGreen text-white p-2 rounded font-bold">Save Student</button>
            </div>
        </div>
      )}
    </div>
  );
};

export default StudentsModule;
