console.log("... loaded JS18 scripts.js file ...");


// A factory is an object for creating other objects
function makePowerOfFunction(power) {
	var functionX = function(x) {
		return Math.pow(x,power);
	}
	return functionX;
}

var powerOf2 = makePowerOfFunction(2);
var powerOf3 = makePowerOfFunction(3);



console.log(powerOf2(4));
console.log(powerOf3(4));


//FUNCTIONS AS ARGUMENTS
function doIt(x, functionDoIt) {
	return functionDoIt(x);
}


console.log(doIt(4,powerOf2));

var functionName = powerOf2;
console.log(doIt(4,functionName));

