import PropTypes from "prop-types";

// Custom components:
import TaskItem from "../TaskItem/TaskItem";

export default function TaskList(props) {
  const { tasks, handleOnEdit, handleOnRemove } = props;

  return (
    <section>
      <ul>
        {tasks.map((task) => (
          <div key={task.id}>
            <TaskItem
              task={task}
              handleOnEdit={handleOnEdit}
              handleOnRemove={handleOnRemove}
            />
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
  handleOnEdit: PropTypes.func,
  handleOnRemove: PropTypes.func,
};
