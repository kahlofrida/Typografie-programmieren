﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
  // erhöht die horizontale Skalierung des ausgewählten Textrahmens, bis der Textrahmen gefüllt ist

  var tf = b.selection();

  var myHorScale = tf.parentStory.horizontalScale;


  while(tf.overflows == false) {
    myHorScale++;
    b.typo(tf, "horizontalScale", myHorScale);
  }

  myHorScale--;
  b.typo(tf, "horizontalScale", myHorScale);


}

b.go();
