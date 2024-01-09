//****************************************************************************************
//
//
//    Filename:    part-3.js
//    Date:        8 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs some basic JavaScript operations using conditionals.
//
//
//****************************************************************************************

let engineIndicatorLight = 'NOT red blinking';
let fuelLevel = 18000;
let engineTemperature = 2500;

// 5) Implement the following checks using if/else if/else statements:

const lowFuelLevel = 1000;
const mediumFuelLevel = 5000;
const highFuelLevel = 10000;
const fullFuelLevel = 20000;

const highEngineTemp = 3500;
const avgEngineTemp = 2500;

const errString = "red blinking";

//a) If fuelLevel is above 20000 AND engineTemperature is at or below 2500, print "Full tank. Engines good."
if ( (fuelLevel <= lowFuelLevel) || (engineTemperature > highEngineTemp) || (engineIndicatorLight === errString))
{
    console.log("ENGINE FAILURE IMMINENT!");
}
else if ( (fuelLevel <= mediumFuelLevel) || (engineTemperature > avgEngineTemp))
{
    console.log("Check fuel level. Engines running hot.");
}
else if ( (fuelLevel > fullFuelLevel) && (engineTemperature <= avgEngineTemp))
{
    console.log("Full tank. Engines good.");
}
else if ( (fuelLevel > highFuelLevel) && (engineTemperature <= avgEngineTemp))
{
    console.log("Fuel level above 50%. Engines good.");
}
else if ( (fuelLevel > mediumFuelLevel) && (engineTemperature <= avgEngineTemp))
{
    console.log("Fuel level above 25%. Engines good.");
}
else
{
    console.log("Fuel and engine status pending...");
}

// Code 5a - 5f here:

// 6) a) Create the variable commandOverride, and set it to be true or false. If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK. If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.
let commandOverride = true;


/* 6) b) Code the following if/else check:
If fuelLevel is above 20000 AND engineIndicatorLight is NOT red blinking OR commandOverride is true print "Cleared to launch!" Else print "Launch scrubbed!" */

if ( ((fuelLevel > fullFuelLevel) && (engineIndicatorLight !== 'NOT red blinking')) || (commandOverride === true))
{
    console.log("Cleared to launch!");
}
else
{
    console.log("Launch scrubbed!");
}

//****************************************************************************************
//node part-3.js
//Full level above 50%. Engines good.
//Cleared to launch!

