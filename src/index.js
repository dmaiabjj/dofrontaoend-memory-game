const $root = document.querySelector('#root');
const $memoryCollabCard = document.createElement('article');
const iconCollabHTML =
    `<img 
        class="icon"
        src="images/icon-collabcode.png" 
        alt="Gueio - Mascote da CollabCode"
    >`;

const $memoryJSCard = document.createElement('article');
const iconJSHTML = `
    <img 
        class="icon" 
        src="images/icon-js.png" 
        alt="Ícone de um livro da linguagem Javascript"
    >`


$memoryCollabCard.classList.add('memory-card');
$memoryJSCard.classList.add('memory-card');

$memoryCollabCard.classList.add('-back');
$memoryJSCard.classList.add('-front');


$root.insertBefore($memoryCollabCard, null);
$root.insertBefore($memoryJSCard, $memoryCollabCard);


$memoryCollabCard.insertAdjacentHTML('afterbegin', iconCollabHTML);
$memoryJSCard.insertAdjacentHTML('afterbegin', iconJSHTML);