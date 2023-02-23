import lightbox from "./lightbox";
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
    lightbox.refresh();
}