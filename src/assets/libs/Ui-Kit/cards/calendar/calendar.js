const date = new Date();
const year = date.getFullYear(); // получаю год в шапке календаря

const renderCalendar = () => {
  date.setDate(1);
  const monthDays = document.querySelector('.calendar__days');
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // корректный последний день месяца
  const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
  const firstDayIndex = date.getDay() - 1;
  const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
  const nextDays = 7 - lastDayIndex;

  const month = [
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
    "Декабрь",
  ];

  document.querySelector('.calendar__month').innerHTML = month[date.getMonth()]; // Получаем в календарь текущий месяц
  document.querySelector('..calendar__year').innerHTML = year[date.getFullYear()];

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`; // показываю несколько дней предыдущего месяца
  }

  for (let i = 1; i <= lastDay; i++) {
    if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
      days += `<div class="active">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }

};

document.querySelector('.calendar__prev').addEventListener('click', () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector('.calendar__next').addEventListener('click', () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
