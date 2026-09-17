console.log("I believe I can fly");

function setup() {
  createCanvas(800, 600); //units are in pixels (width, height), (0,0) is top-left
}

function draw() {
  background(30);
  //noStroke();
  fill(255, 120, 60);
  circle(200, 400, 50); //circle(mouseX, mouseY, 50); circle (xPos, yPos, diameter)
  circle(40, 400, 35);

  fill(100, 120, 60);
  circle(0, 0, 80);

  fill(25, 34, 78);
  rect(100, 20, 300, 50); //rect(x, y, w, h)

  rectMode();
  fill(25, 32, 95);
  rect(500, 80, 30, 500);

  //inside lab1make 2 folders
  //submit the link, and ss of the 2 drawings
  //Part 1: draw with 2D primitives from ps5, create a new repo (lab1) index.html, sketch.js, copy the link
  //GCurie/lab1.com link in canvas
  //Part 2: clone KardunTurtle into your repo and draw something
  //inside sketch.js, giveInstructions(), can put your own picture in there, use the given commands to draw something fun
}
