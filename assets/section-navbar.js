$(document).ready(function () {
	const $menuOpenButton = $('.menu-open').not('.close');
	const $mobileMenuContainer = $('.mobile-menu-container');
	const $menuCloseButton = $('.menu-open.close');

	$menuOpenButton.on('click', function (e) {
		e.preventDefault();
		$mobileMenuContainer.addClass('active');
		$mobileMenuContainer.css('display', 'flex');
		// Force a reflow before changing opacity
		$mobileMenuContainer[0].offsetWidth;
		$mobileMenuContainer.css('opacity', '1');
	});

	$menuCloseButton.on('click', function (e) {
		e.preventDefault();
		$mobileMenuContainer.css('opacity', '0');
		// Wait for the transition to finish before hiding the menu
		setTimeout(() => {
			$mobileMenuContainer.removeClass('active');
			$mobileMenuContainer.css('display', 'none');
		}, 300); // This should match the transition duration in CSS
	});
});