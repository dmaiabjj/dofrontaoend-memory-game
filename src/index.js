const $root = document.querySelector('#root');
const $memoryCardGueio = document.createElement('article');
const iconGueioHTML =
    `<img 
        src="images/icon-collabcode.png" 
        alt="Gueio - Mascote da CollabCode"
    >`;

const $memoryJSCard = document.createElement('article');
const iconJSHTML = `
    <article class="memory-card">
        <div class="icon-background">
            <img class="-front" src="images/icon-js.png" alt="Gueio - Mascote da collab code">
        </div>
    </article>
`


$memoryCardGueio.classList.add('memory-card');
$memoryCardGueio.classList.add('-back');

$root.insertBefore($memoryCardGueio, null);


$memoryCardGueio.insertAdjacentHTML('afterbegin', iconGueioHTML);
$memoryCardGueio.insertAdjacentHTML('beforebegin', iconJSHTML);