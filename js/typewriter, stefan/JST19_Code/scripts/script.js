console.log("...JST19 loaded scripts.js file ...");

document.addEventListener("DOMContentLoaded", function(event) {
	startTextLine();
	var cursorBlink = setInterval(function(){cursorBlinkBg(); }, cursorDelay);
});

var textLines = ["AB?","Did you hear the latest?","JavaScript is great!","Really?","Really!"];
var textLines = ["AB?","Really?","Really!"];
var letterDelay = 300;
var displayedDelay = 800;
var withdrawDelay = 100;
var blankDelay = 500;
var cursorDelay = 500;

var htmlEl, letterArray, charDisplayed = 0, tempLine, i, buildLine, displayDelay, blankDelayTimer, currentLine = 0;

//There are a good few changes I would make in a second version of this script. 
//E.g. replace some setInterval with setTimeout. We should also think of a
//more uniform naming style of our functions and timer objects.

function startTextLine() {
	clearInterval(blankDelayTimer);
	if (currentLine < textLines.length - 1) {
		currentLine++;
		console.log("1 currentLine: " + currentLine);
		console.log("1 textLines.length: " + textLines.length);
	}
	else {
		console.log("2 currentLine: " + currentLine);
		console.log("2 textLines.length: " + textLines.length);
		currentLine = 0;
	}

	letterArray = splitLine(textLines[currentLine]);
	buildLine = setInterval(function(){buildLineChar(); }, letterDelay);
}


function displayDelayBetween() {
	displayDelay = setInterval(function(){displayWithdrawWait(); }, displayedDelay);
}

function displayWithdrawWait() {
	clearInterval(displayDelay);
	charDisplayed--;
	withdrawLine = setInterval(function(){withdrawLineChar(); }, withdrawDelay);
}

function displayDelayRestart() {
	blankDelayTimer = setInterval(function(){startTextLine(); }, blankDelay);
}





function withdrawLineChar() {
	htmlEl = document.getElementById("textLine");
	tempLine = "";
	charDisplayed--;
	if (charDisplayed > 0) {
		for (i = 0; i < charDisplayed; i++) {
			tempLine += letterArray[i];
		}
	}
	else {
		console.log("stop withdraw: " + tempLine);
		clearInterval(withdrawLine);
		displayDelayRestart();
	}
	console.log("tempLine: " + tempLine);
	htmlEl.innerText = tempLine;
	
}


function buildLineChar() {
	htmlEl = document.getElementById("textLine");
	tempLine = "";
	if (charDisplayed < letterArray.length + 1) {
		for (i = 0; i < charDisplayed; i++) {
			tempLine += letterArray[i];
		}
	}
	else {
		for (i = 0; i < charDisplayed - 1; i++) {
			tempLine += letterArray[i];
		}
	    htmlEl.innerText = tempLine;
		console.log("stop build: " + tempLine);
		clearInterval(buildLine);
		displayDelayBetween();
	}
	console.log("tempLine: " + tempLine);
	htmlEl.innerText = tempLine;
	charDisplayed++;
}


function splitLine(textLines) {
	letterArray = textLines.split("");
	console.log(letterArray);
	return letterArray;
}




function cursorBlinkBg() {
	//console.log("Blink event");
	htmlEl = document.getElementById("cursorSymbol");
	if (htmlEl.style.color == "yellow") {
		htmlEl.style.color = "silver";
	}
	else {
		htmlEl.style.color = "yellow";
	}
}