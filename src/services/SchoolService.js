const API_URL = "https://emerald-backend-c260.onrender.com";

export const SchoolService = {
  // Students
  fetchStudents: async () => {
    const res = await fetch(`${API_URL}/api/students`);
    return await res.json();
  },
  toggleLock: async (level, locked) => {
    await fetch(`${API_URL}/api/students/lock`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ level, locked })
    });
  },

  // Teachers
  fetchTeachers: async () => {
    const res = await fetch(`${API_URL}/api/teachers`);
    return await res.json();
  },
  assignSubject: async (teacherId, subjectId) => {
    await fetch(`${API_URL}/api/teachers/assign-subject`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teacherId, subjectId })
    });
  },
  makeClassTeacher: async (teacherId, classId) => {
    await fetch(`${API_URL}/api/teachers/make-class-teacher`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ teacherId, classId })
    });
  }
};
