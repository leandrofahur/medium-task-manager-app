// third-party libraries:
import { useSelector, useDispatch } from "react-redux";

// state:
import { setFilter, selectValue } from "../state/filterSlice";

export default function useFiltersHook() {
  // redux state management:
  const dispatch = useDispatch();
  const value = useSelector(selectValue);

  function handleSetFilter(newValue) {
    dispatch(setFilter(newValue));
  }

  return { value, handleSetFilter };
}
