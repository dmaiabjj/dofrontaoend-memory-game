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

    .avoid-clicks {
        pointer-events: none;
    }
`);


const createCardsWrapper = (maxNumberActiveMemoryCards) => {
    const $cardsWrapper = document.createElement('section');
    $cardsWrapper.classList.add('cards-wrapper');
    $cardsWrapper.addEventListener('click', () => {
        activeMemoryCards = $cardsWrapper.querySelectorAll(".memory-card.-active").length;
        if (activeMemoryCards === maxNumberActiveMemoryCards) {
            $cardsWrapper.classList.add('avoid-clicks');
            setTimeout(() => {
                $cardsWrapper.querySelectorAll(".memory-card.-active").forEach(($card) => {
                    $card.classList.remove("-active");
                })
                $cardsWrapper.classList.remove('avoid-clicks');
            }, 1500)
        }

    })


    return $cardsWrapper;
}