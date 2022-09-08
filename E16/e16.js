function now() {
  date = new Date();
  hour = date.getHours();       //hora
  min = date.getMinutes();      //minutos
  sec = date.getSeconds();      //segundos

  //Añade un 0 si es necesario
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  //Formatea
  myTimer = hour + " : " + min + " : " + sec;

  return myTimer;
}

function updateTimer() {
  myHour = now();
  myTimer = document.getElementById("timer");
  myTimer.innerHTML = myHour;
}

//Main
setInterval(updateTimer, 1000);