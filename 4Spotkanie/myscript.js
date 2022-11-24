fetch('https://cataas.com/cat')
.then((respone) => {
    if(!respone.ok){
        throw new Error('Your respone was not ok')
    }
    return respone.blob();

})
.then((myBlob) =>{
    let myImage = document.createElement('img');
    myImage.src = URL.createObjectURL(myBlob);
    document.querySelector('body').appendChild(myImage);
    console.log('success');
})
.catch((error) => {
console.error('There has been a problem with your fetch operation:', error);
})

// Zadanie na duzo kotow - 2 

document.getElementById('btn').onclick = function(){
    fetch('https://cataas.com/cat')
    .then((respone) => {
        if(!respone.ok){
            throw new Error('Your respone was not ok')
        }
        return respone.blob();
    
    })
    .then((myBlob) =>{
        let myImage = document.createElement('img');
        myImage.src = URL.createObjectURL(myBlob);
        document.querySelector('body').appendChild(myImage);
        console.log('success');
    })
    .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
    })
}

// zamiast przycisk inner html diva - 3

function zadanie3(){
        fetch('https://cataas.com/cat')
    .then((respone) => {
        if(!respone.ok){
            throw new Error('Your respone was not ok')
        }
        return respone.blob();
    
    })
    .then((myBlob) =>{
        let image = document.querySelector('img#zdj');
        image.src = 'https://cataas.com/cat'.src = URL.createObjectURL(myBlob);
    
    })
    .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
    })
    }





// Kot na przycisk jeden tylko - 4

document.getElementById('btn2').onclick = function(){
    fetch('https://cataas.com/cat')
.then((respone) => {
    if(!respone.ok){
        throw new Error('Your respone was not ok')
    }
    return respone.blob();

})
.then((myBlob) =>{
    let image = document.querySelector('img#zdj');
    image.src = 'https://cataas.com/cat'.src = URL.createObjectURL(myBlob);

})
.catch((error) => {
console.error('There has been a problem with your fetch operation:', error);
})
}



