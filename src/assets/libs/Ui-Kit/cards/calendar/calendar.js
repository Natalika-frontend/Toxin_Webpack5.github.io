(function (selector) {


  initCalendar(document.querySelector(selector));



  function initCalendar(calendar) {

    let date = new Date();
    let showedYear = date.getFullYear();
    let showedMonth = date.getMonth();

    let currentMoment = {
      year: showedYear,
      month: showedMonth,
      date: date.getDate(),
    };

    let dates = calendar.querySelector('.calendar__days');
    let info = calendar.querySelector('.calendar__info');

    drawCalendar(showedYear, showedMonth, currentMoment, calendar);

    let prev = calendar.querySelector('.calendar__prev');
    let next = calendar.querySelector('.calendar__next');


    prev.addEventListener('click', function () {
      showedYear = getPrevYear(showedYear, showedMonth);
      showedMonth = getPrevMonth(showedMonth);

      drawCalendar(showedYear, showedMonth, currentMoment, calendar);
    });


    next.addEventListener('click', function () {
      showedYear = getNextYear(showedYear, showedMonth);
      showedMonth = getNextMonth(showedMonth);

      drawCalendar(showedYear, showedMonth, currentMoment, calendar);
    });

    function drawCalendar(showedYear, showedMonth, currentMoment, calendar) {
      drawDates(showedYear, showedMonth, dates);
      showInfo(showedYear, showedMonth, info);
      showCurrentDate(showedYear, showedMonth, currentMoment, dates);
    }
  }

  function showCurrentDate(showedYear, showedMonth, currentMoment, dates) {
    if (showedYear == currentMoment['year'] && showedMonth == currentMoment['month']) {
      let divs = dates.querySelectorAll('div');
      for (let i = 0; i < divs.length; i++) {
        if (divs[i].innerHTML == currentMoment['date']) {
          divs[i].classList.add('calendar__days_active');
          break;
        }
      }
    }
  }

  function getPrevYear(year, month) {
    if (month == 0) {
      return year - 1;
    } else {
      return year;
    }
  }

  function getPrevMonth(month) {
    if (month == 0) {
      return 11;
    } else {
      return month - 1;
    }
  }


  function getNextYear(year, month) {
    if (month == 11) {
      return year + 1;
    } else {
      return year;
    }
  }

  function getNextMonth(month) {
    if (month == 11) {
      return 0;
    } else {
      return month + 1;
    }
  }

  function showInfo(year, month, elem) {
    elem.innerHTML = getMonthName(month) + " " + year;
  }

  function getMonthName(num) {
    var monthes = [
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
    return monthes[num];
  }


  function drawDates(year, month, dates) {
    var arr = [];
    var firstDateOfMonth = 1;
    var lastDateOfMonth = getLastDayOfMonth(year, month);
    var unshiftElemsNum = getUnshiftElemsNum(year, month);
    var pushElemsNum = getPushElemsNum(year, month);

    arr = createArr(firstDateOfMonth, lastDateOfMonth);
    arr = unshiftElems(unshiftElemsNum, " ", arr); // TODO подставить вторым параметром результат работы функции последних чисел предыдущего месяца
    arr = pushElems(pushElemsNum, " ", arr);
    arr = chunkArr(7, arr);
    createDates(arr, dates);
  }

  function getRealDayOfWeekNum(jsNumOfDay) {
    if (jsNumOfDay == 0) {
      return 7
    } else {
      return jsNumOfDay;
    }
  }

  function getLastDayOfMonth(year, month) {
    var datee = new Date(year, month + 1, 0);
    return datee.getDate();
  }

  function getFirstWeektDayOfMonthNum(year, month) {
    var date = new Date(year, month, 1);
    return date.getDay();
  }

  function getLastWeektDayOfMonthNum(year, month) {
    var date = new Date(year, month + 1, 0);
    return date.getDay();
  }

  function createDates(arr, parent) {
    parent.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
      var divRow = document.createElement('div');
      divRow.classList.add('calendar__week');
      for (let j = 0; j < arr[i].length; j++) {
        var divCell = document.createElement('div');
        divCell.innerHTML = arr[i][j];
        divRow.appendChild(divCell);
      }
      parent.appendChild(divRow);
    }
  }

  function createArr(from, to) {
    var arr = [];
    for (let i = from; i <= to; i++) {
      arr.push(i);
    }
    return arr;
  }

  function unshiftElems(num, elem, arr) {
    for (let i = 0; i < num; i++) {
      arr.unshift(elem);
    }
    return arr;
  }

  function pushElems(num, elem, arr) {
    for (let i = 0; i < num; i++) {
      arr.push(elem);
    }
    return arr;
  }

  function getUnshiftElemsNum(year, month) {
    var jsDayNum = getFirstWeektDayOfMonthNum(year, month);
    var realDayNum = getRealDayOfWeekNum(jsDayNum);
    return realDayNum - 1;
  }

  function getPushElemsNum(year, month) {
    var jsDayNum = getLastWeektDayOfMonthNum(year, month);
    var realDayNum = getRealDayOfWeekNum(jsDayNum);
    return 7 - realDayNum;
  }

  function chunkArr(num, arr) {
    var result = [];
    var chunk = [];
    var iterCount = arr.length / num;
    for (let i = 0; i < iterCount; i++) {
      chunk = arr.splice(0, num);
      result.push(chunk);
    }
    return result;
  }
}('.calendar'));



