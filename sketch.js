let img;

function preload() {
  img = loadImage('./pizza.jpg');
}

function setup() {
  const canvas = createCanvas(displayWidth, displayHeight);
  canvas.parent('container');
}

function draw() {
  image(img, mouseX, mouseY);
  //   }
  //   drawingContext.shadowOffsetX = 1;
  //   drawingContext.shadowOffsetY = -1;
  //   drawingContext.shadowBlur = 50;
  //   drawingContext.shadowColor = 'black';
  //   ellipse(mouseX, mouseY, 80, 80);
  //   image(marci, mouseX, mouseY);
  // image(mouseX, mouseY);
}
