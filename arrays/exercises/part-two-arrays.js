//****************************************************************************************
//
//
//    Filename:    part-two-arrays.js
//    Date:        17 January 2024
//    Author:      Kyle McColgan
//    Description: This program uses array methods to update a cargo hold list.
//
//
//****************************************************************************************

let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.

cargoHold[5] = 'space tether';

console.log("Replaced 'slinky' with 'space tether': ", cargoHold);

//2) Remove the last item from the array with pop. Print the element removed and the updated array.

console.log("Removed last element: " + `${cargoHold.pop()}` + " from the cargo hold list.");

console.log("Updated array: " + `${cargoHold}`);

//3) Remove the first item from the array with shift. Print the element removed and the updated array.

console.log("Removed first element: " + `${cargoHold.shift()}` + " from the cargo hold list.");

console.log("Updated array: " + `${cargoHold}`);

//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.

cargoHold.unshift(1138);

console.log("Inserted new first element 1138 into the cargo hold list.");

cargoHold.push("20 meters");

console.log("Appended new element '20 meters' to the cargo hold list.");

console.log("Updated array: " + `${cargoHold}`);

//5) Use a template literal to print the final array and its length.

console.log("Final array: ", `${cargoHold}`);
console.log("Final array length: ", `${cargoHold.length}`);

//****************************************************************************************
/*
node part-two-arrays.js
Replaced 'slinky' with 'space tether':  [
  'oxygen tanks',
  'space suits',
  'parrot',
  'instruction manual',
  'meal packs',
  'space tether',
  'security blanket'
]
Removed last element: security blanket from the cargo hold list.
Updated array: oxygen tanks,space suits,parrot,instruction manual,meal packs,space tether
Removed first element: oxygen tanks from the cargo hold list.
Updated array: space suits,parrot,instruction manual,meal packs,space tether
Inserted new first element 1138 into the cargo hold list.
Appended new element '20 meters' to the cargo hold list.
Updated array: 1138,space suits,parrot,instruction manual,meal packs,space tether,20 meters
Final array:  1138,space suits,parrot,instruction manual,meal packs,space tether,20 meters
Final array length:  7
*/
