var x = 200; //Umplatzierung auf der x-Achse
var y = 0; //Umplatzierung auf der y-Achse
var yCanvas = 0; // Größe vom Canvas
var terminex = 10;
var terminey = 10;
var anderungenx = 400;
var anderungeny = 10;
var klassex = 10;
var yTab = 35;
var stdx = 70;
var lehrerax = 120;
var lehrernx = 400;
var fachax = 250;
var fachnx = 510;
var raumax = 300;
var raumnx = 550;
var bemerkungx = 610;
var anders = [];
var a = 0;
var dPlus = 0;
var py = 200;
var clicked = false;
var anz = 0;

function setup() {
 cnv = createCanvas(786, yCanvas + 300);
 cnv.position(x, y);
 termine = createDiv('Betroffene Temine');
 termine.position(x + terminex, y + terminey);
 klasse = createDiv('Klasse');
 klasse.position(x + klassex, y + yTab);
 std = createDiv('Std.');
 std.position(x + stdx, y + yTab);
 lehrera = createDiv('Lehrer/in');
 lehrera.position(x + lehrerax, y + yTab);
 facha = createDiv('Fach');
 facha.position(x + fachax, y + yTab);
 rauma = createDiv('Raum');
 rauma.position(x + raumax, y + yTab);
 anderungen = createDiv('Vertretungen und Änderungen');
 anderungen.position(x + anderungenx, y + anderungeny);
 lehrern = createDiv('Lehrer/in');
 lehrern.position(x + lehrernx, y + yTab);
 fachn = createDiv('Fach');
 fachn.position(x + fachnx, y + yTab);
 raumn = createDiv('Raum');
 raumn.position(x + raumnx, y + yTab);
 bemerkung = createDiv('Informationen');
 bemerkung.position(x + bemerkungx, y + yTab);
}

function draw() {
 dPlus = dist(400, py, mouseX, mouseY);
 stroke(0);
 strokeWeight(2);
 fill(0, 255, 150);
 background(255, 237, 237);
 rect(5, 8, 390, 22);
 rect(5, 30, 60, 22);
 rect(65, 30, 50, 22);
 rect(115, 30, 130, 22);
 rect(245, 30, 50, 22);
 rect(295, 30, 100, 22);
 fill(255, 250, 205);
 rect(395, 8, 386, 22);
 rect(395, 30, 110, 22);
 rect(505, 30, 40, 22);
 rect(545, 30, 60, 22);
 rect(605, 30, 176, 22);
 fill(0, 190, 250);
 rect(5, 52, 776, 20);
 newPlan();
 for (var i = 0; i < anz; i++) {
  anders[i].addVert();
 }
}

function mouseClicked() {
 if (dPlus < 40) {
  anz++;
  anders.push(new Plan());
  clicked = true;
 }
}

newPlan = function() {
 fill(255, 237, 237);
 noStroke();
 rect(300, 120, 200, 200);
 stroke(0);
 if (dPlus < 40) {
  fill(250, 80, 80);
  ellipse(400, py, 100, 100);
  strokeWeight(5);
  line(380, py, 420, py);
  line(400, py - 20, 400, py + 20);
 } else {
  fill(200, 80, 80);
  ellipse(400, py, 80, 80);
  strokeWeight(5);
  line(380, py, 420, py);
  line(400, py - 20, 400, py + 20);
 }
}

function Plan() {
 this.kl;
 this.st;
 this.la;
 this.ln;
 this.fa;
 this.fn;
 this.ra;
 this.rn;
 this.bem;
 this.kld;
 this.std;
 this.lad;
 this.lnd;
 this.fad;
 this.fnd;
 this.rad;
 this.rnd;
 this.bemd;
 this.ySet = 50;
 this.sizex = 40;
 this.sizey = 20;
 this.echt;

 this.addVert = function() {
  if ((dPlus < 40) && (clicked)) {
   this.kl = createInput('');
   this.kl.size(this.sizex, this.sizey);
   this.kl.position(x + klassex, y + yTab + this.ySet);
   this.st = createInput('');
   this.st.size(this.sizex - 5, this.sizey);
   this.st.position(x + stdx, y + yTab + this.ySet);
   this.la = createInput('');
   this.la.size(this.sizex + 70, this.sizey);
   this.la.position(x + lehrerax, y + yTab + this.ySet);
   this.ln = createInput('');
   this.ln.size(this.sizex + 55, this.sizey);
   this.ln.position(x + lehrernx, y + yTab + this.ySet);
   this.fa = createInput('');
   this.fa.size(this.sizex - 5, this.sizey);
   this.fa.position(x + fachax, y + yTab + this.ySet);
   this.fn = createInput('');
   this.fn.size(this.sizex - 10, this.sizey);
   this.fn.position(x + fachnx, y + yTab + this.ySet);
   this.ra = createInput('');
   this.ra.size(this.sizex + 30, this.sizey);
   this.ra.position(x + raumax, y + yTab + this.ySet);
   this.rn = createInput('');
   this.rn.size(this.sizex + 5, this.sizey);
   this.rn.position(x + raumnx, y + yTab + this.ySet);
   this.bem = createInput('');
   this.bem.size(this.sizex + 120, this.sizey);
   this.bem.position(x + bemerkungx, y + yTab + this.ySet);
   this.ySet += 30;
   py += 25;
   clicked = false;
   yCanvas += 25;
   resizeCanvas(786, yCanvas + 300);
  }
 }

}