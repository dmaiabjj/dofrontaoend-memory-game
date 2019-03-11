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

        .flat-button.-login {
            background-color: #eae6da;
        }

        .flat-button.-signup {
            background-color: #f25a70;
        }
    `);

    const module = {};

    module.render = (text, color) => {
        return `<button class="flat-button -${color}">${text}</button>`
    };

    return {
        render: module.render
    }
})();