import "./App.css";
import Calender from "./component/Calender.jsx";
import Menu from "./component/Menu.jsx";
import NewDiary from "./component/NewDiary.jsx";
import DiaryList from "./component/DiaryList.jsx";
import Diary from "./component/Diary.jsx";

import { useSelector } from "react-redux";

function App() {
  const menuSelect = useSelector((state) => state.menuSelect.selectedPage);

  let page;

  if (menuSelect === "newDiary") {
    page = <NewDiary />;
  } else if (menuSelect === "calender") {
    page = <Calender />;
  } else if (menuSelect === "diaryList") {
    page = <DiaryList />;
  } else if (menuSelect === "diary") {
    page = <Diary />;
  }

  return (
    <div className="bg-img--12 bg-img">
      <div className="App">
        <Menu />
        {page}
      </div>
    </div>
  );
}

export default App;
