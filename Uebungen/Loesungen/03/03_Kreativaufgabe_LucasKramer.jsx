﻿//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";


// !WICHTIG! BITTE IN INDESIGN EIN A1-DOKUMENT ANLEGEN, SONST FUNKTIONIERT ES NICHT 100%IG!


function draw() {

  b.clear( b.doc() );
  b.units( b.MM );
  b.noStroke();
  b.noFill();

  var distY = 12;

  var minute = b.minute();
  var hour = b.hour();
  var day = b.day();
  var month = b.month();
  var year = b.year();
  var date = b.nf( day, 2) + "/" + b.nf( month, 2) + "/" + year;
  var time = b.nf( hour, 2) + ":" + b.nf( minute, 2);
  
  var red = b.color(255, 0, 0);
  var green = b.color(0, 255, 0);
  var blue = b.color(0, 0, 255);
  var black = b.color(0, 0, 0);
  var white = b.color(255, 255, 255);

  var name = prompt("ENTER YOUR NAME (CAPS PLS)", "MAX MUSTERFRAU");
  var language = confirm("DO YOU SPEAK GERMAN?");
  var color = prompt ("R, G OR B?", "R");

  //backgrounds
  if (color == "R"){
    b.fill(red);
    b.rect(0, 0, b.width, b.height);
  }
  if (color == "G"){
    b.fill(green);
    b.rect(0, 0, b.width, b.height);
  }
  if (color == "B"){
    b.fill(blue);
    b.rect(0, 0, b.width, b.height);
  }

  //text english
  if ( language == true ){
    b.fill(black);
    b.textFont("Impact");
    b.textSize(343);
    b.textLeading(290);
    b.textAlign(Justification.CENTER_ALIGN);
    b.text("DIESES\nPLAKAT\nWURDE\nGENERIERT\nAM\n" + date + "\nUM\n" + time, 0, distY, b.width, b.height);
  }
  
  //text german
  else {
    b.fill(black);   
    b.textFont("Impact");
    b.textSize(343);
    b.textLeading(290);
    b.textAlign(Justification.CENTER_ALIGN);
    b.text("THIS\nPOSTER\nWAS\nGENERATED\nON\n" + date + "\nAT\n" + time, 0, distY, b.width, b.height);
  }
  // circles

  if ( color == "R" ){
    b.gradientMode( b.RADIAL ); 
    b.fill( b.gradient(red, white, "RedBlackRadial") );
    for( i = 0; i < day + month; i++ ){
      var size = day * i; 
      var posX = b.random( minute + i, b.width);
      var posY = minute * i;
      if( minute % 2 == 0){
        b.ellipse( posX, posY, size, size );
      }
      else{
        b.rect( posX, posY, size, size );
      }
    }
  }

  if (color == "B"){
    b.gradientMode( b.RADIAL );
    b.fill( b.gradient(blue, white, "RedBlackRadial") );
    for(i = 0; i < day + month; i++){
      var size = minute * i; 
      var posX = 0 + minute * i;
      var posY = 0 + minute * i;

      if(b.minute() % 2 == 0){
        b.ellipse(posX, posY, size, size);
      }
      else{
        b.rect(posX, posY, size, size);
      }
    }
  }
  if (color == "G"){
    for(i = 0; i < day + month; i++){
      var size = day * i / 2; 
      var posX = minute * i;
      var posY = b.random(0, b.height);

      b.fill(green);
      b.stroke(255);
      b.strokeWeight(minute);
      b.ellipse(posX, posY, size, size);
    }
    
  }

  //credits designer
  var degree = b.radians (90);
  b.rotate (degree);
  b.fill(255);
  b.textSize(75);
  b.textKerning(20);
  b.textLeading(75);
  b.textAlign(Justification.LEFT_ALIGN);
  b.text("GENERIERT VON " + name + "\nMIT DER PPPOSTER-MASCHINE", 70, minute * 8, b.width, b.height / 5)

  //credits scripter
  var degree = b.radians (-90);
  b.rotate (degree);
  b.fill(255);
  b.textSize(22);
  b.textKerning(60);
  b.textLeading(30);
  b.textAlign(Justification.LEFT_ALIGN);
  b.text("PROGRAMMIERT VON LUCAS KRAMER \nTEIL VON »STIL/SYSTEM/METHODEN«", b.width - 150, b.height - 34, b.width, b.height /  5);
}


b.go();
