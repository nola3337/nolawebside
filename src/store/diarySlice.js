import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  diary: [
    {
      id: "001",
      title: "First diary",
      date: "2024-01-02",
      content: "My First Diary.",
      selected: false,
      isEdit: false,
    },
  ],
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    addDiary(state, action) {
      const newDiary = {
        id: Math.random(),
        title: action.payload.title,
        date: action.payload.date,
        content: action.payload.content,
        selected: false,
        isEdit: false,
      };

      state.diary.push(newDiary);
    },
    selectedDiary(state, action) {
      state.diary = state.diary.map((item) => {
        if (item.id === action.payload) {
          return { ...item, selected: true };
        } else {
          return { ...item, selected: false };
        }
      });
    },
    deleteDiary(state, action) {
      state.diary = state.diary.filter((item) => item.id !== action.payload);
    },
    toEditDiary(state, action) {
      const currentIndex = state.diary.findIndex(
        (item) => item.id === action.payload
      );

      state.diary[currentIndex].isEdit = true;
    },
    editDiary(state, action) {
      const currentIndex = state.diary.findIndex(
        (item) => item.isEdit === true
      );

      state.diary[currentIndex].title = action.payload.title;
      state.diary[currentIndex].date = action.payload.date;
      state.diary[currentIndex].content = action.payload.content;
      state.diary[currentIndex].isEdit = false;
    },
  },
});

export default diarySlice.reducer;

export const diaryActions = diarySlice.actions;
