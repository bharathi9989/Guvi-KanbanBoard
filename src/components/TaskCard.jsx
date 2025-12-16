import React from "react";
import { useTasks } from "../context/TaskContext";

function TaskCard() {
  const { deleteTask } = useTasks();
  return (
    <div className="bg-zinc-700 p-4 rounded-lg shadow hover:shadow-lg trasition">
      <h1 className="text-white font-semibold">{task.title}</h1>
      <p className="text-zinc-300 text-sm mt-1 line-clamp-2">
        {task.description}
      </p>
      <div className="">
        <span>{task.priority}</span>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default TaskCard;
