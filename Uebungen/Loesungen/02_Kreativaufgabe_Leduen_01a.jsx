//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

b.units(b.MM);


for(var i = 0; i < 42; i++){
  b.stroke(b.color(b.random(255),0, 0)); 
  b.noFill();
  var posX = b.random(0, 200);
  var posY = b.random(0, 200);

  var randomWidth = b.random(10, 100);
  var randomHeigt = b.random(10, 100);
  b.rect(posX, posY, randomWidth, randomHeigt);
  var rotation =b. radians (12);
  b.println (rotation);
  b.rotate (rotation);

}



  
}

b.go();
