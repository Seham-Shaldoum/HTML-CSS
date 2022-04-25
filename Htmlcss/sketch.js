function setup() {
  createCanvas(1100, 500,WEBGL);
}

function draw() {
  background(0);
  strokeWeight(1);
  stroke(0,255,20);
  
  var x=10
  
  for (var x=200; x<=height; x+=70){
  fill(random(10),random(50),random(200));
    rotateX(frameCount * 0.033);
  rotateY(frameCount * 0.033);
  sphere(200);
    
    
  }
  
}