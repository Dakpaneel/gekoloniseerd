window.onload = main;

window.addEventListener("click", function() {
    let lock = document.getElementById('lock');
    let login = document.getElementById('login');
    let background = document.getElementById('background');

    lock.classList.add("inactive");
    login.classList.add("active");
    background.classList.add("faded");
})

function main() {
    displayDate();
    setInterval(function(){ 
        displayDate();    
    }, 1000);
}

function displayDate() {
    let d = new Date();
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let minutes = d.getMinutes();
    let hours = d.getHours();

    if(minutes.toString().length == 1) minutes = '0'+minutes;
    if(hours.toString().length == 1) hours = '0'+hours;
    
    let time = hours+':'+minutes;
    let date = days[d.getDay()]+', '+months[d.getMonth()]+' '+d.getDate();
    
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
}