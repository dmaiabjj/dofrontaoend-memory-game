const cards = [{
    type: 'front',
    src: 'js',
    alt: 'JS - Livro de Javascript'
}, {
    type: 'front',
    src: 'js',
    alt: 'JS - Livro de Javascript'
}, {
    type: 'front',
    src: 'c',
    alt: 'C - Livro de C'
}, {
    type: 'front',
    src: 'c',
    alt: 'C - Livro de C'
}, {
    type: 'front',
    src: 'bug',
    alt: 'Inseto dentro da janela do browser'
}, {
    type: 'front',
    src: 'bug',
    alt: 'Inseto dentro da janela do browser'
}, {
    type: 'back',
    src: 'collabcode',
    alt: 'Gueio - Mascote da CollabCode'
}, {
    type: 'back',
    src: 'collabcode',
    alt: 'Gueio - Mascote da CollabCode'
}]

const $root = document.querySelector('#root');
const $cardsWrapper = createCardsWrapper()

cards.forEach((card, position) => {
    const $memoryCard = createMemoryCard(card.src, card.type, card.alt, position);
    $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
});


$root.insertAdjacentElement('beforeend', $cardsWrapper);