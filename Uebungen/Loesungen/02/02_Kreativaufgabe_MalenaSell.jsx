﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();
 


//ellipse_different_colors
  for (var i = 0; i < 10; i++) {

    b.stroke(b.color(b.random(100, 200), b.random(100, 200), b.random(100, 200)));
    b.strokeWeight(3);

    var posX = b.width/2;
    var posY = b.height/2;
    var sizeX = b.random(5, b.width);
    var sizeY = b.random(5, b.height);

    b.ellipse(posX, posY, sizeX, sizeY);

  }

//text
  var black = b.color(0, 0, 0);
  b.fill(black);


  var text = "ellipse"
  var sizeTX = 45
  var sizeTY = 17

  b.textSize(50);
  var rect = b.text(text, b.width/2 - sizeTX/2, b.height/2 - sizeTY/2, sizeTX, sizeTY);

  b.opacity(rect, 50);

}

b.go();
