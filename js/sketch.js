// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
}

function draw() {

  //Conditionellle nous permettant de savoir si la souris est appuyée
  // et si le timer est écoulé
  if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
    // Appel de notre fonction generator
    background(255);
    generator(random(0, 200), height - 150, random(0, 255), random(0, windowWidth));
  }


}


// Fonction avec quatres paramètres
function generator(x, y, couleur, position) {
  // fill utilise le paramètre de notre fonction

  //tronc
  noStroke();
  fill(couleur, 42, 42);
  triangle(width / 2, 300, 700, 800, 780, 800);
  //coco
  noStroke();
  fill(120, 42, 42);
  ellipse(800, position, x, x);
  ellipse(850, 380, x, x);
  //leafs
  fill(0, couleur, 0);
  strokeWeight(2.2);
  stroke(couleur, couleur, couleur);
  triangle(width / 2, 300, 200, 300, 380, 200);
  triangle(width / 2, 300, 400, 600, 500, 400);
  triangle(width / 2, 300, 1200, 600, 1100, 400);
  triangle(width / 2, 300, 1200, 300, 1300, 200);





}


function mousePressed() {
  // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
  save();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}