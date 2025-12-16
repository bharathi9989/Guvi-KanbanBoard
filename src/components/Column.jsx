import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function Column() {
  const { tasks } = useTasks();

  const filterdTasks = tasks.filter((task) => task.status === status);
  return (
    <div className="bg-zinc-800 rounded-xl p-4 min-h-[500px]">
      <h2 className="text-xl font-bold text-white mb-4 flex justify-between">
        {tasks.title}
        <span className="text-sm bg-zinc-700 px-2 py-1 rounded-full">
          {filterdTasks.length}
        </span>
      </h2>
      <div className="space-y-3">
        {filterdTasks.map((task) => (
          <TaskCard key={task.id} task={tasks} />
        ))}

        {filterdTasks.length === 0 && (
          <p className="text-zinc-500 text-sm italic text-center mt-10">
            No Tasks
          </p>
        )}
      </div>
    </div>
  );
}

export default Column;
