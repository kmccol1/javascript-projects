//****************************************************************************************
//
//
//    Filename:    DebuggingLogicErrors5.js
//    Date:        10 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs some basic JavaScript operations using conditionals.
//
//
//****************************************************************************************

// The value of launchReady assigned in the first if/else block gets changed in the second if/else block. Dangerous waters...
// Since the issue is with launchReady, ONE way to fix the logic error is to use a different variable to store the fuel check result. 
// Refactor the code to do this. Verify that your change works by updating the console.log statements.

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

let fuelCheckResult = false;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   fuelCheckResult = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

console.log("launchReady = ", launchReady, "fuelCheckResult = ", fuelCheckResult);

if ((crewStatus && (computerStatus === 'green')) && (fuelCheckResult == true)){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady, "fuelCheckResult = ", fuelCheckResult);

//****************************************************************************************

/*

node DebuggingLogicErrors5.js
WARNING: Insufficient fuel!
launchReady =  false
Crew & computer cleared.
launchReady =  true

node DebuggingLogicErrors5.js
WARNING: Insufficient fuel!
launchReady =  false fuelCheckResult =  false
WARNING: Crew or computer not ready!
launchReady =  false fuelCheckResult =  false

*/
