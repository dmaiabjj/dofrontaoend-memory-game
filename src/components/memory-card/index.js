const createMemoryCard = ({
    id,
    className,
    src,
    alt,
}) => `
    <article class="memory-card ${className}">
        <img 
            class="icon"
            src="images/icon-${src}.png" 
            alt="${alt}"
            onClick="handleClick(${id})"
        >
    </article>`;



function handleClick(position) {
    console.log(`Card ${position} clicked`);
}