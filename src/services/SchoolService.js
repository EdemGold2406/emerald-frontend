const API_URL = "https://emerald-backend-c260.onrender.com";
import { jsPDF } from "jspdf";

export const SchoolService = {
  downloadCredentials: (student) => {
    const doc = new jsPDF();
    doc.text("Emerald Field School - Student Credentials", 20, 20);
    doc.text(`Name: ${student.first_name} ${student.surname}`, 20, 40);
    doc.text(`Username (Email): ${student.email}`, 20, 50);
    doc.text(`Password: ${student.password}`, 20, 60);
    doc.save(`${student.first_name}_credentials.pdf`);
  }
};

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
