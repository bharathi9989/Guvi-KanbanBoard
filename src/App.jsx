import Board from "./components/Board";
import TaskForm from "./components/TaskForm";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-800 p-8">
      <h1 className="text-5xl font-bold text-center text-white mb-10">
        Kanban Board
      </h1>
      <TaskForm />
      <Board />
    </div>
  );
}