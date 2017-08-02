console.log("... loaded JQ01 scripts.js file ...");

//jQuery(document).ready(function() {
//$(document).ready(function() {
$(function() {
	console.log("... JQ DOM ready ...");
	$('#article').fadeOut(3000).fadeIn(1000);
	$("#myH1").text("Stefan and jQuery");
	$("#myP").html("Stefan and <strong>jQuery</strong> paragraph.");
	$("#myP").prepend("Prepare for the end of what? ");
    $("#myP").append("<h3>New Heading after P</h3>");
	$("a").attr("href", "http://www.microsoft.ie");
	});


//Basic selectors
//$("#id_Type");
//$(".class_Type");
//$("p_HTML_Tag_Type");

