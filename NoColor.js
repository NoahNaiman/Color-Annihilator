//NoColor.js
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

var pixTaken = [];
var mode = "on"; //initialized in sandboxed.html as well

var portinvl = setInterval(getMode,500); //messageboard is created asynchronously so it might not exist first time this code is run
var i = 0; //set first location (i,j) of a pixel
var j = 0;
var alreadyFilled = false;

var repeat = setInterval(fillPixels,1000);

function fillPixels(){
	console.log(mode);
	/*fills in random sets of pixels based on screen size*/
	if(mode !== "off"){ //if stop button is clicked, will stop adding code
		if(mode === "on"){
			i = Math.round(Math.random()*width);             // generate a random number between 0 and width
			j = Math.round(Math.random()*height);
			ctx.fillStyle = "black";
			var currentPix = '(' + i.toString() + ', ' + j.toString() + ')';

			if (pixTaken.includes(currentPix)){
				alreadyFilled = true;
			}

			if (alreadyFilled == false){
				ctx.fillRect(i,j,Math.round(width/500),Math.round(height/500));
				pixTaken.push(currentPix);
				alreadyFilled = false;
			}
		}

		else if(mode === "rainbow"){ 
			//adds random colored pix to screen
			var r = Math.round(255*(Math.random()));
			var g = Math.round(255*(Math.random()));
			var b = Math.round(255*(Math.random()));
			var rgb = [r,g,b];
			ctx.fillStyle = "rgb(" + rgb.join(",") +")";

			i = Math.round(Math.random()*width);             // generate a random number between 0 and width
			j = Math.round(Math.random()*height);
			var currentPix = '(' + i.toString() + ', ' + j.toString() + ')';

			if (pixTaken.includes(currentPix)){
				alreadyFilled = true;
			}

			if (alreadyFilled == false){
				ctx.fillRect(i,j,Math.round(width/500),Math.round(height/500));
				pixTaken.push(currentPix);
				alreadyFilled = false;
			}
		}

		else if(mode === "picture"){
			//will add a picture a pixel at a time
		}

		else if(mode === "single"){
			//takes a single pixel set and changes its color
			var r = Math.round(255*(Math.random()));
			var g = Math.round(255*(Math.random()));
			var b = Math.round(255*(Math.random()));
			var rgb = [r,g,b];
			ctx.fillStyle = "rgb(" + rgb.join(",") +")";

			i = Math.round(Math.random()*width);             // generate a random number between 0 and width
			j = Math.round(Math.random()*height);	

			ctx.fillRect(i,j,Math.round(width/500),Math.round(height/500));


		}             // generate a random number between 0 and height
	}

}

function getMode(){
	/*receives message from port
	**communicates with sandboxed.html
	*/
	chrome.runtime.onConnect.addListener(function(port) {
	  	console.assert(port.name == "mode");
	  	port.onMessage.addListener(function(msg) {
		    if (msg.newMode){
		    	mode = msg.newMode;
		  		console.log("Mesage received: "+mode);
		    }
		    else
			    console.log("error receiving new mode, last mode was: " + mode);
	  	});
	});

}
