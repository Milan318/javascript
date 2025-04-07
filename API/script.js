let img = document.getElementById('img');

const changeImg=()=>{
fetch('https://dog.ceo/api/breeds/image/random')
.then((response)=>response.json())
.then((data)=>img.src=data.message)
.catch((error)=>console.log(error.message))
}

changeImg();



