let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let monthYear = document.getElementById('month_year');

showCalender(currentMonth, currentYear);

window.onload = function callImageChangeOnLoad() {
    imageChange()
}



function imageChange() {
    if (currentMonth === 0) {
        document.getElementById("image_month").src = ("images/1.jpg");
    } else if (currentMonth === 1) {
        document.getElementById("image_month").src = ("images/2.jpg");
    } else if (currentMonth === 2) {
        document.getElementById("image_month").src = ("images/3.jpg");
    } else if (currentMonth === 3) {
        document.getElementById("image_month").src = ("images/4.jpg");
    } else if (currentMonth === 4) {
        document.getElementById("image_month").src = ("images/5.jpg");
    } else if (currentMonth === 5) {
        document.getElementById("image_month").src = ("images/6.jpg");
    } else if (currentMonth === 6) {
        document.getElementById("image_month").src = ("images/7.jpg");
    } else if (currentMonth === 7) {
        document.getElementById("image_month").src = ("images/8.jpg");
    } else if (currentMonth === 8) {
        document.getElementById("image_month").src = ("images/9.jpg");
    } else if (currentMonth === 9) {
        document.getElementById("image_month").src = ("images/10.jpg");
    } else if (currentMonth === 10) {
        document.getElementById("image_month").src = ("images/11.jpg");
    } else if (currentMonth === 11) {
        document.getElementById("image_month").src = ("images/12.jpg");
    } else {
        document.getElementById("image_month").src = ("images/13.jpg");
    }
}

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalender(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalender(currentMonth, currentYear);
}

function showCalender(month, year) {
    let firstDay = (((new Date(year, month)).getDay() - 1) + 7) % 7;
    let daysInMonth = 32 - new Date(year, month, 32).getDate();
    let calenderBody = document.getElementById("calender_body");
    calenderBody.innerHTML = "" // clears previous cell
        // filling data about month and year in page via DOM
    monthYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;
    // creating date cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // create table row
        let row = document.createElement("tr");
        // creating individual cells and filling with data
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info"); // to color todays date
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }
        }
        // appending each row to callender body
        calenderBody.appendChild(row);
    }
    return new Date(year, month + 1, 0).getDate();
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalender(currentMonth, currentYear)
}