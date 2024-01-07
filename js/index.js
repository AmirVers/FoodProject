import tabs from './modules/tabs';
import timer from './modules/timer';
import modal from './modules/modal';
import slides from './modules/slides';
import forms from './modules/forms';
import cards from './modules/cards';
import calc from './modules/calc';

window.addEventListener('DOMContentLoaded', () => {
	tabs(
		'.tabheader__item',
		'.tabcontent',
		'.tabheader__items',
		'.tabheader__item_active'
	);
	timer('.timer', '1 January 2024');
	modal('[data-modal]', '.modal');
	slides({
		container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
	});
	forms('form');
	cards();
	calc();
});
