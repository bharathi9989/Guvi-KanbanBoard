import { useDraggable } from "@dnd-kit/core";
import { useTasks } from "../context/TaskContext";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ task }) {
  const { deleteTask, setSelectedTask } = useTasks();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
  };

  const priorityStyles = {
    low: "bg-green-600 text-white",
    medium: "bg-yellow-600 text-white",
    high: "bg-pink-600 text-white",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      onClick={() => setSelectedTask(task)}
      className="
  bg-emerald-400 p-4 rounded-lg shadow
  hover:shadow-xl hover:-translate-y-0.5
  active:scale-[0.98]
  transition-all duration-200 ease-out
  cursor-pointer
"
    >
      {/* HEADER */}
      <div className="flex justify-between items-start ">
        <h3 className="text-white font-semibold">{task.title}</h3>

        {/* DRAG HANDLE */}
        <span
          {...listeners}
          {...attributes}
          onClick={(e) => e.stopPropagation()}
          className="cursor-grab text-zinc-400 hover:text-white"
        >
          ⠿
        </span>
      </div>

      <p className="text-zinc-300 text-sm mt-1">{task.description}</p>

      <div className="flex justify-between items-center mt-3">
        <span
          className={`text-xs px-2 py-1 rounded ${
            priorityStyles[task.priority]
          }`}
        >
          {task.priority}
        </span>

        <button
          onClick={(e) => {
            e.stopPropagation(); // 🔥 IMPORTANT
            deleteTask(task.id);
          }}
          className="text-white-400 text-sm bg-red-400 rounded-2xl p-2 hover:bg-red-500 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
