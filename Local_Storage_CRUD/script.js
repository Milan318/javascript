let usernme = document.getElementById('username');
let password = document.getElementById('password');
let email = document.getElementById('email');
let form = document.getElementById('form');
let showData = document.querySelector('#table tbody');
let update = document.getElementById('update');
let gender = document.querySelectorAll("input[type='radio']");
let hobby = document.querySelectorAll("input[type='checkbox']");
let city = document.getElementById("city");
let users=JSON.parse(localStorage.getItem("users")) || [];
let edit = -1;

username.focus();
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    //gender
    let genderValue = '';
    if(gender[0].checked){
        genderValue=gender[0].value;
        gender[0].checked=false;
    }
    else{
        genderValue=gender[1].value;
        gender[1].checked=false;
    }
    //hobby
    let hobbyArray =[];
    for (i=0;i<hobby.length;i++){
        if(hobby[i].checked){
            hobbyArray.push(hobby[i].value);
        }else if (hobby[0].checked){
            hobby[0].checked=false;
        }else{
            hobby[1].checked=false;
        }
    }
    //city
    let cityValue = [];

    for (i = 0; i < city.length; i++) {

      if (city[i].selected) {
        cityValue.push(city[i].value);

      }
    } 


    let obj={
        username: username.value,
        password: password.value,
        email: email.value,
        gender: genderValue,
        hobby: hobbyArray,
        city: cityValue
    }
   
    
     
    if(edit==-1){
        users.push(obj);
    }else{
        users[edit]=obj;
        edit=-1;
        update.innerHTML = "Registor";
        update.classList.remove('btn-success');
        update.classList.add('btn-primary');
    }
    localStorage.setItem("users",JSON.stringify(users));
    usernme.value = '';
    password.value = '';
    email.value = '';
    gender.value = '';
    hobby.value = '';
    city.value = '';
    username.focus();
    display();
})

const display = () =>{
    showData.innerHTML = '';
    users.map((user,index)=>{
        let row = document.createElement('tr');
        row.innerHTML = 
        `
            <td>${index+1}</td>
            <td>${user.username}</td>
            <td>${user.password}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
            <td>${user.hobby.toString()}</td>
            <td>${user.city}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteData(${index})">Delete</button>
                <button class="btn btn-warning" onclick="editData(${index})">Edit</button>
            </td>
        `
          showData.append(row);

    });
}

let deleteData=(index)=>{
    users.splice(index,1);
    localStorage.setItem("users",JSON.stringify(users));
    display();
}

let editData=(index)=>{
    let user = users.filter((_,idx)=>idx==index)[0];

    usernme.value=user.username;
    password.value=user.password;
    email.value=user.email;

    update.innerHTML="Update";
    update.classList.remove('btn-primary');
    update.classList.add('btn-success');
    edit=index;

}

display();