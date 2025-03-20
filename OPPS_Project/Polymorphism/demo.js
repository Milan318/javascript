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