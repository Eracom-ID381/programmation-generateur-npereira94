// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
}

function draw() {
  // Conditionellle nous permettant de savoir si la souris est appuyée
  // et si le timer est écoulé
  if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
    // Appel de notre fonction generator
    /*generator(width / 2, height / 2, height - 150);*/
  }
  tronc(width / 2, height / 2, 10);
}

function tronc(x, y, size) {
  for (let offset = size; offset > 0; offset -= 10) {
    noStroke();
    fill(random(0, 250), (0, 200), (0, 10));
    rect(x, y, 50, 400);

  }
}
// Fonction avec quatres paramètres
/*function generator(x, y, size) {
  // fill utilise le paramètre de notre fonction
  for (let offset = size; offset > 0; offset -= 10) {
    fill(random(0, 250), (0, 200), (0, 10));
    rect(x, y, offset, 300);
    console.log(offset);
  }
}
*/
function mousePressed() {
  // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
  save();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}