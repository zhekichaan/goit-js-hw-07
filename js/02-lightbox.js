import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
	gallery: document.querySelector(".gallery"),
}

const galleryPics = galleryItems.map(item => 
`<a class="gallery__item" href="${item.original}">
<img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`
).join('');

refs.gallery.insertAdjacentHTML("beforeend", galleryPics);

new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
});