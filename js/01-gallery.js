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

 galleryEl.addEventListener("click", onGalleryItemOriginal);
//  galleryEl.removeEventListener("keydown", onEscapeCloseModal);

// Варіант 1


function onGalleryItemOriginal(event) {

  if (event.target.nodeName !== "IMG") {
    return;
  }  

const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}"
width="800" height="600"/>`,

{
  onShow: (instance) => { window.addEventListener("keydown",  onEscapeCloseModal) },
  onClose: (instance) => { window.removeEventListener("keydown", onEscapeCloseModal) },
}
);
    

  instance.show();
  onEscapeCloseModal(event);
  blockAction(event);
}

function onEscapeCloseModal(event) {
  if (event.code === "Escape") {
   instance.close();
  } 
}

function blockAction(event) {
  event.preventDefault();
}

 
  // onShow: (instance) => {
//      galleryEl.addEventListener(`click`, onGalleryItemOriginal);
//     //  onGalleryItemOriginal()
   
//   },
//     onClose: (instance) => {
//       galleryEl.addEventListener("keydown", onEscapeCloseModal);
//       // onEscapeCloseModal();
//     }



// Варіант1

// function onGalleryItemOriginal(event) {
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }

//   const instance = basicLightbox.create(
//     `<img src="${event.target.dataset.source}"
// width="800" height="600"/>`);
 
//   instance.show();

//   blockAction(event);
// }


// galleryEl.addEventListener("keydown" , onEscapeCloseModal)

// function onEscapeCloseModal(event) {
//   if (event.code === "Escape") {
//     instance.close();
//   }
  
// }

// function blockAction(event) {
//   event.preventDefault();
// }

