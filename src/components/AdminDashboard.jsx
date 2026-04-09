import React from 'react';

const AdminDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-emeraldGreen">Admin Workspace</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldGreen">
          <h3 className="font-bold text-lg mb-2">Upload Students</h3>
          <input type="file" className="mb-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:bg-emeraldGreen file:text-white" />
          <button className="bg-emeraldGreen text-white px-4 py-2 rounded w-full">Process Excel</button>
        </div>
        <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldYellow">
          <h3 className="font-bold text-lg mb-2">Manage System</h3>
          <button className="bg-emeraldYellow text-emeraldGreen font-bold px-4 py-2 rounded w-full mb-2">Edit Classes & Subjects</button>
          <button className="bg-gray-200 text-gray-800 font-bold px-4 py-2 rounded w-full border border-gray-400">Promote All Students</button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
