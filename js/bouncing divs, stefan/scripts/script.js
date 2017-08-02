console.log("... loaded BOUNCE scripts.js file ...");

function startBounce() {
	return bouncyBalls = setInterval(moveBalls, 1000);
}


balls = 0;
startBounce();

function moveBalls() {
	for (var i = 0; i < balls + 1; i++) {
		//console.log(i);
	el = document.getElementById('b_'+i);
	elBg = document.getElementById('bounceBg');
	var topV = Math.floor(Math.random() * 360);
	var x = Math.floor(Math.random() * 360);
	
	el.style.top = topV + "px";
	el.style.left = x + "px";
	
	el.style.zIndex = balls;
		
	}

	if (balls > 4) {
		var myObject = document.querySelectorAll(".b_x");
		console.log(myObject);
		for (var i = 0; i < myObject.length; i++) {
			console.log(parseFloat(window.getComputedStyle(myObject[i], null).getPropertyValue("border-radius")));
			if (parseFloat(window.getComputedStyle(myObject[i], null).getPropertyValue("border-radius")) > 0) {
			    myObject[i].style.borderRadius = (parseFloat(window.getComputedStyle(myObject[i], null).getPropertyValue("border-radius")) - 1) + "px";
			}
		}
	}
	if (balls < 6) {newBall();}
}



function newBall() {
	balls++;
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);

    htmlEl = document.getElementById("bounceBg");
	newEl = document.createElement("div");
	newEl.id = "b_" + balls;
	newEl.className = "b_x";
	newEl.style.backgroundColor = "rgb(" + red + ", " + green +", " + blue + ")";
	newEl.style.zIndex = 0;
	htmlEl.appendChild(newEl);
}

