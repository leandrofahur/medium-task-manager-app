// hooks:
import useTasksHook from "../../hooks/useTasksHook";

// custom components:
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList() {
  const { tasks } = useTasksHook();

  return (
    <section>
      <ul>
        {tasks.map((task) => (
          <div key={task.id}>
            <TaskItem task={task} />
          </div>
        ))}
      </ul>
    </section>
  );
}
