//****************************************************************************************
//
//
//    Filename:    part-six-arrays.js
//    Date:        17 January 2024
//    Author:      Kyle McColgan
//    Description: This program uses multi-dimensional arrays for learning.
//
//
//****************************************************************************************

//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.

let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element3 = ['iron', 'Fe', 55.85];

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.

let table = [];

table.push(element1);
table.push(element2);
table.push(element3);

console.log("Current table: ", table);

//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).

//The difference is that printing with one index prints out an entire array. Printing with two indices prints out only the first entry of the first array.

console.log("table[0]: ", table[0]);
console.log("table[0][0]: ", table[0][0]);

//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.

console.log("Mass of element1: ", table[0][2]);
console.log("Name of element2: ", table[1][0]);
console.log("Symbol for element3: ", table[2][1]);

//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.

let tables = []
let secondTable = [["Testing"], ["3D"], ["Arrays"]];
let thirdTable = [["Array"], ["Inside"], ["Arrays"]];

tables.push(table);
tables.push(secondTable);
tables.push(thirdTable);

console.log("3d array: ", tables[0][0][0]);
console.log("3d array: ", tables[1][0][0]);
console.log("3d array: ", tables[2][0][0]);

//****************************************************************************************

/*
node part-six-arrays.js
Current table:  [
  [ 'hydrogen', 'H', 1.008 ],
  [ 'helium', 'He', 4.003 ],
  [ 'iron', 'Fe', 55.85 ]
]
table[0]:  [ 'hydrogen', 'H', 1.008 ]
table[0][0]:  hydrogen
Mass of element1:  1.008
Name of element2:  helium
Symbol for element3:  Fe
3d array:  hydrogen
3d array:  Testing
3d array:  Array
*/
