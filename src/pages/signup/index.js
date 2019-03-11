(function () {
    const $root = document.querySelector('#root');
    const $loginButton = flatButton.render("Login", "login");
    const $signUpButton = flatButton.render("Sign up", "signup");


    $root.insertAdjacentHTML("beforeend", $loginButton);
    $root.insertAdjacentHTML("beforeend", $signUpButton);
})();