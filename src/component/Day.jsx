import { useSelector, useDispatch } from "react-redux";
import { diaryActions } from "../store/diarySlice";
import { menuSelectActions } from "../store/menuSelect";

export default function Day({ isCurrnetMonthDay, date }) {
  const dispatch = useDispatch();
  const diaryList = useSelector((state) => state.diary.diary);

  let month = date.month + 1;
  let day = date.number;

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  const currentDay = `${date.year}-${month}-${day}`;

  const currentDiary = diaryList.find((item) => item.date === currentDay);

  function handleGoToDiary() {
    dispatch(diaryActions.selectedDiary(currentDiary.id));

    dispatch(menuSelectActions.selectPage("diary"));
  }

  return (
    <li>
      <button
        className={`${isCurrnetMonthDay ? "" : "notCurrentMonthDay"} ${
          date.selected && "currentday"
        } day-btn`}
      >
        {date.number}
      </button>
      {currentDiary && (
        <button onClick={handleGoToDiary} className="day-btn diary-btn">
          {currentDiary.title}
        </button>
      )}
    </li>
  );
}
