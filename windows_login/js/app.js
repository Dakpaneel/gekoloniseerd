window.onload = main;

function main() {
    displayDate();
    setInterval(function(){ 
        displayDate();    
    }, 1000);
}

function displayDate() {
    var d = new Date();
    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    var months = [
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
    var minutes = d.getMinutes();
    var hours = d.getHours();

    if(minutes.toString().length == 1) minutes = '0'+minutes;
    if(hours.toString().length == 1) hours = '0'+hours;
    
    var time = hours+':'+minutes;
    var date = days[d.getDay()]+', '+months[d.getMonth()]+' '+d.getDate();
    
    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;
}