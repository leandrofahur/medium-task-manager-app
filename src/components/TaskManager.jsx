import { useState } from "react";
import "./TaskManager.css";

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
    id: 1,
    title: "Task 1",
    description: "Description 1",
    status: "DONE",
    isEditing: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    status: "IN_PROGRESS",
    isEditing: false,
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    status: "DONE",
    isEditing: false,
  },
];

export default function TaskManager() {
  const [tasks, setTasks] = useState(TODO);
  const [editingTask, setEditingTask] = useState(null);

  function handleOnAdd() {
    setTasks((prevStatus) => [
      ...prevStatus,
      {
        id: prevStatus.length + 1,
        title: `Task ${prevStatus.length + 1}`,
        description: `Description ${prevStatus.length + 1}`,
        status: "IN_PROGRESS",
      },
    ]);
  }

  function handleOnEdit(task) {
    setEditingTask({ ...task });
  }

  function handleSaveEdition() {
    if (!editingTask) return; // Guard clause in case there's no editing task

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editingTask.id ? { ...editingTask, isEditing: false } : task
      )
    );
    setEditingTask(null);
  }

  function handleOnRemove(id) {
    setTasks((prevStatus) => prevStatus.filter((task) => task.id !== id));
  }

  function handleOnRemoveAll() {
    setTasks([]);
  }

  function renderEditDialog() {
    if (!editingTask) return null; // Don't render if there's no task being edited

    const handleFieldChange = (e) => {
      const { name, value } = e.target;
      setEditingTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    return (
      <dialog className="dialog--container" open>
        <div className="dialog--content">
          <h2>Edit Task</h2>
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
              <button type="button" onClick={() => setEditingTask(null)}>
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
