console.log("... loaded JST16 scripts.js file ...");

bouncyBalls = setInterval(moveBalls, 1000);

balls = 0;

function moveBalls() {
	for (var i = 0; i < balls + 1; i++) {
	el = document.getElementById('b_'+i);
	elBg = document.getElementById('bounceBg');
	var y= Math.floor(Math.random() * 360);
	var x = Math.floor(Math.random() * 360);
	
	el.style.top = y + "px";
	el.style.left = x + "px";
		
	}

	newBall();

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