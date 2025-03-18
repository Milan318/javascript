class Employee{
    constructor(name,age){
        console.log(this.name = name);
        console.log(this.age = age);
    }
}

class Manager extends Employee{
    constructor(name,age){
        super(name,age)
    }
}

let obj = new Manager("Milan",24);