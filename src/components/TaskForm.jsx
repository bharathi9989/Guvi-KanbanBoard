import { useState } from "react";
import { useTasks } from "../context/TaskContext";

function TaskForm() {
  const { addTask } = useTasks(); // ❌ remove tasks

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({
      id: crypto.randomUUID(),
      title,
      description,
      status,
      priority,
      createdAt: Date.now(),
    });

    setTitle("");
    setDescription("");
    setStatus("todo");
    setPriority("medium");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-400 p-4 rounded-xl mb-8 flex flex-col md:flex-row gap-4"
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className="flex-1 p-3 bg-zinc-700 text-white rounded"
      />

      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="flex-1 p-3 bg-zinc-700 text-white rounded"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="p-3 bg-zinc-700 text-white rounded"
      >
        <option value="todo">To Do</option>
        <option value="inprogress">In Progress</option>
        <option value="done">Done</option>
      </select>

      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="p-3 bg-zinc-700 text-white rounded"
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button className="bg-blue-600 text-white px-6 rounded">Add</button>
    </form>
  );
}

export default TaskForm;
