﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {


b.clear(b.doc() );

b.strokeWeight(5);

var colorCircle = b.color (165, 225, 230);

b.fill (colorCircle);

b.noStroke();

b.ellipse (20, b.height/3, 530, 530);

b.ellipse (b.width, b.height - 100, 280, 280);


for(var i = 0; i < 7; i++) {
    b.stroke(0, 0, 0);
    b.noFill();
    b.strokeWeight(5);

    var random = b.random(0,900)
    var random2 = b.random(0,900)
    var randomWidth = b.random(30, 150);
    var randomHeight = b.random(30, 100);
    var posX = b.random(0, b.width - randomWidth);
    var posY = b.random(0, b.height - randomHeight);

    b.rect(posX, posY, randomWidth, randomHeight);


b.fill(0, 0, 0);
if (randomWidth < 100) {
  b.ellipse (random, random2, 15, 15);
  } 

  else {
    b.line (posX, posY, posX + 20, posY + 20);


} 



}
}


b.go();
