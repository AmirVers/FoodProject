function timer(theTimer, deadLine) {

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date());

		const days = Math.floor(t / (1000 * 60 * 60 * 24));
		const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
		const minutes = Math.floor((t / (1000 * 60)) % 60);
		const seconds = Math.floor(t / 1000) % 60;

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds
		};
	}

	function getZero(element) {
		if (element >= 0 && element <= 10) {
			return `0${element}`;
		} else {
			return element;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			daysCount = timer.querySelector('#days'),
			hoursCount = timer.querySelector('#hours'),
			minutesCount = timer.querySelector('#minutes'),
			secondsCount = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			daysCount.innerHTML = getZero(t.days);
			hoursCount.innerHTML = getZero(t.hours);
			minutesCount.innerHTML = getZero(t.minutes);
			secondsCount.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
				daysCount.innerHTML = '00';
				hoursCount.innerHTML = '00';
				minutesCount.innerHTML = '00';
				secondsCount.innerHTML = '00';
			}
		}
	}
	setClock(theTimer, deadLine);
}
export default timer;
