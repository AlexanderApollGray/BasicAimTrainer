// Mode JavaScipt

// Setup the canvases and contents

// Setup mode #1
// Setup canvas
let cnv = document.getElementById("timedCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 150;
cnv.height = 100;

// Draw text
ctx.font = "30px Arial, Helvetica, sans-serif";
ctx.fillStyle = "#8B008B";
ctx.fillText("Play", 45, 60);
