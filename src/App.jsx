import "./App.css";
import TaskManager from "./components/TaskManager";

const tasks = [
  {
    id: 1,
    name: "Task 1",
    description: "Description 1",
    status: "TODO",
  },
  {
    id: 2,
    name: "Task 2",
    description: "Description 2",
    status: "IN_PROGRESS",
  },
  {
    id: 3,
    name: "Task 3",
    description: "Description 3",
    status: "DONE",
  },
];

function App() {
  return (
    <div className="App">
      <TaskManager tasks={tasks} />
    </div>
  );
}

export default App;
