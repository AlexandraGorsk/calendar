const year = document.getElementById('year');
const month = document.getElementById('month');
const left = document.querySelector('#left');
const right = document.querySelector('#right');
const monthDays = document.querySelector('.days');
year.style.cssText = `
    font-weight: 800;
    font-size:30px;
    text-align:center;
    padding: 7px;
  `;
month.style.cssText = `
    font-weight: 800;
    font-size:30px;
    text-align:center;
    padding: 7px;
  `;

const date = new Date();
const renderCalendar = () => {
	date.setDate(1);

	const lastDay = new Date(
		date.getFullYear(),
		date.getMonth() + 1,
		0
	).getDate(); //31
	const prevLastDay = new Date(
		date.getFullYear(),
		date.getMonth(),
		0
	).getDate();
	const firstDayIndex = date.getDay() - 1;
	const lastDayIndex =
		new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay()-1;
	console.log(firstDayIndex);
	console.log(lastDayIndex);
	const nextDays = 6 - lastDayIndex;
	console.log(nextDays);
	let months = [
		'Январь',
		'Февраль',
		'Март',
		'Апрель',
		'Май',
		'Июнь ',
		'Июль',
		'Август',
		'Сентябрь',
		'Октябрь',
		'Ноябрь',
		'Декабрь',
	];
	year.innerHTML = date.getFullYear();
	function writeMonth() {
		month.innerHTML = months[date.getMonth()];
	}
	writeMonth();
	let days = '';
    if (firstDayIndex ===-1) {
        for (let previousmonth = 6; previousmonth > 0; previousmonth--) 
        days += `<div class="prev-date">${prevLastDay - previousmonth + 1}</div>`
    }
	for (let previousmonth = firstDayIndex; previousmonth > 0; previousmonth--) {
		days += `<div class="prev-date">${prevLastDay - previousmonth + 1}</div>`;
	}
	for (let currentmonth = 1; currentmonth <= lastDay; currentmonth++) {
		days += `<div>${currentmonth}</div>`;
		monthDays.innerHTML = days;
	}
	for (let nextmonth = 1; nextmonth <= nextDays; nextmonth++) {
        if(lastDayIndex===-1){
            return
        }
		days += `<div class="next-date">${nextmonth}</div>`;
		monthDays.innerHTML = days;
	}
};

right.addEventListener('click', () => {
	date.setMonth(date.getMonth() + 1);
	renderCalendar();
});
left.addEventListener('click', () => {
	date.setMonth(date.getMonth() - 1);
	renderCalendar();
});
renderCalendar();
