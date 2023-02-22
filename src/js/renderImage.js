import refs from "./refs";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import clearConteiner from './clearConteiner';
import createMarkup from './createMarkup';
import { showMoreBtn, searchBtn } from './buttonClass';

export default function renderImage(searchedImages, conteiner){
    const arrayOfImages = searchedImages.hits;
        if(arrayOfImages.length === 0) {
            Notify.warning('Sorry, there are no images matching your search query. Please try again.');
            showMoreBtn.hide();
            clearConteiner(conteiner);
            return;
    } 
    conteiner.insertAdjacentHTML("beforeend", createMarkup(arrayOfImages));
    searchBtn.disable();
    showMoreBtn.enable();
    showMoreBtn.updateTextContent('Load more');
    setLightbox();
    smoothScroll();    
}

function smoothScroll() {
    const { height: cardHeight } = refs.gallery
    .firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
    });
}

function setLightbox() { 
    return new SimpleLightbox('.gallery a', {
    captionDelay: 250, 
    });
}