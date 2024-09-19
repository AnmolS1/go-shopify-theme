document.addEventListener('DOMContentLoaded', function () {
	const menuOpenButton = document.querySelector('.menu-open');
	const mobileMenuContainer = document.querySelector('.mobile-menu-container');
	const menuCloseButton = document.querySelector('.menu-open.close');

	menuOpenButton.addEventListener('click', function (e) {
		e.preventDefault();
		mobileMenuContainer.classList.add('active');
		// Set display to flex immediately to start the opacity transition
		mobileMenuContainer.style.display = 'flex';
		// Force a reflow before changing opacity
		void mobileMenuContainer.offsetWidth;
		mobileMenuContainer.style.opacity = '1';
	});

	menuCloseButton.addEventListener('click', function (e) {
		e.preventDefault();
		mobileMenuContainer.style.opacity = '0';
		// Wait for the transition to finish before hiding the menu
		setTimeout(() => {
			mobileMenuContainer.classList.remove('active');
			mobileMenuContainer.style.display = 'none';
		}, 300); // This should match the transition duration in CSS
	});
});