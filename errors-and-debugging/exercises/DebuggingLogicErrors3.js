//****************************************************************************************
//
//
//    Filename:    DebuggingLogicErrors3.js
//    Date:        10 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs some basic JavaScript operations using conditionals.
//
//
//****************************************************************************************

// Let’s break the code down into smaller chunks.
// Now consider the second if/else block. 
// Add another console.log(launchReady) after this block and run the program.

// Given the values for crewStatus and computerStatus, should launchReady be true or false after the check?  
// Is the program behaving as expected?

let launchReady = false;
// let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

// if (fuelLevel >= 20000) {
//    console.log('Fuel level cleared.');
//    launchReady = true;
// } else {
//    console.log('WARNING: Insufficient fuel!');
//    launchReady = false;
// }

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log(launchReady); //Given the values for crewStatus and computerStatus, launchReady should be true. The program is behaving as expected. It is setting launchReady to true even if the above fuel check failed. There needs to be some check of the fuel in the second block as well.

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }

//****************************************************************************************

/*

Crew & computer cleared.
true

 */
