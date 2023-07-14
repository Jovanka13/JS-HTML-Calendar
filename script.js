function displayCalendar(year, month) {
  const container = document.getElementById("calendarContainer");
  const currentDateContainer = document.querySelector(".current-date");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = new Date();
  const currYear = date.getFullYear();
  const currMonth = date.getMonth();

  currentDateContainer.innerHTML = `${monthNames[currMonth]} ${currYear}`;

  const numDays = new Date(year, month, 0).getDate();
  const firstDay = new Date(year, month - 1, 1).getDay();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const daysOfWeekHeader = daysOfWeek.map((day) => `<th>${day}</th>`).join("");

  let calendarHTML = `<table class="calendar">

  <tr>${daysOfWeekHeader}</tr>`;

  let day = 1;

  for (let i = 0; i < 6; i++) {
    calendarHTML += "<tr>";

    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        calendarHTML += "<td></td>"; // Empty cell before the first day
      } else if (day <= numDays) {
        const currentDate = new Date();

        if (
          currentDate.getFullYear() === year &&
          currentDate.getMonth() === month - 1 &&
          currentDate.getDate() === day
        ) {
          calendarHTML += `<td class='current-day'>${day}</td>`; // Highlight the current day
        } else {
          calendarHTML += `<td>${day}</td>`;
        }

        day++;
      } else {
        calendarHTML += "<td></td>"; // Empty cell after the last day
      }
    }

    calendarHTML += "</tr>";

    if (day > numDays) {
      break;
    }
  }

  calendarHTML += "</table>";

  container.innerHTML = calendarHTML;
}

displayCalendar(2023, 7); // Display calendar for July 2023
