﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.units (b.PT);


//bg
var bg1 = b.color(85,26,139);
var bg2 = b.color(0,0,0);

  b.gradientMode( b.RADIAL );
  b.fill( b.gradient(bg1, bg2) ); 
  b.rect(0, 0, b.width, b.height);


//1
var r = b.random (0.1,3);
var step = 10;
var L1 = b.random (0, 60);

  for (var i = 1; i < 9; i++) {
  var c1 = b.color (255,0,0);
  var c2 = b.color (255,165,0);

    if ( r < 1) {        
    b.stroke (c1);
    }  
  else {
  b.stroke (c2);
  }

b.strokeWeight (r);
b.line (i * L1, 0, b.width, b.height);
}

//2
var r = b.random (0.1,3);
var step = 10;
var L1 = b.random (0, 60);

  for (var i = 1; i < 9; i++) {
  var c3 = b.color (139,34,82);
  var c4 = b.color (255,62,150);

    if ( r < 1) {        
    b.stroke (c3);
    }  
    else {
    b.stroke (c4);
    }

b.strokeWeight (r);
b.line (i * L1, 0, 0, b.height);
}

//3
var r = b.random (0.1,3);
var step = 10;
var L1 = b.random (0, 60);

  for (var i = 1; i < 9; i++) {
  var c5 = b.color (127,255,0);
  var c6 = b.color (202,255,112);

    if ( r < 1) {        
    b.stroke (c5);
    }  
    else {
    b.stroke (c6);
    }

b.strokeWeight (r);
b.line (i * L1, b.height, 0, 0);
}

//4
var r = b.random (0.1,3);
var step = 10;
var L1 = b.random (0, 60);

for (var i = 1; i < 9; i++) {
  var c7 = b.color (160,32,240);
  var c8 = b.color (205,0,205);

    if ( r < 1) {        
    b.stroke (c7);
    }  
    else {
    b.stroke (c8);
    }

b.strokeWeight (r);
b.line (i * L1, b.height, b.width, 0);
}
}
b.go (50);
