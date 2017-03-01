function Ball(x, y) {
  this.position = {x: x, y: y};
  this.speed = {x:10,y:5},

  this.draw = function() {
 this.position.x = this.position.x + this.speed.x + random (-25,25);
 this.position.y = this.position.y + this.speed.y +random(-25,25);
    triangle(this.position.x, this.position.y, 350, 350, random(-25),25);
  }
}

var balls = [];
function mouseDragged() {
  stroke(200,200,200)
  fill(250,100,100);
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