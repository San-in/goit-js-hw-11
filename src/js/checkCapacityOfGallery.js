import { Notify } from 'notiflix/build/notiflix-notify-aio';

export default function checkCapacityOfGallery ({dataOfImages,params,button}) {
    if (dataOfImages.totalHits - params.showedImages() === 0) {
        Notify.warning('We\'re sorry, but you\'ve reached the end of search results.');
        button.hide();
        return;
    }
}