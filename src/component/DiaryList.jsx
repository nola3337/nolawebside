import "./DiaryList.css";
import DiaryListItem from "./DiaryListItem";
import { useSelector } from "react-redux";

export default function DiaryList() {
  const diaryList = useSelector((state) => state.diary.diary);

  return (
    <div className="diary-list-box">
      <h2 className="main-h2">日記一覽</h2>
      <ul className="diary-list">
        {diaryList.map((item) => {
          return <DiaryListItem item={item} />;
        })}
      </ul>
    </div>
  );
}
