const createMemoryCard = (src, type, alt, position) =>
    (`<article class="memory-card -${type}">
            <img 
            class="icon"
            src="images/icon-${src}.png" 
            alt="${alt}"
            onClick="handleClick(${position})"
            >
        </article>`);



function handleClick(position) {
    console.log(`Card ${position} clicked`);
}