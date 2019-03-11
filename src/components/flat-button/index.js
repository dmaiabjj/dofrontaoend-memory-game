const flatButton = (function () {
    injectCSS(`
        .flat-button {
            background-color: #eae6da;
            color: #fffcee;
            font-size: 24px;
            font-weight: bold;
            border:none;
            width:186px;
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