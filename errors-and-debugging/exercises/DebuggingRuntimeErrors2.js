//****************************************************************************************
//
//
//    Filename:    DebuggingRuntimeErrors2.js
//    Date:        10 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs some basic JavaScript operations using conditionals.
//
//
//****************************************************************************************

let launchReady = false;
let fuelLevel = 27000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (launchReady) {
   console.log("10, 9, 8...");
   console.log("Fed parrot...");
   console.log("6, 5, 4...");
   console.log("Ignition...");
   console.log("3, 2, 1..."); //Error on this line due to incorrect spelling of console.
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}

//****************************************************************************************

/*
node DebuggingRuntimeErrors2.js
Fuel level cleared.
10, 9, 8...
Fed parrot...
6, 5, 4...
Ignition...
/js-projects-repo/javascript-projects/errors-and-debugging/exercises/DebuggingRuntimeErrors2.js:28
   consoul.log("3, 2, 1...");
   ^

ReferenceError: consoul is not defined
    at Object.<anonymous> (/js-projects-repo/javascript-projects/errors-and-debugging/exercises/DebuggingRuntimeErrors2.js:28:4)
    at Module._compile (node:internal/modules/cjs/loader:1376:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49


node DebuggingRuntimeErrors2.js
Fuel level cleared.
10, 9, 8...
Fed parrot...
6, 5, 4...
Ignition...
3, 2, 1...
Liftoff!

*/
