const date = new Date();

const renderCalendar = () => {

  let calendar = document.querySelector('.calendar');
  let dates = calendar.querySelector('.calendar__days');
  const info = calendar.querySelector('.calendar__info');



  date.setDate(1);

  const month = date.getMonth();
  const year = date.getFullYear();
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const firstDayIndex = date.getDay();
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const realDayOfWeekNum = getRealDayOfWeekNum(firstDayIndex);
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex;


  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь"
  ];

  info.innerHTML = months[month] + ' ' + year;

  let days = '';

  for (let x = realDayOfWeekNum; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
      days += `<div class="calendar__days_active">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
  }

  function getRealDayOfWeekNum(jsNumOfDay) {
    if (jsNumOfDay == 0) {
      return 6;
    } else {
      return jsNumOfDay - 1;
    }
  }

  dates.innerHTML = days;
};

const prev = document.querySelector('.calendar__prev');
const next = document.querySelector('.calendar__next');

prev.addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

next.addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
