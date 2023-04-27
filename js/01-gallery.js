
import { galleryItems } from './gallery-items.js';
// Change code below this line ---- class="gallery"

const gallery = document.querySelector('.gallery');
const imagesGallery = galleryItems.reduce((img,{preview,description,original})=>img+=`<li class="gallery__item"><a class ="gallery__link" href="#"><img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}"></a></li>`,'');
gallery.insertAdjacentHTML('afterbegin', imagesGallery);

gallery.addEventListener('click',(evt)=>{
    if(!(evt.target.nodeName==="IMG")){
        return;
    }
    evt.preventDefault();
    
    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" width="800" height="600">`);
    instance.show();
    gallery.addEventListener('keydown',(evt)=>{
        if (evt.key==="Escape"){
            instance.close();
        }
    });
});

