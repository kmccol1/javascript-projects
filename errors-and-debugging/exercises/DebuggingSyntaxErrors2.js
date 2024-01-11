//****************************************************************************************
//
//
//    Filename:    DebuggingSyntaxErrors2.js
//    Date:        10 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs some basic JavaScript operations using conditionals.
//
//
//****************************************************************************************

//This block of code hides two syntax errors.

// Run the code and find the mistakes. 
// Only ONE error will be flagged at a time. 
// Fix that ONE problem, and then re-run the code to check yer work. Avoid trying to fix multiple issues at once.

let launchReady = false;
let crewStatus = true;
let computerStatus = 'green';

if (crewStatus && computerStatus === 'green'){ //First error is incorrect use of logical AND operator on this line. It uses three and symbols and only two are needed.
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log(("10, 9, 8, 7, 6, 5, 4, 3, 2, 1..."));//Second error this line is missing a closing parenthesis.
   console.log("Fed parrot...");
   console.log("Ignition...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}

//****************************************************************************************

/*

node DebuggingSyntaxErrors2.js
/js-projects-repo/javascript-projects/errors-and-debugging/exercises/DebuggingSyntaxErrors2.js:22
if (crewStatus &&& computerStatus === 'green'){
                 ^

SyntaxError: Unexpected token '&'
    at internalCompileFunction (node:internal/vm:77:18)
    at wrapSafe (node:internal/modules/cjs/loader:1288:20)
    at Module._compile (node:internal/modules/cjs/loader:1340:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

Node.js v21.4.0

node DebuggingSyntaxErrors2.js
/js-projects-repo/javascript-projects/errors-and-debugging/exercises/DebuggingSyntaxErrors2.js:31
   console.log(("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
                                                  ^

SyntaxError: missing ) after argument list
    at internalCompileFunction (node:internal/vm:77:18)
    at wrapSafe (node:internal/modules/cjs/loader:1288:20)
    at Module._compile (node:internal/modules/cjs/loader:1340:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1435:10)
    at Module.load (node:internal/modules/cjs/loader:1207:32)
    at Module._load (node:internal/modules/cjs/loader:1023:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
    at node:internal/main/run_main_module:28:49

Node.js v21.4.0

node DebuggingSyntaxErrors2.js
Crew & computer cleared.
10, 9, 8, 7, 6, 5, 4, 3, 2, 1...
Fed parrot...
Ignition...
Liftoff!

*/
