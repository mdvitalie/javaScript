console.log("... mcr_sf_0.1.js file has loaded ...");
/*  This is the MCR Standard Function Rev 0.1 File  */


/**
*generates a random no. between two values: min and max
@param {Number} min - start value of specific range (lowest)
@param {Number} max - end value of specific range (highest)
@return{Number} random value between min and max  (inclusive)
*
*
randomNum(0,10);
returns >= 0 <11 //any number between 0 and 10

randomNum(0,0);
returns 0 //any number between 0 and 0
randomNum(10,10);
returns 10
randomNum(10,0);
returns null
**/


mcr_sf.randomNum = function(min, max){
    return Math.floor(Math.random()*(max-min +) + min);
}