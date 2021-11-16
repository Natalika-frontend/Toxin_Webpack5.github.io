//const setListener=(element,type,handler) => {
//	if(element) {
//		return;
//	}
//	element.addEventListener(type,handler);
//	return () => {
//		element.removeEventListener(type,handler);
//	};
//};

const modals=() => {
	function bindModal(trigger,modalReg,modalSearch,modalImg) {
		trigger.addEventListener('click',(e) => {
			if(e.target) {
				e.preventDefault();
			}

			modalReg.style.display="block";
			modalSearch.style.display="none";
			modalImg.addClassList=".reg";
			document.body.style.overflow="hidden";
		});

		modalReg.addEventListener('click',(e) => {
			if(e.target===modalReg) {
				modalReg.style.display="none";
				modalSearch.style.display="block";
				modalImg.addClassList=".main";
				document.body.style.overflow="";
			}
		});
	}

	const callBtnRegister=document.querySelector('.header__btn-register'),
		modalRegister=document.querySelector('.registration-form'),
		modalSearch=document.querySelector('.search-form'),
		modalImage=document.querySelector('.main');

	bindModal(callBtnRegister,modalRegister,modalSearch,modalImage);
	console.log(modalImage);
};

export default modals;