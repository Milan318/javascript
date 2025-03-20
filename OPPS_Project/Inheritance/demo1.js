class A {
    constructor(str) {
        this.e_name = str;
    }

    displayA() {
        console.log(this.e_name)
    }
}

class B extends A {
    constructor(str) {
        super(str)
        this.s_name = "Milan"
    }

    displayB() {
        console.log(this.s_name);
    }
}

let obj = new B("Hello A");
obj.displayA();
obj.displayB();