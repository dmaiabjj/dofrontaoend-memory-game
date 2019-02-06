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

const getCardValues = ($wrapper) => {
    return Array.prototype.slice.call($wrapper.querySelectorAll(".memory-card.-active[data-hit=false]")).map(($card) => {
        return $card.dataset.card
    });
}

const checkHit = (values) => {
    return values.every((value, index, values) => {
        return value === values[0]
    });
}

const createCardsWrapper = (maxNumberActiveMemoryCards, onHandlePairHit) => {
    const $cardsWrapper = document.createElement('section');
    $cardsWrapper.classList.add('cards-wrapper');
    $cardsWrapper.addEventListener('click', () => {
        const activeMemoryCards = $cardsWrapper.querySelectorAll(".memory-card.-active[data-hit=false]").length;
        if (activeMemoryCards === maxNumberActiveMemoryCards) {
            $cardsWrapper.classList.add('avoid-clicks');
            const values = getCardValues($cardsWrapper);
            const hit = checkHit(values)

            if (!hit)
                setTimeout(() => {
                    $cardsWrapper.querySelectorAll(".memory-card.-active[data-hit=false]").forEach(($card) => {
                        $card.classList.remove("-active");
                    });
                    $cardsWrapper.classList.remove('avoid-clicks');
                }, 1500)
            else {
                $cardsWrapper.classList.remove('avoid-clicks');
                $cardsWrapper.querySelectorAll(".memory-card.-active").forEach(($card) => {
                    $card.dataset.hit = true;
                });
                onHandlePairHit();
            }
        }

    })


    return $cardsWrapper;
}