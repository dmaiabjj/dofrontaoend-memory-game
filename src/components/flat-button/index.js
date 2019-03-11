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
    `);

    const module = {};

    module.render = () => `<button class="flat-button">Login</button>`

    return {
        render: module.render
    }
})();