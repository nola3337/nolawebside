import css from "./Calender.css";
import CalendarDays from "./calendar-days";
import { useState } from "react";

export default function Calender() {
  const [date, setDate] = useState(new Date());

  function nextMonthHandler() {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1)
    );
  }

  function lastMonthHandler() {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1)
    );
  }

  function nextYearHandler() {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear() + 1, prevDate.getMonth())
    );
  }

  function lastYearHandler() {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear() - 1, prevDate.getMonth())
    );
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
          <CalendarDays currentDay={date} />
        </div>
      </div>
    </div>
  );
}