// const renderCalendar = () => {
//   date.setDate(1);
//   const monthDays = document.querySelector('.calendar__days');
//   const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate(); // корректный последний день месяца
//   const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate(); // количество дней предыдущего месяца
//   const firstDayIndex = date.getDay();
//   const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 1).getDay();
//   const nextDays = 7 - lastDayIndex; // количество показываемых дней следующуго месяца
//   //const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
//   console.log("индекс первого дня месяца:" + firstDayIndex);
//   console.log("индекс последнего дня месяца:" + lastDayIndex);
//   console.log("количество дней в предыдущем месяце:" + prevLastDay);
//   console.log("количество выводимых дней следующего месяца:" + nextDays);

//   const month = [
//     "Январь",
//     "Февраль",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль",
//     "Август",
//     "Сентябрь",
//     "Октябрь",
//     "Ноябрь",
//     "Декабрь",
//   ];

//   document.querySelector('.calendar__month').innerHTML = month[date.getMonth()]; // Получаем в календарь текущий месяц
//   document.querySelector('.calendar__year').innerHTML = " " + (date.getFullYear() + 0); // получаем правильный год

//   // вывожу дни недели с понедельника
//   //document.querySelector('.calendar__weekdays').innerHTML
//   // for (let d = firstDayIndex; d < 6; d--) {
//   //   document.querySelector('.calendar__weekdays').innerHTML = weekDays;
//   // };

//   let days = "";

//   // показываю несколько дней предыдущего месяца
//   for (let x = firstDayIndex; x > 1; x--) {
//     days += `<div class="prev-date">${prevLastDay - x + 1}</div>`; // здесь меняются сами числа предыдущего месяца
//   };


//   // показываю все числа месяца и выделяю текущий день
//   for (let i = 1; i <= lastDay; i++) {
//     if (i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
//       days += `<div class="active">${i}</div>`;
//     } else {
//       days += `<div>${i}</div>`;
//     }
//     //console.log(i);
//   }


//   // показываю несколько дней следующего месяца
//   for (let j = 1; j <= nextDays; j++) {
//     days += `<div class="next-date">${j}</div>`;
//     monthDays.innerHTML = days;
//   }

// };

// // работа стрелочки предыдущего месяца
// document.querySelector('.calendar__prev').addEventListener('click', () => {
//   date.setMonth(date.getMonth() - 1);
//   renderCalendar();
// });

// // работа стрелочки следующего месяца
// document.querySelector('.calendar__next').addEventListener('click', () => {
//   date.setMonth(date.getMonth() + 1);
//   renderCalendar();
// });

// renderCalendar();


// // выбор диапазона дат
// document.querySelector('.calendar__btn-submit').onclick = function () {
//   let dateStart = document.querySelector('.start-date').value;
//   let dateEnd = document.querySelector('.end-date').value;
//   // пересчитываем время в милисекунды
//   dateStart = Date.parse(dateStart);
//   dateEnd = Date.parse(dateEnd);
//   for (let i = dateStart; i <= dateEnd; i = i + 24 * 60 * 60 * 1000) {
//     console.log(new Date(i).toISOString().substr(0, 10));

//   }

// };
