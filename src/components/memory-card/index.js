const memoryCard = (function () {
    injectCSS(`

    .memory-card {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        cursor: pointer;
        background-color: #f25a70;
        height: 155px;
        width: 155px;
    }

    .memory-card .card {
        width: 100px;
        height: 100px;
    }

    .memory-card .card.-front {
        display:none;
    }

    .memory-card .card  {
        display:flex;
    }

    
    .memory-card.-active  {
        pointer-events: none;
        background-color: #FFF;
    }

    .memory-card.-active .card.-front {
        display:flex;
    }

    .memory-card.-active .card  {
        display:none;
    }

    .memory-card.-active .card.-front {
        display: flex;
        position: absolute;
        transform: translateY(-12px);
    }

    .memory-card.-active::before{
        content: "";
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;
    }

`);


    return {
        create: ({
            id,
            className,
            src,
            alt
        }) => `
        <article class="memory-card" data-card="${src}" data-hit=false onClick="memoryCard.handleClick(this)">
            <img 
                class="card ${className}"
                src="images/icon-${src}.png" 
                alt="${alt}"
            >
            <img 
                class="card"
                src="images/icon-collabcode.png" 
                alt="Gueio Mascote da Collab"
            >
        </article>
        `,
        handleClick: ($element) => {
            $element.classList.add("-active");
        }
    };
})();