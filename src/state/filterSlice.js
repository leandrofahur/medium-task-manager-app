import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "All",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.value = action.payload;
    },
  },
});

// actions:
export const { setFilter } = filterSlice.actions;

// selectors:
export const selectValue = (state) => state.filter.value;

export default filterSlice.reducer;
