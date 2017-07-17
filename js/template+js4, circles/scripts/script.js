console.log("script.js file loaded");
console.log("making canvas the whole width/height of page");
var canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c =  canvas.getContext("2d");
c.fillStyle = "rgba(255,255,255, 0.6)";
c.fillRect(100,100,100,100);
c.fillStyle = "rgba(255,15,255, 0.8)";
c.fillRect(350,150,100,100);
c.fillStyle = "rgba(3,255,7, 0.8)";
c.fillRect(700,100,100,100);
console.log(canvas);
//line

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 500);
c.strokeStyle = "#fff";
c.stroke();


for(var i=0; i<=400; i++){
    c.fillStyle = "rgba(255,255,255, 0.6)";
c.fillRect(100,100,100,100);
c.beginPath();
    var x = Math.random()*window.innerWidth;
     var y = Math.random()*window.innerHeight;
c.arc(x, y ,30, 0, Math.PI*2, false);
c.strokeStyle = "blue";
c.stroke();   
}