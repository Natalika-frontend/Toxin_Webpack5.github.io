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
	$('.main__chois').hide(1000,function() {
		$('.main__registration').show(1000);
	});
	$('.main__login').hide(1000,function() {
		$('.main__registration').show(1000);
	});
});

// кнопка войти
$('.header__btn-login').click(function() {
	$('.main__chois').hide(1000,function() {
		$('.main__login').show(1000);
	});
	$('.main__registration').hide(1000,function() {
		$('.main__login').show(1000);
	});
});

// клик на логотипе
$('.logo').click(function() {
	$('.main__login').hide(1000,function() {
		$('.main__chois').show(1000);
	});
	$('.main__registration').hide(1000,function() {
		$('.main__chois').show(1000);
	});
});
