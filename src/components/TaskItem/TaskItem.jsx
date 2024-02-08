import PropTypes from "prop-types";
import styles from "./TaskItem.module.scss";

export default function TaskItem(props) {
  const { task, handleOnEdit, handleOnRemove } = props;

  return (
    <li className={styles.card} key={task.id}>
      <div className={styles.header}>
        <h2 className={styles.title}>{task.title}</h2>
        <span
          className={`${styles.status} ${
            task.status === "IN_PROGRESS" && styles.active
          }`}
        />
      </div>

      <p className={styles.description}>{task.description}</p>
      <div className={styles.action}>
        <button type="button" onClick={() => handleOnEdit(task)}>
          Edit
        </button>
        <button type="button" onClick={() => handleOnRemove(task.id)}>
          Remove
        </button>
      </div>
    </li>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
  }),
  handleOnEdit: PropTypes.func,
  handleOnRemove: PropTypes.func,
};
