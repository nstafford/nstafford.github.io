function setup() {
  createCanvas(800, 800);
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
    mouseY < 800-radius) {
      ellipse(mouseX, mouseY, radius, radius);
    console.log(mouseX);
  }
}
