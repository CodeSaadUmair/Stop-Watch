let secElapsed = 0;
let intervalId = null;
const timeText = document.getElementById("time");

function startTime() {
  if (intervalId) stopTime();
  intervalId = setInterval(() => {
    secElapsed++;
    timer();
  }, 1000);
}

function timer() {
  const min = String(Math.floor((secElapsed % 3600) / 60)).padStart(2, "0");
  const sec = String(secElapsed % 60).padStart(2, "0");
  timeText.innerHTML = `${min}:${sec}`;
}

function stopTime() {
  clearInterval(intervalId);
}

function resetTime() {
  stopTime();
  secElapsed = 0;
  timer();
}
