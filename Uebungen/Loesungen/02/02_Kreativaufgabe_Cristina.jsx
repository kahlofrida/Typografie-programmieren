﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc() );

b.strokeWeight(5);
b.line(1, 0, b.width, b.height);
    
b.stroke(255, 255, 255);

var pink = b.color (230, 125, 190);
var white = b.color (255, 255, 255);


b.fill (b.gradient (pink, white));

b.ellipse (b.width/2, b.height/3, 300, 300);


for(var i = 0; i < 3; i++) {
    b.stroke(0, 0, 0);
    b.fill (0, 0, 0);
    b.strokeWeight(5);

    var randomWidth = b.random(10, 370);
    var randomHeight = b.random(10, 130);
    var posX = b.random(0, b.width - randomWidth);
    var posY = b.random(0, b.height - randomHeight);

    b.rect(posX, posY, randomWidth, randomHeight);
}






}


b.go();
