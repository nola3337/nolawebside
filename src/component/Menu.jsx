import "./Menu.css";
import { useDispatch, useSelector } from "react-redux";
import { menuSelectActions } from "../store/menuSelect";

export default function Menu() {
  const dispatch = useDispatch();
  const menuSelect = useSelector((state) => state.menuSelect.selectedPage);
  const toggleMenu = useSelector((state) => state.menuSelect.toggleMenu);

  let newDiaryIsActive = false;
  let calenderIsActive = false;
  let diaryListIsActive = false;
  let homeIsActive = false;

  if (menuSelect === "newDiary") {
    newDiaryIsActive = true;
  } else if (menuSelect === "calender") {
    calenderIsActive = true;
  } else if (menuSelect === "diaryList") {
    diaryListIsActive = true;
  } else if (menuSelect === "home") {
    homeIsActive = true;
  }

  function pageHandler(pageName) {
    dispatch(menuSelectActions.selectPage(pageName));
    dispatch(menuSelectActions.toggleMenu());
  }

  function CloseHandler() {
    dispatch(menuSelectActions.toggleMenu());
  }

  return (
    <nav className={`menu ${toggleMenu && "open-menu"}`}>
      <div className="menu-top">
        <h2 className="menu-h2">Menu</h2>
        <button onClick={CloseHandler} className="menu-top-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="menu-icon x-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <ul className="menu-list">
        <li>
          <button
            className={`${homeIsActive && "active"} menu-list-btn`}
            onClick={() => pageHandler("home")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="menu-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span>首頁</span>
          </button>
        </li>
        <li>
          <button
            className={`${newDiaryIsActive && "active"} menu-list-btn`}
            onClick={() => pageHandler("newDiary")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="menu-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
              />
            </svg>
            <span>開始寫日記</span>
          </button>
        </li>
        <li>
          <button
            className={`${diaryListIsActive && "active"} menu-list-btn`}
            onClick={() => pageHandler("diaryList")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="menu-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span>日記一覽</span>
          </button>
        </li>
        <li>
          <button
            className={`${calenderIsActive && "active"} menu-list-btn`}
            onClick={() => pageHandler("calender")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="menu-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
            <span>月曆</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}
