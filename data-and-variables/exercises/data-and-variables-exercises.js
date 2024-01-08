//****************************************************************************************
//
//
//    Filename:    data-and-variables-exercises.js
//    Date:        7 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs some basic JavaScript operations.
//
//
//****************************************************************************************

// Declare and assign the variables below

let shuttleName = 'Determination';
let shuttleSpeedInMilesPerHr = 17500;
const distToMarsInKM = 225000000;
const distToMoonInKM = 384400;
const milesPerKM = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log("Typeof result of shuttleName:              ", typeof shuttleName);
console.log("Typeof result of shuttleSpeedInMilesPerHr: ", typeof shuttleSpeedInMilesPerHr);
console.log("Typeof result of distToMarsInKM:           ", typeof distToMarsInKM);
console.log("Typeof result of distToMoonInKM:           ", typeof distToMoonInKM);
console.log("Typeof result of milesPerKM:               ", typeof milesPerKM);

// Calculate a space mission below

const milesToMars = distToMarsInKM * milesPerKM;
const numHoursToMars = milesToMars / shuttleSpeedInMilesPerHr;
const numHoursPerDayOnEarth = 24;
const numDaysToMars = numHoursToMars / numHoursPerDayOnEarth;

// Print the results of the space mission calculations below

const resultSentenceMars = shuttleName + " will take " + numDaysToMars + " days to reach Mars.";
console.log(resultSentenceMars);

// Calculate a trip to the moon below

const milesToMoon = distToMoonInKM * milesPerKM;
const numHoursToMoon = milesToMoon / shuttleSpeedInMilesPerHr;
const numDaysToMoon = numHoursToMoon / numHoursPerDayOnEarth;

// Print the results of the trip to the moon below

const resultSentenceMoon = shuttleName + " will take " + numDaysToMoon + " days to reach Earth's Moon.";
console.log(resultSentenceMoon);

//****************************************************************************************
//
//node ./data-and-variables-exercises.js
//Typeof result of shuttleName:               string
//Typeof result of shuttleSpeedInMilesPerHr:  number
//Typeof result of distToMarsInKM:            number
//Typeof result of distToMoonInKM:            number
//Typeof result of milesPerKM:                number
//Determination will take 332.67857142857144 days to reach Mars.
