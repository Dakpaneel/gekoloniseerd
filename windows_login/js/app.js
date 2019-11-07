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

var time = d.getHours()+':'+d.getMinutes();
var date = days[d.getDay()]+', '+months[d.getMonth()]+' '+d.getDate();

document.getElementById('time').innerHTML = time;
document.getElementById('date').innerHTML = date;