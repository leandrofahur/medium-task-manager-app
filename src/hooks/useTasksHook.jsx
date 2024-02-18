// third-party libraries:
import { useSelector, useDispatch } from "react-redux";

// state:
import {
  selectTasks,
  selectEditingTask,
  setTask,
  setEditingTask,
  addTask,
  editTask,
  removeTask,
} from "../state/taskSlice";

// utils:
import { idGenerator } from "../utils/taskUtils";

// constants:
import { TASK_STATUS } from "../constants/taskConstants";

export default function useTasksHook() {
  // redux state management:
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const editingTask = useSelector(selectEditingTask);

  function handleOnAdd() {
    dispatch(
      setEditingTask({
        id: idGenerator(),
        title: "",
        description: "",
        status: TASK_STATUS.IN_PROGRESS,
        isEditing: true,
        isNew: true,
      })
    );
  }

  function handleOnRemoveAll() {
    dispatch(setTask([]));
  }

  function handleOnEdit(task) {
    dispatch(setEditingTask({ ...task, isEditing: true, isNew: false }));
  }

  function handleOnRemove(id) {
    dispatch(removeTask(id));
  }

  function handleSaveEdition() {
    if (editingTask.isNew) {
      dispatch(
        addTask({
          ...editingTask,
          id: idGenerator(),
          isEditing: false,
          isNew: false,
        })
      );
    } else {
      dispatch(editTask({ ...editingTask, isEditing: false }));
    }

    dispatch(setEditingTask({ isEditing: false, isNew: false }));
  }

  function handleFieldChange(e) {
    const { name, value } = e.target;
    dispatch(setEditingTask({ ...editingTask, [name]: value }));
  }

  function handleOnCancel() {
    dispatch(setEditingTask({ isEditing: false, isNew: false }));
  }

  return {
    handleOnAdd,
    handleOnRemoveAll,
    handleOnEdit,
    handleOnRemove,
    handleSaveEdition,
    handleFieldChange,
    handleOnCancel,
    tasks,
    editingTask,
  };
}
