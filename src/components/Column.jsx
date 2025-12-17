import { useDroppable } from "@dnd-kit/core";
import { useTasks } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function Column({ status, title }) {
  const { tasks } = useTasks();
  const { setNodeRef } = useDroppable({ id: status });

  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div ref={setNodeRef} className="bg-zinc-800 rounded-xl p-4 min-h-[500px]">
      <h2 className="text-xl font-bold text-white mb-4 flex justify-between">
        {title}
        <span className="text-sm bg-zinc-700 px-2 py-1 rounded-full">
          {filteredTasks.length}
        </span>
      </h2>

      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default Column;
