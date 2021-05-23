function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  textSize(60);
  colorMode(HSB);
}  
//   setTimeout(() => {
//     var i;
//     for (i = 0; i < 100; i++) {
//       fill(211,122,32,100-i);
//       text("Press space for fullscreen.", 100, 200);
//     }, 2000);
//   }
  

// event = keyup or keydown
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    console.log('Space pressed')
    // Set the value of fullscreen
    // into the variable
    let fs = fullscreen();
      
    // Call to fullscreen function
    fullscreen(!fs);
  }
})

// function keyPressed() {
//   if (keyCode === SPACE) {
//     // Set the value of fullscreen
//     // into the variable
//     let fs = fullscreen();
      
//     // Call to fullscreen function
//     fullscreen(!fs); 
//   }
// }

// function mousePressed() {
      
//     // Set the value of fullscreen
//     // into the variable
//     let fs = fullscreen();
      
//     // Call to fullscreen function
//     fullscreen(!fs); 
// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

function draw() {
  const radius = 80;
  if (mouseIsPressed) {
    fill(mouseX/windowWidth*255,255,255);
  } else {
    fill(255-mouseX/windowWidth*255,255,255);
  }
  if (
    mouseX > radius &&
    mouseX < windowWidth-radius &&
    mouseY > radius &&
    mouseY < windowHeight-radius
  ) {
      ellipse(mouseX, mouseY, radius, radius);
  }
  console.log(mouseX);
}
