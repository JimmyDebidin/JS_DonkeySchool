"use strict";

/* Challenge 3 */

let heightBernard1 = 1.69;
let weightBernard1 = 78;
let heightMarcel1 = 1.95;
let weightMarcel1 = 92;
let heightBernard2 = 1.88;
let weightBernard2 = 95;
let heightMarcel2 = 1.76;
let weightMarcel2 = 85;
let imcBernard1 = weightBernard1 / (heightBernard1 * heightBernard1);
let imcBernard2 = weightBernard2 / (heightBernard2 * heightBernard2);
let imcMarcel1 = weightMarcel1 / (heightMarcel1 * heightMarcel1);
let imcMarcel2 = weightMarcel2 / (heightMarcel2 * heightMarcel2);
let bernardHigherIMC;

if (imcBernard1 > imcMarcel1) {
     
    bernardHigherIMC = true;
    console.log("Bernard a un IMC " + imcBernard1 + " plus élevé que Marcel " + imcMarcel1);
    if (imcBernard1 < 22) {
        console.log("Bernard : insuffisance pondérale");
    } else if (imcBernard1 >= 22 && imcBernard1 <= 27) {
        console.log("Bernard : poids normal");
    } else if (imcBernard1 > 27 && imcBernard1 <= 32) {
        console.log("Bernard : surpoids");
    } else if (imcBernard1 > 32) {
        console.log("Bernard : obésité");
        }
   } else {

    bernardHigherIMC = false;
    console.log("Marcel a un IMC " + imcMarcel1 + " plus élevé que Bernard " + imcBernard1);
    if (imcMarcel1 < 22) {
        console.log("Marcel : insuffisance pondérale");
    } else if (imcMarcel1 >= 22 && imcMarcel1 <= 27) {
        console.log("Marcel : poids normal");
    } else if (imcMarcel1 > 27 && imcMarcel1 <= 32) {
        console.log("Marcel : surpoids");
    } else if (imcMarcel1 > 32) {
        console.log("Marcel : obésité");
        }
}

if (imcBernard2 > imcMarcel2) {

    bernardHigherIMC = true;
    console.log("Bernard a un IMC " + imcBernard2 + " plus élevé que Marcel " + imcMarcel2);
     if (imcBernard2 < 22) {
        console.log("Bernard : insuffisance pondérale");
    } else if (imcBernard2 >= 22 && imcBernard2 <= 27) {
        console.log("Bernard : poids normal");
    } else if (imcBernard2 > 27 && imcBernard2 <= 32) {
        console.log("Bernard : surpoids");
    } else if (imcBernard2 > 32) {
        console.log("Bernard : obésité");
        }
   } else {

    bernardHigherIMC = false;
    console.log("Marcel a un IMC " + imcMarcel2 + " plus élevé que Bernard " + imcBernard2);
    if (imcMarcel2 < 22) {
        console.log("Marcel : insuffisance pondérale");
    } else if (imcMarcel2 >= 22 && imcMarcel2 <= 27) {
        console.log("Marcel : poids normal");
    } else if (imcMarcel2 > 27 && imcMarcel2 <= 32) {
        console.log("Marcel : surpoids");
    } else if (imcMarcel2 > 32) {
        console.log("Marcel : obésité");
        }
}







  


 

