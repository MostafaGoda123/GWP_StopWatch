let time = document.getElementById("time")
let stop = document.getElementById("stop")
let start = document.getElementById("start")
let reset = document.getElementById("reset")
let [hours,minutes,seconds] = [0,0,0]
let intervalTime ;

function stopWatch() {
   intervalTime = setInterval(() => {
      seconds++;
      if (seconds == 60) {
         seconds = 0 ;
         minutes++ ;
         if (minutes == 60) {
            hours++ ;
            minutes = 0 ;
         }
      }
      let s = seconds<10 ? `0${seconds}` : seconds
      let m = minutes<10 ? `0${minutes}` : minutes
      let h = hours<10 ? `0${hours}` : hours

      time.innerHTML = `${h} : ${m} : ${s}`
   }, 1000);
}

start.onclick = function () {
   stopWatch()
}
stop.onclick = function () {
   clearInterval(intervalTime)
}
reset.onclick = function () {
   clearInterval(intervalTime);
   [hours,minutes,seconds] = [0,0,0]
   time.innerHTML = `00 : 00 : 00`
}
