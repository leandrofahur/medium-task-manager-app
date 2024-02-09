import { createSlice } from "@reduxjs/toolkit";

// Data Structure:
// const task = [
//   {
//     id: number,
//     title: string,
//     description: string,
//     status: string,
//     isEditing: boolean,
//     isNew: boolean,
//   },
// ]

// Initial state
const initialState = {
  tasks: [],
  editingTask: { isEditing: false, isNew: false },
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTask: (state, action) => {
      state.tasks = action.payload;
    },
    setEditingTask: (state, action) => {
      state.editingTask = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    removeAllTasks: (state) => {
      state.tasks = [];
    },
  },
});

// actions:
export const {
  addTask,
  editTask,
  removeTask,
  removeAllTasks,
  setTask,
  setEditingTask,
} = taskSlice.actions;

// selectors:
export const selectTasks = (state) => state.task.tasks;
export const selectEditingTask = (state) => state.task.editingTask;

export default taskSlice.reducer;
