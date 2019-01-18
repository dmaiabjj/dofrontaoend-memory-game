const $root = document.querySelector('#root');
const $wrapCards = createWrapCards($root)

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

cards.forEach((card, position) => {
    createMemoryCard($wrapCards, card.src, card.type, position)
});