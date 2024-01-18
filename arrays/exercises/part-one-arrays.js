//****************************************************************************************
//
//
//    Filename:    part-one-arrays.js
//    Date:        17 January 2024
//    Author:      Kyle McColgan
//    Description: This program prints an Array of elements.
//
//
//****************************************************************************************

//Create an array called practiceFile with the following entry: 273.15

let practiceFile = [273.15];

//Use the bracket notation method to add "42" and "hello" to the array. Add these new items one at a time.  Print the array after each step to confirm the changes.

practiceFile[1] = 42;

console.log("Added 42: ", practiceFile);


practiceFile[2] = "hello";

console.log("Added 'hello': ", practiceFile);

//Use a single .push() to add the following items: false, -4.6, and "87".  Print the array to confirm the changes.

practiceFile.push(false, -4.6, "87");

console.log("Pushed three new elements to the array: ", practiceFile);

//****************************************************************************************

/*
node part-one-arrays.js
Added 42:  [ 273.15, 42 ]
Added 'hello':  [ 273.15, 42, 'hello' ]
Pushed three new elements to the array:  [ 273.15, 42, 'hello', false, -4.6, '87' ]
*/
