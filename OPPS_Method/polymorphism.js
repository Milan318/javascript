
    // Polymorphism
    
    // class Shape {
    //     draw(){
    //         console.log("Draw the shape");
            
    //     }
    // }

    // class Circle extends Shape{
    //     draw(){
    //         console.log("Draw the circle shape");
            
    //     }
    // }

    // class Tringle extends Shape {
    //     draw(){
    //         console.log("Draw the tringle shape");
            
    //     }
    // }

    // class Oval extends Shape {
    //     draw(){
    //         console.log("Draw the oval shape");
            
    //     }
    // }

    // let drawShape = [new Shape(),new Circle(),new Tringle(),new Oval()];
    // drawShape.forEach(shape=>shape.draw());


    // Second Example

    class MobileCompany{
        Brand(){
            console.log("all mobile company");
            
        }
    }

    class Apple extends MobileCompany{
        Brand(){
            console.log("this company makes a IOS mobile");
            
        }
    }

    class Samsung extends MobileCompany{
        Brand(){
            console.log("this company makes a android mobile");
            
        }
    }

    class MI extends MobileCompany{
        Brand(){
            console.log("this company makes a cheap rates mobile");
            
        }
    }

    let brandPhone = [new MobileCompany(),new Apple(),new Samsung(),new MI()];
    brandPhone.forEach(phone=>phone.Brand());


