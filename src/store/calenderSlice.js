import { createSlice } from "@reduxjs/toolkit";

const initialState = new Date();

const calenderSlice = createSlice({
  name: "calender",
  initialState,
  reducers: {
    nextMonth(state) {
      return new Date(state.getFullYear(), state.getMonth() + 1);
    },
    lastMonth(state) {
      return new Date(state.getFullYear(), state.getMonth() - 1);
    },
    nextYear(state) {
      return new Date(state.getFullYear() + 1, state.getMonth());
    },
    lastYear(state) {
      return new Date(state.getFullYear() - 1, state.getMonth());
    },
  },
});

export default calenderSlice.reducer;

export const calenderActions = calenderSlice.actions;
