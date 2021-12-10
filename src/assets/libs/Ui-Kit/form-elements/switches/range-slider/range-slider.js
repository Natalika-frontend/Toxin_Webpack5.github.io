import marginSlider from 'nouislider';
import noUiSlider from 'nouislider';
import wNumb from '../../../../wNumb.min';


var priceSlider = document.querySelector('.price-filter');

noUiSlider.create(priceSlider, {
  start: [5000, 10000],
  step: 100,
  connect: true,
  tooltips: [true, true],
  range: {
    'min': 0,
    'max': 16000
  },
  format: wNumb({
    decimals: 0,
    thousand: ' '
  })
});

// показывает и меняет цену номера
// var marginMin = document.querySelector('.value-price-min'),
//   marginMax = document.querySelector('.value-price-max');

// marginSlider.noUiSlider.on('update', function (values, handle) {
//   if (handle) {
//     marginMax.innerHTML = values[handle];
//   } else {
//     marginMin.innerHTML = values[handle];
//   }
// });

// ! Придумать, как найти метод on из 27 строки