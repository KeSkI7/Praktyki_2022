// Zadanie 9 - Stwórz obiekt klasy Promise -> niech zakończy się powodzeniem (resolve) po 5 sekundach i zwróci string 'Udało się!'. 
// Jako callback (wywołanie w konsoli) niech wypisze zwrócony string w konsoli.

const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Udało się!");
    }, 5000);
});
promise.then((value) => {
    console.log(value);
})

// Zadanie 10 - Napisz funkcję multiplyAsync(x,y), która zwraca obiekt klasy Promise, kończący się porażką, gdy któryś za argumentów 
// jest niepoprawny (nie jest liczbą). W przeciwnym przypadku zwraca iloczyn dwóch liczb. Napisz callback (wywołanie w konsoli), który wypisuje wynik w konsoli.

const multiplyAsync = (x,y)=> {
    return new Promise((resolve, reject) => {
        if(typeof x !== 'number' || typeof y !== 'number'){
         reject("Jedna z wartosci nie jest liczba");
        }
        else{
            resolve(x * y);
        }
    })

}
multiplyAsync(2, 5).then(console.log).catch((error) =>{
    console.log('Jedna z wartoscni nie jest liczba');
})
multiplyAsync(2, "435").then(console.log).catch((error) =>{
    console.log('Jedna z wartoscni nie jest liczba');
})

