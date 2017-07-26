console.log("... loaded website project scripts.js file ...");

document.addEventListener("DOMContentLoaded", function(event) {

	/*  getElementById with id's (the method that we used in the past few weeks)
	    id's are unique, so this returns one object (HTML element) only.  */
	var myObject = document.getElementById("main");
	console.log("getElementById: " + myObject);
	console.log(myObject);

	/*  getElementsByClassName with class's
	    classes are not unique, so this returns all objects (HTML elements) with this class.  */
	var myObject = document.getElementsByClassName("paragraphStyle");
	console.log("getElementsByClassName: " + myObject);
	console.log(myObject);
	console.log(myObject[1]);

	/*  querySelector with id's
	    id's are unique, so this returns one object (HTML element) only  */
	var myObject = document.querySelector("#main");
	console.log("querySelector with id's: " + myObject);
	console.log(myObject);
	
	/*  querySelector with class's
	    classes are not unique, however this returns the first 
		object (HTML element) with this class only  */
	var myObject = document.querySelector(".paragraphStyle");
	console.log("querySelector with class's: " + myObject);
	console.log(myObject);
	
	/*  querySelectorAll with class's
	    classes are not unique, so this returns all objects (HTML elements) with this class.  */
	var myObject = document.querySelectorAll(".paragraphStyle");
	console.log("querySelectorAll: " + myObject);
	console.log(myObject);
	console.log(myObject[1]);
	
	/*  querySelector with tag names
	    tag names are not unique, however this returns the first 
		object (HTML element) with this tag name only  */
	var myObject = document.querySelector("h1");
	console.log("querySelector with tag names: " + myObject);
	console.log(myObject);

	/*  querySelectorAll with tag names
	    tag names are not unique, so this returns all objects (HTML elements) with this tag names.  */
	var myObject = document.querySelectorAll("h3");
	console.log("querySelectorAll: " + myObject);
	console.log(myObject);
	console.log(myObject[1]);
	


});