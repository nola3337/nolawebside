import "./App.css";
import Calender from "./component/Calender.jsx";
import Menu from "./component/Menu.jsx";
import NewDiary from "./component/NewDiary.jsx";
import DiaryList from "./component/DiaryList.jsx";
import Diary from "./component/Diary.jsx";
import Header from "./component/Header.jsx";
import Hero from "./component/Hero.jsx";
import { sendData, fetchData } from "./store/fetchAction.js";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const menuSelect = useSelector((state) => state.menuSelect.selectedPage);
  const diaryData = useSelector((state) => state.diary.diary);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendData(diaryData));
  }, [diaryData, dispatch]);

  let page;

  if (menuSelect === "newDiary") {
    page = (
      <section className="diary-section">
        <NewDiary />
      </section>
    );
  } else if (menuSelect === "calender") {
    page = (
      <section className="diary-section">
        <Calender />
      </section>
    );
  } else if (menuSelect === "diaryList") {
    page = (
      <section className="diary-section">
        <DiaryList />
      </section>
    );
  } else if (menuSelect === "diary") {
    page = (
      <section className="diary-section">
        <Diary />
      </section>
    );
  } else if (menuSelect === "home") {
    page = <Hero />;
  }

  return (
    <>
      <Menu />
      <Header />
      <div className="hero-bg-img">{page}</div>
    </>
  );
}

export default App;
