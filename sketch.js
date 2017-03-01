function Ball(x, y) {
  this.position = {x: x, y: y};
  this.speed = {x:random(-2,2),y:(-2,2)},
  

  this.draw = function() {
         if(this.position.y > height){
       this.speed.y *= -1;
     };
     if(this.position.x > width){
       this.speed.x *= -1;
    };
     if(this.position.x < 0){
     this.speed.x += 1
     };
     if(this.position.y < 0){
    this.speed.y += 1
     };
     
   this.position.x += this.speed.x;
   this.position.y += this.speed.y;
 this.position.x = this.position.x + this.speed.x + random (-2,2);
 this.position.y = this.position.y + this.speed.y +random(-2,2);
    ellipse(this.position.x, this.position.y, random(-25,25),25);
  }
}

var balls = [];
function mouseDragged() {
  
  var ball = new Ball(mouseX, mouseY);
  balls.push(ball);
}

function draw() {
  background(255);
  stroke(122, 79, 124);
  fill(255,212,216)
  for (var i = 0; i < balls.length; i++)
    balls[i].draw();
    
}


function setup() {
  resizeCanvas(700, 700);
}