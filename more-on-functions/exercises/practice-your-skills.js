//****************************************************************************************
//
//
//    Filename:    practice-your-skills.js
//    Date:        24 January 2024
//    Author:      Kyle McColgan
//    Description: This program implements an anonymous function for practice purposes.
//
//
//****************************************************************************************

//Create an anonymous function and set it equal to a variable.

let anonFunc = function(num)
{
    let result;

    //if (typeof Number(num) != "number")
    //if ( typeof Number(num) * 3 == "NaN")

    //How to test for a String that could be converted to a valid number and multiply w/o NaN????
    if (typeof num == "string")
    {
        result = "ARRR!";
    }
    else if (typeof num == "number")
    {
        result = Number(num) * 3;
    }
    else
    {
        result = num;
    }

    return result;
}

//****************************************************************************************


/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

/*
console.log(anonFunc(100));
console.log(anonFunc("100"));
console.log(anonFunc(200));
console.log(anonFunc("-1"));
console.log(anonFunc("-i"));
console.log(anonFunc(100));
console.log(anonFunc("100"));
console.log(anonFunc("one"));
console.log(anonFunc("-1"));
console.log(anonFunc("-i"));
*/
console.log(anonFunc("hello world!"));
console.log(anonFunc("2"));
console.log(anonFunc(1.25));
console.log(anonFunc(true));
console.log(arr.map(anonFunc))

//****************************************************************************************

/*
node practice-your-skills.js
ARRR!
ARRR!
3.75
true
[ 'ARRR!', 63, 'ARRR!', 300 ]
*/

