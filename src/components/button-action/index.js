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
        font-size:15px;
        box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
        cursor:pointer;
        text-transform: uppercase;
        border: 3px solid #fffcee;
    }

    .button-action.hide {
        display:none;
    }
    `);



    const module = {};



    module.create = () => {
        return `
            <button type="button" class="button-action" onClick="gameManager.start()">Start</button> 
        `;
    }

    module.hide = () => {
        document.querySelector('.button-action').classList.add('hide');
    }

    return {
        create: module.create,
        hide: module.hide
    }
})();