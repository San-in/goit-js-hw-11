import './css/styles.css';
import 'animate.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import refs from './js/refs';
import renderImage from './js/renderImage';
import fetchImages from './js/api';
import checkCapacityOfGallery from './js/checkCapacityOfGallery';
import clearConteiner from './js/clearConteiner';
import SearchParams from './js/searchParams';
import { showMoreBtn, searchBtn } from './js/buttonClass';
import addLoadingStylesOnBtn from './js/addLoadingStylesOnBtn';
import smoothScroll from './js/smoothScroll';

const ENDPOINT = 'https://pixabay.com/api/';
const searchParams = new SearchParams({
    q: '',
    key: '18207313-9460c279493d4296cd58108b0',
    image_type:'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 40,
});

refs.form.addEventListener('submit', onSubmit);
refs.showMoreBtn.addEventListener('click', onShowMoreBtn);
refs.input.addEventListener('input', onInput);

function onShowMoreBtn() {
    searchParams.increasePageByOne();
    addLoadingStylesOnBtn(showMoreBtn);
        fetchImages(ENDPOINT,searchParams)
        .then(images => {
            checkCapacityOfGallery({
                dataOfImages: images,
                params: searchParams,
                button: showMoreBtn});
            renderImage(images, refs.gallery);
            smoothScroll();    
        })
        .catch(Notify.failure);  
}

function onInput(event) {
    if(event.target.value.trim()) {
        searchBtn.enable();
        showMoreBtn.disable();
    } else {
        searchBtn.disable();
        showMoreBtn.enable();
    }
}

function onSubmit (event) {
    event.preventDefault();
    clearConteiner(refs.gallery);
    addLoadingStylesOnBtn(showMoreBtn);
    searchParams.q = event.currentTarget.elements.searchQuery.value.trim();
    if(searchParams.q) {
        renderSumbmittedGallery();
    } else {
        showMoreBtn.hide();
        Notify.warning('Field can\`t be empty.');
    }
        event.currentTarget.reset();
}

async function renderSumbmittedGallery() {
    searchParams.resetPages();
    return await fetchImages(ENDPOINT,searchParams)
    .then(images => {
        if(images.totalHits > 0) {
            Notify.info(`Hooray! We found ${images.totalHits} images.`);
        } 
        renderImage(images, refs.gallery);
        return images;
    })
    .then(images => checkCapacityOfGallery({
        dataOfImages: images,
        params: searchParams,
        button: showMoreBtn
    }))
    .catch(Notify.failure);
}



