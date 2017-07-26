console.log("... JS14 script.js file has loaded ...");

window.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

	getPropValues();
	// Unobstrusive events with addEventListener
	//document.getElementById("wrapper").addEventListener("click", logHello);

	// Unobstrusive events with addEventListener + passing parameters with anonymous function
	//document.getElementById("wrapper").addEventListener("dblclick", function(){logHello2("Stefan");});	

});

function getPropValues() {
	var htmlEl = document.getElementById("wrapper");

	var width = window.getComputedStyle(htmlEl, null).getPropertyValue("width");
	console.log("computed wrapper width= " + width);
	var backgroundColor = window.getComputedStyle(htmlEl, null).getPropertyValue("background-color");
	console.log("computed wrapper backgroundColor= " + backgroundColor);

	var cssProperty = "color";
	var propValue = window.getComputedStyle(htmlEl, null).getPropertyValue(cssProperty);
	console.log("computed wrapper "+ cssProperty + " = " + propValue);
	var cssProperty = "margin";
	var propValue = window.getComputedStyle(htmlEl, null).getPropertyValue(cssProperty);
	console.log("computed wrapper "+ cssProperty + " = " + propValue);
	
	htmlEl.style.margin = "2px 12px 0px 10px";
	var propValue = htmlEl.style.margin;
	console.log("defined wrapper margin = " + propValue);
	
	htmlEl.style.padding = "8px";
	var cssProperty = "padding";
	var propValue = htmlEl.style[cssProperty];
	console.log("defined wrapper "+ cssProperty + " = " + propValue);

	
	// CSS computed vs CSS defined
	var cssProperty = "width";
	var cssValue = "500px";
	htmlEl.style[cssProperty] = cssValue;
	console.log("Intention is to set the " + cssProperty + " to " + cssValue);
	var propValue = window.getComputedStyle(htmlEl, null).getPropertyValue(cssProperty);
	console.log("computed wrapper "+ cssProperty + " = " + propValue);
	var propValue = htmlEl.style[cssProperty];
	console.log("defined wrapper "+ cssProperty + " = " + propValue);
	var propValue = window.getComputedStyle(htmlEl, null).getPropertyValue(cssProperty);
	console.log("computed wrapper "+ cssProperty + " = " + propValue);
	

	// CSS computed vs CSS defined
    
    var htmlEl = document.getElementById("wrapper");
	var cssProperty = "width";
	
	htmlEl.style[cssProperty] = cssValue;
	console.log("Intention is to set the " + cssProperty + " to " + cssValue);
	var propValue = window.getComputedStyle(htmlEl, null).getPropertyValue(cssProperty);
	console.log("computed wrapper "+ cssProperty + " = " + propValue);
	var propValue = htmlEl.style[cssProperty];
	console.log("defined wrapper "+ cssProperty + " = " + propValue);
	var propValue = window.getComputedStyle(htmlEl, null).getPropertyValue(cssProperty);
	console.log("computed wrapper "+ cssProperty + " = " + propValue);
  
	var a;
    
     var cssProperty = "width";
     var cssProperty2 = "height";
     console.log("bla bla bal "+ cssProperty2 + " = " + propValue);
    var cssValue;
    htmlEl.style[cssProperty] = cssValue;
    var propValue = window.getComputedStyle(htmlEl, null).getPropertyValue(cssProperty);
    console.log("computed wrapper "+ cssProperty + " = " + propValue);
    var cssProperty2 = "height";
    var propValue = window.getComputedStyle(htmlEl, null).getPropertyValue(cssProperty2);
    console.log("computed wrapper "+ cssProperty2 + " = " + propValue);
    
    
    
    
    
    
    //appendChild 
    var newElement =  document.createElement("div");
    newElement.id = "newDiv";
    newElement = createTable();
    
    var htmlEls = [{sel: "wrapper", prop: "width"}, {sel: "wrapper", prop: "height"}];
    for (var i = 0; i<htmlEls.length; i++){  
    for (var property in htmlEls[i]) {
    console.log(property + ": " + htmlEls[i][property]);  
  }

}
    function createTable() {
    // Create table.
    var table = document.createElement('table');
    // Insert New Row for table at index '0'.
    
      var row5 = table.insertRow(0);
    // Insert New Column for Row1 at index '0'.
    var row5col1 = row5.insertCell(0);
    row5col1.innerHTML = 'height (computed)';
    // Insert New Column for Row1 at index '1'.
    var row5col2 = row5.insertCell(1);
    row5col2.innerHTML = propValue;
    
     var row4 = table.insertRow(0);
    // Insert New Column for Row1 at index '0'.
    var row4col1 = row4.insertCell(0);
    row4col1.innerHTML = 'height (defined)';
    // Insert New Column for Row1 at index '1'.
    var row4col2 = row4.insertCell(1);
    row4col2.innerHTML = 'x px';
    
    var row3 = table.insertRow(0);
    // Insert New Column for Row1 at index '0'.
    var row3col1 = row3.insertCell(0);
    row3col1.innerHTML = 'width (computed)';
    // Insert New Column for Row1 at index '1'.
    var row3col2 = row3.insertCell(1);
    row3col2.innerHTML = a + ' px';
    
     var row2 = table.insertRow(0);
    // Insert New Column for Row1 at index '0'.
    var row2col1 = row2.insertCell(0);
    row2col1.innerHTML = 'width (defined)';
    // Insert New Column for Row1 at index '1'.
    var row2col2 = row2.insertCell(1);
    row2col2.innerHTML = 'x px';
    
     var row1 = table.insertRow(0);
    // Insert New Column for Row1 at index '0'.
    var row1col1 = row1.insertCell(0);
    row1col1.innerHTML = 'Property';
    // Insert New Column for Row1 at index '1'.
    var row1col2 = row1.insertCell(1);
    row1col2.innerHTML = 'Property Value';
    
    // Append Table into div.
    var div = document.getElementById('footer');
    div.appendChild(table);
    
    
    
    
}
}
