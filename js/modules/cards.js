import { getResources } from '../services/service';
function cards() {
	class MenuContent {
		constructor(src, alt, title, descr, price, parentOfContent, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes;
			this.transfer = 37;
			this.parent = document.querySelector(parentOfContent);
			this.changeToUAH();
		}

		change() {
			const element = document.createElement('div');
			if (this.classes.length === 0) {
				this.element = 'menu__item';
				element.classList.add(this.element);
			} else {
				this.classes.forEach((className) => element.classList.add(className));
			}
			element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
            `;
			this.parent.append(element);
		}

		changeToUAH() {
			this.price *= this.transfer;
		}
	}

	getResources('http://localhost:3000/menu').then((data) => {
		data.forEach(({ img, altimg, title, descr, price }) => {
			new MenuContent(
				img,
				altimg,
				title,
				descr,
				price,
				'.menu .container'
			).change();
		});
	});
}
export default cards;
