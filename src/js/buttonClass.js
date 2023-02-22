import refs from './refs';
class Button {
    constructor(typeOfBtn) {
        this.type = typeOfBtn;
    }
    disable(){
        this.type.setAttribute('disabled', true);
    }
    enable(){
        this.type.removeAttribute('disabled');
    }
    visible(){
        this.type.classList.remove('hidden');
    }
    hide(){
        this.type.classList.add('hidden');
    }
    updateTextContent(value){
    this.type.textContent = value;
    }
}
const showMoreBtn = new Button(refs.showMoreBtn);
const searchBtn = new Button(refs.searchBtn);

export { showMoreBtn, searchBtn };