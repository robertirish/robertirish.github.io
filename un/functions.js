/* parallax */
const background = document.querySelector('#parallax-001 .parallax-inner');
var offset1 = document.querySelector('#parallax-001').offsetTop - document.querySelector('#parallax-001').clientHeight;

if (offset1 < 0) {
	offset1 = 0;
}

const parallax1 = () => {
	const { scrollY } = window;
	if (offset1 < scrollY) {
		background.style.marginTop = ((scrollY-offset1) * -.1) + 'px';
	}
}

window.addEventListener('scroll', parallax1);

/* masonry scroller */
const scrollers = document.querySelectorAll(".masonry-banner");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	addAnimation();
}

function addAnimation() {
	scrollers.forEach((scroller) => {
		scroller.setAttribute("data-animated", true);

		const scrollerInner = scroller.querySelector(".masonry-banner-inner");
		const scrollerContent = Array.from(scrollerInner.children);

		scrollerContent.forEach(item => {
			const duplicatedItem = item.cloneNode(true);
			duplicatedItem.setAttribute("aria-hidden", true);
			scrollerInner.appendChild(duplicatedItem);
		});
	});
}
