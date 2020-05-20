// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;
let tronc
let leaf
let coco

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  tronc = new Tronc();
  leaf = new Leaf();
  coco = new Coco();
}

function draw() {

  //Conditionellle nous permettant de savoir si la souris est appuyée
  // et si le timer est écoulé
  if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
    // Appel de notre fonction generator
    background(255);
    generator(random(0, 200), height - 150, random(0, 255), random(0, 500), random(1000, windowWidth), random(300, 800));
  }
}


// Fonction avec quatres paramètres
function generator(x, y, couleur, leafleft, leafright, tronc) {
  // fill utilise le paramètre de notre fonction

  //tronc
  noStroke();
  fill(couleur, 42, 42);
  triangle(width / 2, 300, tronc, 800, 780, tronc);
  //coco
  noStroke();
  fill(120, 42, 42);
  ellipse(800, y, x, x);
  ellipse(850, 380, x, x);
  //leafs
  fill(0, couleur, 0);
  strokeWeight(2.2);
  stroke(couleur, couleur, couleur);
  triangle(width / 2, 300, 250, 0, leafleft, 100);
  triangle(width / 2, 300, 200, 300, leafleft, 200);
  triangle(width / 2, 300, 400, 600, leafleft, 400);
  triangle(width / 2, 300, 1200, 600, leafright, 400);
  triangle(width / 2, 300, 1200, 300, leafright, x);
  triangle(width / 2, 300, 1000, x, leafright, x);


}


function mousePressed() {
  // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
  save();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}