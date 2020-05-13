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
    generator(random(0, 300), height - 150, random(0, 300), random(0, 300));
  }


}


// Fonction avec quatres paramètres
function generator(x, y, couleur) {
  // fill utilise le paramètre de notre fonction

  //tronc
  noStroke();
  fill(120, 42, 42);
  triangle(width / 2, 300, 700, 800, 780, 800);
  //coco
  noStroke();
  fill(120, 42, 42);
  ellipse(800, 380, random(0, 70), random(0, 70));
  ellipse(850, 380, random(0, 80), random(0, 80));
  //feuille
  fill(0, 100, 0);
  translate(width / 2, 200);
  strokeWeight(2.2);
  stroke(11, x, 16);
  for (var i = 0; i < 10; i++) {
    ellipse(0, 30, 400, 80);
    rotate(PI / 5);
  }


}


function mousePressed() {
  // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
  save();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}