//NoColor.js

try{
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
	var rainbowBool = true;
	var pictureBool = false;
	var pixTaken = [];
	var running = true;

	var repeat =setInterval(fillPixels,0.0000001);
}
catch(err){}
try{
	var repeat2 = setInterval(flip,0.000001);
}
catch(err2){}


function fillPixels(){
	/*fills in random sets of pixels based on screen size*/
	if(running){
		if(rainbowBool){ 
			var r = Math.round(255*(Math.random()));
			var g = Math.round(255*(Math.random()));
			var b = Math.round(255*(Math.random()));
			var rgb = [r,g,b];
			ctx.fillStyle = "rgb(" + rgb.join(",") +")";
		}
		else if(pictureBool){
			var p;
		}
		var alreadyFilled = false;
		i = Math.round(Math.random()*width);             // generate a random number between 0 and width
		j = Math.round(Math.random()*height);             // generate a random number between 0 and height

		var currentPix = '(' + i.toString() + ', ' + j.toString() + ')';

		if (pixTaken.includes(currentPix)){
			alreadyFilled = true;
		}

		if (alreadyFilled == false){
			ctx.fillRect(i,j,Math.round(width/500),Math.round(height/500));
			pixTaken.push(currentPix);
			alreadyFilled = false;
		}
		
		ctx.fillRect(i,j,Math.round(width/500),Math.round(height/500));
	}

}

function flip(){
    try{document.getElementById("#btn").onclick() = function(){
		    if(!running){
		        repeat =setInterval(fillPixels,100); 
		    }
		    else{
		    	clearInterval(repeat);
		    }
		    running = !running;
	    }
	    document.getElementById("#rainbow_option").onclick() = function(){
		    rainbowBool = !rainbowBool;
	    }
	    document.getElementById("#picture_option").onclick() = function(){
		    pictureBool = !pictureBool;
	    }
    }
    catch(err){
    	console.log("we suck");
    }
    //Do the changes 

}
