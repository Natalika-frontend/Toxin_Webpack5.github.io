import '../../form-elements/dropdown/dropdown-people/dropdown-people';
// let openCalendar = document.querySelector('.search-form__item');

// openCalendar.addEventListener('click', function (e) {
//   let calendar = document.querySelector('.calendar');
//   calendar.style.display = calendar.style.display === "none" ? "flex" : "none";
//   console.log(calendar);
// });

let openDropdown = document.querySelector('.dropdown');

openDropdown.addEventListener('click', function () {
  let dropdown = document.querySelector('.search-form__dropdown');
  dropdown.classList.add('active');
  openDropdown.classList.add('active');
})
