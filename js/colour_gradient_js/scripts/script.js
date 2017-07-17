console.log("script.js file loaded (appendChild exercise)");
var centerRed = 255;
var centerGreen = 255;
var centerBlue = 255;

var topLeftRed = 0;
var topLeftGreen = 0;
var topLeftBlue = 0;

var topRightRed = 0;
var topRightGreen = 0;
var topRightBlue = 0;

var bottomLeftRed = 0;
var bottomLeftGreen = 0;
var bottomLeftBlue = 0;

var bottomRightRed = 0;
var bottomRightGreen = 0;
var bottomRightBlue = 0;


function changeColourValues(){
 
      centerRed = randomNum(); 
      centerGreen = randomNum(); 
      centerBlue = randomNum(); 
    console.log("center"  + centerRed +"," + centerGreen +", " + centerBlue);
      topLeftRed = randomNum(); 
      topLeftGreen = randomNum(); 
      topLeftBlue = randomNum(); 
     console.log("left"  + topRightRed +"," + topLeftGreen +", " + topLeftBlue);
      topRightRed = randomNum(); 
      topRightGreen = randomNum(); 
      topRightBlue = randomNum(); 
    console.log("right"  + topRightRed +"," + topRightGreen +", " + topRightBlue);
      bottomLeftRed = randomNum(); 
      bottomLeftGreen = randomNum(); 
      bottomLeftBlue = randomNum(); 
     console.log("bleft"  + bottomLeftRed +"," + bottomLeftGreen +", " + bottomLeftBlue);
      bottomRightRed = randomNum(); 
      bottomRightGreen = randomNum(); 
      bottomRightBlue = randomNum(); 
   console.log("bright"  + bottomRightRed +"," + bottomRightGreen +", " + bottomRightBlue);
    
}


function randomNum(){
    var randomNumber =Math.floor(Math.random()*256);
    return randomNumber;   
}

function changeColour(){
 //document.getElementById("topLeft").style.backgroundColor = "rgb(" + topLeftRed +", " + topLeftGreen + ", " + topLeftBlue + ")"   
   
 document.getElementById("topLeft").style.background = "linear-gradient(-45deg, " + "rgb(" + centerRed + ", " + centerGreen + ", " + centerBlue + ")" + ", " + "rgb(" + topLeftRed + ", " + topLeftGreen + " , " + topLeftBlue + ")" +");"
}



setInterval(function(){
    changeColourValues();
    changeColour();
  
   // document.getElementById("randomNumber").innerHTML = changeColour();
}, 3000);