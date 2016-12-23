﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";


function draw() {

b.clear(b.doc());
 b.noStroke();

var anzBilder = 12;
var rahmen = 21;
var bilder = [];
var rahmenbreite = (b.width / 2) / rahmen; 
var rahmenhoehe = (b.height / 2) / rahmen;


for (var i = 0; i < anzBilder; i++) {
  bilder.push("Himmel_"+(i+1)+".jpeg");
}



for (var i = 0; i < rahmen; i++) {

  var position = b.floor(b.random(0,bilder.length-1));

  var x = 0 + i * rahmenbreite;
  var y = 0 + i * rahmenhoehe;
  var w = b.width - 2 * i * rahmenbreite;
  var h = b.height - 2 * i * rahmenhoehe;

  var grad = b.radians((360/rahmen) * i);
  b.rotate(grad);
  var img = b.image(bilder[position],x,y);
  b.transformImage(img,x,y,w,h);

}









}

b.go();
