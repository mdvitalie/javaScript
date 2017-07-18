console.log("... JS10 script.js file loaded ...");

//In JavaScript we can store different types in the same array
/*var myStudents = new Array();
myStudents[0] = "Gabi";
myStudents[1] = "Agnes";
myStudents[2] = "Stephen";
myStudents[3] = "Emmanual";
myStudents[4] = "Sean";
myStudents[5] = "Pat";
myStudents[6] = 2017;
myStudents[7] = function (name) {
	console.log("Hi Student " + name);
};
myStudents[8] = {course: "Software Development", centre: "Finglas Training"};



console.log(myStudents[7](myStudents[3]));
console.log(myStudents[8].course);

for (var i = 0; i < myStudents.length; i++) {
	console.log(myStudents[i]);
}

myStudents[99] = "Damien";
for (var i = 0; i < myStudents.length; i++) {
	console.log(myStudents[i]);
}

for (var property in myStudents[8]) {
  console.log(property + ": " + myStudents[8][property]);
}


// Shorthand array creation
var arrayIndex = ["Luca", "Vitalie", "Darius"];
console.log(arrayIndex[2]);

var arrayProp = [{name: "Luca", gender: "male"}, {name: "Ewelina", gender: "female"}];
console.log(arrayProp[0].name);
console.log(arrayProp[0].gender);	

var query = "name";
console.log(arrayProp[0][query]);
console.log(arrayProp[1][query]);	

var query = "gender";
console.log(arrayProp[0][query]);
console.log(arrayProp[1][query]);	

// combined for loops
for (var i = 0; i < arrayProp.length; i++) {
  for (var property in arrayProp[i]) {
    console.log("Index: " + i + ": " + property + ": " + arrayProp[i][property]);
  }
}



//Populating array with for loop
var randomCol = new Array();
for (var i = 0; i < 100; i++) {
	randomCol[i] = "rgb(" +
	               Math.floor(Math.random() * 256) + ", " +
				   Math.floor(Math.random() * 256) + ", " +
				   Math.floor(Math.random() * 256) + ")";
}

console.log(randomCol);*/

//add a ul and lis using innerHTML
var a=""
 document.getElementById("arrayValuesInnerHtml").innerHTML += "<ul id = 'thisUl'></ul>";
var companies = [{name:"Microsoft", symbol: "MSFT", founded:"1795"}, {name: "Oracle EMEA", customers: 42000, phone:"1850 672 000"}, {name: "Apple", symbol: "AAPL", founder: "Steve Jobs"}];
for (var i = 0; i < companies.length; i++) {
  for (var property in companies[i]) {
    a +=property + ": " + companies[i][property] + ", ";   
  }
    document.getElementById("thisUl").innerHTML +="<li>"+a+"</li>";
    a="";
  
;}


   //appendChild 
    var newElement =  document.createElement("ul");
    newElement.id = "newUl";
    document.getElementById("arrayValuesAppendChild").appendChild(newElement);

for (var i = 0; i < companies.length; i++) {
  for (var property in companies[i]) {
    a +=property + ": " + companies[i][property] + ", ";
  }
    var newElement =  document.createElement("li"); 
    newElement.appendChild(document.createTextNode(" "+a+" "));
   // newElement.innerText = " "+a+" ";
     document.getElementById("newUl").appendChild(newElement);
     a="";
;} 



 

