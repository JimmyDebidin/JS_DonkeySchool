"use strict";

/* Challenge 5*/
let tips;
let totalTips;
let bill = prompt("Valeur de la note ?");
(bill >= 50 && bill <= 300) ? (tips = 0.15, totalTips = bill * tips) : tips = 0.20, totalTips = (bill * tips); 
console.log("La note était de " + bill + ", le pourboire de " + totalTips + " et la valeur totale était de " + (+bill + totalTips));

/* Classic way

if (bill >= 50 && bill <= 300) {
    tips = 0.15;
    totalTips = (bill * tips);
} else {
    tips = 0.20;
    totalTips = (bill * tips);
}
 */