//****************************************************************************************
//
//
//    Filename:    part-1.js
//    Date:        8 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs some basic JavaScript operations using conditionals.
//
//
//****************************************************************************************

// Declare and initialize the variables for exercise 1 here:

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// BEFORE running the code, predict what will be printed to the console by the following statements:

//engines are off, the first two conditional checks fail because engineIndicatorLight is assigned red blinking, not green.

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
//****************************************************************************************
//engines are off

console.log(4=="4");
