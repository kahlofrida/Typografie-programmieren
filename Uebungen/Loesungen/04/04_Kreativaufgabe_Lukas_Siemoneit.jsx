﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

b.clear(b.doc());
b.noStroke();
b.strokeWeight(3);
b.textFont("Gotham", "Ultra");
b.textSize(36);
var gelb = b.color(223,202,13);
var titans = ["Coeus","Crius","Cronus","Hyperion","Iapetus","Mnemosyne","Oceanus","Phoebe","Rhea","Tethys","Theia","Themis","Asteria","Astraeus","Atlas","Aura","Clymene","Dione","Helios","Selene","Eos","Epimetheus","Eurybia","Eurynome","Lelantos","Leto","Menoeltius","Metis","Ophion","Pallas","Perses","Prometheus","Styx"];

  b.image('greek.jpg', b.round(b.random(-30,b.width-130)), b.round(b.random(30,b.height-130)), 200 , 300);



// for(i=0; i<10; i++){

//   for(j=0; j<10; j++){
//     b.fill(50+j*5,30+i*5,200+i+j)
//     var r1 = b.rect(60+i*50,60+j*50,30+i*0.8,10+i*0.8);
//     var r2 = b.rect(70+i*50,50+j*50,10+i*0.8,30+j*0.8);

//   }



// }


for(i=0; i<10; i++){
  b.fill(10,40,200)
  var x = 5*b.random(1,10)
  var y = b.random(50, b.width-50);
  var z = b.random(50, b.height-50);
  b.noStroke();
  b.ellipse(b.random(0,b.width),b.random(0,b.height), x, x); 
b.stroke(10,40,200);
  b.line(y,z,y-30, z-30);

}

b.fill(gelb);
for(i=0; i<titans.length; i++){
  b.text(titans[i], b.random(60, 120), 100+i*30, 300, 30);
}







}

b.go();
