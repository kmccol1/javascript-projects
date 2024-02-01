//****************************************************************************************
//
//    Filename:    decreasingSum.js
//    Date:        31 January 2024
//    Author:      Kyle McColgan
//    Description: This program displays the sum of all numbers below a given value.
//
//****************************************************************************************

function decreasingSum(integer)
{
    if (integer === 1)
    {
        return integer;
    }
    else
    {
        //call decreasingSum function again
        return integer + decreasingSum(integer-1);
    }
}

//****************************************************************************************

console.log("\nCalling decreasingSum(5)...");
console.log(decreasingSum(5));
console.log("\nGoodbye!");

//****************************************************************************************

/*
make-function-call-itself> node decreasingSum.js

Calling decreasingSum(5)...
15

Goodbye!

*/
