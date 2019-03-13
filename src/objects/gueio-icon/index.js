const gueioIcon = (function () {
    injectCSS(`
        .icon {
            width: 171px;
            margin: 0 auto 0 auto;
            display: block;
            transform: translateY(-70px);
        }
    `);

    const module = {};

    module.render = () => {
        return `<img 
                class="icon"
                src="images/icon-collabcode.png" 
                alt="Icone do mascote da collabcode"
            >`
    };

    return {
        render: module.render
    }
})();