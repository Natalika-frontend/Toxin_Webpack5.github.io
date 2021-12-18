const ratings = document.querySelectorAll('.rating');
if (ratings.length > 0) {
  initRatings();
}

// основная функция
function initRatings() {
  let ratingActive, ratingValue;

  // перебираем все рейтинги на странице
  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }

  // инициализируем первый рейтинг
  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidth();

    if (rating.classList.contains('rating_set')) {
      setRating(rating);
    }
  }

  // инициализируем переменные
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active');
    ratingValue = rating.querySelector('.rating__value');
  }

  // изменяем ширину активных звёзд
  function setRatingActiveWidth(index = ratingValue.innerHTML) {
    const ratingActiveWidth = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidth}%`;
  }

  // возможность указать оценку
  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating__item');
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener("mouseenter", function (e) {
        // обновление переменных
        initRatingVars(rating);
        // обновление активных звёзд
        setRatingActiveWidth(ratingItem.value);
      });
      ratingItem.addEventListener("mouseleave", function (e) {
        // обновление активных звёзд
        setRatingActiveWidth();
      });
      ratingItem.addEventListener("click", function (e) {
        // обновление переменных 
        initRatingVars(rating);

        // отправить на сервер 
        if (rating.dataset.ajax) {
          setRatingValue(ratingItem.value, rating);
        } else {
          // отобразить указанную оценку
          ratingValue.innerHTML = index + 1;
          setRatingActiveWidth();
        }
      });
    }
  }
}