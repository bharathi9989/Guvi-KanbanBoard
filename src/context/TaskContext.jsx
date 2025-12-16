import { createContext, useContext, useEffect, useState } from "react";
import { initialTasks } from "../data/InitialTask";

const TaskContext = createContext(null);

// custom hook

export const useTasks = () => useContext(TaskContext);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem("kanban-tasks");
    return stored ? JSON.parse(stored) : initialTasks;
  });

  // Persist to localStorage

  useEffect(() => {
    localStorage.setItem("kanban-tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Persist to localStorage

  const addTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  const updateTask = (id, updatedField) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, ...updatedField } : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const moveTask = (id, newStatus) => {
    updateTask(id, { status: newStatus });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, deleteTask, moveTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}
