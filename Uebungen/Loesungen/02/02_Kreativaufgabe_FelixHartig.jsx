﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear (b.doc());
b.units (b.MM);
b.colorMode(b.RGB);


var one = b.random (0,200);
var two = b.random (0,200);

for ( var i = 0; i < 70; i++) {

var rec = b.rect (0 + b.random (0, b.width), 0 + b.random (0, b.height), b.random (0,50), b.random(0,50) );

b.opacity (rec, 30);

}

for ( var i = 0; i < 70; i++) {

b.fill (b.color (255,255,255));

var rec = b.rect (0 + b.random (0, b.width), 0 + b.random (0, b.height), b.random (0, 20), b.random (0,20) );

b.opacity (rec, 80);

}

}

b.go();
