const cardWrapper = (function () {
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

    const getCards = ($wrapper) => {
        return Array.prototype.slice.call($wrapper.querySelectorAll(".memory-card.-active[data-hit=false]"));
    }

    const avoidClicks = ($element) => {
        $element.classList.add('avoid-clicks');
    }

    const allowClicks = ($element) => {
        $element.classList.remove('avoid-clicks');
    }

    const getCardValues = ($wrapper) => {
        return getCards($wrapper).map(($card) => {
            return $card.dataset.card
        });
    }

    const checkHit = (values) => {
        return values.every((value, index, values) => {
            return value === values[0]
        });
    }

    const hitPair = ($cardsWrapper, onHandlePairHit) => {
        allowClicks($cardsWrapper);
        getCards($cardsWrapper).forEach(($card) => {
            $card.dataset.hit = true;
        });
        onHandlePairHit();
    }

    const missedPair = ($cardsWrapper) => {
        setTimeout(() => {
            getCards($cardsWrapper).forEach(($card) => {
                $card.classList.remove("-active");
            });
            allowClicks($cardsWrapper);
        }, 1500);
    }

    const addPairCardsControl = ($cardsWrapper, onHandlePairHit) => {
        $cardsWrapper.addEventListener('click', () => {
            const activeMemoryCards = getCards($cardsWrapper).length;
            if (activeMemoryCards === store.config.maxNumberActiveMemoryCards) {
                avoidClicks($cardsWrapper);
                const hit = checkHit(getCardValues($cardsWrapper));

                if (!hit)
                    missedPair($cardsWrapper);
                else {
                    hitPair($cardsWrapper, onHandlePairHit)
                }
            }

        })
    }

    return {
        create: (onHandlePairHit) => {
            const $cardsWrapper = document.createElement('section');
            $cardsWrapper.classList.add('cards-wrapper');
            addPairCardsControl($cardsWrapper, onHandlePairHit);
            return $cardsWrapper;
        }

    }
})();