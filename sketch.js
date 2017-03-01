 var ball = {

 position: {x:0, y:150},
 speed: {x:4,y:4},
   draw: function (){
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
   
   noStroke();
   background(255);
   fill(random(255),random(255),random(255));
   ellipse(this.position.x, this.position.y, 10,10);
   
   }
   
 };
 
 function setup(){
 resizeCanvas(500,500);
 
 }
 function draw() {
   ball.draw();
 }