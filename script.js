let days = document.querySelector("#days");
let hours = document.querySelector("#hours");
let minits = document.querySelector("#minits");
let seconds = document.querySelector("#seconds");

setInterval( function(){
    let ramadan = new Date("28 february 2025 19:00:00").getTime()
    let currentDate = new Date().getTime();

    let timeRemaining = ramadan - currentDate;
    let day = Math.floor( timeRemaining / (1000*60*60*24));
    let hrs = Math.floor( (timeRemaining % (1000*60*60*24))/(1000*60*60));
    let min = Math.floor( (timeRemaining % (1000*60*60))/(1000*60));
    let sec = Math.floor( (timeRemaining % (1000*60))/(1000));
    
    days.innerHTML = day;
    hours.innerHTML = hrs;
    minits.innerHTML = min;
    seconds.innerHTML = sec;


},500)