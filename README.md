
# 🧩 Kanban Board – Professional Task Management App

A clean, modern Kanban Board built with **React + Vite**, featuring smooth drag-and-drop, professional UI/UX, and a subtle celebration effect when tasks are completed.

---

## 🚀 Features

- ✅ Create tasks with title & status
- 🔄 Drag and drop tasks between columns
- 📌 Columns: Todo, In Progress, Done
- 🎉 Subtle confetti/glow effect when task moved to **Done**
- 🎨 Professional, minimal UI (no over-animation)
- ⚡ Fast build using Vite
- 📱 Responsive layout

---

## 🛠️ Tech Stack

- **Frontend:** React (Vite)
- **Drag & Drop:** `@dnd-kit`
- **Styling:** Tailwind CSS
- **Effects:** `canvas-confetti`

---

## 📂 Project Structure

src/
├── components/
│   ├── Board.jsx
│   ├── Column.jsx
│   ├── TaskCard.jsx
│   └── TaskForm.jsx
│   └── TaskModal.jsx
├── context/
│   └── TaskContext.jsx
├── App.jsx
├── main.jsx
└── index.css


---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/kanban-board.git

# Move into project folder
cd kanban-board

# Install dependencies
npm install

# Start development server
npm run dev

🎯 How Drag & Drop Works
	•	Tasks can be dragged between columns using @dnd-kit
	•	Drop zones are visually highlighted for clarity
	•	When a task is dropped into Done:
	•	A subtle confetti/glow animation appears
	•	Designed to feel rewarding but professional

⸻

🧠 UX Philosophy
	•	❌ No flashy or childish animations
	•	✅ Subtle feedback for completed actions
	•	✅ Clear visual hierarchy
	•	✅ Recruiter & real-product ready design

⸻

📌 Future Enhancements
	•	🔐 Authentication
	•	☁️ Backend integration (Node.js + MongoDB)
	•	💾 Persistent task storage
	•	♿ Keyboard accessible drag & drop
	•	📊 Analytics for completed tasks

⸻

👨‍💻 Author

Velubharathi
Aspiring Full Stack Developer
Focused on building real-world, production-ready applications.