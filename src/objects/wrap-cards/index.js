const createWrapCards = ($parent) => {
    const $wrapCards = document.createElement('section');
    $wrapCards.classList.add('wrap-cards');
    $parent.insertBefore($wrapCards, null);
    return $wrapCards;
}