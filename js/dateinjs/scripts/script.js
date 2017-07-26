console.log("...JST12 loaded scripts.js file ..." + Date());
var d = new Date();
var n = d.getMilliseconds();
console.log("miliseconds calculated when script.js loaded: " + n);
 

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed: " + Date());
	var d1 = new Date();
    var n1 = d1.getMilliseconds();
console.log("miliseconds calculated when DOM fully loaded and parsed: " + n1);
    
//Unobstrusive events with addEventListener
document.getElementById("body").addEventListener("click", dateFunction);

    var d = new Date();
    document.getElementById("date1").innerHTML = d.getTime();
    var d1 = new Date();
    document.getElementById("date2").innerHTML = d1.getFullYear();
    var d2 = new Date();
    document.getElementById("date3").innerHTML = d2.getDay();
    var d3 = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("date4").innerHTML = days[d3.getDay()];
    
    
  function dateFunction(){
     console.log("get date from body: " + Date())
     var d2 = new Date();
     var n2 = d2.getMilliseconds();
     console.log("miliseconds calculated when body gets clicked: " + n2);
    console.log("difference " + (n2-n1));
 }
    

});



    


