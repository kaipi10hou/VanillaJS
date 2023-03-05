const loginInput = document.querySelector("#login-form input")
const loginForm = document.getElementById("login-form");
const helloH4 = document.getElementById("hello");
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function loginBtnSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASS);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
};

function paintGreetings(username) {
    helloH4.innerText = `Hello  ${username}`;
    helloH4.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit", loginBtnSubmit);
} else {
    paintGreetings(savedUsername);
}


