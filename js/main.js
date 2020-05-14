const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__list');

burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	menu.classList.toggle('active');
	document.body.classList.toggle('lock1');
})



// Модальное окно

let btns = document.querySelectorAll('.contacts__btn'),
	modalOverlay = document.querySelector('.modal-overlay'),
	modal = document.querySelector('.modal'),
	closeBtn = document.querySelector('.modal__close');

btns.forEach(el => {
	el.addEventListener('click', function () {
		modalOverlay.classList.add('active');
		modal.classList.add('active');
		disScroll();

	})
});

modalOverlay.addEventListener('click', function (ev) {
	console.log(ev.target)
	if (ev.target === modalOverlay) {
		modalOverlay.classList.remove('active');
		modal.classList.remove('active');
		enableScroll();

	}
})

closeBtn.addEventListener('click', function () {

	modalOverlay.classList.remove('active');
	modal.classList.remove('active');
	enableScroll();


})

// Отключение скролла

const disScroll = () => {
	let pagePosition = window.scrollY;
	console.log(pagePosition)
	document.body.classList.add('lock');
	document.body.dataset.position = pagePosition;
	document.body.style.top = -pagePosition + 'px';
}

const enableScroll = () => {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	document.body.style.top = 'auto';
	document.body.classList.remove('lock');
	window.scroll({ top: pagePosition, left: 0 });
	document.body.removeAttribute('data-position');
}

// Картинку в фон

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {

			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

// Свайперы

const mySwiper = new Swiper('.slider-main__body', {

	slidesPerView: 1,
	autoHeight: true,

	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1,
		},
		769: {
			slidesPerView: 1,
			navigation: {
				nextEl: '.slider-main__next',
				prevEl: '.slider-main__prev',
			},
		}
	}
});

const mySwiperTwo = new Swiper('.slider2', {

	slidesPerView: 1,
	autoHeight: true,
	navigation: {
		nextEl: '.slider2__next',
		prevEl: '.slider2__prev',
	},
})

// Маска телефона

let input = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(input);

//Валидация

const validateForm = (selector, rules) => {
	new window.JustValidate(selector, {
		rules: rules
	});
}

validateForm('.consultation__form',
	{
		email: { required: true, email: true },
		name: { required: true },
		tel: { required: true }
	});

validateForm('.modal__form',
	{
		name: { required: true },
		tel: { required: true }
	})

