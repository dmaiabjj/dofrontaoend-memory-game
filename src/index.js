const $root = document.querySelector('#root');
const $memoryCollabCard = document.createElement('article');
const createMemoryCard = ($parent, src, type) => {
    const $memoryCard = document.createElement('article');
    const iconHTML =
        `<img 
        class="icon"
        src="images/icon-${src}.png" 
        alt="Gueio - Mascote da CollabCode"
    >`;
    $memoryCard.classList.add('memory-card');
    $memoryCard.classList.add(`-${type}`);
    $parent.insertBefore($memoryCard, null);
    $memoryCard.insertAdjacentHTML('afterbegin', iconHTML);
}

const cards = [{
    type: 'front',
    src: 'js'
}, {
    type: 'back',
    src: 'collabcode'
}, {
    type: 'back',
    src: 'collabcode'
}, {
    type: 'back',
    src: 'collabcode'
}, {
    type: 'back',
    src: 'collabcode'
}, {
    type: 'back',
    src: 'collabcode'
}, {
    type: 'back',
    src: 'collabcode'
}, {
    type: 'back',
    src: 'collabcode'
}]

cards.forEach((card) => {
    createMemoryCard($root, card.src, card.type)
});