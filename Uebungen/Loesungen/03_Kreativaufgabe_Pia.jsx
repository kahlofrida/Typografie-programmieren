﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

//(Kreativaufgabe) Versucht mit eurem Wissen über das bisher gelernte eine interessante Gestaltung bzw. ein interessantes Muster per Script zu erstellen. In eurem Script soll mindestens eine if()-Abfrage vorkommen. Speichert von diesem Design ein JPEG ab (Datei -> Exportieren -> Format JPEG -> Qualität Hoch | Auflösung(ppi): 72).


function draw() {



b.units(b.MM);
b.clear(b.doc());

b.beginShape(b.CLOSE);
b.colorMode(b.CMYK);
b.fill(100,100,100,100);
b.noStroke();
var rect = b.rect(0, 0, b.width, b.height);


for(var i = 0; i < 11; i ++){
  var x = 0+(i*(b.width/10));
  var y = 0;


b.fill(0, 0, 0, 0);
b.stroke(0,0,0,0);
b.strokeWeight(10);
var random = b.random(0, b.height);

if (random < b.height/2){
var rect2 = b.rect(x, random, 20, 20);
b.noFill();
b.strokeWeight(1);
b.vertex(x, random);
}

else {
b.noFill();
b.strokeWeight(1);
b.vertex(x, random);
}

}
b.endShape();

}
b.go();






//if(i < 50) {
//b.ellipse(x, y, 10, 10);
//}
