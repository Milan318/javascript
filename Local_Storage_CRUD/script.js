let usernme = document.getElementById('username');
let password = document.getElementById('password');
let email = document.getElementById('email');
let form = document.getElementById('form');
let showData = document.querySelector('#table tbody');
let update = document.getElementById('update');
let edit = -1;


let users=[];
username.focus();
form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let obj={
        username: username.value,
        password: password.value,
        email: email.value
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
    usernme.value = '';
    password.value = '';
    email.value = '';
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