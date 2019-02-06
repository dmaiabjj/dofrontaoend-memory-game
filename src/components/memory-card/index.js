injectCSS(`

    .memory-card {
        position: relative;
        height: 155px;
        width: 155px;
    }

    .memory-card .card {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        cursor: pointer;
        background-color: #f25a70;
        position:absolute;
        width: 100%;
        height: 100%;
    }

    .memory-card.-active  {
        pointer-events: none;
    }

    .memory-card.-active .card {
        display: none;
    }


    .memory-card.-active .card.-front {
        display: flex;
    }

    .memory-card .card.-front {
        background-color: #FFF;
    }



    

    .memory-card .card>.icon {
        width: 100px;
        height: 100px;
    }

    

    .memory-card .card.-front::before {
        content: "";
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
    }

    .memory-card .card.-front>.icon {
        position: absolute;
        transform: translateY(-12px);
    }
`);


const handleClick = ($element) => {
    $element.classList.toggle("-active");
}

const createMemoryCard = ({
    id,
    className,
    src,
    alt
}) => `
        <div class="memory-card" onClick="handleClick(this)">
            <article class="card ${className}" >
                <img 
                    class="icon"
                    src="images/icon-${src}.png" 
                    alt="${alt}"
                >
            </article>
            <article class="card" >
                <img 
                    class="icon"
                    src="images/icon-collabcode.png" 
                    alt="Gueio Mascote da Collab"
                >
            </article>
        </div>
`;