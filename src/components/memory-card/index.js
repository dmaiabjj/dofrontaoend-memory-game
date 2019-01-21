const createMemoryCard = (src, type, alt, position) => {
    const $memoryCard =
        `<article class="memory-card -${type}">
            <img 
            class="icon"
            src="images/icon-${src}.png" 
            alt="${alt}"
            onClick="handleClick(${position})"
            >
        </article>`;

    return $memoryCard;
}


function handleClick(position) {
    console.log(`Card ${position} clicked`);
}