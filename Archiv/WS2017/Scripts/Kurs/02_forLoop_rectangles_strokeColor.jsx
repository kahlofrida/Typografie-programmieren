﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());

  b.noFill();

  for (var i = 0; i < 23; i++) {

    // hier wird die Linie erstellt
    b.stroke( b.color( b.random(255), b.random(255), b.random(255) ) );

    var randWidth = b.random(0, b.width);
    var randHeight = b.random(0, b.height);

    var x = b.random(0, b.width - randWidth);
    var y = b.random(0, b.height - randHeight);

    b.rect(x, y, randWidth, randHeight);

  };

}

b.go();
