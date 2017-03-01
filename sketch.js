var r, g, b;
function setup() {
  createCanvas(600,800);
}

function draw() {
  noStroke();
  colorMode(RGB);
from = color(218, 165, 32);
to = color(72, 61, 139);
  
  //first triangle - upper left hand corner
  fill(236,194,48);
 triangle(0,0,0,200,200,0);
 
 //second triangle - inbetween square
 var v = map(sin(frameCount * 0.05), -1, 1, 0, 1);
 var c = lerpColor(from, to, v);
 fill(c);
 triangle(200,0,100,100,200,200);
 
 //third triangle - inbetween 2 triangles
 fill(0,0,0);
 triangle(0,200,100,100,200,200);
 
 //first square
 fill(0,0,0);
 rect(200,0,200,200);
 
 //first triangle - right hand side
 var v = map(sin(frameCount * 0.05), -1, 1, 0, 1);
 var c = lerpColor(from, to, v);
 fill(c);
 triangle(400,0,400,200,500,100);
 
 //second triangle - right hand side
 fill(0,0,0);
 triangle(400,200,500,100,600,200);
 
 //third triangle - upper right hand corner
 fill(236,194,48);
 triangle(600,200,600,0,400,0);
 
 //second square - left hand side
 fill(12,12,12);
 rect(0,200,200,200);
 
 //forehead
 fill(73,135,186);
 rect(200,200,200,100);
 
 //third square - right hand side
 fill(12,12,12);
 rect(400,200,200,200);
 
 //face
 fill(255,255,255);
 rect(200,300,200,500);
 
 //nose
 var v = map(sin(frameCount * 0.05), -1, 1, 0, 1);
 var c = lerpColor(from, to, v);
 fill(c);
 triangle(200,300,400,300,300,400);
 
 //mouth
 fill(207,34,28);
 triangle(300,515,255,560,350,560);
 
 //lower triangle 1
 fill(0,0,0);
 triangle(0,400,200,400,200,600);
 
 //lower triangle 2
 triangle(400,400,600,400,400,600);
 
 //left corner triangle
  fill(236,194,48);
 triangle(0,400,0,800,200,600);
 
 var v = map(sin(frameCount * 0.05), -1, 1, 0, 1);
 var c = lerpColor(from, to, v);
 fill(c);
 triangle(0,800,200,800,200,600);
 
 //opposite triangle
  fill(236,194,48);
 triangle(400,600,600,600,600,400);
 
 //clothe
  fill(31,78,70);
 triangle(200,800,400,600,400,800);

 //kimono back
  var v = map(sin(frameCount * 0.05), -1, 1, 0, 1);
 var c = lerpColor(from, to, v);
 fill(c);
 rect(400,600,200,200);

}
