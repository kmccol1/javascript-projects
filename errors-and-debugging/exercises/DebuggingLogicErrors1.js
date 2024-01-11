//****************************************************************************************
//
//
//    Filename:    DebuggingLogicErrors1.js
//    Date:        10 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs some basic JavaScript operations using conditionals.
//
//
//****************************************************************************************

// Run this sample code as-is and examine the output. 
// Should the shuttle have launched? 
// Did it?
// Do not worry about fixing the code yet, we will do that in the next series of exercises.

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

if (crewStatus && computerStatus === 'green' && launchReady === true){
   console.log('Crew & computer cleared.');
   //launchReady = true; //This line needs moved into the conditional check above
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}

//****************************************************************************************

/*

node DebuggingLogicErrors1.js
WARNING: Insufficient fuel!
Crew & computer cleared.
10, 9, 8, 7, 6, 5, 4, 3, 2, 1...
Liftoff!

node DebuggingLogicErrors1.js
WARNING: Insufficient fuel!
WARNING: Crew or computer not ready!
Launch scrubbed.

*/
