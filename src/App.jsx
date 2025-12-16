import React from "react";
import { useTasks } from "./context/TaskContext";

function App() {
  const { tasks } = useTasks();
  console.log(tasks);
  return (
    <div>
      <h1>Kanban-Board</h1>
      {tasks.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
    </div>
  );
}
export default App;
