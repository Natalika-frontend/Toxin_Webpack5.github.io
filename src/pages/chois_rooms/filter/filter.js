import noUiSlider from 'nouislider';
import marginSlider from 'nouislider';

var priceSlider = document.querySelector('.price-filter');

noUiSlider.create(priceSlider, {
  start: [30, 64],
  step: 2,
  connect: true,
  range: {
    'min': 0,
    'max': 100
  }
});

// показывает и меняет цену номера
// var marginMin = document.getElementById('slider-margin-value-min'),
//   marginMax = document.getElementById('slider-margin-value-max');

// marginSlider.noUiSlider.on('update', function (values, handle) {
//   if (handle) {
//     marginMax.innerHTML = values[handle];
//   } else {
//     marginMin.innerHTML = values[handle];
//   }
// });