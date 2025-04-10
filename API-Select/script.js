let breeds=document.getElementById('breeds');
let dogImg=document.getElementById('dogImg');

fetch("https://dog.ceo/api/breeds/list/all")

.then((response)=>{
    return response.json();
})
.then((data)=>{
    let breedList=Object.keys(data.message);
    breedList.forEach((breed)=>{
        let option=document.createElement('option');
        option.value=breed;
        option.innerText=breed;
        breeds.append(option);
    })
})
.catch((error)=>{
    console.log(error.message);
    
})

const displayImg=()=>{
    let breedSelect=document.getElementById('breeds').value;
    fetch(`https://dog.ceo/api/breed/${breedSelect}/images/random`)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        dogImg.src=data.message
        dogImg.alt=data.message
    })
    .catch((error)=>{
        console.log(error.message);
    })
}