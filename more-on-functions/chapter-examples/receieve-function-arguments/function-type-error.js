//****************************************************************************************
//
//    Filename:    function-type-error.js
//    Date:        29 January 2024
//    Author:      Kyle McColgan
//    Description: This program implements user input validation functions from scratch.
//
//****************************************************************************************

function callMe(func) {
    func();
}

function func()
{
    console.log("Hello, World!");
}

//****************************************************************************************

callMe(func);

//****************************************************************************************

/*
receieve-function-arguments> node function-type-error.js

/receieve-function-arguments/function-type-error.js:11
    func();
    ^

TypeError: func is not a function

receieve-function-arguments> node function-type-error.js
Hello, World!

*/
