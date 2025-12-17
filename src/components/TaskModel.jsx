import { useState, useEffect } from "react";
import { useTasks } from "../context/TaskContext";

function TaskModal() {
  const { selectedTask, setSelectedTask, updateTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("todo");
  const [priority, setPriority] = useState("medium");

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setStatus(selectedTask.status);
      setPriority(selectedTask.priority);
    }
  }, [selectedTask]);

  if (!selectedTask) return null;

  const handleSave = () => {
    updateTask(selectedTask.id, {
      title,
      description,
      status,
      priority,
    });
    setSelectedTask(null);
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-zinc-800 w-full max-w-lg rounded-xl p-6">
        <h2 className="text-xl text-white font-bold mb-4">Edit Task</h2>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 mb-3 bg-zinc-700 text-white rounded"
          placeholder="Title"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full p-3 mb-3 bg-zinc-700 text-white rounded"
          placeholder="Description"
        />

        <div className="flex gap-3 mb-4">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="flex-1 p-3 bg-zinc-700 text-white rounded"
          >
            <option value="todo">To Do</option>
            <option value="inprogress">In Progress</option>
            <option value="done">Done</option>
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="flex-1 p-3 bg-zinc-700 text-white rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={() => setSelectedTask(null)}
            className="px-4 py-2 text-white"
          >
            Cancel
          </button>

          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskModal;
