const flatButton = (function () {
    injectCSS(`
        .flat-button {
            display:inline-block;
            background-color: #eae6da;
            color: #fffcee;
            font-size: 24px;
            font-weight: bold;
            border:none;
            width: 50%;
            height:176px;
            text-transform: uppercase;
        }
        .flat-button.-active {
            background-color: #f25a70;
            color: #fff;
        }
    `);

    const module = {};

    module.render = (text = "", active = false) => {
        return `<button class="flat-button ${active && "-active"}">${text}</button>`
    };

    return {
        render: module.render
    }
})();