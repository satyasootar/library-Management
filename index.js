 
document.addEventListener("DOMContentLoaded", function() {
    let isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    let dashboardBtn = document.querySelector(".dashboard");
    let logOutBtn = document.querySelector(".logOut");

    if (isLoggedIn) {    
        dashboardBtn.addEventListener("click", function() {
            window.location.href = 'dashboard.html';
        });

        logOutBtn.addEventListener("click", function() {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('currentUser');
            window.location.reload();
        });
    } else {
        
    }
});

