let num1;
let num2;
document.getElementById('result').classList.add('hidden');



function printValue(){
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;

    document.getElementById('num1-value').innerHTML +=" "+num1;
    document.getElementById('num2-value').innerHTML +=" "+num2;

    document.getElementById('result').classList.remove('hidden');
    document.getElementById('result').classList.add('active');
}

function Operation(type){
    switch(type){
        case "add":
            document.getElementById('ans').innerHTML = parseInt(num1) + parseInt(num2)
        break;
        case 'sub':
            document.getElementById('ans').innerHTML = parseInt(num1) - parseInt(num2)
        break;
        case 'mult':
            document.getElementById('ans').innerHTML = parseInt(num1) * parseInt(num2)
        break;
        case 'div':
            document.getElementById('ans').innerHTML = parseInt(num1) / parseInt(num2)
        break;
    }
}