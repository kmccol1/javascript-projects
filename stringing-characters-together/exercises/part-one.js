//****************************************************************************************
//
//
//    Filename:    part-one.js
//    Date:        11 January 2024
//    Author:      Kyle McColgan
//    Description: This program prints the length/number of digits of an integer.
//
//
//****************************************************************************************

let num = 1001;

//Returns 'undefined'.
console.log("Length of ", num, ": ", String(num).length);

//Use type conversion to print the length (number of digits) of an integer.

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

let num2 = 123.45;
console.log("Length of ", num2, ": ", String(num2).length - 1);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

num = 2024.01;
num2 = 300;

if (String(num).indexOf('.') != -1 )
{
    console.log("Length of ", num, ": ", String(num).length - 1);
}
else
{
    console.log("Length of ", num, ": ", String(num).length);
}

if (String(num2).indexOf('.') != -1 )
{
    console.log("Length of ", num2, ": ", String(num2).length - 1);
}
else
{
    console.log("Length of ", num2, ": ", String(num2).length);
}

//****************************************************************************************

/*

node part-one.js
Length of  1001 :  4
Length of  123.45 :  5
Length of  2024.01 :  6
Length of  300 :  3

*/
