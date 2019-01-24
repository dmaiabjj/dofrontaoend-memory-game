injectCSS(`
    .cards-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        padding: 10px 0 10px 0;
    }

    .cards-wrapper>.memory-card {
        margin-top: 10px;
    }
`);


const createCardsWrapper = () => {
    const $cardsWrapper = document.createElement('section');
    $cardsWrapper.classList.add('cards-wrapper');

    return $cardsWrapper;
}