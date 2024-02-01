//****************************************************************************************
//
//    Filename:    refactor-to-anonymous.js
//    Date:        31 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs a string reversal using an anonymous function.
//
//****************************************************************************************

function reverse(str)
{
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
}

//****************************************************************************************

let reversal = function(str)
{
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');

}
//****************************************************************************************

console.log("\nCalling anonymous string reversal function...")
console.log("Anonymous function: ", reversal("edoChcnuaL"));
console.log("Named function reverse() call output: ", reverse("LaunchCode"));

//****************************************************************************************

/*
anonymous-functions> node refactor-to-anonymous.js

Calling anonymous string reversal function...
Anonymous function:  LaunchCode
Named function reverse() call output:  edoChcnuaL

*/
