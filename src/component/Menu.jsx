import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { menuSelectActions } from "../store/menuSelect";

export default function Menu() {
  const dispatch = useDispatch();
  const menuSelect = useSelector((state) => state.menuSelect.selectedPage);

  let newDiaryIsActive = false;
  let calenderIsActive = false;
  let diaryListIsActive = false;

  if (menuSelect === "newDiary") {
    newDiaryIsActive = true;
  } else if (menuSelect === "calender") {
    calenderIsActive = true;
  } else if (menuSelect === "diaryList") {
    diaryListIsActive = true;
  }

  function pageHandler(pageName) {
    dispatch(menuSelectActions.selectPage(pageName));
  }

  return (
    <aside>
      <h2 className="menu-h2">Menu</h2>
      <ul className="menu-list">
        <li>
          <button
            className={`${newDiaryIsActive && "active"} menu-list-btn`}
            onClick={() => pageHandler("newDiary")}
          >
            開始寫日記
          </button>
        </li>
        <li>
          <button
            className={`${diaryListIsActive && "active"} menu-list-btn`}
            onClick={() => pageHandler("diaryList")}
          >
            日記一覽
          </button>
        </li>
        <li>
          <button
            className={`${calenderIsActive && "active"} menu-list-btn`}
            onClick={() => pageHandler("calender")}
          >
            月曆
          </button>
        </li>
      </ul>
    </aside>
  );
}
