function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
}

function mousePressed() {
      
    // Set the value of fullscreen
    // into the variable
    let fs = fullscreen();
      
    // Call to fullscreen function
    fullscreen(!fs); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  const radius = 80;
  if (mouseIsPressed) {
    fill(0);
  } else {
    fill(255);
  }
  if (
    mouseX > radius &&
    mouseX < 800-radius &&
    mouseY > radius &&
    mouseY < 800-radius
  ) {
      ellipse(mouseX, mouseY, radius, radius);
  }
  console.log(mouseX);
}
