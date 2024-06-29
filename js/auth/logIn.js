let logInname = document.querySelector("#logInname");
let logInpassword = document.querySelector("#logInpassword");
let submitlogIninfo_btn = document.querySelector("#submitlogIninfo");

submitlogIninfo_btn.addEventListener("click", login);

function logInUser() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find((user) => user.userName === logInname.value);
    if (user && user.userPassword === logInpassword.value) {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('currentUser', user.userName);
        redirectToDashboard();
    } else {
        alert("Invalid Details");
    }
}

function login() {
    if (logInname.value === "" || logInpassword.value === "") {
        alert("Please fill the details");
    } else {
        logInUser();
    }
}

function redirectToDashboard() {
    setTimeout(function() {
        window.location.href = 'dashboard.html';
    }, 2000);
}
