import '../../form-elements/dropdown/dropdown-people/dropdown-people';
import '../calendar/calendar';

let startDate = document.querySelector('.start-date');

startDate.addEventListener('click', function () {
  let calendar = document.querySelector('.calendar');
  calendar.style.display = calendar.style.display === "none" ? "flex" : "none";
});

let endDate = document.querySelector('.end-date');

endDate.addEventListener('click', function () {
  let calendar = document.querySelector('.calendar');
  calendar.style.display = calendar.style.display === "none" ? "flex" : "none";
});



let openDropdown = document.querySelector('.show-dropdown');

openDropdown.addEventListener('click', function () {
  let dropdown = document.querySelector('.search-form__dropdown');
  dropdown.classList.toggle('active');
  openDropdown.classList.toggle('active');
});
