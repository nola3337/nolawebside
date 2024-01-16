import "./Header.css";
import { useDispatch } from "react-redux";
import { menuSelectActions } from "../store/menuSelect";

export default function Header() {
  const dispatch = useDispatch();

  function openMenuHandler() {
    dispatch(menuSelectActions.toggleMenu());
  }

  return (
    <header>
      <button onClick={openMenuHandler} className="header-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="header-icon"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="project-name">
        <img src="diary32.png" alt="diary icon" />
        <h2>簡單日記</h2>
      </div>
    </header>
  );
}
