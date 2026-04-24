/**
 * SCHOOL SERVICE LAYER
 * Centralized service for API calls to the Emerald Field Backend.
 * Each module below is clearly labeled so you know exactly where to append new features.
 */

const API_URL = "https://emerald-backend-c260.onrender.com";

export const SchoolService = {

  // ==========================================
  // MODULE 1: STUDENTS MANAGEMENT
  // ==========================================
  fetchStudents: async () => {
    const res = await fetch(`${API_URL}/api/students`);
    return await res.json();
  },
  
  bulkUploadStudents: async (file, classId) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('class_id', classId);
    return await fetch(`${API_URL}/api/students/bulk`, { method: "POST", body: formData }).then(r => r.json());
  },

  addIndividualStudent: async (student) => {
    return await fetch(`${API_URL}/api/students/add-individual`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    }).then(r => r.json());
  },

  deleteStudent: async (id) => {
    return await fetch(`${API_URL}/api/students/delete/${id}`, { method: "DELETE" });
  },

  toggleLock: async (level, locked) => {
    return await fetch(`${API_URL}/api/students/lock`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ level, locked })
    });
  },

  // ==========================================
  // MODULE 2: TEACHERS & STAFF MANAGEMENT
  // ==========================================
  fetchTeachers: async () => {
    const res = await fetch(`${API_URL}/api/teachers`);
    return await res.json();
  },

  assignSubject: async (teacherId, subjectId) => {
    return await fetch(`${API_URL}/api/teachers/assign-subject`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teacherId, subjectId })
    });
  },

  makeClassTeacher: async (teacherId, classId) => {
    return await fetch(`${API_URL}/api/teachers/make-class-teacher`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teacherId, classId })
    });
  }

  // ==========================================
  // MODULE 3: CLASSES (Ready to add below)
  // ==========================================

  // ==========================================
  // MODULE 4: SUBJECTS (Ready to add below)
  // ==========================================
};
