function Ball(x, y) {
  this.position = {x: x, y: y};
  this.speed = {x:random(-2,2),y:(-2,2)},

  this.draw = function() {
 this.position.x = this.position.x + this.speed.x + random (-2,2);
 this.position.y = this.position.y + this.speed.y +random(-2,2);
    ellipse(this.position.x, this.position.y, random(-25,25),25);
  }
}

var balls = [];
function mousePressed() {
  stroke(100,100,100,100);
  noFill();
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