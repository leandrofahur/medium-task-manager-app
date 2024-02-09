// custom components:
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import TaskDialog from "./components/TaskDialog/TaskDialog";

// hooks:
import useTasksHook from "./hooks/useTasksHook";

import "./App.scss";

function App() {
  const { handleOnAdd, handleOnRemoveAll } = useTasksHook();

  return (
    <div>
      <Header handleOnRemoveAll={handleOnRemoveAll} handleOnAdd={handleOnAdd} />
      <main>
        <TaskList />
        <TaskDialog />
      </main>
    </div>
  );
}

export default App;
