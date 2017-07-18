console.log("script.js file loaded");
var canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c =  canvas.getContext("2d");
var mouse = {
   x:undefined,
   y:undefined
}
var maxRadius= 70
var minRadius = 20;
var colorArray=[
   'rgba(255,0,122, .9)', 
   'rgba(0,255,122, .7)', 
   'rgba(0,0,255, .9)', 
   'rgba(0,255,10, .8)', 
   'rgba(113,0,155, .7)', 
   'rgba(0,200,76, .8)' 
 
];
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    
});

window.addEventListener('resize', function(){
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
init();
    
    
})
function Circle(x,y, dx, dy, radius){
  this.x = x;
  this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.minRadius = radius;
    this.radius = minRadius;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)];
    
    
    this.draw = function(){
        c.beginPath(); 
        c.arc(this.x, this.y ,this.radius, 0, Math.PI*2, false);
       c.fillStyle = this.color;
        c.fill();
        c.strokeStyle = 'rgba(255,255,255, .5)';
        c.lineWidth = 5;
        c.stroke();
   
    }
    this.update = function(){
        if (this.x + this.radius >innerWidth || this.x - radius < 0){
        this.dx = -this.dx;
    }
     if (this.y + this.radius >innerHeight || this.y-radius < 0){
        this.dy = -this.dy;
    }
  
    this.x += this.dx;  
    this.y += this.dy; 
       if (mouse.x - this.x<50 && mouse.x- this.x>-50&&mouse.y-this.y<50 && mouse.y-this.y>-50){
           if (this.radius<maxRadius)
           {this.radius +=1;}
              
         
       }else if (this.radius>this.minRadius){
         this.radius -=1;  
           
       }
        this.draw();
    }
}



var circleArray = [];

function init(){
circleArray = [];
for (var i=0; i<600; i++){
var radius = Math.random() * 10+ 9;
var x = Math.random() * (innerWidth - radius *2) + radius;
var y = Math.random() * (innerHeight - radius*2) + radius;
var dx = (Math.random() - 0.5)* 3;
var dy = (Math.random() - 0.5)* 3;

circleArray.push(new Circle(x, y, dx, dy, radius));
}
    
    
}
function animate(){
requestAnimationFrame(animate);//creating a loop
c.clearRect(0, 0, innerWidth, innerHeight);
    
for(var i=0; i<circleArray.length; i++){
    circleArray[i].update();
    
}
    

    
}
init();
animate();





