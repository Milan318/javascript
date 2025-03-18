class Student {
    constructor(userName, age, grade, course, subCourse) {
        this.userName = userName;
        this.age = age;
        this.grade = grade;
        this.course = course;
        this.subCourse = subCourse;

        
    }

    setData(userName, age, grade, course, subCourse) {
        this.userName = userName;
        this.age = age;
        this.grade = grade;
        this.course = course;
        this.subCourse = subCourse;

        
    }

    getData() {
        console.log("Name: " + this.userName);
        console.log("Age: " + this.age);
        console.log("Grade: " + this.grade); 
        console.log("Course: " + this.course);
        console.log("Sub-course: " + this.subCourse);
    }
}


let std1 = new Student("John Doe", 23, "B", "Graphics Designing", "Figma");
let std2 = new Student("Milan Mandaviya", 24, "A", "Full Stack Devlopment", "Html");
let std3 = new Student("Akshar Parekh", 24, "A", "Full Stack Devlopment", "Bootstrap");

std1.getData();
console.log("-------------------------");
std2.getData();
console.log("-------------------------");
std3.getData();