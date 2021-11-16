function _createRegModal() {
	const regModal=document.createElement('div');
	regModal.classList.add('.registration-form');
}

$.modal=function() {
	return {
		open() {},
		close() {},
		destroy() {}
	}
}