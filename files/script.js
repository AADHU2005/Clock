/* 
    Copyright Aadhu
*/

let stylesheet = document.documentElement.style;

function clockUpdate() {
    let date = new Date();
  
    let hr;
    let min = (date.getMinutes() < 10) ? "0" + date.getMinutes() : date.getMinutes();
    let sec = (date.getSeconds() < 10) ? "0" + date.getSeconds() : date.getSeconds();
    let amPm = (date.getHours() >= 12) ? "PM" : "AM";
  
    if (date.getHours() == 0) {
        hr = 12;
    } else if (date.getHours() > 12) {
        hr = date.getHours() - 12;
    } else {
        hr = date.getHours();
    }
  
    let currentTime = `${hr}:${min}:${sec}`
  
    document.getElementsByClassName("hourMinuteSecond")[0].innerHTML = currentTime;
    document.getElementsByClassName("amPm")[0].innerHTML = amPm;
  
    let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let day = date.getDate();

    let currentDate = dayName[date.getDay()] + ", " + month[date.getMonth()] + " " + day;
  
    document.getElementsByClassName("date")[0].innerHTML = currentDate;

    let letters = 'A1B2C3D4E5F6';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
        stylesheet.setProperty("--neon", color);
    }
};
  
clockUpdate();

setInterval(function() {
    clockUpdate()
}, 1000);