﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  b.strokeWeight(2);
  var red = b.color(255, 0, 0);
  var blue = b.color(0, 0, 255);

  // Eingangsskala zeichnen
  b.stroke(red);
  var inMin = 25;
  var inMax = 200;
  var inY = b.height / 2 - 50;
  b.line(inMin, inY, inMax, inY);

  // Ausgangsskala zeichnen
  b.stroke(blue);
  var outMin = 25;
  var outMax = 567;
  var outY = b.height / 2 + 50;
  b.line(outMin, outY, outMax, outY);

  b.noStroke();

  // zufälligen Punkt auf der Eingangsskala auswählen
  var inX = b.random(inMin, inMax);
  var diaIn = 10;
  b.ellipse(inX, inY, diaIn, diaIn);

  // mit b.map() entsprechenden Punkt auf der Ausgangsskala berechnen
  var outX = b.map(inX, inMin, inMax, outMin, outMax);
  var diaOut = 10;
  b.ellipse(outX, outY, diaOut, diaOut);



  // Textblöcke
  b.fill(red);
  b.text("Eingangsskala von " + inMin + " bis " + inMax + ",\nzufälliger Wert: " + inX,    380, b.height / 2 - 60, 200, 100);

  b.fill(blue);
  b.text("Ausgangsskala von " + outMin + " bis " + outMax + "\nberechneter Wert: " + outX,    380, b.height / 2 - 10, 200, 100);

}

b.go();
