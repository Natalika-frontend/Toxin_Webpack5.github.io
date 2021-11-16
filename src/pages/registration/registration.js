const setListener=(element,type,handler) => {
	if(element) {
		return;
	}
	element.addEventListener(type,handler);
	return () => {
		element.removeEventListener(type,handler);
	};
};

const modals=() => {
	function bindModal(trigger,modal,close) {
		setListener(trigger,'click',(e) => {
			if(e.target) {
				e.preventDefault();
			}

			modal.style.display="block";
			document.body.style.overflow="hidden";
		});

		setListener(modal,'click',(e) => {
			if(e.target===modal) {
				modal.style.display="none";
				document.body.style.overflow="";
			}
		});
	}

	const callBtnRegister=document.querySelector('.header__btn-register'),
		modalRegister=document.querySelector('.registration-form');

	bindModal(callBtnRegister,modalRegister);
};

export default modals;