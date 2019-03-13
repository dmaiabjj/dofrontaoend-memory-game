const gueioIcon = (function () {
    injectCSS(`
        .icon {
            width: 171px;
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