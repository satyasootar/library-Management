document.addEventListener("DOMContentLoaded", function() {
    let isLoggedIn = localStorage.getItem('loggedIn') === 'true';

    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }

    let filterBtn = document.querySelector("#filterCategory");
    filterBtn.addEventListener("change", filter);

    let currentUser = localStorage.getItem('currentUser');
    let welcomeMessage = document.querySelector("#welcomeMessage");
    welcomeMessage.innerHTML = `Hello, ${currentUser}! Welcome to your dashboard.`;

    let logOutBtn = document.querySelector(".logOut");
    logOutBtn.addEventListener("click", function() {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    });

    populateTable();
});

function populateTable(filterCategory = "") {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    let tableBody = document.querySelector("#libraryTable tbody");
    tableBody.innerHTML = "";

    books.forEach((book, index) => {
        if (filterCategory && book.bookCategory !== filterCategory) {
            return; 
        }

        let row = document.createElement("tr");

        let slnoCell = document.createElement("td");
        slnoCell.textContent = index + 1; 
        row.appendChild(slnoCell);

        let receiverCell = document.createElement("td");
        receiverCell.textContent = book.Receiver;
        row.appendChild(receiverCell);

        let bookNameCell = document.createElement("td");
        bookNameCell.textContent = book.bookName;
        row.appendChild(bookNameCell);

        let bookCategoryCell = document.createElement("td");
        bookCategoryCell.textContent = book.bookCategory;
        row.appendChild(bookCategoryCell);

        let fromDateCell = document.createElement("td");
        fromDateCell.textContent = book.fromDate;
        row.appendChild(fromDateCell);

        let toDateCell = document.createElement("td");
        toDateCell.textContent = book.toDate;
        row.appendChild(toDateCell);

        let statusCell = document.createElement("td");
        statusCell.textContent = getStatus(book);
        row.appendChild(statusCell);

        let actionCell = document.createElement("td");
        let returnButton = document.createElement("button");
        returnButton.textContent = "Returned";
        returnButton.addEventListener("click", () => markAsReturned(index));
        actionCell.appendChild(returnButton);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    });
}

function getStatus(book) {
    let currentDate = new Date();
    let toDate = new Date(book.toDate);
    let oneDay = 24 * 60 * 60 * 1000;

    if (book.status === "Returned") {
        return "Returned";
    }

    if ((toDate - currentDate) <= oneDay) {
        return "Time to return";
    }

    return "Burrowed";
}

function markAsReturned(index) {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    books[index].status = "Returned";
    localStorage.setItem('books', JSON.stringify(books));
    populateTable();
}

function filter() {
    let filterCategory = document.querySelector("#filterCategory").value;
    populateTable(filterCategory);
}
