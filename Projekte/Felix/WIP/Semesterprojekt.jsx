//@includepath "~/Documents/;%USERPROFILE%Documents";//@include "basiljs/basil.js";function draw() {b.clear (b.doc());b.units (b.MM);b.noStroke ();var minStrokeWeight = 0.3; var maxStrokeWeight = 8;var minOpacity = 2; var maxOpacity = 100; var minColorGrey = 50;var maxColorGrey = 255;var headlineYPosition = b.random (30,70);var screenMode = BlendMode.SCREENvar name = prompt ("Wie heißt du?", "Schreibe hier deinen Namen")alert ("Hallo " + name + "!")var questionBackground = confirm ("Willst du einen Hintergrund?")if (questionBackground == true) {  b.fill (b.color (b.random(0,50), b.random(0,50), b.random(0,50) ) );  b.rectMode (b.CENTER);  b.rotate (b.random(0,1000) );  b.rect (    b.random(b.width/3,b.width/2),   b.random(b.height/3,b.height/2),   b.width+b.random (6,50),   b.height+b.random (80,200));  b.resetMatrix();}b.fill (b.color (0,0,0) );//---------------------------------------------------------------------------------------------------------------------------------------------------------Rechtecke Fragevar questionRect = confirm ("Magst du Rechtecke?")  if (questionRect == true) {     var questionColorfullRect = confirm ("Magst du es besonders Bunt?")      if (questionColorfullRect == false ) { var questionColorRect = confirm ("Willst du nur eine Farbe?") }    var questionRectOutline = confirm ("Willst du Kontur?")    var questionRectRotate = confirm ("Willst du Drehung?")    var questionRectTrans = confirm ("Magst du Transparenz?")    var rectNumber = prompt ("Wie viele Rechtecke willst du zeichnen?" ,"Gibt hier eine Zahl ein")    var rectSize = prompt ("Wie groß sollen die Rechtecke maximal sein?" ,"Gib hier eine Zahl (Millimeter) ein")//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe     if (questionColorRect == true) { var color1 = b.color (b.random (0,255), b.random (0,255), b.random (0,255) ); b.fill (color1); }      // Sorgt dafür das es nur ein Grau Farbe gibt      // else { var colorGreyNumberRect = b.random (minColorGrey, maxColorGrey); var colorGreyRect = b.color (colorGreyNumberRect, colorGreyNumberRect, colorGreyNumberRect );      //        b.fill (colorGreyRect);       //        }//----------------------------------------------------------------------------------------------------------------------------------------------Outline bunt Zahl    if (questionRectOutline == true && questionColorfullRect == true) { var colorfullRandomNumberRect = b.random (0,2); }//---------------------------------------------------------------------------------------------------------------------------------------------------- Outline eine Farbe    if (questionRectOutline == true && questionColorfullRect == false) { b.stroke (b.random (255), b.random (255), b.random (255) ); }    //---------------------------------------------------------------------------------------------------------------------------------------------------- For Schleife Start         for (var i = 0; i < rectNumber; i ++) {//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe Grau    if (questionColorRect == false) { var colorGreyNumberRect = b.random (minColorGrey, maxColorGrey); var colorGreyRect = b.color (colorGreyNumberRect, colorGreyNumberRect, colorGreyNumberRect );             b.fill (colorGreyRect);              }//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe bunt         if (questionColorfullRect == true) { var colorfullColorRect = b.color (b.random (0,255), b.random (0,255), b.random (0,255) ); b.fill (colorfullColorRect); }//------------------------------------------------------------------------------------------------------------------------------------------------Outline Farbe, Bunt, Grau         if (questionRectOutline == true) { b.strokeWeight (b.random (minStrokeWeight, maxStrokeWeight) ); }         if (questionRectOutline == true && questionColorfullRect == true) {                if (colorfullRandomNumberRect > 1) { b.stroke (255, 255, 255); }                  else { b.stroke (0, 0, 0); }         }         if (questionColorRect == false && questionRectOutline == true) { var outlineGreyNumberRect = b.random (255);          b.stroke (outlineGreyNumberRect, outlineGreyNumberRect, outlineGreyNumberRect);         }//---------------------------------------------------------------------------------------------------------------------------------------------------------Rotation         if (questionRectRotate == true) { var rotationRect = b.rotate (b.random () ); }//---------------------------------------------------------------------------------------------------------------------------------------------------------Rechtecke          var rect = b.rect (b.random (0, b.width), b.random(0, b.height), b.random(1, rectSize), b.random(1, rectSize) );     // b.blendMode (rect, BlendMode.SCREEN );//---------------------------------------------------------------------------------------------------------------------------------------------------------Transparenz         if (questionRectTrans == true) { b.opacity (rect, b.random (minOpacity, maxOpacity) ); }         }   }//---------------------------------------------------------------------------------------------------------------------------------------------------------Kreise Frageb.noStroke ();b.fill (b.color (0,0,0) );var questionCirc = confirm ("Magst du Kreise?") if (questionCirc == true) {    var questionColorfullCirc = confirm ("Magst du es besonders Bunt?")    if (questionColorfullCirc == false ) { var questionColorCirc = confirm ("Willst du nur eine Farbe?") }    var questionCircOutline = confirm ("Willst du Kontur?")    var questionCircTrans = confirm ("Magst du Transparenz?")    var circNumber = prompt ("Wie viele Kreise willst du zeichnen?" ,"Gib hier eine Zahl ein")    var circSize = prompt ("Wie groß sollen die Kreise maximal sein?" ,"Gibt hier eine Zahl (Millimeter) ein")//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe     if (questionColorCirc == true) { var colorCirc = b.color (b.random (0,255), b.random (0,255), b.random (0,255) ); b.fill (colorCirc); }//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe Grau      else { var colorGreyNumberCirc = b.random (minColorGrey, maxColorGrey); var colorGreyCirc = b.color (colorGreyNumberCirc, colorGreyNumberCirc, colorGreyNumberCirc );             b.fill (colorGreyCirc);              }//-----------------------------------------------------------------------------------------------------------------------------------------------Outline bunt Zahl    if (questionCircOutline == true && questionColorfullCirc == true) { var colorfullRandomNumberCirc = b.random (0,2); }//---------------------------------------------------------------------------------------------------------------------------------------------------- Outline eine Farbe    if (questionCircOutline == true && questionColorfullCirc == false) { b.stroke (b.random (255), b.random (255), b.random (255) ); }    //---------------------------------------------------------------------------------------------------------------------------------------------------- For Schleife Start         for (var i = 0; i < circNumber; i ++) {         var ellipseDiameter = b.random (1, circSize);//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe bunt         if (questionColorfullCirc == true) { var colorfullColorCirc = b.color (b.random (0,255), b.random (0,255), b.random (0,255) ); b.fill (colorfullColorCirc); }//------------------------------------------------------------------------------------------------------------------------------------------------Outline Farbe, Bunt, Grau         if (questionCircOutline == true) { b.strokeWeight (b.random (minStrokeWeight, maxStrokeWeight) ); }         if (questionCircOutline == true && questionColorfullCirc == true) {                if (colorfullRandomNumberCirc > 1) { b.stroke (255, 255, 255); }                  else { b.stroke (0, 0, 0); }         }         if (questionColorCirc == false && questionCircOutline == true) { var outlineGreyNumberCirc = b.random (255);          b.stroke (outlineGreyNumberCirc, outlineGreyNumberCirc, outlineGreyNumberCirc);         }//---------------------------------------------------------------------------------------------------------------------------------------------------------Kreise         var ellipse = b.ellipse (b.random (0 - ellipseDiameter, b.width), b.random(0, b.height), ellipseDiameter, ellipseDiameter );//---------------------------------------------------------------------------------------------------------------------------------------------------------Transparenz         if (questionCircTrans == true) {           // screenMode = BlendMode.SCREEN;          b.opacity (ellipse, b.random (minOpacity, maxOpacity) ); }         }  }//---------------------------------------------------------------------------------------------------------------------------------------------------------Linien Frageb.noStroke ();b.fill (b.color (0,0,0) );var questionLine = confirm ("Willst du Linien?") if (questionLine == true) {     var questionColorfullLine = confirm ("Sollen sie besonders Bunt sein?")       if (questionColorfullLine == false ) { var questionColorLine = confirm ("Willst du nur eine Farbe?") }    var questionLineTrans = confirm ("Magst du Transparenz?")    var questionLineRotate = confirm ("Willst du Chaos?")    var lineNumber = prompt ("Wie viele Linien willst du zeichnen?" ,"Gib hier eine Zahl ein")    var lineSize = prompt ("Wie breit sollen die Linien maximal sein?" ,"Gibt hier eine Zahl (Millimeter) ein")//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe     if (questionColorLine == true) { b.stroke (b.random (0,255), b.random (0,255), b.random (0,255) ); }//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe Grau      // Sorgt dafür, das es nur eine Farbe für Grau gibt      // else { var colorGreyNumberLine = b.random (minColorGrey, maxColorGrey); b.stroke (colorGreyNumberLine, colorGreyNumberLine, colorGreyNumberLine );       //        }      //var randomLineNumber = b.random (0,2);//---------------------------------------------------------------------------------------------------------------------------------------------------- For Schleife Start                  b.rotate (b.random (360));         for (var i = 0; i < lineNumber; i ++) {         if (questionLineRotate == true) { b.rotate (b.random (360) ) }         if (questionColorLine == false) { var colorGreyNumberLine = b.random (minColorGrey, maxColorGrey); b.stroke (colorGreyNumberLine, colorGreyNumberLine, colorGreyNumberLine ); }//---------------------------------------------------------------------------------------------------------------------------------------------------------Farbe bunt         if (questionColorfullLine == true) { b.stroke (b.random (0,255), b.random (0,255), b.random (0,255) ); }//---------------------------------------------------------------------------------------------------------------------------------------------------------Linien         b.strokeWeight (b.random (0.5, lineSize) );         // Positionen für die ungedrehten Linien         var xPosLine1 = b.random (0, b.width);         var yPosLine1 = b.random (0, b.height);         var yPosLine2 = b.random (yPosLine1, b.height);         var line = b.line (xPosLine1, yPosLine1, xPosLine1, yPosLine2 ); //---------------------------------------------------------------------------------------------------------------------------------------------------------Transparenz         if (questionLineTrans == true) { b.opacity (line, b.random (minOpacity, maxOpacity) ); }         }  }//---------------------------------------------------------------------------------------------------------------------------------------------------------Typo// setzt die Transformationsmatrix auf 0, die Drehung der Rechtecke wird dadurch genulltb.resetMatrix()var headlineText = prompt ("Was soll auf dem Plakat stehen" ,"Gib hier deinen Text ein")// Schrift bei Elementen Blend mode// if (questionRectTrans == true || questionCircTrans == true) { screenMode = BlendMode.HARD_LIGHT }b.fill (b.random (200),b.random (200),b.random (200));for (var k = 0; k < 3; k++) {  b.textFont ('Myriad Pro', 'Bold');  // // passt perfekt im A4 Querformat  // b.textSize(b.height/1.5);  // // Verändert die Zeilenhöhe   // b.typo(headline, 'leading', b.height/3);// #########################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################// Moin Timo, bb hier beginnt das "Problem". Ich habe versucht deinen De-Hyphonater mit einer Schleife mehrmals laufen zu lassen und die Bedingung // if(wordsCounting[x].lines.length > 1) mit && wordsCounting[x].lines.length > 2 , 3 , 4 usw zu erweitern. Beides erfolglos. Es wird immernoch mindestens ein Trennstrich eingebaut (Immerhin soweit hat es schon funktioniert =) . Getestet habe ich jedes mal das Wort: DIESISTEINBESONDERSLANGESWORT  b.textSize(130);  var headline = b.text (headlineText,10 + k*1.5,headlineYPosition ,150,250);  if ( k < 2 ) { headline.transparencySettings.blendingSettings.blendMode = screenMode; }    else { headline.transparencySettings.blendingSettings.blendMode = BlendMode.HARD_LIGHT; }   b.typo ( headline, 'leading', 70 );  var wordsCounting = b.words(headline);  var hyphCounter = 0;    // check for each word if there is more than one (parent) line, if so, it's hyphenated    for (var y = 0; y < 10; y++) {      for (var x = 0; x < wordsCounting.length; x++) {        if(wordsCounting[x].lines.length > 1) {          hyphCounter++;          b.println("The word " + wordsCounting[x].contents + " is hyphenated.");          // search the last insertion point of each hyphenated line and insert a discretionary line break          wordsCounting[x].lines[0].insertionPoints[-1].contents = SpecialCharacters.DISCRETIONARY_LINE_BREAK;        }      }    }// Alter Text: der Plakatgenerator// for (var k = 0; k < 3; k++) {//   b.textFont ('Myriad Pro', 'Bold');//   // // passt perfekt im A4 Querformat//   // b.textSize(b.height/1.5);//   // // Verändert die Zeilenhöhe //   // b.typo(headline, 'leading', b.height/3);//   b.textSize(140);//   var headline = b.text ("der\nplakat\ngener\nato\nr.",13 + k*1.5,20,300,150);//   // Steuert den Objektmodus an und verändert ihn//   headline.transparencySettings.blendingSettings.blendMode = screenMode;  //   b.typo(headline, 'leading', 70);}  ;  // Zeit die das Script lief  var scriptTime = b.millis()/1000;for (var l = 0; l < 2; l++) {  b.textSize(16);  var sidetext = b.text ("Dieses Plakat wurde am " + b.nf (+b.day(),2) +"." + b.nf (+b.month(),2) +"." + b.nf (b.year(),2) + "\num "  + b.nf (+ b.hour(),2) + ":" +b.nf (+ b.minute(),2) +":" +b.nf (+ b.second(),2) +"\n" + "von " + name + " erstellt." + "\nDas Script lief " + scriptTime + " Sekunden.", 15,250,180,50);  b.typo(sidetext, 'leading', 17);  sidetext.transparencySettings.blendingSettings.blendMode = screenMode;  }}b.go();