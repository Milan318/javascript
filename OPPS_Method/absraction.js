
    // Data Abstrasction 
  
//    class Fruits{
//         printFruit(){
//             console.log("Eating fruits");
//         }
//    }

//    class Apple extends Fruits{
//     printFruit(){
//         console.log("Eating apple");
//     }
//    }

//    class Pineapple extends Fruits{
//     printFruit(){
//         console.log("Eating pineapple");
//     }
//    }

//    class Banana extends Fruits{
//     printFruit(){
//         console.log("Eating banana");   
//     }
//    }

//    let FruitObj = new Fruits();
//    FruitObj.printFruit();

//    let FruitObj1 = new Pineapple();
//    FruitObj1.printFruit();

//    let FruitObj2 = new Banana();
//    FruitObj2.printFruit();


class Employee {
    constructor(name, age, salary) {
        this.E_name = name;
        this.age = age;
        this.salary = salary;
    }

    setEmp(name, age, salary) {
        this.E_name = name;
        this.age = age;
        this.salary = salary;
    }

    getEmp() {
        console.log("Employee Name: " + this.E_name + " Age: " + this.age + " Salary: " + this.salary);
    }
}

class Salary extends Employee {
    constructor(name, age, salary, hra, ma, pf) {
        super(name, age, salary);
        this.hra = hra;
        this.ma = ma;
        this.pf = pf;
        this.grossSalary = this.hra + this.ma - this.pf;
        this.netSalary = this.grossSalary + this.salary;
    }

    getSal() {
        super.getEmp();
        console.log(`Employee grossSalary is ${this.grossSalary} and netSalary is ${this.netSalary}`);
    }
}


let sal = new Salary("Milan", 24, 100000,15000,20000,5000);
sal.getSal();
