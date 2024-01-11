//****************************************************************************************
//
//
//    Filename:    Debugging1stSyntaxError.js
//    Date:        10 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs some basic JavaScript operations using conditionals.
//
//
//****************************************************************************************

//Run this code first and examine the error message.
//Fix the syntax error then run the code again to check your work.

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) { //This line was missing a close parenthesis character causing the syntax error.
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

//****************************************************************************************

/*
node Debugging1stSyntaxError.js
/js-projects-repo/javascript-projects/errors-and-debugging/exercises/Debugging1stSyntaxError.js:18
if (fuelLevel >= 20000 {
                       ^

SyntaxError: Unexpected token '{'
    at internalCompileFunction (node:internal/vm:77:18)
    at wrapSafe (node:internal/modules/cjs/loader:1288:20)
    at Module._compile (node:internal/modules/cjs/loader:1340:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

node Debugging1stSyntaxError.js
WARNING: Insufficient fuel!

*/
