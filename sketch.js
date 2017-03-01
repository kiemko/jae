function Ball(x, y) {
  this.position = {x:x, y:y};
  this.speed = {x:random(-2,2),y:(-2,2)},

  this.draw = function() {
 this.position.x = this.position.x + this.speed.x + random (20, -20);
 this.position.y = this.position.y + this.speed.y +random(20, -20);
    rect(this.position.x, this.position.y, x, y, 0,0);
  }
}

var balls = [];
function mouseDragged() {
  stroke(200,200,200);
  fill(random(255),random(255),random(255));
  var ball = new Ball(mouseX, mouseY);
  balls.push(ball);
}

function draw() {
  for (var i = 0; i < balls.length; i++)
    balls[i].draw();
    
    
}

function setup() {
  resizeCanvas(700, 700);
}