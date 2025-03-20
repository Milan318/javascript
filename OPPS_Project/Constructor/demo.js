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