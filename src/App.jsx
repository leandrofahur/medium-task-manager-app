// custom components:
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";
import TaskDialog from "./components/TaskDialog/TaskDialog";

// third-party libraries:
import { useSelector, useDispatch } from "react-redux";

// state:
import {
  selectTasks,
  selectEditingTask,
  setTask,
  setEditingTask,
} from "./state/taskSlice";

// Utils:
import { idGenerator } from "./utils/taskUtils";

import "./App.scss";

function App() {
  // redux state management:
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const editingTask = useSelector(selectEditingTask);

  function handleOnAdd() {
    dispatch(
      setEditingTask({
        id: idGenerator(),
        title: "",
        description: "",
        status: "IN_PROGRESS",
        isEditing: true,
        isNew: true,
      })
    );
  }

  function handleOnRemoveAll() {
    dispatch(setTask([]));
  }

  return (
    <div>
      <Header handleOnRemoveAll={handleOnRemoveAll} handleOnAdd={handleOnAdd} />
      <main>
        <TaskList tasks={tasks} />
        <TaskDialog editingTask={editingTask} />
      </main>
    </div>
  );
}

export default App;
