function Ball(x, y) {
  this.position = {x: x, y: y};
  this.speed = {x:random(10,-10),y:random(10,-10)},

  this.draw = function() {
 this.position.x = this.position.x + this.speed.x + random (-5,5);
 this.position.y = this.position.y + this.speed.y +random(-5,5);
    ellipse(this.position.x, this.position.y, random(-25),25);
  }
}

var balls = [];
function mouseDragged() {
  stroke(random(255),random(255),random(255));
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