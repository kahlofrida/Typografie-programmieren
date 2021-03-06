﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";


// demonstrates how to speed up the drawing of many rectangles by grouping rows and duplicating them


function draw() {

  b.clear( b.doc() );

  b.noFill();

  var rectCount = 30;
  var rowCount = 30;

  var rectSize = 15;

  for (var j = 0; j < rowCount; j++) {
    for (var i = 0; i < rectCount; i++) {
      var myRect = b.rect(rectSize * i, rectSize * j, rectSize, rectSize);
    }
  }

}

b.go();
