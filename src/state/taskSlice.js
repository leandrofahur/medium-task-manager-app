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
    setEditingTask: (state, action) => {
      state.editingTask = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, editTask, removeTask, removeAllTasks, setEditingTask } =
  taskSlice.actions;

export default taskSlice.reducer;
