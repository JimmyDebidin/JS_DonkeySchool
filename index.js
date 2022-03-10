"use strict";

/* Challenge 4*/

let AverageDauphins1 = (96 + 108 + 89) / 3;
let AverageDauphins2 = (97 + 112 + 101) / 3;
let AverageDauphins3 = (97 + 112 + 101) / 3;
let AverageKoalas1 = (88 + 91 + 110) / 3;
let AverageKoalas2 = (109 + 95 + 123) / 3;
let AverageKoalas3 = (109 + 95 + 106) / 3;
let overallAverageDauphins = (AverageDauphins1 + AverageDauphins2 + AverageDauphins3);
let overallAverageKoalas = (AverageKoalas1 + AverageKoalas2 + AverageKoalas3);
let winner;

if (overallAverageDauphins > overallAverageKoalas && overallAverageDauphins > 100) {
    
    winner = "Dauphins";
} else if (overallAverageDauphins === overallAverageKoalas && overallAverageDauphins > 100) {

    winner = "égalité les deux équipes remportent la compétition";
} else if (overallAverageKoalas > overallAverageDauphins && overallAverageKoalas > 100) {
    winner = "Koalas";
} else {

    winner = "Aucun gagnant";
}

console.log(winner);


 

