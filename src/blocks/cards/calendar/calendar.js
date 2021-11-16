const date=new Date();
const year=date.getFullYear(); // получаю год в шапке календаря
const renderCalendar=() => {
	date.setDate(1);
	const monthDays=document.querySelector('.days');
	const lastDay=new Date(date.getFullYear(),date.getMonth()+1,0).getDate(); // корректный последний день месяца
	const prevLastDay=new Date(date.getFullYear(),date.getMonth(),0).getDate();
	const firstDayIndex=date.getDay()-1;
	const lastDayIndex=new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
	const nextDays=7-lastDayIndex;

	const month=[
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

	document.querySelector('.date h2').innerHTML=month[date.getMonth()]+" "+year; // Получаем в календарь текущий месяц и год

	let days="";

	for(let x=firstDayIndex;x>0;x--) {
		days+=`<div class="prev-date">${prevLastDay-x+1}</div>`; // показываю несколько дней предыдущего месяца
	}

	for(let i=1;i<=lastDay;i++) {
		if(i===new Date().getDate()&&date.getMonth()===new Date().getMonth()) {
			days+=`<div class="active">${i}</div>`;
		} else {
			days+=`<div>${i}</div>`;
		}
	}

	for(let j=1;j<=nextDays;j++) {
		days+=`<div class="next-date">${j}</div>`;
		monthDays.innerHTML=days;
	}

};

document.querySelector('.prev').addEventListener('click',() => {
	date.setMonth(date.getMonth()-1);
	renderCalendar();
});

document.querySelector('.next').addEventListener('click',() => {
	date.setMonth(date.getMonth()+1);
	renderCalendar();
});

renderCalendar();
