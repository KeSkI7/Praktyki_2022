// console.log("Przykład1");
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 10;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue - currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10

// console.log("Przykład 2");

const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam" ,"Marek", "Bartek", "Tomek"];
const numbers = [1,2,3,4,5];
// Zad 1 laczenie tablic .../.concat() arr1 i arr2
// Zad 2 ... i .reverse() ostatni element w tablicy
// Zad 3 .filter() po tablicy arr2 filter(arr2, arg)
// Zad 4 .reduce() suma elementów w tablicy numbers
// Zad 5 .map() po tablicy numbers i każdy element n^2 + 3

// Zadanie1

// .contact()
// const arr3 = arr1.concat(arr2);
// console.log(arr3);

// ... 
const joinArrays = (a1, a2) => [...a1, ...a2];
console.log(joinArrays(arr1, arr2));

// Zadanie2

const lastElement = (a1) =>[...a1].reverse()[0];
console.log(lastElement(arr2));

// Zadanie 3

const filterArray = (a1, arg) => a1.filter(result => result === arg);
console.log(filterArray(arr2, "Adam"));

// Zdanie 4
const initialValue = 0;
const sumWithInitial = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
console.log(sumWithInitial);