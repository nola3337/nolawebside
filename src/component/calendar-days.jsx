import Day from "./Day";
import { useSelector } from "react-redux";

export default function CalendarDays() {
  const currentDay = useSelector((state) => state.calender);

  let firstDayOfMonth = new Date(
    currentDay.getFullYear(),
    currentDay.getMonth(),
    1
  );

  let weekdayOfFirstDay = firstDayOfMonth.getDay();

  let currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    const today = new Date();

    let calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === currentDay.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === today.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  return (
    <ul className="grid grid-line">
      {currentDays.map((item) => {
        const isCurrnetMonthDay = item.month === currentDay.getMonth();

        return (
          <Day
            key={item.date.toDateString()}
            isCurrnetMonthDay={isCurrnetMonthDay}
            date={item}
          />
        );
      })}
    </ul>
  );
}
