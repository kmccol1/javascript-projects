//****************************************************************************************
//
//
//    Filename:    part-four-arrays.js
//    Date:        17 January 2024
//    Author:      Kyle McColgan
//    Description: This program tests Array methods concat(), slice(), and reverse()
//                 and sort() using JavaScript.
//
//
//****************************************************************************************

let holdCabinet1 = ['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2 = ['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];

//Explore the methods concat, slice, reverse, and sort to determine which ones alter the original array.

//1) Print the result of using concat on the two arrays. Does concat alter the original arrays? Verify this by printing holdCabinet1 after using the method.

//concat() does not alter the original arrays, it returns a copy of the new array instead.

console.log(holdCabinet1.concat(holdCabinet2));
console.log("holdCabinet1 after concat(): ", holdCabinet1);

//2) Print a slice of two elements from each array. Does slice alter the original arrays?

//slice() does not alter the original arrays, it returns a copy of the new array instead.

console.log("Slice #1: ", holdCabinet1.slice(2));
console.log("Slice #2: ", holdCabinet2.slice(4));

console.log("holdCabinet1 after slice(2): ", holdCabinet1);
console.log("holdCabinet2 after slice(4): ", holdCabinet2);

//3) reverse the first array, and sort the second. What is the difference between these two methods? Do the methods alter the original arrays?

//The difference is that sort() arranges the array based on the value of the element, while reverse() just inverts the array regardless of value.
//Both sort() and reverse() alter the original arrays.

console.log("Reversed: ", holdCabinet1.reverse());
console.log("Sorted: ", holdCabinet2.sort());

console.log("holdCabinet1 after reverse(): ", holdCabinet1);
console.log("holdCabinet2 after sort(): ", holdCabinet2);

//****************************************************************************************

/*
node part-four-arrays.js
[
  'duct tape', 'gum',
  3.14,        false,
  6.022e+23,   'orange drink',
  'nerf toys', 'camera',
  42,          'parsnip'
]
holdCabinet1 after concat():  [ 'duct tape', 'gum', 3.14, false, 6.022e+23 ]
Slice #1:  [ 3.14, false, 6.022e+23 ]
Slice #2:  [ 'parsnip' ]
holdCabinet1 after slice(2):  [ 'duct tape', 'gum', 3.14, false, 6.022e+23 ]
holdCabinet2 after slice(4):  [ 'orange drink', 'nerf toys', 'camera', 42, 'parsnip' ]
Reversed:  [ 6.022e+23, false, 3.14, 'gum', 'duct tape' ]
Sorted:  [ 42, 'camera', 'nerf toys', 'orange drink', 'parsnip' ]
holdCabinet1 after reverse():  [ 6.022e+23, false, 3.14, 'gum', 'duct tape' ]
holdCabinet2 after sort():  [ 42, 'camera', 'nerf toys', 'orange drink', 'parsnip' ]
*/
