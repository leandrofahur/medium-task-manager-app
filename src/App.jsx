import { useState } from "react";

// Custom components:
import Header from "./components/Header/Header";
import TaskList from "./components/TaskList/TaskList";

// Utils:
import { idGenerator } from "./utils/taskUtils";

import "./App.scss";
import TaskDialog from "./components/TaskDialog/TaskDialog";

// Data Structure:
// const TODO = [
//   {
//     id: number,
//     title: string,
//     description: string,
//     status: string,
//   },
// ]

const TODO = [
  {
    id: idGenerator(),
    title: "Task 1",
    description: "Description 1",
    status: "DONE",
    isEditing: false,
    isNew: false,
  },
  {
    id: idGenerator(),
    title: "Task 2",
    description: "Description 2",
    status: "IN_PROGRESS",
    isEditing: false,
    isNew: false,
  },
  {
    id: idGenerator(),
    title: "Task 3",
    description: "Description 3",
    status: "DONE",
    isEditing: false,
    isNew: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(TODO);
  const [editingTask, setEditingTask] = useState({
    isEditing: false,
    isNew: false,
  });

  function handleOnEdit(task) {
    setEditingTask((prevStatus) => ({
      ...prevStatus,
      ...task,
      isEditing: true,
      isNew: false,
    }));
  }

  function handleOnRemove(id) {
    setTasks((prevStatus) => prevStatus.filter((task) => task.id !== id));
  }

  function handleSaveEdition() {
    if (!editingTask.isEditing) return;

    setTasks((prevTasks) => {
      if (editingTask.isNew) {
        return [
          ...prevTasks,
          {
            ...editingTask,
            id: prevTasks.length + 1,
            isEditing: false,
            isNew: false,
          },
        ];
      } else {
        return prevTasks.map((task) =>
          task.id === editingTask.id
            ? { ...editingTask, isEditing: false }
            : task
        );
      }
    });

    setEditingTask({ isEditing: false, isNew: false });
  }

  function handleOnAdd() {
    setEditingTask({
      id: idGenerator(),
      title: "",
      description: "",
      status: "IN_PROGRESS",
      isEditing: true,
      isNew: true,
    });
  }

  function handleOnRemoveAll() {
    setTasks([]);
  }

  return (
    <div>
      <Header handleOnRemoveAll={handleOnRemoveAll} handleOnAdd={handleOnAdd} />
      <main>
        <TaskList
          tasks={tasks}
          handleOnEdit={handleOnEdit}
          handleOnRemove={handleOnRemove}
        />
        <TaskDialog
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          handleSaveEdition={handleSaveEdition}
        />
      </main>
    </div>
  );
}

export default App;
