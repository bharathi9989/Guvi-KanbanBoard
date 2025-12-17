import Board from "./components/Board";
import TaskForm from "./components/TaskForm";
import TaskModal from "./components/TaskModal";
import SmokeBackground from "./components/SmokeBackground";

export default function App() {
  return (
    <div className="relative min-h-screen bg-zinc-500 p-8 text-white ">
      <SmokeBackground />

      <h1
        className="
  text-5xl font-bold text-center mb-10
  bg-gradient-to-r from-purple-400 via-pink-500 to-red-500
  bg-[length:200%_200%]
  bg-clip-text text-transparent
  animate-gradient
"
      >
        Kanban Board
      </h1>

      <TaskForm />
      <Board />
      <TaskModal />
    </div>
  );
}
