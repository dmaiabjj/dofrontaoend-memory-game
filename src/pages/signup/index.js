(function () {
    const $root = document.querySelector('#root');
    const $loginButton = flatButton.render("Login", true);
    const $signUpButton = flatButton.render("Sign up");
    const $titlePage = titlePage.render("Welcome!");


    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton);
    $root.insertAdjacentHTML("beforeend", $titlePage);
})();