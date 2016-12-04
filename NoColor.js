//NoColor.js


var width = window.innerWidth;
var height = window.innerHeight;
var body = document.querySelector("body");

var canvas = document.createElement('canvas');

canvas.width = width;
canvas.height = height;
canvas.style.zIndex   = Number.MAX_SAFE_INTEGER;
canvas.style.position = "fixed";
canvas.style.pointerEvents = "none";
document.body.insertBefore(canvas, document.body.firstChild);


var c = document.querySelector("canvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "black";
var i =200;
var j = 200;
var rainbowBool = [true];
var pictureBool = [false];
var running = [true];
var repeat =setInterval(fillPixels,100);
function fillPixels(){
	/*fills in random sets of pixels based on screen size*/
	if(running[0]){
		if(rainbowBool[0]){ 
			var r = Math.round(255*(Math.random()));
			var g = Math.round(255*(Math.random()));
			var b = Math.round(255*(Math.random()));
			var rgb = [r,g,b];
			ctx.fillStyle = "rgb(" + rgb.join(",") +")";
		}
		else if(pictureBool[0]){
			var p;
		}

		ctx.fillRect(i,j,Math.round(width/500),Math.round(height/500));
		i = Math.round(Math.random()*width);             // generate a random number between 0 and width
		j = Math.round(Math.random()*height);             // generate a random number between 0 and height
	}

}
function flip(bol){
    bol[0] = !bol[0];
}
