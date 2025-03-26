let usernme = document.getElementById('username');
let password = document.getElementById('password');
let email = document.getElementById('email');
let form = document.getElementById('form');
let showData = document.querySelector('#table tbody');

let users=[];
username.focus();
form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let obj={
        username: username.value,
        password: password.value,
        email: email.value
    }

    users.push(obj);
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
        `
          showData.append(row);

    });
}

display();