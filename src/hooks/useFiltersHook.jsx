// third-party libraries:
import { useSelector, useDispatch } from "react-redux";

// state:
import { setFilter, selectStatus } from "../state/filterSlice";

// constants:
// import { TASK_STATUS } from "../constants/taskConstants";

export default function useFiltersHook() {
  // redux state management:
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);

  function handleSetFilter(status) {
    dispatch(setFilter(status));
  }

  return { status, handleSetFilter };
}
