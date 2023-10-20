import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const list = document.querySelector('.gallery');

function renderList(images) {
  const markup = images.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item" >
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" >
      </a>
    </li>`
  }).join('');
  console.log(markup);
  list.innerHTML = markup;
}

renderList(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
})

console.log(galleryItems);
