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

  //diane cube
  /*rect(width / 2, height / 2, cube, cube)
  triangle(width / 2 - cube, height / 2 - cube, width / 2 + cube, height / 2 - cube, width / 2 + 40, height / 2 - 40);
  triangle(width / 2 - 25, height / 2 - 25, width / 2 - 5, height / 2 - 40, width / 2 + 40, height / 2 - 40);
*/


}


function mousePressed() {
  // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
  save();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}