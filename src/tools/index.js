const injectCSS = (rules) => {
    const $head = document.querySelector("head");
    const $style = (document.querySelector("style") === null) && document.createElement("style") || document.querySelector("style");
    $style.appendChild(document.createTextNode((rules)));
    $head.insertBefore($style, null);
}