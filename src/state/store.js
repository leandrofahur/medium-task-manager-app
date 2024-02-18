import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../state/taskSlice";
import filterReducer from "../state/filterSlice";

export default configureStore({
  reducer: {
    task: taskReducer,
    filter: filterReducer,
  },
});
