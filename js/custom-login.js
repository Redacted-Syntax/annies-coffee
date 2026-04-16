let loginForm = document.getElementById("login-form");
let welcomeDiv = document.getElementById("welcome-message");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let formData = new FormData(loginForm);
    let formObject = Object.fromEntries(formData);

    console.log(formObject);
    let name = formObject.name;

    let message = `Welcome back, ${name}! We're glad to see you again.`;
    welcomeDiv.textContent = message;

    loginForm.style.display = "none";
});