const transparencyLayer = (function () {
    injectCSS(`
        .transparency-layer {
            position:absolute;
            top:0;
            background-color: #3a4042;
            opacity: 0.5;
            transition: opacity 1s ease-out;
            height: 100vh;
            width: 100vh;
        }

        .transparency-layer.hide {
            opacity: 0;
            visibility:hidden;
        }

    `);

    const module = {};


    module.render = () => {
        return `
            <div class="transparency-layer"></div>
        `;
    }

    module.toogle = () => {
        document.querySelector(".transparency-layer").classList.toggle('hide');
    }

    return {
        render: module.render,
        toogle: module.toogle
    }
})();