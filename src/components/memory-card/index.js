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
        background-color: #f25a70;
    }


    .memory-card>.icon {
        width: 100px;
        height: 100px;
    }

    .memory-card>.icon:first-of-type {
        display:none;
    }

    .memory-card>.icon:last-of-type {
        display:block;
    }

    .memory-card.-front {
        background-color: #FFF;
    }

    .memory-card.-front::before {
        content: "";
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
    }

    .memory-card.-front>.icon {
        position: absolute;
        transform: translateY(-12px);
    }

    .memory-card.-front>.icon:first-of-type {
        display:block;
    }

    .memory-card.-front>.icon:last-of-type {
        display:none;
    }
`);


// const createMemoryCard = ({
//     id,
//     className,
//     src,
//     alt,
// }) => `
//     <article class="memory-card ${className}">
//         <img 
//             class="icon"
//             src="images/icon-${src}.png" 
//             alt="${alt}"
//             onClick="handleClick(${id})"
//         >
//     </article>`;

const handleClick = (element) => {
    element.classList.toggle("-front");
}

const createMemoryCard = ({
    id,
    className,
    src,
    alt
}) => `
        <article class="memory-card ${className}" onClick="handleClick(this)" >
            <img 
                class="icon"
                src="images/icon-${src}.png" 
                alt="${alt}"
            >
            <img 
                class="icon"
                src="images/icon-collabcode.png" 
                alt="Gueio Mascote da Collab"
            >
        </article>
`;