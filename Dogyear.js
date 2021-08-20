// creating variable and initializing it
const myAge=23;
//the value assigned in this variable will change later
const earlyYears=2;
const ageYears=earlyYears*10.5;
//we are subtracting 2 from myAge 
let laterYears=myAge-2;
//we are multiplying laterYears by 4 to calculate the number of dog years
const lYear=laterYears*4; 
console.log(`The earlyYears is ${ageYears}` );
console.log(`The laterYears is ${lYear}` );
let myAgeInDogYears=ageYears+lYear;

// writing and asigning my name to a variable and call a method for toLowerCase function
const myName="Gmagnel Talang emmanuel".toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);