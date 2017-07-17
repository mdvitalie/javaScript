console.log("script.js file loaded (appendChild exercise)");

function randomNum() {
    var randomNumber = Math.floor(Math.random()*11);
    return randomNumber;
}
setInterval(function(){
    document.getElementById("randomNumber").innerHTML = randomNum();
}, 2000);