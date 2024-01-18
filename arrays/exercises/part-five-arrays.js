//****************************************************************************************
//
//
//    Filename:    part-five-arrays.js
//    Date:        17 January 2024
//    Author:      Kyle McColgan
//    Description: This program tests Array methods concat(), slice(), and reverse()
//                 and sort() using JavaScript.
//
//
//****************************************************************************************

let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().

//The parameter determines at which character or element the string will be decomposed into distinct array elements by breaking the string at each instance of the argument found inside the string.

console.log("After split() str: ", str.split());
console.log("After split('e') str: ", str.split('e'));
console.log("After split(' ') str: ", str.split(' '));
console.log("After split('') str: ", str.split(''));

//2) Use the join method on the array to identify the purpose of the parameter inside the ().

//The parameter in join determines which character to insert after each element in the original array which is to be turned into a string.

console.log("After join() arr: ", arr.join());
console.log("After join('a') arr: ", arr.join('a'));
console.log("After join(' ') arr: ", arr.join(' '));
console.log("After join('') arr: ", arr.join(''));

//3) Do split or join change the original string/array?
//After running the below output tests of the orignal string and array I see that
//both split() and join() do not alter the original string or array.

console.log("Original string: ", str);
console.log("Original array: ", arr);

//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

let cargoHoldArr = cargoHold.split(',');
cargoHoldArr.sort();
console.log("Cargo hold array: ", cargoHoldArr);

//****************************************************************************************

/*
node part-five-arrays.js
After split() str:  [ 'In space, no one can hear you code.' ]
After split('e') str:  [ 'In spac', ', no on', ' can h', 'ar you cod', '.' ]
After split(' ') str:  [
  'In',  'space,',
  'no',  'one',
  'can', 'hear',
  'you', 'code.'
]
After split('') str:  [
  'I', 'n', ' ', 's', 'p', 'a', 'c',
  'e', ',', ' ', 'n', 'o', ' ', 'o',
  'n', 'e', ' ', 'c', 'a', 'n', ' ',
  'h', 'e', 'a', 'r', ' ', 'y', 'o',
  'u', ' ', 'c', 'o', 'd', 'e', '.'
]
After join() arr:  B,n,n,5
After join('a') arr:  Banana5
After join(' ') arr:  B n n 5
After join('') arr:  Bnn5
Original string:  In space, no one can hear you code.
Original array:  [ 'B', 'n', 'n', 5 ]
Cargo hold array:  [ 'batteries', 'food', 'plasma sword', 'space suits', 'water' ]
*/
