// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {
	function slider() {

		let image = document.querySelector(`#image`);

		if (image === null) return;

		let dots = document.querySelector(`#dots`);
		let dotsImg = dots.querySelectorAll(`img`);
		dots.addEventListener(`click`, function (evt) {
			if (evt.target.matches(`.article-project__buulet-img`)) {
				dotsImg.forEach(img => {
					img.classList.remove(`active`);
				});
				image.src = evt.target.src;
				evt.target.classList.add(`active`);
			}
		})
	}
	slider();


})