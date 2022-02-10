function getNextDayOfWeek(dayOfWeek) {
    // Code to check that date and dayOfWeek are valid left as an exercise ;)
    var resultDate = new Date();
    resultDate.setDate(resultDate.getDate() + (7 + dayOfWeek - resultDate.getDay()) % 7);
    resultDate.setHours(18, 0, 0);
    return resultDate;
}
var countDownDate = getNextDayOfWeek(5);
function myFunction()
{
    // Get today's date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = "Time To Friday Prayer:" + days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("demo").innerHTML = "Today is Friday!";
  }
}
var timer = setInterval(myFunction, 1000);