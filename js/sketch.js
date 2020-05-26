// ----------------- GÉNÉRATEUR --------------------------- //

// une unité = 1 seconde
let timer = 1;
let palmier;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  rectMode(CENTER);
  palmier = new Palmier(random(0, 200), height - 150, random(0, 255), random(0, 500), random(1000, windowWidth), random(300, 800));

}

function draw() {


  //Conditionellle nous permettant de savoir si la souris est appuyée
  // et si le timer est écoulé
  if (frameCount % (timer * 60) == 0 && !mouseIsPressed) {
    // Appel de notre fonction generator
    palmier.afficher();
    //constructor(random(0, 200), height - 150, random(0, 255), random(0, 500), random(1000, windowWidth), random(300, 800));
    //}
  }

  //Fonction avec quatres paramètres
  //function generator(x, y, couleur, leafleft, leafright, tronc) {
  // fill utilise le paramètre de notre fonction
  /*

  */
}

function mousePressed() {
  //Fonction de librairie P5 nous permettant de sauvegarder une image du canvas
  save();
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}

class Palmier {
  constructor(x, y, couleur, leafleft, leafright, tronc) {
    this.x = x;
    this.y = y;
    this.couleur = couleur;
    this.leafleft = leafleft;
    this.leafright = leafright;
    this.tronc = tronc;

  }

  afficher() {
    //tronc
    noStroke();
    fill(this.couleur, 42, 42);
    triangle(width / 2, 300, this.tronc, 800, 780, this.tronc);
    //coco
    noStroke();
    fill(120, 42, 42);
    ellipse(800, this.y, this.x, this.x);
    ellipse(850, 380, this.x, this.x);
    //leafs
    fill(0, this.couleur, 0);
    strokeWeight(2.2);
    stroke(this.couleur, this.couleur, this.couleur);
    triangle(width / 2, 300, 250, 0, this.leafleft, 100);
    triangle(width / 2, 300, 200, 300, this.leafleft, 200);
    triangle(width / 2, 300, 400, 600, this.leafleft, 400);
    triangle(width / 2, 300, 1200, 600, this.leafright, 400);
    triangle(width / 2, 300, 1200, 300, this.leafright, this.x);
    triangle(width / 2, 300, 1000, this.x, this.leafright, this.x);

  }
}