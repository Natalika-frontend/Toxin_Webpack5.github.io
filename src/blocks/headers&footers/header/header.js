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
export function pages() {
	const buttonReg=document.querySelector('.header__btn-registration');
	const choisRoom=document.querySelector('.main-chois');
	const registration=document.querySelector('.main-registration');
	const login=document.querySelector('.header__btn-login');

	function showPage(trigger,pageOpen,pageClose) {
		trigger.addEventListener('click',(e) => {
			if(e.target) {
				e.preventDefault();
			}
			pageOpen.style.display='block';
			pageClose.style.display='none';
		});
	}

	showPage(buttonReg,registration,choisRoom);
}
