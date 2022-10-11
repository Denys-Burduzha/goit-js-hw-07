import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const pictursContainer = document.querySelector('.gallery')
const galleryMarkup = createPictureMarkup()

console.log(createPictureMarkup());
pictursContainer.insertAdjacentHTML('beforeend', galleryMarkup);



function createPictureMarkup() {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}"
                />
            </a>
        </div>`;
    })  
        .join('');
};

const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });


    
    
 

