function setup() {
  resizeCanvas(1000,1000);
  setInterval(loadISS, 1000);
  noStroke();
}

function loadISS(){
  loadJSON('http://api.open-notify.org/iss-now.json',gotISS);
}

function gotISS(data) {
  var longitude = Number(data.iss_position.longitude);
  var latitude = Number(data.iss_position.latitude);
  
  //ellipse(50,50,latitude,latitude);
  fill (random(255), random(255), random(255), random(255));
  var x = map(longitude, -180, 180, 0, 500);
  var y = map(latitude, 90, -90, 0, 500);
  rect(x,y,random(250),random(250));
  
}