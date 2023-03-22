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
//  galleryEl.addEventListener(`click`, onGalleryItemOriginal);



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


// // варіант2

// function blockAction(event) {
//   event.preventDefault();
// }

// console.log(blockAction);

//  const options ={
//   onShow: (instance) => {
//      galleryEl.addEventListener(`click`, onGalleryItemOriginal);
//     //  onGalleryItemOriginal()
   
//   },
//     onClose: (instance) => {
//       galleryEl.addEventListener("keydown", onEscapeCloseModal);
//       // onEscapeCloseModal();
//     }
//   }
// // 


//   function onGalleryItemOriginal(event) {
//       if (event.target.nodeName !== "IMG") {
//         return;
//       }
    
//       instance = basicLightbox.create(
//         `<img src="${event.target.dataset.source}"
// width="800" height="600"/>`);
//   }
    
//      function onEscapeCloseModal(event) {
//       if (event.code === "Escape") {
//         instance.close();
//       }}
       


// Варіант3 

//   galleryEl.addEventListener(`click`, onGalleryItemOriginal);
//     // onGalleryItemOriginal()

//   galleryEl.addEventListener("keydown", onEscapeCloseModal);
    

//  const options = {
//   onShow: (instance) => {
//     onGalleryItemOriginal
//    },
   
//   onClose: (instance) => {
//     onEscapeCloseModal
//   },
// }

// console.log(options);

// //  function blockAction(event) {
// //   event.preventDefault();
// //  }

// function onGalleryItemOriginal(event) {
//       if (event.target.nodeName !== "IMG") {
//         return;
//       }
  
//     instance = basicLightbox.create(
//          `<img src="${event.target.dataset.source}"
// width="800" height="600"/>`);
//      }
 
// function onEscapeCloseModal(event) {
//       if (event.code === "Escape") {
//         instance.close();
//       }
//     }

// blockAction();


// Варіант 4

function blockAction(event) {
  event.preventDefault();
}

console.log(blockAction);

const options = {
   
   onShow: (instance) => {
     galleryEl.addEventListener(`click`, onGalleryItemOriginal);
     function onGalleryItemOriginal(event) {
       if (event.target.nodeName !== "IMG") {
         return;
       }
    
       instance = basicLightbox.create(
         `<img src="${event.target.dataset.source}"
width="800" height="600"/>`);
       
       blockAction(event);
       
     }
  },
   onClose: (instance) => {
      galleryEl.addEventListener("keydown",onEscapeCloseModal);

      function onEscapeCloseModal(event) {
      if (event.code === "Escape") {
        instance.close();
      }}
 
    }
  }
// 
console.log(options);


    
     



  // imageOneEl = event.target.dataset.source.original;
  // console.log(imageOneEl);


// function removeActiveClassImage() {
//    const images = document.querySelector(`.active`);

//   if (images) {
//   images.classList.remove(`active`);
// }
// }