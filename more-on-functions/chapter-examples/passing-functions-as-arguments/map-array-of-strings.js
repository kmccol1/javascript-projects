//****************************************************************************************
//
//    Filename:    map-array-of-strings.js
//    Date:        31 January 2024
//    Author:      Kyle McColgan
//    Description: This program displays the first initial of a list of first names.
//
//****************************************************************************************

let names = ["Chris", "Jim", "Sally", "Blake", "Paul", "John", "Courtney", "Carly"];

// TODO: Write a mapping function
// and pass it to .map()
let firstInitials = names.map(function (name) { return name[0]});

console.log("\nPrinting first initials...");
console.log(firstInitials);
console.log("\nGoodbye!");

//****************************************************************************************

/*
passing-functions-as-arguments> node map-array-of-strings.js

Printing first initials...
[
  'C', 'J', 'S',
  'B', 'P', 'J',
  'C', 'C'
]

Goodbye!
*/
