const titlePage = (function () {
    injectCSS(`
        .title {
            display:inline-block;
            color: #f25a70;
            font-size: 24px;
            text-align: center;
            text-decoration:uppercase;
            width:100%;
        }
    `);

    const module = {};

    module.render = (text = "") => {
        return `<span class="title">${text}</span>`
    };

    return {
        render: module.render
    }
})();