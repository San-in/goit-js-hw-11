export default function createMarkup(images) {
    return images.map(({webformatURL,largeImageURL,tags,likes,views,comments,downloads}) => 
    `<div class="photo-card"><div class="img-wrap"><a href="${largeImageURL}"><img class="img" src="${webformatURL}" alt="${tags}" loading="lazy" /></a></div><div class="info"><p class="info-item"><b>Likes<br/>${likes}</b></p><p class="info-item"><b>Views<br/>${views}</b></p><p class="info-item"><b>Comments<br/>${comments}</b></p><p class="info-item"><b>Downloads<br/>${downloads}</b></p></div></div>`).join('');
}