const people1 = ["John Doe", "Jane Lopez"];
const people2 = ["John Smith", "Kyle Rogers"];
const numbers = [1, 2, 5, 10, 20];

// 1 ostatni element z tablicy

function showLast(arr) {
  return arr[arr.length - 1];
}

console.log(showLast(people1));

// 2 dodanie dwoch elementows

function druga(arr1, arr2) {
  let arr3 = [];
  for (i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i]);
  }
  for (i = 0; i < arr2.length; i++) {
    arr3.push(arr2[i]);
  }

  return arr3;
}
console.log(druga(people1, people2));

// 3

function filterArray(arr, filter){
    let result = [];
    for (let i= 0; i < arr.length; i++) {
        if(arr[i] === filter){
            result.push(arr[i]);
        }
        
    }
    return result;
}

console.log(filterArray(people1, 'John Doe'));

// 4 sumowanie elementow tablicy

function sumaArray(arr){
let result = 0;
for (let i = 0; i < arr.length; i++) {
    result += arr[i];
    
}
return result;
}
console.log(sumaArray(numbers));

// 5 modyfikajca array

function modifyArray(arr){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]*arr[i]+3);
        
    }
    return result;
    }

    console.log(modifyArray(numbers));