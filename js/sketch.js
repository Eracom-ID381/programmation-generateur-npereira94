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


// Fonction avec quatres paramètres
function generator(x, y, size) {
  // fill utilise le paramètre de notre fonction
  //for (let offset = size; offset > 0; offset -= 10) {

  //tronc
  noStroke();
  fill(222, 184, 135);
  rect(width / 2, height / 2, 50, 500);


  //feuille
  fill(0, 100, 0);
  translate(580, 200);
  noStroke();
  for (var i = 0; i < 10; i++) {
    ellipse(width / 2, 180, 500, 50);
    rotate(PI / 45);
  }




  //  }
}


function mousePressed() {
  // Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
  save();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}