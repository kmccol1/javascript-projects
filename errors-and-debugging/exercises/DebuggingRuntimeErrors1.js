//****************************************************************************************
//
//
//    Filename:    DebuggingRuntimeErrors1.js
//    Date:        10 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs some basic JavaScript operations using conditionals.
//
//
//****************************************************************************************

//Run this code first and examine the error message.
//Pay close attention to any line numbers mentioned in the message - these will help locate and repair the mistake in the code.

let launchReady = false;
let fuelLevel = 17000;

if (fuelLevel >= 20000) { //Error line. fuellevel variable needs to use camel case.
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

//****************************************************************************************

/*

node DebuggingRuntimeErrors1.js
/js-projects-repo/javascript-projects/errors-and-debugging/exercises/DebuggingRuntimeErrors1.js:18
if (fuellevel >= 20000) {
^

ReferenceError: fuellevel is not defined
    at Object.<anonymous> (/home/kyle/Desktop/js-projects-repo/javascript-projects/errors-and-debugging/exercises/DebuggingRuntimeErrors1.js:18:1)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

node DebuggingRuntimeErrors1.js
WARNING: Insufficient fuel!

*/
