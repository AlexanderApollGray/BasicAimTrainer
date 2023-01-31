// Timed Home Page JavaScript

// Setup the canvases and contents

// Setup "play" canvasS
let cnv = document.getElementById("spPlayLinkCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 175;
cnv.height = 125;

// Draw text
ctx.font = "30px Arial, Helvetica, sans-serif";
ctx.fillStyle = "#8B008B";
ctx.fillText("Play", 60, 72.5);

// Setup "home" canvas
let cnv1 = document.getElementById("spHomeLinkCanvas");
let ctx1 = cnv1.getContext("2d");
cnv1.width = 175;
cnv1.height = 125;

// Draw text
ctx1.font = "30px Arial, Helvetica, sans-serif";
ctx1.fillStyle = "#8B008B";
ctx1.fillText("Home", 45, 72.5);