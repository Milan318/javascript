let avg = prompt("Enter marks:");
let grade;

grade = avg >= 80 ? 'A' :
        avg >= 60 ? 'B' :
        avg >= 50 ? 'C' :
        avg >= 40 ? 'D':
        "Fail";
  
  console.log("Grade is " + grade);
  