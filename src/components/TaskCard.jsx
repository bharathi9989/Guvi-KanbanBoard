import { useDraggable } from "@dnd-kit/core";
import { useTasks } from "../context/TaskContext";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-zinc-700 p-4 rounded-lg shadow cursor-grab"
    >
      <h3 className="text-white font-semibold">{task.title}</h3>
      <p className="text-zinc-300 text-sm mt-1">{task.description}</p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-xs bg-zinc-600 px-2 py-1 rounded">
          {task.priority}
        </span>

        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-400 text-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
