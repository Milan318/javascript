let principal = prompt("Enter principle amount : ");
let year = prompt("Enter number of year : ");
let rate;

rate = principal >= 500000 ? 0.12 :
       principal >= 350000 ? 0.09 :
       principal >= 250000 ? 0.06 : 0.03;

let SI = principal * year * rate;

console.log("Principal Amount: ", principal);
console.log("Rate of interest: ", rate);
console.log("Number of years: ", year);
console.log("Simple Interest: ", SI);