/* Header Geometric Calculator von Kreis,Dreieck,Quadrat und Rechteck*/


//Kreisradius definieren und Ergebnis anzeigen
let radius = 5;
let ergebnis = KreisFlaeche(radius);
console.log("Die Fläche des Kreises mit dem Radius " + radius + " beträgt " + ergebnis);

let ergebnis2 = KreisUmfang(radius);
console.log("Der Umfang des Kreises mit dem Radius " + radius + " beträgt " + ergebnis2);



//Kreisfläche berechnen
function KreisFlaeche(radius) {
    let flaeche = Math.PI * radius * radius;
    return flaeche;
}


//Kreisumfang berechnen
function KreisUmfang(radius) {
    let umfang = 2 * Math.PI * radius;
    return umfang;
}


//Dreieckflaeche berechnen
function DreieckFlaeche(basis, hoehe) {
    let flaeche = basis * hoehe/2;
 return flaeche;
}


function seiteC(seiteA, seiteB) {
    return (Matz.sqrt((seiteA * seiteA ) + (seiteB * seiteB)));
}
// Dreieckumfang berechnen Noch machen!!!!
function DreieckUmfang(basis,exponent, seiteA, seiteB, seiteC)
{
    let umfang = seiteA + seiteB + seiteC;
 return umfang;
}


//Quadratflaeche berechnen
function QuadradFlache(seiteA) {
    let flaeche = seiteA * seiteA;
 return flaeche;
}

//Quadratumfang berechnen
function QuadradUmfang(seiteA) {
    let umfang = 4 * seiteA;
 return umfang;
}

//Rechteckflaeche berechnen
function RechteckFlaeche(seiteA,seiteB) {
    let flaeche = seiteA * seiteB;
 return flaeche;
}

//Rechteckumfang berechnen
function RechtUmfang(seiteA,seiteB) {
    let umfang = 2 * seiteA * seiteB;
 return umfang;
}


