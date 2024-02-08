import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../state/taskSlice";

export default configureStore({
  reducer: {
    task: taskReducer,
  },
});
