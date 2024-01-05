import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedPage: "newDiary" };

const menuSelectSlice = createSlice({
  name: "menuSelect",
  initialState,
  reducers: {
    selectPage(state, action) {
      state.selectedPage = action.payload;
    },
  },
});

export default menuSelectSlice.reducer;

export const menuSelectActions = menuSelectSlice.actions;
