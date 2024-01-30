//****************************************************************************************
//
//    Filename:    getValidInput.js
//    Date:        29 January 2024
//    Author:      Kyle McColgan
//    Description: This program implements user input validation functions from scratch.
//
//****************************************************************************************

const input = require('readline-sync');

//****************************************************************************************

function isValid(input)
{
    let result = false;

    if ( input[0] !== 'a')
    {
        result = false;
    }
    else
    {
        result = true;
    }

    return result;
}

//****************************************************************************************

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

//****************************************************************************************

function getValidInputVowel(prompt, isValid) {

    let userInput = input.question(prompt);

    while (!isValidVowel(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

//****************************************************************************************

function isValidVowel(input)
{
    let result = false;

    if ( input[0] !== 'a' && input[0] !== 'e' && input[0] !== 'i' && input[0] !== 'o' && input[0] !== 'u' && input[0] !== 'y')
    {
        result = false;
    }
    else
    {
        result = true;
    }

    return result;
}

//****************************************************************************************

// TODO 1: write a validator 
// that ensures input starts with "a"



// TODO 2: write a validator 
// that ensures input is a vowel

// Be sure to test your code!

let src = "";
src = getValidInput('What is the very first letter of the English alphabet? ', isValid);
console.log(`${src}`);

src = "";
src = getValidInputVowel('Please enter a valid vowel: ', isValid);
console.log(`${src}`);

//****************************************************************************************

/*
receieve-function-arguments> node getValidInput.js
What is the very first letter of the English alphabet? a
a
Please enter a valid vowel: r
Invalid input. Try again.
Please enter a valid vowel: e
e
*/
