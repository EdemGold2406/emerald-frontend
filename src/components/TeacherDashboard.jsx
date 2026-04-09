import React from 'react';

const TeacherDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-emeraldGreen">Teacher Portal</h2>
      <div className="bg-white p-6 rounded shadow border-t-4 border-emeraldGreen max-w-3xl">
        <h3 className="font-bold text-lg mb-4">Upload Results (JSS 1 - Mathematics)</h3>
        <div className="grid grid-cols-5 gap-4 font-bold text-sm bg-gray-100 p-2 rounded mb-2">
          <div className="col-span-2">Student Name</div>
          <div>CAT 1 (20)</div>
          <div>CAT 2 (20)</div>
          <div>Misc (10)</div>
        </div>
        <div className="grid grid-cols-5 gap-4 mb-4 items-center">
          <div className="col-span-2 text-gray-700">Alice Asuquo</div>
          <input type="number" placeholder="0" className="border p-2 rounded w-full" max="20" />
          <input type="number" placeholder="0" className="border p-2 rounded w-full" max="20" />
          <input type="number" placeholder="0" className="border p-2 rounded w-full" max="10" />
        </div>
        <button className="bg-emeraldGreen text-white px-6 py-2 rounded">Save Results</button>
      </div>
    </div>
  );
};

export default TeacherDashboard;
