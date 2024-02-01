//****************************************************************************************
//
//    Filename:    userInput-is-negative.js
//    Date:        31 January 2024
//    Author:      Kyle McColgan
//    Description: This program displays an error message if a given condition is not met.
//
//****************************************************************************************

const input = require('readline-sync');
let userInput = input.question("Please enter a number:");
let logger = function(errorMsg)
{
  console.log("ERROR: " + errorMsg);
};
if (userInput < 0)
{
  logger("Invalid input");
}

// Fill in the blank in line 7 (then uncomment it) so that it logs an error message if userInput is negative.

//****************************************************************************************

/*

*/
