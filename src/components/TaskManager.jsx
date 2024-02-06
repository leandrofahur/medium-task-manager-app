import { useState } from "react";
import "./TaskManager.css";

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

  // TODO: Add a button to add a new task

  // TODO: Add a button to remove a task

  // TODO: Add a button to change the status of a task

  // TODO: Add a button to filter tasks by status

  return (
    <>
      <header>
        <h1 className="title">Task Manager</h1>
      </header>
      <main>
        <section>
          <h2 className="subtitle">Tasks</h2>
          <ul>
            {tasks.map((task) => (
              <li className="card" key={task.id}>
                <div className="card--task-header">
                  <h2 className="card--task-title">{task.title}</h2>
                  <p className="card--task-status">{task.status}</p>
                </div>

                <p className="card--task-description">{task.description}</p>
                <div className="card--task-action">
                  <button type="button">Edit</button>
                  <button type="button">Remove</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
