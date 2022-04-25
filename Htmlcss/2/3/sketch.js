function setup() {
  createCanvas(1100, 400,WEBGL);
}

function draw() {
  background(0);
  strokeWeight(1);
  stroke(0,255,20);
  
  var x=5
  
  for (var x=10; x<=height; x+=90){
  fill(random(100),random(50),random(250));
    rotateX(frameCount * 0.013);
  rotateY(frameCount * 0.003);
  box(200);
    
    
  }
  
}