//****************************************************************************************
//
//    Filename:    halve-each-number.js
//    Date:        31 January 2024
//    Author:      Kyle McColgan
//    Description: This program displays numbers from an array divided by 2.
//
//****************************************************************************************

let nums = [3.14, 42, 4811];

// TODO: Write a mapping function
// and pass it to .map()
let halved = nums.map(function (num){return num/2});

console.log("\nPrinting the values in nums divided by 2...");
console.log(halved);
console.log("\nGoodbye!");

//****************************************************************************************

/*
passing-functions-as-arguments> node halve-each-number.js

Printing the values in nums divided by 2...
[ 1.57, 21, 2405.5 ]

Goodbye!
*/
