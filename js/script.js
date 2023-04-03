'use strict';

document.addEventListener('DOMContentLoaded', () => {

	/* мобильное меню */
	const body = document.querySelector('body'),
		menuBtn = document.querySelector('.header__menu-btn'),
		menu = document.querySelector('.header__menu'),
		menuItems = document.querySelectorAll('.header__menu .menu__item');

	menuBtn.addEventListener('click', () => openMenu());

	menuItems.forEach((item) => {
		item.addEventListener('click', () => closeMenu());
	});

	function openMenu() {
		menu.classList.toggle('open');
		menuBtn.classList.toggle('open');
		body.classList.toggle('locked');
	}

	function closeMenu() {
		menu.classList.remove('open');
		menuBtn.classList.remove('open');
		body.classList.remove('locked');
	}


	/* адаптивное изменения картинок и классов */
	const devImg = document.querySelector('.development__img'),
		marktBlocks = document.querySelectorAll('.marketing__block-wrapper');

	changeImg(devImg, 'img/content/dev-technologies-mobile.svg', 'img/content/dev-technologies.svg', 900);

	changeClass(marktBlocks, 'marketing__block-wrapper--reverse');

	/* аналогично по ресайзу */
	window.addEventListener('resize', () => {

		changeImg(devImg, 'img/content/dev-technologies-mobile.svg', 'img/content/dev-technologies.svg', 900);
		changeClass(marktBlocks, 'marketing__block-wrapper--reverse');

	});

	function changeImg(img, srcMobile, srcDesctop, breakpoint) {
		if (window.innerWidth <= breakpoint) {
			img.src = srcMobile;
			img.previousSibling.srcset = srcMobile;
		} else {
			img.src = srcDesctop;
			img.previousSibling.srcset = srcDesctop;
		}
	}

	function changeClass(blocks, classReverse) {

		if (window.innerWidth <= 600) {
			for (let i = 0; i < blocks.length; i++) {
				if (i % 2 === 0) {
					blocks[i].classList.add(classReverse);
				} else {
					blocks[i].classList.remove(classReverse);
				}
			}
		} else {
			for (let i = 0; i < blocks.length; i++) {
				if (i % 2 === 0) {
					blocks[i].classList.remove(classReverse);
				} else {
					blocks[i].classList.add(classReverse);
				}
			}
		}
	}
	
});
