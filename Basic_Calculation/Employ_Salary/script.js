let e_name = "milan";
let B_salary = 20000;
let HRA = B_salary * 0.50;
let MA = B_salary * 0.015;
let DA = B_salary * 0.08;
let TA = B_salary * 0.08;
let PF = B_salary * 0.012;
let PT = 200;
let TDS = B_salary * 0.010;

let gross = B_salary + HRA + MA + TA + DA;
let net_salary = gross - PF - PT - TDS;


console.log("Employe Name:", e_name);
console.log("Basic Salary:", B_salary);
console.log("HRA: ", HRA);
console.log("MA: ", MA);
console.log("TA: ", TA);
console.log("DA: ", DA);
console.log("PF: ", PF);
console.log("PT: ", PT);
console.log("TDS: ", TDS);
console.log("gross: ", gross);
console.log("total salary: ",net_salary);