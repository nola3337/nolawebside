import "./NewDiary.css";
import { useDispatch, useSelector } from "react-redux";
import { diaryActions } from "../store/diarySlice";
import { menuSelectActions } from "../store/menuSelect";

export default function NewDiary() {
  const dispatch = useDispatch();
  const diaryList = useSelector((state) => state.diary.diary);

  const editData = diaryList.find((item) => item.isEdit === true);

  function handelAddDiary(event) {
    event.preventDefault();

    const fd = new FormData(event.target);

    const data = Object.fromEntries(fd.entries());

    const haveSameday = diaryList.find((item) => item.date === data.date);

    if (editData) {
      dispatch(diaryActions.editDiary(data));
    } else if (haveSameday) {
      window.confirm("同一天已有日記。");
      return;
    } else {
      dispatch(diaryActions.addDiary(data));
    }

    event.target.reset();

    dispatch(menuSelectActions.selectPage("diaryList"));
  }

  return (
    <div className="new-diary">
      <h2 className="main-h2">{editData ? "編輯日記" : "開始寫日記"}</h2>
      <form onSubmit={handelAddDiary} className="new-diary-form">
        <div className="new-diary-input-area">
          <label htmlFor="text">Title</label>
          <input
            name="title"
            type="text"
            defaultValue={editData ? editData.title : ""}
          />
        </div>
        <div className="new-diary-input-area">
          <label htmlFor="text">Date</label>
          <input
            name="date"
            type="date"
            defaultValue={editData ? editData.date : ""}
          />
        </div>
        <div className="new-diary-input-area">
          <textarea
            name="content"
            id=""
            cols="30"
            rows="10"
            defaultValue={editData ? editData.content : ""}
          ></textarea>
        </div>
        <div className="form-btn-box">
          <button className="form-btn">
            {editData ? "更新日記" : "新增日記"}
          </button>
        </div>
      </form>
    </div>
  );
}
