//NoColor.js
var width = window.innerWidth;
var height = window.innerHeight;
var body = document.querySelector("body");
//body.setAttribute("style", "height: "+ height+"px");
//body.setAttribute("style", "width: "+ width+"px");


var canvas = document.createElement('canvas');
//canvas.id = "mycanvas";
canvas.width = width//document.body.clientWidth;
canvas.height = height//document.body.clientHeight;
canvas.style.border = "1px solid";
canvas.style.zIndex   = Number.MAX_SAFE_INTEGER;
canvas.style.position = "fixed";
canvas.style.pointerEvents = "none";
document.body.insertBefore(canvas, document.body.firstChild);


var c = document.querySelector("canvas");
var ctx = c.getContext("2d");

ctx.fillStyle = "black";
var i =200;
var j = 200;
var rainbowBool = true;
var repeat =setInterval(fillPixels,100);
function fillPixels(){
	/*fills in random sets of pixels based on screen size*/
	if(rainbowBool){ 
		var r = Math.round(255*(Math.random()));
		var g = Math.round(255*(Math.random()));
		var b = Math.round(255*(Math.random()));
		var rgb = [r,g,b];
		ctx.fillStyle = "rgb(" + rgb.join(",") +")";
	}

	ctx.fillRect(i,j,Math.round(width/500),Math.round(height/500));
	i = Math.round(Math.random()*width);             // generate a random number between 0 and width
	j = Math.round(Math.random()*height);             // generate a random number between 0 and height

	//canvas.width = window.innerWidth
	//canvas.height = window.innerHeight


}

