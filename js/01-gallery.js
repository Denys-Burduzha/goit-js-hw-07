import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const openPictursContainer = document.querySelector('.gallery')

const galleryMarkup = createPictureMarkup(galleryItems)

openPictursContainer.insertAdjacentHTML('beforeend', galleryMarkup);


openPictursContainer.addEventListener('click', onPicturesContainerClick);



function createPictureMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`;

    })
        .join('');
};

function onPicturesContainerClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
        return;
    };
    
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`)
    instance.show()
    console.log(instance)

    window.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            instance.close()
        }
    }, { "once": true }); 
    console.log(openPictursContainer);
     console.log(window.addEventListener)
   
};






