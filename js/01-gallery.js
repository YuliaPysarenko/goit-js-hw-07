import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(`.gallery`);
const galleryItemsEl = createdGalleryItemsEl(galleryItems);

 galleryEl.insertAdjacentHTML(`beforeend`, galleryItemsEl);

function createdGalleryItemsEl(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
   return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
    }).join(``);
}

console.log(galleryItemsEl);

//  let imageOneEl = null;
galleryEl.addEventListener(`click`, onGalleryItemOriginal);

function onGalleryItemOriginal(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }
// const isGalleryItemOriginal = event.target.classList.contains(`.gallery__item`);

  // if (!isGalleryItemOriginal) {
  //   return;
  // }
  //  console.log(event.target.dataset.original);



  // removeActiveClassImage();
 
  // event.target.classList.add(`active`);
  
  // imageOneEl = event.target.dataset.source.original;
  // console.log(imageOneEl);

  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"
width="800" height="600"/>`);
 
  instance.show();

  blockAction(event);
}

// function removeActiveClassImage() {
//    const images = document.querySelector(`.active`);

//   if (images) {
//   images.classList.remove(`active`);
// }
// }

galleryEl.addEventListener("keydown" , onEscapeCloseModal)

function onEscapeCloseModal(event) {
  if (event.code === "Escape") {
    instance.close();
  }
  
}

function blockAction(event) {
  event.preventDefault();
}

