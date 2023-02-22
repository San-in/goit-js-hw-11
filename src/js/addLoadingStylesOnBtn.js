export default function addLoadingStylesOnBtn (button) {
    button.visible();      
    button.disable(); 
    button.updateTextContent('Loading...');
}