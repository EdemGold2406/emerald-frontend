import React, { useState, useEffect } from 'react';
import { SchoolService } from '../../services/SchoolService';

const TeachersModule = () => {
  const [data, setData] = useState([]);

  useEffect(() => { load(); }, []);
  const load = async () => { const res = await SchoolService.fetchTeachers(); setData(res); };

  return (
    <div className="animate-fade-in">
      <h1 className="text-xl font-bold mb-6 dark:text-white uppercase tracking-wider">Teachers Management</h1>
      <table className="w-full bg-white dark:bg-darkSurface border dark:border-darkBorder text-left text-xs uppercase dark:text-gray-300">
         <thead><tr className="border-b dark:border-darkBorder"><th className="p-4">Name</th><th className="p-4">Actions</th></tr></thead>
         <tbody>
            {data.map(t => (
                <tr key={t.id} className="border-b dark:border-darkBorder">
                    <td className="p-4 font-bold">{t.first_name} {t.surname}</td>
                    <td className="p-4">
                        <button className="text-blue-500 font-bold underline mr-4">Edit</button>
                        <button className="text-red-500 font-bold underline">Delete</button>
                    </td>
                </tr>
            ))}
         </tbody>
      </table>
    </div>
  );
};

export default TeachersModule;
