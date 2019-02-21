const overlayCards = (function () {
    injectCSS(`
        .overlay-cards {
            background-color: #000;
        }
    `);

    const module = {};

    module.render = () => {
        return `
            <div className="overlay-cards"></div> 
        `;
    }

    return {
        render: module.render
    }
})();