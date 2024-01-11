//****************************************************************************************
//
//
//    Filename:    DebuggingLogicErrors4.js
//    Date:        10 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs some basic JavaScript operations using conditionals.
//
//
//****************************************************************************************

// Now consider both if/else blocks together (keeping the added console.log lines). 
// Run the code and examine the output. 

// Given the values for fuelLevel, crewStatus and computerStatus, should launchReady be true or false?
// Is the program behaving as expected?

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }

//****************************************************************************************
//The program is not behaving as expected. Given the values for fuelLevel, crewStatus and computerStatus, launchReady should be false due to the fuel level of 17000 failing the first conditional check of fuelLevel >= 20000.
/*

node DebuggingLogicErrors4.js
WARNING: Insufficient fuel!
launchReady =  false
Crew & computer cleared.
launchReady =  true

*/
