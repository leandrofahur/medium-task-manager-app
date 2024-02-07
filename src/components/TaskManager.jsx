import { useState } from "react";
import "./TaskManager.css";

const idGenerator = () => Math.floor(Math.random() * 1000) + 1;

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

export default function TaskManager() {
  const [tasks, setTasks] = useState(TODO);
  const [editingTask, setEditingTask] = useState({
    isEditing: false,
    isNew: false,
  });

  function handleOnAdd() {
    setEditingTask({
      id: null,
      title: "",
      description: "",
      status: "IN_PROGRESS",
      isEditing: true,
      isNew: true,
    });
  }

  function handleOnEdit(task) {
    setEditingTask((prevStatus) => ({
      ...prevStatus,
      ...task,
      isEditing: true,
      isNew: false,
    }));
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

  function handleOnRemove(id) {
    setTasks((prevStatus) => prevStatus.filter((task) => task.id !== id));
  }

  function handleOnRemoveAll() {
    setTasks([]);
  }

  function renderEditDialog() {
    if (!editingTask.isEditing) return null;

    const handleFieldChange = (e) => {
      const { name, value } = e.target;
      setEditingTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const dialogTitle = editingTask.isNew ? "Add New Task" : "Edit Task";

    return (
      <dialog className="dialog--container" open>
        <div className="dialog--content">
          <h2>{dialogTitle}</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form--field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                value={editingTask.title}
                onChange={handleFieldChange}
              />
            </div>
            <div className="form--field">
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                name="description"
                value={editingTask.description}
                onChange={handleFieldChange}
              />
            </div>
            <div className="form--field">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                name="status"
                value={editingTask.status}
                onChange={handleFieldChange}
              >
                <option value="DONE">Done</option>
                <option value="IN_PROGRESS">In Progress</option>
              </select>
            </div>
            <div className="form--action">
              <button type="button" onClick={handleSaveEdition}>
                Save
              </button>
              <button
                type="button"
                onClick={() =>
                  setEditingTask({ isEditing: false, isNew: false })
                }
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    );
  }

  return (
    <>
      <header>
        <h1 className="title">Task Manager</h1>
      </header>
      <main>
        <section>
          <h2 className="subtitle">Tasks</h2>
          <div className="card--task-action">
            <button type="button" onClick={handleOnAdd}>
              Add
            </button>
            <button type="button" onClick={handleOnRemoveAll}>
              Remove All
            </button>
          </div>

          {tasks.length > 0 ? (
            <ul>
              {tasks.map((task) => (
                <li className="card" key={task.id}>
                  <div className="card--task-header">
                    <h2 className="card--task-title">{task.title}</h2>
                    <span
                      className={`card--task-status ${
                        task.status === "IN_PROGRESS" && "active"
                      }`}
                    />
                  </div>

                  <p className="card--task-description">{task.description}</p>
                  <div className="card--task-action">
                    <button type="button" onClick={() => handleOnEdit(task)}>
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => handleOnRemove(task.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>No tasks available</p>
          )}
        </section>
        {renderEditDialog()}
      </main>
    </>
  );
}
