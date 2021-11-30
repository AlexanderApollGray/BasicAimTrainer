// Timed Play Page JavaScript

// Setup the canvas and contents

// Setup canvas
let cnv = document.getElementById("tmPlayCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 650;

ctx.font = "70px Arial, Helvetica, sans-serif";
ctx.fillStyle = "#8B008B";
ctx.fillText("Start", 320, 310);

// Global Variables
let target1X = Math.random() * 740 + 30;
let target1Y = Math.random() * 590 + 30;
let target2X = Math.random() * 740 + 30;
let target2Y = Math.random() * 590 + 30;
let target3X = Math.random() * 740 + 30;
let target3Y = Math.random() * 590 + 30;
let radius = 25;
let mouseIsPressed = false;
let distance1, distance2, distance3;
let clientX, clientY;
let points = 0;

// Event listeners
document.addEventListener("mousedown", mousedownHandler);
document.addEventListener("mouseup", mouseupHandler);
document.addEventListener("click", success);

function mousedownHandler() {
  mouseIsPressed = true;
}

function mouseupHandler() {
  mouseIsPressed = false;
}
// cursor
const cursor = document.querySelector(".cursor");
let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

let speed = 1; // change to increase the ease

function animate() {
  let distX = mouseX - cursorX;
  let distY = mouseY - cursorY;

  cursorX = cursorX + distX * speed;
  cursorY = cursorY + distY * speed;

  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";

  requestAnimationFrame(animate);
}

animate();

document.addEventListener("mousemove", (event) => {
  mouseX = event.pageX;
  mouseY = event.pageY;

  clientX = event.clientX;
  clientY = event.clientY;
});

// Setup timer
let seconds = 30;
let timer;

function timerFunction() {
  if (seconds < 30) {
    document.getElementById("timer").innerHTML = "Timer: " + seconds;
  }
  if (seconds > 0) {
    seconds--;
  } else {
    clearInterval(timer);
  }
}
document.getElementById("timer").innerHTML = "Timer: 30";

// Main Program
requestAnimationFrame(start);

function start() {
  document.getElementById("points").innerHTML = "Points: " + points;
  let cnvRect = cnv.getBoundingClientRect();

  let run1 = Math.abs(clientX - cnvRect.x - target1X);
  let rise1 = Math.abs(clientY - cnvRect.y - target1Y);
  distance1 = Math.sqrt(run1 ** 2 + rise1 ** 2);

  let run2 = Math.abs(clientX - cnvRect.x - target2X);
  let rise2 = Math.abs(clientY - cnvRect.y - target2Y);
  distance2 = Math.sqrt(run2 ** 2 + rise2 ** 2);

  let run3 = Math.abs(clientX - cnvRect.x - target3X);
  let rise3 = Math.abs(clientY - cnvRect.y - target3Y);
  distance3 = Math.sqrt(run3 ** 2 + rise3 ** 2);

  if (mouseIsPressed) {
    // Start Timer
    if (!timer) {
      timer = window.setInterval(function () {
        timerFunction();
      }, 1000);
    }
  }

  if (timer > 0) {
    ctx.fillStyle = "#1DE4E4";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Draw targets (circles)
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(target1X, target1Y, radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(target2X, target2Y, radius, 0, 2 * Math.PI);
    ctx.fill();

    ctx.fillStyle = "blue";
    ctx.beginPath();
    ctx.arc(target3X, target3Y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }
  if (seconds === 0) {
    ctx.fillStyle = "#70ffff";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
  
    ctx.font = "70px Arial, Helvetica, sans-serif";
    ctx.fillStyle = "#8B008B";
    ctx.fillText("Done", 320, 310);

    document.getElementById("done").innerHTML = "Reload To Play Again"
  }
  requestAnimationFrame(start);
}

function success() {
  if (distance1 < 25) {
    target1X = Math.random() * 740 + 30;
    target1Y = Math.random() * 590 + 30;
    points++;
  }
  if (distance2 < 25) {
    target2X = Math.random() * 740 + 30;
    target2Y = Math.random() * 590 + 30;
    points++;
  }
  if (distance3 < 25) {
    target3X = Math.random() * 740 + 30;
    target3Y = Math.random() * 590 + 30;
    points++;
  }
}