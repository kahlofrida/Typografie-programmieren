﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

for(var i = 0; i < 50; i++) {

var x1 = 0;
var y1 = b.random(0, b.height);
var x2 = b.width;
// second y same as y1


var x3 = b.random(b.width, 0);
var y2 = 0;
// second x same as x3
var y3 = b.height;


b.line(x1, y1, x2, y1);
b.line(x3, y2, x3 ,y3);


}


}

b.go();
