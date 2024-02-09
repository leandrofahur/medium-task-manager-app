import PropTypes from "prop-types";

// custom components:
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList(props) {
  const { tasks } = props;

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

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.string,
    })
  ),
};
