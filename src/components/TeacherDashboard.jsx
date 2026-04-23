import React, { useState } from 'react';

const TeacherDashboard = () => {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first!");
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch("https://emerald-backend-c260.onrender.com/api/upload-results", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      alert(data.message || data.error);
    } catch (err) { alert("Upload failed."); }
  };

  return (
    <div className="p-8 bg-white dark:bg-darkSurface rounded-lg border dark:border-darkBorder">
      <h2 className="text-2xl font-bold mb-4 text-emeraldGreen">Upload Class Results</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} className="mb-4" />
      <button onClick={handleUpload} className="bg-emeraldGreen text-white px-4 py-2 rounded font-bold hover:opacity-80">
        Upload Excel Sheet
      </button>
    </div>
  );
};

export default TeacherDashboard;
