import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "all",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

// actions:
export const { setFilter } = filterSlice.actions;

// selectors:
export const selectStatus = (state) => state.filter.status;

export default filterSlice.reducer;
