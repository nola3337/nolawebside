import css from "./Calender.css";
import CalendarDays from "./calendar-days";
import { useDispatch, useSelector } from "react-redux";
import { calenderActions } from "../store/calenderSlice";

export default function Calender() {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.calender);

  console.log(date.getMonth() + 1);

  function nextMonthHandler() {
    dispatch(calenderActions.nextMonth());
  }

  function lastMonthHandler() {
    dispatch(calenderActions.lastMonth());
  }

  function nextYearHandler() {
    dispatch(calenderActions.nextYear());
  }

  function lastYearHandler() {
    dispatch(calenderActions.lastYear());
  }

  return (
    <div className="calender">
      <div className="calender-header">
        <div className="year-bar">
          <button onClick={lastYearHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="svg-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <span>{date.getFullYear()}</span>
          <button onClick={nextYearHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="svg-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="month-bar">
          <button onClick={lastMonthHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="svg-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <span>{date.getMonth() + 1} 月</span>
          <button onClick={nextMonthHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="svg-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="calender-days">
        <div className="week">
          <span>日</span>
          <span>一</span>
          <span>二</span>
          <span>三</span>
          <span>四</span>
          <span>五</span>
          <span>六</span>
        </div>
        <div className="calender-day">
          <CalendarDays />
        </div>
      </div>
    </div>
  );
}
