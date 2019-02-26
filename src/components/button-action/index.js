const buttonAction = (function () {
    injectCSS(`
    .button-action {
        position:absolute;
        bottom:5%;
        left:50%;
        transform: translateX(-50%);
        background-color: #3a4042;
        border-radius:50%;
        border:0;
        color: #FFF;
        font-weight:bold;
        width: 80px;
        height: 80px;
        line-height:80px;
        font-size:15px;
        box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
        cursor:pointer;
        text-transform: uppercase;
        border: 3px solid #fffcee;
        visibility: visible;
        transition: all 300ms linear;
    }

    .button-action.-hide {
        transform: scale(2.5) translateX(-20%);
        transform-origin: center;
        visibility: hidden;
        
    }
    `);



    const module = {};



    module.render = (text, onClickHandler) => {
        return `
            <button type="button" class="button-action" onClick=${onClickHandler}>${text}</button> 
        `;
    }

    module.toggle = () => {
        document.querySelector('.button-action').classList.toggle('-hide');
    }

    return {
        render: module.render,
        toggle: module.toggle
    }
})();