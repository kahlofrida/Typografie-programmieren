﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
 
 // Array mit Bildern:
 var imgCount = 22;
 var allImages = [];

 for (var i = 1; i < imgCount; i++) {
  var imageName = "Urlaub" + i + ".png";
  allImages.push(imageName);
}

alert(allImages);

for (var i = 1; i < 10; i++) {

  b.noStroke();

  var randomNumber = b.floor (b.random (1, allImages.length) ); 
  allImages.splice(randomNumber - 1, 1);
  b.println(randomNumber);

  var randomName = allImages[randomNumber];
  var img = b.image(randomName, 0,0);

  b.opacity(img, b.random(80, 100));

  var scale = b.random (0.1, 0.3);
  var imgWidth = b.itemWidth(img) * scale; 
  var imgHeight = b.itemHeight(img) * scale;

  var x = b.random (b.width - imgWidth);
  var y = b.random(0, b.height - imgHeight); 

  b.transformImage (img, x, y, imgWidth, imgHeight);

}

for (var j = 0; j < 100; j++) {
  b.stroke(b.color(255, 255, 255));
  var yLines = b.random(0,b.height);
  b.line(0, yLines, b.width, yLines);
}


}


b.go();