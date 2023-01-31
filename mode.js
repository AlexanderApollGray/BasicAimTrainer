// Mode JavaScipt

// Setup the canvases and contents

// Setup mode #1
// Setup canvas
let cnv3 = document.getElementById("mode1Canvas");
let ctx3 = cnv3.getContext("2d");
cnv3.width = 175;
cnv3.height = 125;

// Draw text
ctx3.font = "30px Arial, Helvetica, sans-serif";
ctx3.fillStyle = "#8B008B";
ctx3.fillText("Timed", 45, 72.5);

// Setup mode #2
// Setup canvas
let cnv4 = document.getElementById("mode2Canvas");
let ctx4 = cnv4.getContext("2d");
cnv4.width = 175;
cnv4.height = 125;

// Draw text
ctx4.font = "30px Arial, Helvetica, sans-serif";
ctx4.fillStyle = "#8B008B";
ctx4.fillText("Speedrun", 20, 72.5);