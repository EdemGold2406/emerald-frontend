export const SchoolService = {
  fetchStudents: async () => {
    const res = await fetch("https://emerald-backend-c260.onrender.com/api/students");
    return await res.json();
  },
  
  toggleLock: async (level, locked) => {
    await fetch("https://emerald-backend-c260.onrender.com/api/students/lock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ level, locked })
    });
  }
};
