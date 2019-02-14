(function () {
    const cards = [{
            id: 1,
            className: '-front',
            src: 'js',
            alt: 'JS - Livro de Javascript'

        }, {

            id: 2,
            className: '-front',
            src: 'js',
            alt: 'JS - Livro de Javascript'

        }, {

            id: 3,
            className: '-front',
            src: 'c',
            alt: 'C - Livro de C'

        },
        {
            id: 4,
            className: '-front',
            src: 'c',
            alt: 'C - Livro de C'
        }, {

            id: 5,
            className: '-front',
            src: 'bug',
            alt: 'Inseto dentro da janela do browser'

        }, {

            id: 6,
            className: '-front',
            src: 'bug',
            alt: 'Inseto dentro da janela do browser'

        }, {

            id: 7,
            className: '-front',
            src: 'cellphone',
            alt: 'Telefone celular'

        }, {

            id: 8,
            className: '-front',
            src: 'woman',
            alt: 'Uma mulher em frente ao computador'

        }
    ]


    const onHandlePairHit = () => {
        store.score += store.config.scoreHit;
        console.log(`Your score is ${store.score}`);
    }


    const $root = document.querySelector('#root');
    const $cardsWrapper = cardWrapper.create(onHandlePairHit)
    const $pointBar = pointBar.create()


    cards.forEach((card) => {
        const $memoryCard = memoryCard.create(card);
        $cardsWrapper.insertAdjacentHTML('beforeend', $memoryCard);
    });


    $root.insertAdjacentHTML('afterbegin', $pointBar);
    $root.insertAdjacentElement('beforeend', $cardsWrapper);
})();