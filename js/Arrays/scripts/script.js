console.log("script.js file loaded (appendChild exercise)");

var myArray = new Array();
myArray[0] = "Gabi";
myArray[1] = "Agnes";
myArray[2] = "Stephen";
myArray[3] = "Emmanuel";
myArray[4] = "Shaun";
myArray[5] = "Pat";
myArray[6] = 2017;
myArray[7] = function(name){
    
    
    console.log("Hi Student "+ name);
};
console.log(myArray[7]("Don"));
console.log(myArray[7](myArray[3]));

myArray[8] = {course: "Software Development", centre: "Finglas"}
console.log(myArray[8].course);//instead of applying index u apply a literal



myArray[99] = "Damien";
for (var i = 0; i<myArray.length; i++){
    
    console.log(myArray[i]);
}


//shorthand
var arrayIndex = ["Luca", "Vitalie", "Darius"];
console.log(arrayIndex[2]);
var arrayLiteral = [{name: "Luca", gender: "male"},{name: "Evelina", gender: "female"}];
console.log(arrayLiteral[0].name);
console.log(arrayLiteral[0].gender);

var query = "name";
//console.log(arrayLiteral[0].query);
//console.log(arrayLiteral[1].query);

//populating array with for loop 

 var randomCol = new Array();
for(var i = 0; i<100; i++){
    randomCol[i] = "rgb(" + 
        
     Math.floor(Math.random()*256) + "," +
     Math.floor(Math.random()*256)+ "," +
     Math.floor(Math.random()*256) + ")"
    
    
}
console.log(randomCol);