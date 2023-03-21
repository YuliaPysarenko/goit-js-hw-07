import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(`.gallery`);
const galleryItemsEl = createdGalleryItemsEl(galleryItems);

galleryEl.insertAdjacentHTML(`beforeend`, galleryItemsEl);
 
function createdGalleryItemsEl(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
   return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`;
    }).join(``);
}


console.log(galleryItemsEl);

galleryEl.addEventListener(`click`, onGalleryItemOriginal);

function onGalleryItemOriginal(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // simpleLightboxOpen();
 console.log(lightbox);
  
  blockAction(event);
}


function blockAction(event) {
  event.preventDefault();
}



const lightbox = new SimpleLightbox('.gallery li a', {
  
  captionSelector: `img`,
  
  captionType: 'img alt="${description}"',
  captionPosition:`button`,
  captionDelay: 250,
});



// function simpleLightboxOpen() {
//     lightbox.captionPosition().animationSpeed();
//   }
//     // lightbox.show();
    // lightbox.navText();
    // lightbox.closeText();
    // lightbox.captions();
    
    
