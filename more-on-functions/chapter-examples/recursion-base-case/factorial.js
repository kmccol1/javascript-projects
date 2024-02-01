//****************************************************************************************
//
//    Filename:    factorial.js
//    Date:        29 January 2024
//    Author:      Kyle McColgan
//    Description: This program computes the factorial of an whole positive integer
//                 value using recursion.
//
//****************************************************************************************

//The following concept check assumes that only positive integers are passed to the function.

//****************************************************************************************

function factorial(integer)
{
    let result = integer;

    if ( typeof integer == "string")
    {
        result = "Error: input cannot be a string value...";
    }
    else if (integer %2 !== 0 && integer %2 !== 1)
    {
        result = "Error: input cannot be a floating point value...";
    }
    else if (integer < 0)
    {
        result = "Error: input must be a positive integer value...";
    }
    else
    {
        if (integer === 1)
        {
            result = integer;
        }
        else
        {
            result = integer*(factorial(integer-1));
        }
    }

    return result;
}

//****************************************************************************************

console.log(factorial(4));
console.log(factorial("4"));
console.log(factorial(-4));
console.log(factorial(3.01));

//****************************************************************************************

//Skill boost! Add validation to return an error message if the function is passed a string, negative number or a decimal value.

//****************************************************************************************

/*
recursion-base-case> node factorial.js
24
Error: input cannot be a string value...
Error: input must be a positive integer value...
Error: input cannot be a floating point value...
*/
