import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
	gallery: document.querySelector(".gallery"),
}

const galleryPics = galleryItems.map(item => 
`<div class="gallery__item">
	<a class="gallery__link" href="${item.original}">
		<img
			class="gallery__image"
			src="${item.preview}"
			data-source="${item.original}"
			alt="Image description"
		/>
	</a>
</div>`
).join('');

refs.gallery.insertAdjacentHTML("beforeend", galleryPics);

let instance = "";

refs.gallery.addEventListener('click', onImageClick);


function onImageClick(evt) {
	evt.preventDefault();
	galleryItems.map(item => {
		if(evt.target.currentSrc.includes(item.preview)) {
			instance = basicLightbox.create(`
    	<img src="${item.original}">
			`)
			instance.show()
			refs.gallery.addEventListener('keydown', onEscPress);
		}
	})
}

function onEscPress(evt) {
	if(evt.key === "Escape") {
		instance.close()
		refs.gallery.removeEventListener('keydown', onEscPress);
	}
} 


