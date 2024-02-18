import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "all",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// actions:
export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
