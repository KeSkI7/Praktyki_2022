const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

// Zadanie 1 - laczenie tablic
const joinArrays = (arg1, arg2) => [...arg1, ...arg2];
console.log(joinArrays(arr1, arr2));
// 2 sposob
// const tahoe = [...arr1, ...arr2];
// console.log(tahoe.join(", "));

// Zadanie 2 - ostatni element w tablicy

const lastElement = (arg1) => [...arg1].reverse()[0];
console.log(lastElement(arr2));

// Zadanie 3 - filter w tablicy arr2
// Mała pomoc:
// const filterArray = (array, arg) => array.filter( 
// /* tu wstaw swój kod */ 
// );

const filterArray = (array, arg) => array.filter( 
    result => result === arg
    );
    console.log(filterArray(arr2, "Bartek"));

// Zadanie 4 - .reduce() suma elementow tablicy

const sumArray = (array) => array.reduce(
    (previousValue, currentValue) => previousValue + currentValue
);
console.log(sumArray(numbers));

// Zdanie 5 - .map() po tablicy numbers i każdy element n^2+3

const mapArray = (array) => array.map(n => n*n + 3);
console.log(mapArray(numbers));

// Zadanie 6 - Dodaj funkcję strzałkową używając .filter(), która odnajdzie tylko imiona w arr2, które mają mniej lub równo 5 liter i kończą się na 'ek' 

const filterArrayEK = (array) => array.filter(
    name => name.length <=5 && name.endsWith("ek")
);
console.log(filterArrayEK(arr2));
// Zadanie 7 - Dodaj funkcję strzałkową używając .filter(), która odnajdzie wyłącznie liczby parzyste w numbers

const filterArrayEven = (array) => array.filter(
    value => value % 2 === 0
);

console.log(filterArrayEven(numbers));