 
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
        dashboardBtn.addEventListener("click", function() {
            alert("You have to log in first")
        });
    }
});

let submitlibraryBtn = document.querySelector(".submitLib")
submitlibraryBtn.addEventListener("click", submitBooks);

let bookSelect = document.querySelector("#bookName");
let bookCategory = document.querySelector("#bookCategory");
let fromDate = document.querySelector("#fromDate");
let toDate = document.querySelector("#toDate");
let currentUser = localStorage.getItem('currentUser');
function addBook() {
    let books = JSON.parse(localStorage.getItem('books')) || []
    let newBook = {
        Receiver : currentUser,
        bookName : bookSelect.value,
        bookCategory : bookCategory.value,
        fromDate : fromDate.value,
        toDate : toDate.value
    };
    books.push(newBook);
    localStorage.setItem('books', JSON.stringify(books));
    redirectToDashboard()
}
function submitBooks() {
  if(bookSelect.value =="" || bookCategory.value == "" || fromDate.value == "" || toDate.value == ""){
     alert("Please fill the details");
  }else{
    addBook();
    
  }
}
function redirectToDashboard() {
    setTimeout(function() {
        window.location.href = 'dashboard.html';
    }, 2000);
}