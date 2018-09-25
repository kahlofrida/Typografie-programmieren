﻿// Breite eines Buchstabens messen. Die Breite bezieht sich immer auf den Schriftkegel.


// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear( b.doc() );

  b.textSize(48);
  var textFrame = b.text("Lorem ipsum", 100, 100, 400, 200);

  var characters = b.characters(textFrame);
  var charBounds = b.bounds(characters[0]);

  alert("Breite des ersten Buchstabens: " + charBounds.width);

}

b.go();
