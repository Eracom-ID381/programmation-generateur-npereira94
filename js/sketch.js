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
    generator(width / 2, height / 2, height - 150);
  }


}

/*
function tronc(x, y, size) {
  for (let offset = size; offset > 0; offset -= 10) {
    noStroke();
    fill(random(0, 250), (0, 200), (0, 10));
    rect(x, y, 50, 400);

  }
}

function feuille(x, y, size, size) {
  for (let offset = size; offset > 0; offset -= 10) {
    noStroke();
    fill(random(0, 250), (0, 200));
    triangle(300, 75, 58, 20, 86, 750);

  }
}
  */
// Fonction avec quatres paramètres
function generator(x, y, size) {
  // fill utilise le paramètre de notre fonction
  for (let offset = size; offset > 0; offset -= 10) {
    fill(250);
    noStroke();
    fill(222, 184, 135);
    rect(width / 2, height / 2, 20, 500);
    fill(0, 100, 0);

    //noStroke();
    noStroke();
    ellipse(width / 2, 30, 20, 80);

    console.log(offset);
  }
}


function mousePressed() {
  // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
  save();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}