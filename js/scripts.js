const startCarousel = function() {

	const arrowPrev = document.querySelector('.carousel__arrow-prev'),
				arrowNext = document.querySelector('.carousel__arrow-next'),
				carouselRow = document.querySelector('.carousel__row'),
				carouselItems = document.querySelectorAll('.carousel__item')
				dots = document.querySelectorAll('.carousel__dot');
			
	let current = 0,
			step = 250
			dotsIndex = 0;

	arrowPrev.addEventListener('click', function() {

		if (current === 0) {
			carouselRow.style.marginLeft = '-' + step * (carouselItems.length - 1) + 'px';
			current = carouselItems.length - 1;
		} else {
			current--;
			carouselRow.style.marginLeft = '-' + step * current + 'px';
		}

		dotsRefresh();

	});

	arrowNext.addEventListener('click', function() {

		if (current < carouselItems.length - 1) {
			carouselRow.style.marginLeft = '-' + step * (current + 1) + 'px';
			current++;
		} else {
			carouselRow.style.marginLeft = 0;
			current = 0;
		}

		dotsRefresh();

	});

	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener('click', function() {

			current = Number(this.innerText);

			carouselRow.style.marginLeft = '-' + step * (current) + 'px';

			dotsRefresh();

		});
	}

	const dotsRefresh = function() {
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('carousel__dot_active');
			dots[current].classList.add('carousel__dot_active');
		}
	}
	
};

startCarousel();
