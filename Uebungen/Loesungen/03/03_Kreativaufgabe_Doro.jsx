﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
b.clear(b.doc());
b.units(b.MM);
b.noFill();


var blue = b.color(0, 0, 255);
var red = b.color(255, 0, 0);
var dia = 40;






for(j = 0; j < 6; j++){


var x = b.random(dia/2, 2*dia);
var y = dia;


  var repeat = b.random(10, 200);
for (i = 0; i < repeat; i++){
 

if (repeat <100){
  b.stroke(blue);
} else {
  b.stroke(red);
}
    b.ellipse(x+i+j, y+i/2+j*dia, dia, dia);
  }
}
}


b.go();
