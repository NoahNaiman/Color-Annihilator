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
var rainbowBool = false;
var blackBool = false;
var whiteBool = true;
var blackAndWhiteBool = false;
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

	else if(blackBool){
		var rgb = [0,0,0];
		ctx.fillStyle = "rgb(" + rgb.join(",") +")";
	}

	else if(whiteBool){
		var rgb = [255,255,255];
		ctx.fillStyle = "rgb(" + rgb.join(",") +")";
	}

	ctx.fillRect(i,j,Math.round(width/500),Math.round(height/500));
	i = Math.round(Math.random()*width);             // generate a random number between 0 and width
	j = Math.round(Math.random()*height);             // generate a random number between 0 and height
}

var data = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">' +
           '<foreignObject width="100%" height="100%">' +
           '<div xmlns="http://www.w3.org/1999/xhtml" style="font-size:40px">' +
             markup +
           '</div>' +
           '</foreignObject>' +
           '</svg>';

var DOMURL = window.URL || window.webkitURL || window;

var img = new Image();
var svg = new Blob([data], {type: 'image/svg+xml'});
var url = DOMURL.createObjectURL(svg);

img.onload = function () {
  ctx.drawImage(img, 0, 0);
  DOMURL.revokeObjectURL(url);
}

img.src = url;