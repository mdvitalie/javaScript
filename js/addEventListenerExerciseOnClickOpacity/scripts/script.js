console.log("...JST12 loaded scripts.js file ...");


document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
	
	// Unobstrusive events with addEventListener
	document.getElementById("toggleDivH").addEventListener("click", toggle);
	
	// Need to set the height of div value before transition will work
	var htmlElement = document.getElementById("toggleDiv");
	divOrigHeight = parseFloat(window.getComputedStyle(htmlElement, null).getPropertyValue("height"));
	htmlElement.style.height = divOrigHeight + "px";
    
    
     var htmlEl = document.querySelectorAll('p');
        console.log(htmlEl); 
       
        for (var i =0; i<htmlEl.length;i++){
        htmlEl[i].style.backgroundColor ="red" ;
          console.log(htmlEl[i]);}

});

var divOrigHeight = "0px";

function toggle() {
	var htmlElement = document.getElementById("toggleDiv");
	if (htmlElement.style.opacity == "0") {
		console.log("Fading In");
		htmlElement.style.opacity = "1";
		htmlElement.style.height = divOrigHeight + "px";
          
	}
	else {
		console.log("Fading Out");		
		htmlElement.style.opacity = "0";
		htmlElement.style.height = "0px";
    }
    
    function getRandomColor()
{
    var r = function () {return Math.floor(Math.random()*256) };
    var a = function () {return Math.floor(Math.random()*10)};
    return "rgba(" + r() + "," + r() + "," + r() + "," + " ." + a() + ")";
}
    var myRandomColor = getRandomColor();
    var myRandomColor2 = getRandomColor();
    htmlElement.style.backgroundColor = myRandomColor;
    htmlElement.style.color = myRandomColor2;
    console.log(getRandomColor()); 
    
}

