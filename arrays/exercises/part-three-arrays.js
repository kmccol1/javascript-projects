//****************************************************************************************
//
//
//    Filename:    part-three-arrays.js
//    Date:        17 January 2024
//    Author:      Kyle McColgan
//    Description: This program uses array methods to update a cargo hold list.
//
//
//****************************************************************************************

let cargoHold = [1138, 'space suits', 'parrot', 'instruction manual', 'meal packs', 'space tether', '20 meters'];

//Use splice to make the following changes to the cargoHold array. Be sure to print the array after each step to confirm your updates.

//1) Insert the string 'keys' at index 3 without replacing any other entries.

cargoHold.splice(3, 0, "keys");

console.log("Added 'keys' to the cargo hold list: ", cargoHold);

//2) Remove ‘instruction manual’ from the array. (Hint: indexOf is helpful to avoid manually counting an index).

cargoHold.splice(cargoHold.indexOf('instruction manual'), 1);

console.log("Removed the instruction manual from the cargo hold list: ", cargoHold);

//3) Replace the elements at indexes 2 - 4 with the items ‘cat’, ‘fob’, and ‘string cheese’.

cargoHold.splice(2, 3, "cat", "fob", "string cheese");
console.log("Updated indices 2-4 on the cargo hold list: ", cargoHold);

//****************************************************************************************

/*
node part-three-arrays.js
Added 'keys' to the cargo hold list:  [
  1138,
  'space suits',
  'parrot',
  'keys',
  'instruction manual',
  'meal packs',
  'space tether',
  '20 meters'
]
Removed the instruction manual from the cargo hold list:  [
  1138,
  'space suits',
  'parrot',
  'keys',
  'meal packs',
  'space tether',
  '20 meters'
]
Updated indices 2-4 on the cargo hold list:  [
  1138,
  'space suits',
  'cat',
  'fob',
  'string cheese',
  'space tether',
  '20 meters'
]
*/
