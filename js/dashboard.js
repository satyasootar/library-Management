document.addEventListener("DOMContentLoaded", function() {
    // Check if the user is logged in
    let isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (!isLoggedIn) {
        // Redirect to login page if not logged in
        window.location.href = 'login.html';
    } else {
        // Display welcome message with the current user's name
        let currentUser = localStorage.getItem('currentUser');
        let welcomeMessage = document.querySelector("#welcomeMessage");
        welcomeMessage.textContent = `Hello, ${currentUser}! Welcome to your dashboard.`;

        // Handle logout
        let logOutBtn = document.querySelector(".logOut");
        logOutBtn.addEventListener("click", function() {
            localStorage.removeItem('loggedIn');
            localStorage.removeItem('currentUser');
            window.location.href = 'login.html';
        });
    }
});
