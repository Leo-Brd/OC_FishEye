// Lightbox logic for viewing photographer's photos
let lightboxMedias = [];
let currentLightboxIndex = 0;

function openLightbox(medias, startIndex) {
	lightboxMedias = medias;
	currentLightboxIndex = startIndex;
	const modal = document.getElementById('lightbox_modal');
	modal.style.display = 'flex';
	modal.setAttribute('aria-hidden', 'false');
	showLightboxMedia(currentLightboxIndex);
	// Focus for accessibility
	modal.focus();
}

function closeLightbox() {
	const modal = document.getElementById('lightbox_modal');
	modal.style.display = 'none';
	modal.setAttribute('aria-hidden', 'true');
}

function showLightboxMedia(index) {
	const media = lightboxMedias[index];
	const container = document.querySelector('.lightbox-image-container');
	const title = document.getElementById('lightbox-title');
	if (!media || !container || !title) return;

	// Clean up previous media
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	let mediaElem;
	if (media.src.match(/\.(mp4|webm|ogg)$/i)) {
		mediaElem = document.createElement('video');
		mediaElem.src = media.src;
		mediaElem.setAttribute('controls', '');
		mediaElem.setAttribute('aria-label', media.title + ', vidéo');
		mediaElem.className = 'lightbox-video';
	} else {
		mediaElem = document.createElement('img');
		mediaElem.src = media.src;
		mediaElem.alt = media.title;
		mediaElem.id = 'lightbox-image';
	}
	container.appendChild(mediaElem);
	container.appendChild(title);
	title.textContent = media.title;
}

function nextLightboxMedia() {
	if (lightboxMedias.length === 0) return;
	currentLightboxIndex = (currentLightboxIndex + 1) % lightboxMedias.length;
	showLightboxMedia(currentLightboxIndex);
}

function prevLightboxMedia() {
	if (lightboxMedias.length === 0) return;
	currentLightboxIndex = (currentLightboxIndex - 1 + lightboxMedias.length) % lightboxMedias.length;
	showLightboxMedia(currentLightboxIndex);
}

// Event listeners for arrows and close button
window.addEventListener('DOMContentLoaded', () => {
	const modal = document.getElementById('lightbox_modal');
	if (!modal) return;
	modal.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
	modal.querySelector('.lightbox-arrow-left').addEventListener('click', prevLightboxMedia);
	modal.querySelector('.lightbox-arrow-right').addEventListener('click', nextLightboxMedia);
	// Keyboard navigation
	modal.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowLeft') prevLightboxMedia();
		else if (e.key === 'ArrowRight') nextLightboxMedia();
		else if (e.key === 'Escape') closeLightbox();
	});
});
