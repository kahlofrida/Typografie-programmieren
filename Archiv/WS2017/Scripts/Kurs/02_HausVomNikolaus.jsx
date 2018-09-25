﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());

  b.noFill();

  var x = 80;
  var y = 250;
  var size = 200;

  // base
  b.rect(x, y, size, size);
  b.line(x, y, x + size, y + size);
  b.line(x, y + size, x + size, y);

  // roof
  b.line(x, y, x + size / 2, y - size / 2);
  b.line(x + size / 2, y - size / 2, x + size, y);

}

b.go();