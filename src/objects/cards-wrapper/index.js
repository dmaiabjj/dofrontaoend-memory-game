const cardWrapper = (function () {
    injectCSS(`
    .cards-wrapper {
        position:relative;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
    }

    .cards-wrapper>.memory-card {
        margin-top: 10px;
    }

    .avoid-clicks {
        pointer-events: none;
    }

`);

    const $cardsWrapper = document.createElement('section');
    const $overlayWrapper = document.createElement('div');

    const getCards = () => {
        return Array.prototype.slice.call($cardsWrapper.querySelectorAll(".memory-card.-active[data-hit=false]"));
    }

    const avoidClicks = () => {
        $cardsWrapper.classList.add('avoid-clicks');
    }

    const allowClicks = () => {
        $cardsWrapper.classList.remove('avoid-clicks');
    }

    const getCardValues = () => {
        return getCards().map(($card) => {
            return $card.dataset.card
        });
    }

    const checkHit = (values) => {
        return values.every((value, index, values) => {
            return value === values[0]
        });
    }

    const hitPair = (onHandlePairHit) => {
        allowClicks();
        getCards().forEach(($card) => {
            $card.dataset.hit = true;
        });
        onHandlePairHit();
    }

    const missedPair = () => {
        setTimeout(() => {
            getCards().forEach(($card) => {
                $card.classList.remove("-active");
            });
            allowClicks();
        }, 1500);
    }

    const addPairCardsControl = (onHandlePairHit) => {
        $cardsWrapper.addEventListener('click', () => {
            const activeMemoryCards = getCards().length;
            if (activeMemoryCards === store.config.maxNumberActiveMemoryCards) {
                avoidClicks();
                const hit = checkHit(getCardValues());

                if (!hit)
                    missedPair();
                else {
                    hitPair(onHandlePairHit)
                }
            }

        })
    }

    return {
        create: (onHandlePairHit) => {

            $cardsWrapper.classList.add('cards-wrapper');

            addPairCardsControl(onHandlePairHit);

            return $cardsWrapper;
        }
    }
})();