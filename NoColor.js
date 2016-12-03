var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "absolute";
canvas.style.zIndex = 10;
document.body.appendChild(canvas);

var c = document.querySelector("canvas")
var ctx = c.getContext('2d');

var width = window.innerWidth;
var height = window.innerHeight;
var rainbow = true;

var drawInterval = setInterval(drawColor, .000000000001);

function drawColor(){

	if (rainbow){
		var r = Math.round(255*Math.random());
		var g = Math.round(255*Math.random());
		var b = Math.round(255*Math.random());
		var rgb = [r, g, b];
		ctx.fillStyle = 'rgb(' + rgb.join(",") + ')';
	}

	ctx.fillRect((Math.random() * width), (Math.random() * height), Math.round(width/500), Math.round(height/500));
}