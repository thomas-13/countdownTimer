const subheading = document.querySelector("h4");

const today = new Date();
today.setDate(today.getDate() + 10);
subheading.innerText = "Giveaway Ends On " + today.toString().slice(0, 21);


var now = new Date().getTime(); //gets current time in milliseconds since Jan, 1970
var countDownStart = now + 864000000; // this adds 10 days to the current time

var x = setInterval(function () {
    now = new Date().getTime();

    // Find the distance between now and the count down start date
    var distance = countDownStart - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);



    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        subheading.innerText = " Giveaway has ended :)";
    }

}, 1000);



