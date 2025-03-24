let time = document.getElementById('time').textContent;
let resetTime=time;
let id;

const startTimer = ()=>{
    id = setInterval(()=>{

        if(time==0){
        alert("Time out!")
        clearInterval(id);
        return;
        }
        time--;
        document.getElementById('time').textContent =  time>9 ? time : '0'+time;
    },1000)
}        

const stopTimer = ()=>{
    clearInterval(id);
} 

let resetTimer=()=>{
    clearInterval(id);
    time=resetTime;
    document.getElementById('time').innerText=time
}