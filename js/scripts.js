'use strict';

const startCarousel = function() {

	const arrowPrev = document.querySelector('.carousel__arrow-prev'), // Arrows
				arrowNext = document.querySelector('.carousel__arrow-next'), //
				carouselRow = document.querySelector('.carousel__row'),
				carouselItems = document.getElementsByClassName('carousel__item'), // Slides
				dotsList = document.querySelector('.carousel__dots');
			
	let current = 0,
			step = 250,
			dots,
			dotIndex = 0;

	// Adds colors to slides and gives them a number
	const slideColor = function() {

		const slideColors = ['#E3E8FF', '#F7FFE3', '#E3FFF5', '#FFD8D8'];
		let colorIndex = 0;

		for (let i = 0; i < carouselItems.length; i++) {
			carouselItems[i].innerText = i + 1;
			if (i >= slideColors.length) {
				carouselItems[i].style.backgroundColor = slideColors[colorIndex++];
			} else {
				carouselItems[i].style.backgroundColor = slideColors[i];
			}
		}

	};

	slideColor();

	// Left and Right arrows
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

	// Creates dots depending on the amount of slides
	const createDots = function() {

		const dot = document.createElement('div');

		dot.className = 'carousel__dot';
		dot.innerText = dotIndex++;
		dotsList.appendChild(dot);

		dots = document.getElementsByClassName('carousel__dot');

	};

	for (let i = 0; i < carouselItems.length; i++) {
		createDots();
	}

	// Adds eventlisteners to dots
	for (let i = 0; i < dots.length; i++) {
		dots[i].addEventListener('click', function() {

			current = Number(this.innerText);

			carouselRow.style.marginLeft = '-' + step * (current) + 'px';

			dotsRefresh();

		});
	}

	// Updates styles of dots each time slides change
	const dotsRefresh = function() {
		for (let i = 0; i < dots.length; i++) {
			dots[i].classList.remove('carousel__dot_active');
			dots[current].classList.add('carousel__dot_active');
		}
	};

	dotsRefresh();
	
};

startCarousel();
