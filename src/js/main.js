import "modern-normalize";
import "../css/styles.css";

import "simplelightbox/dist/simple-lightbox.css";
import SimpleLightbox from "simplelightbox";
import { galleryItems } from "./gallery-items";

console.log(SimpleLightbox);

// Change code below this line
const galleryEl = document.querySelector(".gallery");

function makeGalleryItemsMarkup(items) {
  return items
    .map(({ original, preview, description }) => {
      return `
		<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}
galleryEl.innerHTML = makeGalleryItemsMarkup(galleryItems);
// Использую Node.js 24 и Vite 8. В этой версии simplelightbox импортируется как объект с default, поэтому библиотека корректно работает только через SimpleLightbox.default.
const lightbox = new SimpleLightbox.default(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
// console.log(galleryItems);
