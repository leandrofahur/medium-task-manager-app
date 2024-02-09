import PropTypes from "prop-types";

// state:
import { addTask, setEditingTask } from "../../state/taskSlice";

// third-party libraries:
import { useDispatch } from "react-redux";

import styles from "./TaskDialog.module.scss";

export default function TaskDialog(props) {
  const { editingTask } = props;

  // redux state management:
  const dispatch = useDispatch();

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    dispatch(setEditingTask({ ...editingTask, [name]: value }));
  };

  const handleSaveEdition = () => {
    if (editingTask.isNew) {
      dispatch(addTask({ ...editingTask, id: Date.now() }));
    } else {
      dispatch(setEditingTask(editingTask));
    }
    dispatch(setEditingTask({ isEditing: false, isNew: false }));
  };

  if (!editingTask.isEditing) return null;

  const dialogTitle = editingTask.isNew ? "Add New Task" : "Edit Task";

  return (
    <dialog className={styles.container} open>
      <div className={styles.content}>
        <h2>{dialogTitle}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.field}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={editingTask.title}
              onChange={handleFieldChange}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={editingTask.description}
              onChange={handleFieldChange}
            />
          </div>
          <div className={styles.field}>
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
          <div className={styles.action}>
            <button type="button" onClick={handleSaveEdition}>
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditingTask({ isEditing: false, isNew: false })}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}

TaskDialog.propTypes = {
  editingTask: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
    isEditing: PropTypes.bool,
    isNew: PropTypes.bool,
  }),
};
