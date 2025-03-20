class Shape {
    draw(){
        console.log("Draw the shape");
        
    }
}

class Circle extends Shape{
    draw(){
        console.log("Draw the circle shape");
        
    }
}

class Tringle extends Shape {
    draw(){
        console.log("Draw the tringle shape");
        
    }
}

class Oval extends Shape {
    draw(){
        console.log("Draw the oval shape");
        
    }
}

let drawShape = [new Shape(),new Circle(),new Tringle(),new Oval()];
drawShape.forEach(shape=>shape.draw());