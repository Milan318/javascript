//deafult const
// class Demo{
//     constructor(){
//         console.log("This is from constructor.");
//     }
//     print(){
//         console.log("This is from Demo.");
//     }
// }
// let obj=new Demo();
// obj.print();

// paratmerised const
class Demo{
    constructor(shape){
        this.shape=shape;    
    }
    set(shape){
        this.shape=shape;
    }
    get(){
        console.log("Shape: "+this.shape);
    }
}
let obj=new Demo("circle");
obj.get();


