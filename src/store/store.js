import { configureStore } from "@reduxjs/toolkit";
import menuSelectReducer from "./menuSelect";
import diaryReducer from "./diarySlice";

const store = configureStore({
  reducer: {
    menuSelect: menuSelectReducer,
    diary: diaryReducer,
  },
});

export default store;
