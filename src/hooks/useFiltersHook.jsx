// third-party libraries:
import { useSelector, useDispatch } from "react-redux";

// state:
import { setFilter } from "../state/filterSlice";

// constants:
import { TASK_STATUS } from "../constants/taskConstants";

export default function useTasksHook() {
  // redux state management:
  const dispatch = useDispatch();
  // const tasks = useSelector(selectTasks);
  // const editingTask = useSelector(selectEditingTask);

  return {};
}
