//tutorial from - https://www.youtube.com/channel/UC9Yp2yz6-pwhQuPlIDV_mjA
// Initial Setup
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var gravity = 1;
var friction = 0.99;
canvas.width = innerWidth;
canvas.height = innerHeight;


// Variables
var mouse = {
	x: innerWidth / 2,
	y: innerHeight / 2 
};

var colors = [
	'#2185C5',
	'#7ECEFD',
	'#FFF6E5',
	'#FF7F66'
];


// Event Listeners
addEventListener("mousemove", function(event) {
	mouse.x = event.clientX;
	mouse.y = event.clientY;
});

addEventListener("resize", function() {
	canvas.width = innerWidth;	
	canvas.height = innerHeight;

	init();
});


// Utility Functions
function randomIntFromRange(min,max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
	return colors[Math.floor(Math.random() * colors.length)];
}


// Objects
function Ball(x, y, dx, dy, radius, color) {
	this.x = x;
	this.y = y;
    this.dy = dy;
    this.dx = dx;
	this.radius = radius;
	this.color = color;

	this.update = function() {
        if(this.y + this.radius + this.dy > canvas.height){
            this.dy=-this.dy*friction;//change in direction when it gets to the surface
            
            
        }else{
           this.dy+=gravity;
            
        }
        if(this.x + this.radius + this.dx>canvas.width || this.x - this.radius - this.dx<0){
            
        this.dx=-this.dx;
            
        }
        this.x+=this.dx;
		this.y+=this.dy;//adds velocity of 1
		this.draw();
	};

	this.draw = function() {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);	
		c.fillStyle = this.color;
		c.fill();
        c.strokeStyle = 'rgba(0,0,0, .9)';
        c.lineWidth = 2;
        c.stroke();
		c.closePath();
	};
}


// Implementation
var ball;
var radius = 30;
var ballArray = [];
function init() {
    for (var i=0; i<100; i++){//amount of balls
        
        var x = randomIntFromRange(radius,canvas.width - radius);
         var y = randomIntFromRange(0,canvas.height - radius);
        var dx = randomIntFromRange(-2,2);
        ballArray.push(new Ball(x, y, dx, 2, 30, 'red'))    
    }
    
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, canvas.width, canvas.height);
     for(var i = 0; i<ballArray.length; i++){
        ballArray[i].update();
        
        
    }
	
}

init();
animate();