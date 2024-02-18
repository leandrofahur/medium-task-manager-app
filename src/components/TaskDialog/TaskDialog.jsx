// hooks:
import useTasksHook from "../../hooks/useTasksHook";

// constants:
import { TASK_STATUS } from "../../constants/taskConstants";

import styles from "./TaskDialog.module.scss";

export default function TaskDialog() {
  const { editingTask, handleFieldChange, handleOnCancel, handleSaveEdition } =
    useTasksHook();

  // console.log(editingTask);
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
              <option value={TASK_STATUS.DONE}>{TASK_STATUS.DONE}</option>
              <option value={TASK_STATUS.IN_PROGRESS}>
                {TASK_STATUS.IN_PROGRESS}
              </option>
            </select>
          </div>
          <div className={styles.action}>
            <button type="button" onClick={handleSaveEdition}>
              Save
            </button>
            <button type="button" onClick={handleOnCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
}
