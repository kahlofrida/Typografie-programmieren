﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";


function draw() {
b.clear(b.doc());

//background
b.noFill();
b.stroke(0,0,0);
b.rect (0,0,b.width,b.height);


for (var i = 1; i < 50; i++){ 
    var x1 = b.random (0, b.width);
  var y1 = b.random (0, b.height);
  var x2 =b.random(4,400);
  var y2=b.random(0,200);
   b.fill (255,255,255);
   b.stroke(0,0,0),
  b.ellipse (x1,y1,x2,y2);
}

//fruits
var fruits = ["apple","apricot","avocado","banana","bell pepper","bilberry","blackberry","blackcurrant","blood orange","blueberry","boysenberry","breadfruit","canary melon","cantaloupe","cherimoya","cherry","chili pepper","clementine","cloudberry","coconut","cranberry","cucumber","currant","damson","date","dragonfruit","durian","eggplant","elderberry","feijoa","fig","goji berry","gooseberry","grape","grapefruit","guava","honeydew", "watermelon"];

for(var i=1; i < 10; i++) {

  var x = b.random(0, b.width -30);
  var y = b.random(0, b.height - 30);

  b.textFont ("Helvetica","Regular");
   b.fill (0,0,0);

    if ( b.startsWith (fruits [i], "a") ) {
        b.textSize(250);
        b.textFont ("Helvetica","Bold");

   }

    else {
      b.textSize(90);
      b.textFont ("Helvetica","Regular");
    };

 
 b.text (fruits[i], x, y, 800, 800);
}

}





 








b.go();
