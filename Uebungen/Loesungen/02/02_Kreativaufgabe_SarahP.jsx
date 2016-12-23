﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {
b.clear( b.doc() );

//bg
var bg1 = b.color(b.random(255,200), b.random(255,200), b.random(255,200));
var bg2 = b.color(b.random(255,200), b.random(255,200), b.random(255,200));

  b.gradientMode( b.RADIAL );
  b.fill( b.gradient(bg1, bg2) ); 
  b.rect(0, 0, b.width, b.height);


//water
var water1 = b.color (30,144,255);
var water2 = b.color (16,78,139);

  b.gradientMode( b.RADIAL );
  b.fill( b.gradient(water1, water2) );
  b.rect (0, b.width, b.width, 246);
  b.noStroke();


//drops
for (var i = 1; i < 150; i++){ 
   b.fill (30,144,255);
   b.noStroke ();

    var width = (2);       
    var randomheigth = b.random (10, 25);
    var posx = b.random (0, b.width);
    var posy = b.random (0, b.height -randomheigth);

    b.ellipse (posx,posy,width,randomheigth);
}

//MANYcircles
b.fill (16,78,139);
b.stroke (30,144,255);
b.strokeWeight (3);
var pos_x = b.random (b.width -150, 0);
var pos_y = b.random (b.height, 650);

b.ellipse (pos_x, pos_y, 150,50);
b.ellipse (pos_x, pos_y, 100,25);
b.ellipse (pos_x, pos_y, 50,10);

b.fill (16,78,139);
b.stroke (30,144,255);
b.strokeWeight (3);
var pos_x = b.random (b.width -150, 0);
var pos_y = b.random (b.height, 650);

b.ellipse (pos_x, pos_y, 100,25);
b.ellipse (pos_x, pos_y, 50,10);

b.fill (16,78,139);
b.stroke (30,144,255);
b.strokeWeight (3);
var pos_x = b.random (b.width -150, 0);
var pos_y = b.random (b.height, 650);

b.ellipse (pos_x, pos_y, 150,50);
b.ellipse (pos_x, pos_y, 100,25);
b.ellipse (pos_x, pos_y, 50,10);

b.fill (16,78,139);
b.stroke (30,144,255);
b.strokeWeight (3);
var pos_x = b.random (b.width -150, 0);
var pos_y = b.random (b.height, 650);

b.ellipse (pos_x, pos_y, 100,25);
b.ellipse (pos_x, pos_y, 50,10);

b.fill (16,78,139);
b.stroke (30,144,255);
b.strokeWeight (3);
var pos_x = b.random (b.width -150, 0);
var pos_y = b.random (b.height, 650);

b.ellipse (pos_x, pos_y, 150,50);
b.ellipse (pos_x, pos_y, 100,25);
b.ellipse (pos_x, pos_y, 50,10);

b.fill (16,78,139);
b.stroke (30,144,255);
b.strokeWeight (3);
var pos_x = b.random (b.width -150, 0);
var pos_y = b.random (b.height, 650);

b.ellipse (pos_x, pos_y, 100,25);
b.ellipse (pos_x, pos_y, 50,10);

b.fill (16,78,139);
b.stroke (30,144,255);
b.strokeWeight (3);
var pos_x = b.random (b.width -150, 0);
var pos_y = b.random (b.height, 650);

b.ellipse (pos_x, pos_y, 150,50);
b.ellipse (pos_x, pos_y, 100,25);
b.ellipse (pos_x, pos_y, 50,10);

b.fill (16,78,139);
b.stroke (30,144,255);
b.strokeWeight (3);
var pos_x = b.random (b.width -150, 0);
var pos_y = b.random (b.height, 650);

b.ellipse (pos_x, pos_y, 100,25);
b.ellipse (pos_x, pos_y, 50,10);

b.fill (16,78,139);
b.stroke (30,144,255);
b.strokeWeight (3);
var pos_x = b.random (b.width -150, 0);
var pos_y = b.random (b.height, 650);

b.ellipse (pos_x, pos_y, 150,50);
b.ellipse (pos_x, pos_y, 100,25);
b.ellipse (pos_x, pos_y, 50,10);

b.fill (16,78,139);
b.stroke (30,144,255);
b.strokeWeight (3);
var pos_x = b.random (b.width -150, 0);
var pos_y = b.random (b.height, 650);

b.ellipse (pos_x, pos_y, 100,25);
b.ellipse (pos_x, pos_y, 50,10);
}
b.go();
