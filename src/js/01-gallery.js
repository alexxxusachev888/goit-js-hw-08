import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import {
  galleryItems
} from './gallery-items';
// Change code below this line

const galleryElem = document.querySelector('.gallery');

const galleryItemsMarkup = createImgMarkup(galleryItems);

galleryElem.insertAdjacentHTML('afterbegin', galleryItemsMarkup);

function createImgMarkup(items) {
  return items.map(({
    preview,
    original,
    description
  }) => {
    return `
    <a class ="gallery__item" href="${original}" >
      <img class = "gallery__image"
      src = "${preview}"
      alt = "${description}"
      title = "${description}"/>
    </a>
  `;
  }).join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'title',
  captionPosition: 'bottom',
  captionDelay: 250,
});