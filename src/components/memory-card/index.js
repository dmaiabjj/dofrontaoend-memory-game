injectCSS(`
    .memory-card {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 155px;
        width: 155px;
        border-radius: 30px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        cursor: pointer;
    }

    .memory-card.-front {
        background-color: #FFF;
    }

    .memory-card.-back {
        background-color: #f25a70;
    }


    .memory-card.-front::before {
        content: "";
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
    }


    .memory-card>.icon {
        width: 100px;
        height: 100px;
    }

    .memory-card.-front>.icon {
        position: absolute;
        transform: translateY(-12px);
    }
`);


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