let userNameResetPass = document.querySelector("#userNameResetPass");
let setNewpassword = document.querySelector("#setNewpassword");
let confirmpassword = document.querySelector("#confirmpassword");
let submitNewPassword_btn = document.querySelector("#submitNewPassword");

submitNewPassword_btn.addEventListener("click", resetPass);

function passwordReset() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let user = users.find((user) => user.userName === userNameResetPass.value);
    if (user) {
        user.userPassword = setNewpassword.value;
        localStorage.setItem('users', JSON.stringify(users));
        redirectToLogin();
    } else {
        alert("User not found");
    }
}

function resetPass() {
    if (setNewpassword.value === confirmpassword.value) {
        passwordReset();
    } else {
        alert("Passwords do not match");
    }
}

function redirectToLogin() {
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);
}
