import { closeModal, openModal } from './modal';
import { postData } from '../services/service';
function forms(form) {
	const forms = document.querySelectorAll(form);

	const message = {
		loading: 'img/form/spinner.svg',
		loaded: 'Спасибо! Скоро мы с вами свяжемся',
		error: 'Что-то пошло не так :('
	};

	forms.forEach((item) => {
		resourcePostData(item);
	});

	function resourcePostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
			form.insertAdjacentElement('afterend', statusMessage);

			postData('http://localhost:3000/requests', json)
				.then((data) => {
					console.log(data);
					showThankMessage(message.loaded);
					statusMessage.remove();
				})
				.catch(() => {
					showThankMessage(message.error);
				})
				.finally(() => {
					form.reset();
				});
		});
	}

	function showThankMessage(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');
		prevModalDialog.classList.add('hide');
		openModal('.modal');

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
            <div class = 'modal__content'>
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal('.modal');
		}, 4000);
	}
}
export default forms;
