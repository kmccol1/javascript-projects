//****************************************************************************************
//
//    Filename:    divide.js
//    Date:        12 February 2024
//    Author:      Kyle McColgan
//    Description: This program provides a function to divide two numbers and throws
//                 an exception if dividing by zero.
//
//****************************************************************************************

// Write a function called 'divide' that takes two parameters: a numerator and a denominator.
function divide (num, denom)
{
    let result;

    if (denom == 0)
    {
        throw new Error("Error: You cannot divide by zero!");
    }
    else
    {
        result = num / denom;
    }

    return result;
}

//****************************************************************************************

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

//****************************************************************************************

console.log("6/7=",divide(6,7));
console.log("21/0=",divide(21,0));

//****************************************************************************************

/*
divide.js:18
        throw new Error("Error: You cannot divide by zero!");
        ^
*/
