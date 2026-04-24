const API_URL = "https://emerald-backend-c260.onrender.com";

export const SchoolService = {
  // --- STUDENTS MODULE ---
  fetchStudents: async () => {
    const res = await fetch(`${API_URL}/api/students`);
    return await res.json();
  },
  
  addStudent: async (studentData) => {
    const res = await fetch(`${API_URL}/api/students/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData)
    });
    return await res.json();
  },

  deleteStudent: async (id) => {
    const res = await fetch(`${API_URL}/api/students/${id}`, { method: "DELETE" });
    return await res.json();
  },
  
  // --- TEACHERS MODULE ---
  fetchTeachers: async () => {
    const res = await fetch(`${API_URL}/api/teachers`);
    return await res.json();
  }
};
