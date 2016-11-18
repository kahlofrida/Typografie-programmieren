//@includepath "~/Documents/;%USERPROFILE%Documents";
//@include "basiljs/basil.js";

function draw() {

  // platziert eine Grafik im Buchschnitt des gedruckten Dokuments

  // gewünschte Seitenzahl einstellen
  var pageCount = 20;

  b.clear( b.doc() );
  b.page(1);

  var img = b.image("MonaLisa.jpg", 0, 0);

  var imgWidth = b.itemWidth(img);
  var imgHeight = b.itemHeight(img);

  var step = imgWidth / (pageCount - 1);

  var yPos = b.height / 2 - imgHeight / 2;
  var xPos = b.width;

  b.transformImage(img, xPos, yPos, imgWidth, imgHeight);


  for (var i = 1; i < pageCount; i++) {
    b.addPage();
    img = b.image("MonaLisa.jpg", 0, 0);
    xPos = b.width - step * i;
    b.transformImage(img, xPos, yPos, imgWidth, imgHeight);
  }

}

b.go();