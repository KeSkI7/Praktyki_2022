// 1 zadanie zalegle dodatkowe 
// Zadanie na dodatkowe punkty (3 pkt)
// Dodaj do kalkulatora obsługę 3 dodatkowych operacji (logarytmów o podstawie 2, potęg (rekurencyjnie) oraz jedna dowolna).

function handleCalculator(form) {
    form.result.innerHTML = calculate(form.input1.value, form.input2.value, form.mode.value);
}
function calculate(licz1, licz2, mode) {
    licz1 = parseFloat(licz1);
    licz2 = parseFloat(licz2);
    switch(mode) {
        case 'mod':
            if(licz2 == 0)
                return 'Dzielenie przez zero';
            return licz1 % licz2;
        case 'pow':
            if(licz2 % 1 != 0)
                return 'Liczba druga musi blicz2c calkowita';
            return power(licz1, licz2);
        case 'log':
            if(licz1 < 0)
                return 'Liczba jest ujemna';
            if(licz2 <= 1)
                return 'Podstawa jest mniejsza lub równa 1';
            let z = log(licz1, licz2, licz1 > 1);
            if(isNaN(z))
                return 'Wynik nie jest całkowity';
            return z;
    }
}
function power(licz1, licz2) {
    if(licz2 == 0)
        return 1;
    if(licz2 < 0)
        return power(licz1, licz2+1) / licz1;
    return power(licz1, licz2-1) * licz1;
}

function log(licz1, licz2, test) {
    if(licz1 == 1)
        return 0;
    if(licz1 > 1 != test)
        return NaN;
    if(licz1 < 1)
        return log(licz1 * licz2, licz2, false) - 1;
    return log(licz1 / licz2, licz2, true) + 1;
}


// 3. Napisz funkcję rekurencyjną strzałkową, która odnajdzie najmniejszy element w tablicy numbers  1pkt
const numbers = [1, 2, 3, 4, 5];
const smallestNumber = (arr) => arr.reduce((previousValue, currectValue) => previousValue < currectValue ? previousValue : currectValue);
console.log('Najmniejsza liczba z numbers: ' + smallestNumber(numbers));


// Zadanie 11. dodatkowe (2pkt)
// Wykonaj funkcję get dla następującego url: https://jsonplaceholder.typicode.com/posts
// Jako pierwszy callback (wywołanie w konsoli) - sprawdź czy response jest poprawny (status równy 200). Jeśli tak, to zwróć response, w przeciwnym wypadku wypisz błąd w konsoli.
// Jako następny callback (wywołanie w konsoli) - użyj destrukturyzacji obiektów, aby wypisać w konsoli zmienną 'title' i 'body' każdego z postów.


fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    if(response.status === 200)
        return response;
    console.error("Nieporwany response😭");
})
.then(response => response.json())
.then(data => {
    for(x of data) {
        console.log("title:\n" + x.title);
        console.log("body:\n" + x.body);
    }
})
.catch((error) => {console.error(error);});