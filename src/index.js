const $root = document.querySelector('#root');
const $memoryCard = document.createElement('article');
const iconHTML =
    `<img 
        src="images/icon-collabcode.png" 
        alt="Gueio - Mascote da CollabCode"
    >`;


$memoryCard.classList.add('memory-card');

$root.insertBefore($memoryCard, null);

$memoryCard.insertAdjacentHTML('afterbegin', iconHTML);