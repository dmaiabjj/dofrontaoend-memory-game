const pointBar = (function () {
    injectCSS(`
    .point-bar {
       background-color: #3a4042;
       height: 40px;
       text-align:center;
       font-family: "Comfortaa", sans-serif;
    }

    .point-bar > .point {
        color: #FFF;
        line-height:40px;
        font-weight:bold;
    }

    `);

    const module = {};

    module.create = () => {
        return `
            <header class="point-bar">
                <span class="point">AAAAA</span>
            </header>
        `;
    }

    return {
        create: module.create
    }
})();