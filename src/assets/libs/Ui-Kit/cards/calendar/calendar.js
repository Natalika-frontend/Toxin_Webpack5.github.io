/*
(function (selector) {

  initCalendar(document.querySelector(selector));// TODO доработать календарь

  var dates = document.querySelector('.calendar__days');

  function initCalendar(calendar) {
    let date = new Date();
    let showedYear = date.getFullYear();
    let showedMonth = date.getMonth();
    var currentMoment = {
      year: showedYear,
      month: showedMonth,
      date: date.getDate(),
    };

    const info = document.querySelector('.calendar__info');

    drawCalendar(showedYear, showedMonth, currentMoment, calendar);

    let prev = document.querySelector('.calendar__prev');
    let next = document.querySelector('.calendar__next');

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
      drawDates();
      showInfo(showedYear, showedMonth, info);
      showCurrentDate();
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
      elem.innerHTML = getMonthName(month) + " " + year; // Получаем в календарь текущий месяц
    }

    function getMonthName(num) {
      let months = ["Январь",
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
        "Декабрь"];
      return months[num];
    };

    function drawDates(year, month, dates) {
      let arr = [];
      date = new Date();
      //date.setDate(1);

      //let pushElemsNum = getPushElemsNum(year, month);
      let firstDateOfMonth = 1;
      let lastDateOfMonth = getLastDayOfMonth(year, month);
      let firstDayIndex = date.getDay() - 1;
      //let prevDays = ;

      var prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
      var lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
      var nextDays = 7 - lastDayIndex;

      arr = createArr(firstDateOfMonth, lastDateOfMonth);
      console.log(arr);
      // arr = unshiftElems(firstDayIndex, arr);
      // arr = pushElems(pushElemsNum, arr);

      createDates(arr, dates);
    }

    function getReaDayOfWeekNum(jsNumOfDay) {
      if (lsNumOfDay == 0) {
        return 7
      } else {
        return jsNumOfDay;
      }
    }

    function getLastDayOfMonth(year, month) {
      let day = new Date(year, month + 1, 0);
      return day.getDate();
    }

    function getFirstWeekDayOfMonthNum(year, month) {
      let date = new Date(year, month, 1);
      return date.getDay();
    }

    function getLasttWeekDayOfMonthNum(year, month) {
      let date = new Date(year, month + 1, 0);
      return date.getDay();
    }

    function createDates(arr, parent) {
      // parent.innerHTML = '';
      for (let i = 0; i < arr.length; i++) {
        let divs = document.createElement('div');
        divs.innerHTML = arr[i];
        parent.appendChild(divs);
      }
    }

    function createArr(from, to) {
      let arr = [];
      for (let i = from; i <= to; i++) {
        arr.push(i);
      }
      return arr;
    }

    // function unshiftElems(num, elem, arr) {
    //   for (let i = num; i > 0; i--) {
    //     arr.unshift(elem); // показываю несколько дней предыдущего месяца
    //   }
    //   return arr
    // }

    // function pushElems(num, arr) {

    // }

    // days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;

    // days += `<div>${i}</div>`;
    // for (let j = 1; j <= nextDays; j++) {
    //   days += `<div class="next-date">${j}</div>`;
    //   document.innerHTML = days; // показываю несколько дней следующего месяца
    // }
  }
}('.calendar'));
*/
