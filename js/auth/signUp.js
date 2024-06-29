let signUpname = document.querySelector("#signUpname");
let signUpemail = document.querySelector("#signUpemail");
let signUppassword = document.querySelector("#signUppassword");
let submitsignUpinfo_btn = document.querySelector("#submitsignUpinfo");

submitsignUpinfo_btn.addEventListener("click", saveinfo);

function signUpUser() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let newUser = {
        userName: signUpname.value,
        userEmail: signUpemail.value,
        userPassword: signUppassword.value
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
}

function saveinfo() {
    if (signUpname.value === "" || signUpemail.value === "" || signUppassword.value === "") {
        alert("Please fill the details");
    } else {
        signUpUser();
        redirectToLogin();
    }
}

function redirectToLogin() {
    setTimeout(function() {
        window.location.href = 'login.html';
    }, 2000);
}
