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
    status: "IN_PROGRESS",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    status: "IN_PROGRESS",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    status: "DONE",
  },
];

export default function TaskManager() {
  const [tasks, setTasks] = useState(TODO);

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

  function handleOnEdit() {
    console.log("Edit task");
  }

  function handleOnRemove(id) {
    setTasks((prevStatus) => prevStatus.filter((task) => task.id !== id));
  }

  function handleOnRemoveAll() {
    setTasks([]);
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
                    <p className="card--task-status">{task.status}</p>
                  </div>

                  <p className="card--task-description">{task.description}</p>
                  <div className="card--task-action">
                    <button type="button" onClick={handleOnEdit}>
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
      </main>
    </>
  );
}
