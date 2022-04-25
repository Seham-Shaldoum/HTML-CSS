function setup() {
  createCanvas(1100, 400,WEBGL);
}

function draw() {
  background(0);
  strokeWeight(3);
  stroke(0);
  
  var x=10
  
  while (x<width) {
    fill(random(50),random(150),random(200));
    ellipse(x,x+100,100+x,400+x);
    x=x+10
    
  }
  
}