﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
b.clear(b.doc());
b.noFill();





for(var i = 0; i < 200; i++){

  

  var randomwidth = b.random(10, b.width);
  var randomheight = b.random(10, b.height);
  var posx = b.random(0, b.width - randomwidth);
  var posy = b.random(0,b.height - randomheight);

  b.line(posx, posy, randomwidth, randomheight);
}





}

b.go();
