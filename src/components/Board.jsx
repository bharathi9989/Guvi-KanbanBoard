import { DndContext } from "@dnd-kit/core";
import Column from "./Column";
import { useTasks } from "../context/TaskContext";

const COLUMNS = [
  { id: "todo", title: "To Do" },
  { id: "inprogress", title: "In Progress" },
  { id: "done", title: "Done" },
];

export default function Board() {
  const { moveTask } = useTasks();

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    moveTask(active.id, over.id);
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {COLUMNS.map((col) => (
          <Column key={col.id} status={col.id} title={col.title} />
        ))}
      </div>
    </DndContext>
  );
}
