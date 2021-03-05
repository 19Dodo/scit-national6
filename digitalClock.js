console.log("JavaScript - Digital Clock");
// Using the new knowledge leaned in index.js file we can implement a digital clock
// The digital clock will use existing html objects in index.html file
// Using "setInterval" we will calculate the value for seconds, minutes and hours an update the page every second to reflect the time spend on the page

let seconds = 0;
const secondsParagraphs = document.querySelectorAll(".seconds p");
//secondsParagraphs[1].innerText="3";

let minutes = 0;
const minutesParagraphs = document.querySelectorAll(".minutes p");

let hours = 0;
const hoursParagraphs = document.querySelectorAll(".hours p");

let cron;

document.getElementById("start").addEventListener("click",start);

document.getElementById("pause").addEventListener("click",pause);

document.getElementById("reset").addEventListener("click",reset);



function start(){
  pause();
  cron=setInterval(function(){
    renderDigits(seconds, secondsParagraphs);
    renderDigits(minutes, minutesParagraphs);
    renderDigits(hours,hoursParagraphs)
    
    seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }


  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  if (hours === 24) {
    hours = 0;
  }
  console.log(seconds);
  console.log(minutes);
},10)
}; 

function pause(){
  clearInterval(cron);
}

function reset(){
  pause();
  secondsParagraphs[0].innerText = 0;
  secondsParagraphs[1].innerText = 0;
  
  minutesParagraphs[0].innerText = 0;
  minutesParagraphs[1].innerText = 0;

  hoursParagraphs[0].innerText = 0;
  hoursParagraphs[1].innerText = 0;
  clearInterval(cron);
  seconds=0;
  minutes=0;
  hours=0;
};

document.getElementById("save").addEventListener("click",function(){
  document.getElementById("digital-clock-saves").innerHTML=document.getElementById("digital-clock-saves").innerHTML +
  '<div class = "digital-clock">' +
   '<div class="hours">' +
   '<div class = "minutes">'+
   '<div class = "seconds">'+
   '<p>'+hoursParagraphs[0].innerText +'</p>' +
   '<p>'+hoursParagraphs[1].innerText +'</p>' +
   
   '<p>:</p>'+
   
   '<p>'+minutesParagraphs[0].innerText +'</p>' +
   '<p>'+minutesParagraphs[1].innerText +'</p>' +
   
   '<p>:</p>'+
   
   '<p>'+secondsParagraphs[0].innerText +'</p>' +
   '<p>'+secondsParagraphs[1].innerText +'</p>' +
   '</div' +
   '</div' +
   '</div' +
  '</div>';
  

})





function renderDigits(nr, pList) {
  const stringDigits = nr + "";
  const digitList = stringDigits.split("");

  if (digitList.length === 2) {
    pList[0].innerText = digitList[0];
    pList[1].innerText = digitList[1];
  } else {
    pList[0].innerText = 0;
    pList[1].innerText = digitList[0];
  }
}