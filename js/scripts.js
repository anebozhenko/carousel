const arrowPrev = document.querySelector('.carousel__arrow-prev'),
			arrowNext = document.querySelector('.carousel__arrow-next'),
			carouselRow = document.querySelector('.carousel__row'),
			carouselItems = document.querySelectorAll('.carousel__item');
		
let current = 0,
		step = 250;

arrowPrev.addEventListener('click', function() {

	if (current === 0) {
		carouselRow.style.marginLeft = '-' + step * (carouselItems.length - 1) + 'px';
		current = carouselItems.length - 1;
	} else {
		current--;
		carouselRow.style.marginLeft = '-' + step * current + 'px';
	}

});

arrowNext.addEventListener('click', function() {

	if (current < carouselItems.length - 1) {
		carouselRow.style.marginLeft = '-' + step * (current + 1) + 'px';
		current++;
	} else {
		carouselRow.style.marginLeft = 0;
		current = 0;
	}

});