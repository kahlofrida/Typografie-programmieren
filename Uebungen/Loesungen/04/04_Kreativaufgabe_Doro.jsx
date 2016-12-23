﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());

  var startX = 10;
  var startY = 10;

  var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "F", "W", "X", "Y", "Z"];

  b.noStroke();
  b.fill(b.color(0, 0, 0)); 
  b.rect(0, 0, b.width, b.height)
  b.fill(b.color(255, 255, 255));
  b.textFont("Futura", "Medium");
  var textSize = b.textSize(200);



 
      for(j = 0; j < 8; j++){

         for (i = 0; i < 10; i++){
        var letter = b.round( b.random(0, abc.length) );
        

          b.text( abc[letter], (10 + j*textSize/3.5+i*50), 10+i*100, 1.5*textSize, textSize);
         }
      }
    
}
  

b.go();
