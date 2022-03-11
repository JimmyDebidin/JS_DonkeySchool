"use strict";

/* Challenge 6*/


/* De retour avec nos équipes de gymnastique : Les Dauphins et les Koalas ! 
Il y’a une nouvelle discipline qui fonctionne différemment.

Chaque équipe joue 3 fois, ensuite la moyenne des 3 scores est calculée (donc une moyenne par équipe).

Une équipe gagne seulement si elle a au moins le double de la moyenne de score de l’autre équipe. 
Sinon, personne ne gagne !

Tâches :
Créer une arrow function “calcAverage” qui calcule la moyenne des 3 scores.
Utiliser la fonction pour calculer la moyenne de chaque équipe.
Créer une fonction “checkWinner” qui prend les 2 moyennes de scores et qui log 
dans la console l’équipe gagnante : “L’équipe Koala gagne (30 vs 13)”.
Utiliser la fonction “checkWinner”.
Ignorer l’égalité cette fois-ci.
Données de test :
Score Dauphins : 44, 23, 71 / Score Koalas : 65, 54, 49
Score Dauphins : 85, 54, 41 / Score Koalas : 23, 34, 27 */

const calcAverage = (score1, score2, score3) => ((score1 + score2 + score3) / 3);

const overallAverageDauphins1 = calcAverage(44, 23, 71);
const overallAverageDauphins2 = calcAverage(85, 54, 41);
const overallAverageKoalas1 = calcAverage(65, 54, 49);
const overallAverageKoalas2 = calcAverage(23, 34, 27);
let team1 = 'Dauphins';
let team2 = 'Koalas';

function checkWinner(overallAverageTeam1, overallAverageTeam2) {

    if (overallAverageTeam1 > overallAverageTeam2) {
        console.log(`L'équipe ${team1} gagne (${overallAverageTeam1} vs ${overallAverageTeam2})`);

    } else if (overallAverageTeam1 === overallAverageTeam2){
        console.log("égalité");

     } else {
        console.log(`L'équipe ${team2} gagne (${overallAverageTeam2} vs ${overallAverageTeam1})`);
    }
}

checkWinner(overallAverageDauphins1, overallAverageKoalas1);
checkWinner(overallAverageDauphins2, overallAverageKoalas2);
checkWinner(50, 50);
