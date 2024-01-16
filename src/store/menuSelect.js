import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectedPage: "home", toggleMenu: false };

const menuSelectSlice = createSlice({
  name: "menuSelect",
  initialState,
  reducers: {
    selectPage(state, action) {
      state.selectedPage = action.payload;
    },
    toggleMenu(state) {
      state.toggleMenu = !state.toggleMenu;
    },
  },
});

export default menuSelectSlice.reducer;

export const menuSelectActions = menuSelectSlice.actions;
