export default class SearchParams {
    constructor({q,key,image_type,orientation,safesearch,page,per_page}){
        this.q = q;
        this.key = key;
        this.image_type = image_type;
        this.orientation = orientation;
        this.safesearch = safesearch;
        this.page = page;
        this.per_page = per_page;
    }
    resetPages(){
        this.page = 1;
    }
    increasePageByOne() {
        this.page += 1;
    }
    showedImages(){
        return this.page * this.per_page;
    }
};