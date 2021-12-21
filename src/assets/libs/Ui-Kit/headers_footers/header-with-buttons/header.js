// переключение активной ссылки меню
var menuHeader = document.querySelector('.menu__list');
for (let i = 0; i < menuHeader.children.length; i++) {
  menuHeader.children[i].querySelector('.menu__list-link').classList.remove('active');
  menuHeader.children[i].querySelector('.menu__list-link').onclick = active;
}

function active() {
  for (let i = 0; i < menuHeader.children.length; i++) {
    menuHeader.children[i].querySelector('.menu__list-link').classList.remove('active');
    this.classList.add('active');
  }
} // TODO подумать как переписать этот код чтобы при клике вне меню класс актив убирался


// меню бургер при ширине экрана меньше чем 767px
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});