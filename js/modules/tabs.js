function tabs(theTabsItem, theTabsContent, theTabsParent, activeClass) {
	const tabs = document.querySelectorAll(theTabsItem),
		tabsContent = document.querySelectorAll(theTabsContent),
		tabsParent = document.querySelector(theTabsParent);

	function hideTabs() {
		tabsContent.forEach((item) => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach((item) => {
			item.classList.remove(activeClass.slice(1));
		});
	}

	function showTabs(i = 0) {
		tabsContent[i].classList.add('show', 'fade');

		tabsContent[i].classList.remove('hide');

		tabs[i].classList.add(activeClass.slice(1));
	}

	hideTabs();
	showTabs(0);

	tabsParent.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.classList.contains(theTabsItem.slice(1))) {
			tabs.forEach((item, i) => {
				if (item == target) {
					hideTabs();
					showTabs(i);
				}
			});
		}
	});
}
export default tabs;
