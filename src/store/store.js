import { configureStore } from "@reduxjs/toolkit";
import menuSelectReducer from "./menuSelect";
import diaryReducer from "./diarySlice";
import calenderReducer from "./calenderSlice";

const store = configureStore({
  reducer: {
    menuSelect: menuSelectReducer,
    diary: diaryReducer,
    calender: calenderReducer,
  },
});

export default store;
