(function () {
    const $root = document.querySelector('#root');
    const $loginButton = flatButton.render("Login");
    const $signUpButton = flatButton.render("Sign up");


    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton);
})();