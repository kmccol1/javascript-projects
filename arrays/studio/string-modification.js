//****************************************************************************************
//
//
//    Filename:    string-modification.js
//    Date:        18 January 2024
//    Author:      Kyle McColgan
//    Description: This program tests slicimg Arrays amd returns an altered version.
//
//
//****************************************************************************************

const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let firstThree = str.slice(0,3);
let newString = str.slice(3,-1) + firstThree;

console.log(`The altered string is: ${newString}`);

//Use a template literal to print the original and modified string in a descriptive phrase.

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numLetters = input.question("Please enter the number of letters to change: ");

if (numLetters > str.length)
{
    numLetters = 3;
    console.log(`Error: ${numLetters} is too big. Default to three characters.`);
}
else if (numLetters <= 0)
{
    numLetters = 3;
    console.log(`Error: ${numLetters} is too small. Default to three characters.`);
}

let firstPart = str.slice(0,numLetters);
let pString = str.slice(numLetters,-1) + firstPart;

console.log(`The altered string is: ${pString}`);


//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

//****************************************************************************************

/*
node string-modification.js
The altered string is: nchCodLau
Please enter the number of letters to change: 5
The altered string is: hCodLaunc

/js-projects-repo/javascript-projects/arrays/studio> node string-modification.js
The altered string is: nchCodLau
Please enter the number of letters to change: 20
Error: 3 is too big. Default to three characters.
The altered string is: nchCodLau

*/
