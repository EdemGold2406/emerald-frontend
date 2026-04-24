import React, { useState, useEffect } from 'react';
import { SchoolService } from '../../services/SchoolService';

const StudentsModule = () => {
  const [data, setData] = useState([]);
  const [file, setFile] = useState(null);

  useEffect(() => { load(); }, []);
  const load = async () => { const res = await SchoolService.fetchStudents(); setData(res); };

  const handleBulkUpload = async () => {
    if (!file) return alert("Select a file!");
    await SchoolService.bulkUploadStudents(file, 1);
    load();
  };

  return (
    <div className="animate-fade-in">
      <h1 className="text-xl font-bold mb-6 dark:text-white uppercase tracking-wider">Students Management</h1>
      <div className="bg-white dark:bg-darkSurface p-6 border dark:border-darkBorder rounded shadow-sm mb-6">
        <input type="file" onChange={(e) => setFile(e.target.files[0])} className="text-xs dark:text-white mb-4" />
        <button onClick={handleBulkUpload} className="bg-emeraldGreen text-white px-4 py-2 rounded text-xs font-bold">UPLOAD BATCH</button>
      </div>
      <table className="w-full bg-white dark:bg-darkSurface border dark:border-darkBorder text-left text-xs uppercase dark:text-gray-300">
         <thead><tr className="border-b dark:border-darkBorder"><th className="p-4">Name</th><th className="p-4">Email</th></tr></thead>
         <tbody>
            {data.map(s => (
                <tr key={s.id} className="border-b dark:border-darkBorder">
                    <td className="p-4 font-bold">{s.first_name} {s.surname}</td>
                    <td className="p-4">{s.email}</td>
                </tr>
            ))}
         </tbody>
      </table>
    </div>
  );
};

export default StudentsModule;
