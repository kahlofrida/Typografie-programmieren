﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  


  b.clear(  b.doc()  );

  for(var i = 0; i < 15; i++) {

    var redValue = i * 20;
    
    var colorMode = i * 19

    for(var j = 0; j < 20; j++) {
      var blueValue = j * 40;
      b.fill(   b.color(redValue, 0, blueValue)    );
      b.ellipse(100, i * 60, j * 80, 80);
    }
  }


  var textFrame = b.text("I LOVE BASIL, I LOVE BASIL, I LOVE BASIL, I LOVE BASIL, I LOVE BASIL, I LOVE BASIL, I LOVE BASIL, I LOVE BASIL, I LOVE BASIL, I LOVE BASIL, I LOVE BASIL, I LOVE BASIL, I LOVE BASIL ", 300, 100, 300, 200);

  var words = b.words(textFrame);


  for (var i = 0; i < words.length; i++) {

    b.typo(words[i], "baselineShift", b.random(0, 20));

  }

}

b.go();
