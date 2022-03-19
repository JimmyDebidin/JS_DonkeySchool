"use strict";

/* Challenge 11*/

function Person(firstname, weight, height) {
    return {
      firstname,
      weight,
      height,
      imc: weight / (height * height)
    }    
};

const bernard1 = new Person ("Bernard", 78, 1.69);
const bernard2 = new Person("Bernard", 95, 1.88);
const marcel1 = new Person("Marcel", 92, 1.95);
const marcel2 = new Person("Marcel", 85, 1.76);
let person1;
let person2;

const higherImc = (person1, person2) => {
  let message;
  if (person1.imc > person2.imc) {
  message = `L'IMC de ${person1.firstname} (${person1.imc}) est plus élevé que celui de ${person2.firstname} (${person2.imc}).`;
  } else if (person1.imc === person2.imc) {
  message = `L'IMC des 2 personnes sont équivalente`;
  } else if (person2.imc > person1.imc) {
  message = `L'IMC de ${person2.firstname} (${person2.imc}) est plus élevé que celui de ${person1.firstname} (${person1.imc}).`;
  } else {
  message = `Les paramètres de la fonction sont mal définis`;
  }
  console.log(message);
}

higherImc(marcel1, bernard1);
higherImc(bernard2, marcel2);