﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {


var count = prompt("Wieviele Formen möchtest du zeichnen?",20);
var circles=confirm("Willst du Kreise erstellen?");

for(var i=0; i<count; i++) {
  var x=b.random(0,b.width+10);
  var y=b.random(0,b.height);
  var random = b.round(b.random(1,20));
  b.println(random);
  if(random<10) {
    b.fill(b.color(182,212,190));
    b.stroke(b.color(182,212,190));
    b.rect(x,y,50,20);

  }else{
    b.fill(b.color(116,90,120));
    b.stroke(b.color(116,90,120));
    b.ellipse(x,y,40,40);

 }
 }
  }









b.go();
