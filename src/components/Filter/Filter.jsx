// hooks:
import useFiltersHook from "../../hooks/useFiltersHook";

// constants:
import { TASK_STATUS } from "../../constants/taskConstants";

export default function Filter() {
  const { status, handleSetFilter } = useFiltersHook();

  // options for the select element:
  const options = [
    { value: TASK_STATUS.ALL, label: TASK_STATUS.ALL },
    { value: TASK_STATUS.IN_PROGRESS, label: TASK_STATUS.IN_PROGRESS },
    { value: TASK_STATUS.DONE, label: TASK_STATUS.DONE },
  ];

  return (
    <select value={status} onChange={(e) => handleSetFilter(e.target.value)}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
