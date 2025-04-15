let data =  JSON.parse(localStorage.getItem("productData")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let form = document.getElementById("form");
let p_name = document.getElementById("p_name");
let price = document.getElementById("price");
let table = document.querySelector("#table tbody");
let cartData = document.querySelector(".offcanvas-body ul");
p_name.focus();

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let obj = {
        p_name : p_name.value,
        price : price.value
    }
    
    data.push(obj);
    localStorage.setItem("productData",JSON.stringify(data))
    p_name.value = "";
    price.value="";
    p_name.focus()
    display();
})

const display=()=>{
    table.innerHTML = "";
    data.forEach((val,index)=>{
        let tr = document.createElement("tr")
        tr.innerHTML = 
        `
        <td>${index+1}</td>
        <td>${val.p_name}</td>
        <td>${val.price}</td>
        <td>
            <button class="btn btn-success" onclick="addTocart(${index})"><i class="bi bi-cart-check-fill"></i></button>
            <button class="btn btn-danger" onclick="deletebtn(${index})"><i class="bi bi-trash3-fill"></i></button>
        </td>
        `
        table.append(tr)
    })
}
display()

// --------------add-to-cart----------

const addTocart = (index)=>{
    const product = data[index]; 
    cart.push(product)  
    localStorage.setItem("cart",JSON.stringify(cart));
    displaycart()
}

// -----------------delete-------------

const deletebtn = (index)=>{
   data.splice(index,1)
   localStorage.setItem("productData",JSON.stringify(data))
   display()
}

// -----------------------cart------------------

const displaycart=()=>{
    cartData.innerHTML = "";
    cart.forEach((val,index)=>{
        let list = document.createElement("li")
        list.innerHTML = 
        `
        <span>${val.p_name}</span>
        <span>${val.price}</span>
        <span>
            <button class="btn btn-danger" onclick="deletebtn2(${index})"><i class="bi bi-trash3-fill"></i></button>
        </span>
        `
        cartData.append(list)
    })
}

displaycart();

const deletebtn2 = (index)=>{
    cart.splice(index,1)
    localStorage.setItem("cart",JSON.stringify(cart));
    displaycart()
 }