(() => {
	const stepBlocks = Array.from(document.querySelectorAll('.main-nav-block'));

	function init() {
		document
			.querySelectorAll('.form>div:not(.progress-block)')
			.forEach((el, index) => {
				observeDisplayChange(el, () => {
					const stepindex = Math.min(index, 6);
					if (el.style.display === 'block') {
						updateStep(stepindex);
					}
				});
			});
	}

	function updateStep(index) {
		stepBlocks.forEach((block) => block.classList.remove('is-active'));
		stepBlocks[index].classList.add('is-active');
	}

	function observeDisplayChange(element, callback) {
		if (!element) return;
		let lastDisplay = getComputedStyle(element).display;

		const observer = new MutationObserver(() => {
			const currentDisplay = getComputedStyle(element).display;

			callback();
		});

		observer.observe(element, { attributes: true, attributeFilter: ['style'] });
		return observer; // Return observer if you want to disconnect later
	}

	document.addEventListener('DOMContentLoaded', init);
})();
