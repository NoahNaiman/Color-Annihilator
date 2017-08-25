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

var picture = document.createElement('canvas');
picture.style.zIndex = Number.MIN_SAFE_INTEGER; //hide picture below website
picture.width = width;
picture.height=height;
picture.id = "kitten";
document.body.append(picture);
var pic = document.getElementById("kitten");
var picCtx = pic.getContext("2d");
var image = document.createElement('img');
image.src ="https://thecatapi.com/api/images/get?format=src&type=jpg";
picCtx.drawImage(image,Math.round(width/2),Math.round(height/2));
console.log(picCtx);

var mode;
if(!mode); //the event listener on the function will set mode for every received msg
	mode = "off"; //mode exists receive mode from server
					 //initialize mode if mode is not initialized
//var portinvl = setInterval(getMode,500);
getMode();
i = Math.round(Math.random()*width);    //sets first pixel location(i,j)
j = Math.round(Math.random()*height);
var repeat = setInterval(fillPixels,1000);
var speedUp; //will increase the speed at which the fillPixels is run
function fillPixels(){
	pixelSize = [Math.round(width/500),Math.round(height/500)];
	console.log(mode);
	/*fills in random sets of pixels based on screen size*/
	if(mode !== "off"){
		if(mode === "on"){
			if(typeof speedUp === 'undefined' || speedUp === null){
				clearInterval(speedUp);
			}
			i = Math.round(Math.random()*width);             // generate a random number between 0 and width
			j = Math.round(Math.random()*height);

			ctx.fillStyle = "black";
			ctx.fillRect(i,j,pixelSize[0],pixelSize[1]);

		}

		else if(mode === "rainbow"){ 
			if(typeof speedUp !== 'undefined' || speedUp !== null){
				clearInterval(speedUp);
			}
			var r = Math.round(255*(Math.random()));
			var g = Math.round(255*(Math.random()));
			var b = Math.round(255*(Math.random()));
			var rgb = [r,g,b];
			ctx.fillStyle = "rgb(" + rgb.join(",") +")";

			i = Math.round(Math.random()*width);             // generate a random number between 0 and width
			j = Math.round(Math.random()*height);

			ctx.fillRect(i,j,pixelSize[0],pixelSize[1]);

		}

		else if(mode === "picture"){
			if(typeof speedUp === 'undefined' || speedUp === null){
				speedUp = setInterval(fillPixels,10);
			}
			var d = picCtx.getImageData(i,j,1,1);
			//ctx.putImageData(d,i,j,0,0,1,1);
			ctx.putImageData(pic,0,0);
			console.log("imageData: " + d.data);

			i = Math.round(Math.random()*width);             // generate a random number between 0 and width
			j = Math.round(Math.random()*height);

		}

		else if(mode === "single"){
			if(typeof speedUp !== 'undefined' || speedUp !== null){
				clearInterval(speedUp);
			}
			var r = Math.round(255*(Math.random()));
			var g = Math.round(255*(Math.random()));
			var b = Math.round(255*(Math.random()));
			var rgb = [r,g,b];
			ctx.fillStyle = "rgb(" + rgb.join(",") +")";	

			ctx.fillRect(i,j,Math.round(width/500),Math.round(height/500));


		}             // generate a random number between 0 and height
	}
	else{
		if(typeof speedUp !== 'undefined' || speedUp !== null){
				clearInterval(speedUp);
		}
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
		  		console.log("Message received: "+mode);
		    }
		    else
			    console.log("error receiving new mode, last mode was: " + mode);
	  	});
	});

}