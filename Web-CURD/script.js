let data =  JSON.parse(localStorage.getItem("productData")) || [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let form = document.getElementById("form");
let p_name = document.getElementById("p_name");
let price = document.getElementById("price");
let table = document.querySelector("#table tbody")
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
    data.map((val,index)=>{
        let tr = document.createElement("tr")
        tr.innerHTML = 
        `
        <td>${index+1}</td>
        <td>${val.p_name}</td>
        <td>${val.price}</td>
        <td>
            <button class="btn btn-success" onclick="addTocart(${index})">Add to cart</button>
            <button class="btn btn-danger" onclick="addTocart(${index})">Delete</button>
        </td>
        `
        table.append(tr)
    })
}
display()

const addTocart = (idx)=>{
    const product = data[idx]; 
    cart.push(product)  
    localStorage.setItem("cart",JSON.stringify(cart));
}