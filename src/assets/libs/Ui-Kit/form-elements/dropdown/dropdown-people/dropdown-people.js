const counter = function () {
  const btns = document.querySelectorAll('.counter__btn');

  btns.forEach(btn => {
    btn.addEventListener('click', function (e) {

      const direction = this.dataset.direction; // записываем в переменную либо "-", либо "+"
      const inp = this.parentElement.querySelector('.counter__value');
      const currentValue = +inp.value;

      let newValue;
      if (direction === 'plus') {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

      inp.value = newValue;
    })

  })
};
counter();
