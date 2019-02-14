const buttonAction = (function () {
    injectCSS(`
    .button-action {
        margin: 0 auto;
        display: block;
        background-color: #3a4042;
        border-radius:50%;
        border:0;
        color: #FFF;
        font-weight:bold;
        transform: translateY(-100%);
        width: 100px;
        height: 100px;
        font-size:19px;
        box-shadow: 2px 3px 5px 0px rgba(0,0,0,0.75);
        cursor:pointer;
    }
    `);

    const module = {};

    module.create = () => {
        return `
            <button type="button" class="button-action">Start</button> 
        `;
    }

    return {
        create: module.create
    }
})();