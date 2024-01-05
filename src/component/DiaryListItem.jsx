import { useDispatch } from "react-redux";
import { menuSelectActions } from "../store/menuSelect";
import { diaryActions } from "../store/diarySlice";

export default function DiaryListItem({ item }) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(menuSelectActions.selectPage("diary"));

    dispatch(diaryActions.selectedDiary(item.id));
  }

  return (
    <li onClick={handleClick}>
      <button className="diary-list-btn">
        <span>{item.title}</span>
        <span>{item.date}</span>
      </button>
    </li>
  );
}
