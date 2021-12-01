// переключение активной ссылки меню
var menuHeader=document.querySelector('.menu__list');
for(let i=0;i<menuHeader.children.length;i++) {
	menuHeader.children[i].querySelector('.menu__list-link').classList.remove('active');
	menuHeader.children[i].querySelector('.menu__list-link').onclick=active;
}

export function active() {
	for(let i=0;i<menuHeader.children.length;i++) {
		menuHeader.children[i].querySelector('.menu__list-link').classList.remove('active');
		this.classList.add('active');
	}
}

// кнопка регистрации
$('.header__btn-registration').click(function() {
	$('.main__chois').hide(300,function() {
		$('.main__registration').show(300);
		$('.main__login').hide(300);
	});
});

// кнопка войти
$('.header__btn-login').click(function() {
	$('.main__chois').hide(300,function() {
		$('.main__registration').hide(300);
		$('.main__login').show(300);
	});
});

// клик на логотипе
$('.logo').click(function() {
	$('.main__login').hide(300,function() {
		$('.main__registration').hide(300);
		$('.main__chois').show(300);
	});
});

// клик на кнопке войти в форме регистрации
$('.login__btn').click(function() {
	$('.main__registration').hide(300,function() {
		$('.main__chois').hide(100);
		$('.main__login').show(300);
	});
});

// клик на кнопке создать в форме входа
$('.registration-btn').click(function() {
	$('.main__login').hide(300,function() {
		$('.main__chois').hide(100);
		$('.main__registration').show(300);
	});
});

// все работает, только когда по кнопкам формы кликаешь второй раз, перезагружается и выдает стартовую страницу