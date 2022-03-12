"use strict";

/* Challenge 8*/



const calcTip = (notes) => {
    if (notes >= 50 && notes <= 300) {
        let tips = (notes * 0.15);
        return(tips);

  } else {
    let tips = (notes * 0.20);
    return(tips);  
    }
}

const notes = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

/* Send data in arrays */

for (let i = 0; i < notes.length; i++) {
    calcTip(notes[i]);
    tips.push(calcTip(notes[i]));
    totals.push(calcTip(notes[i]) + notes[i]);
}

console.log(notes, tips, totals);

/* returns the average of an array */

let sum = 0;
const calcAverage = (array) => {
    for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]; 
    }
   return ((sum / array.length));
}

console.log(calcAverage(totals));



