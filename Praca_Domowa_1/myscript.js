// Kalkulator
document.getElementById('calculate').onclick = function caluclator(){
    let num_one = parseFloat(document.getElementById('number_one').value);
    let num_two = parseFloat(document.getElementById('number_two').value);
    let result;
    
    if(document.getElementById('add').checked == true){
        result = num_one + num_two;
        document.getElementById('wynik').innerHTML = 'Twoj wynik to '+ result;
    }
    
    if(document.getElementById('minus').checked == true){
        result = num_one - num_two;
        document.getElementById("wynik").innerHTML = 'Twoj wynik to '+result;
    }

    if(document.getElementById('multi').checked == true){
        result = num_one * num_two;
        document.getElementById('wynik').innerHTML = 'Twoj wynik to '+result;
    }

    if(document.getElementById('divi').checked == true){
        if(num_one == 0 || num_two == 0){
            document.getElementById('wynik').innerHTML = 'Nie mozna dzielic przez 0!';
        }
        else{
            result = num_one / num_two;
            document.getElementById('wynik').innerHTML = 'Twoj wynik to '+ result;
        }
    }

   
}

// Palindrom

function palindrome(var1){
   
    let word1 = [];
    word1 = var1.split('');
    console.log(word1);
   
    let reversedArray = [];
    for(let i = word1.length - 1; i>=0; i--){
        reversedArray.push(word1[i]);
    }
    console.log(reversedArray);
    if(JSON.stringify(word1) == JSON.stringify(reversedArray)){
        return true;
    }
    else{
        return false;
    }
}
console.log(palindrome('kamilslimak'));



// 2 Najwieksza wartosc z tablicy
let arr2 = [10, 15, 3, 22];
let arr3 = ['jakub', 'konkol', 'czwarta', 'p'];

function bubbleSort(arr){
    
    for(var i = 0; i < arr.length; i++){
       
        for(var j = 0; j < ( arr.length - i -1 ); j++){
         
            if(arr[j] > arr[j+1]){           
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}



function secondBiggest(arr4){
    
    arr4=bubbleSort(arr4);
    console.log(arr4);
    return arr4[arr4.length - 2];
   
}

function secondBiggestString(arr){
    
    var lgth = 0;
    var longest;

for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > lgth) {
    var lgth = arr[i].length;
    longest = arr[i - 1];
  }
}
console.log(longest);
}


console.log(secondBiggest(arr2));
console.log(secondBiggestString(arr3));


// Zadanie 4

  function rekurence(a,b){
   console.log(a);
    const newNumb = a + 1;
    if (newNumb <=b) {  
        rekurence(newNumb,b);
    }
    
  }
  rekurence(3,20);