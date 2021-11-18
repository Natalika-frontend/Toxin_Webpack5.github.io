// переключение активной ссылки меню
var menuHeader=document.querySelector('.menu__list');
for(let i=0;i<menuHeader.children.length;i++) {
	menuHeader.children[i].querySelector('.menu__list-link').classList.remove('active');
	menuHeader.children[i].querySelector('.menu__list-link').onclick=active;
	console.log(menuHeader);
}

function active() {
	for(let i=0;i<menuHeader.children.length;i++) {
		menuHeader.children[i].querySelector('.menu__list-link').classList.remove('active');
		this.classList.add('active');
	}
}

export default active();