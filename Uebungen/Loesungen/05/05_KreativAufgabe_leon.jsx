﻿#includepath "~/Documents/;%USERPROFILE%Documents";
#include "basil.js";

function draw() {
    b.clear(b.doc());
  var allfiles = ["Text1.txt","Text2.txt","Text3.txt"];
  var RndNmbr = b.round(b.random(0,2));
  var RndFile = allfiles[RndNmbr];
  var FileText = b.loadString(RndFile);

  var tf = b.text(FileText,100,100,400,400);

  var words = b.words(tf);


 
  b.strokeWeight(0.5);


  // 3. for loop über den Array
  for(var i = 0; i < words.length; i++) {

    

      var wordBounds = b.bounds(   words[i]   );
      b.line(wordBounds.left,wordBounds.baseline,10,10)
     // b.ellipse(wordBounds.left +  (wordBounds.width / 2) , wordBounds.baseline - 3.5, wordBounds.width * 1.2, wordBounds.width * 1.2);

    


}
}


b.go();
