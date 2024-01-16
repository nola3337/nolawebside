import "./Hero.css";

import { useDispatch } from "react-redux";
import { menuSelectActions } from "../store/menuSelect";

export default function Hero() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(menuSelectActions.selectPage("newDiary"));
  }

  return (
    <section className="hero">
      <div className="hero-intro">
        <h2>簡單日記</h2>
        <p>
          哈囉，歡迎來到「簡單日記」，這裡是一個能夠每天輕鬆寫下日記的小天地。讓我們一同輕鬆地記錄下每一天的生活，不受任何束縛，充滿自在的日常紀錄。
        </p>
        <button onClick={handleClick} className="hero-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="hero-btn-icon"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
          開始寫日記
        </button>
      </div>
    </section>
  );
}
