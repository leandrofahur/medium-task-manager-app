// hooks:
import useFiltersHook from "../../hooks/useFiltersHook";
import useTasksHook from "../../hooks/useTasksHook";

// custom components:
import TaskItem from "../TaskItem/TaskItem";

// constants:
import { TASK_STATUS } from "../../constants/taskConstants";

export default function TaskList() {
  const { tasks } = useTasksHook();
  const { value } = useFiltersHook();

  return (
    <section>
      <ul>
        {tasks
          .filter((task) => {
            if (value === TASK_STATUS.ALL) {
              return true;
            }
            return task.status === value;
          })
          .map((task) => (
            <div key={task.id}>
              <TaskItem task={task} />
            </div>
          ))}
      </ul>
    </section>
  );
}
