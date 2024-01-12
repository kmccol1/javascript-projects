//****************************************************************************************
//
//
//    Filename:    data-variables-conditionals.js
//    Date:        11 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs a test launch using conditionals.
//
//
//****************************************************************************************

// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:35 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg  = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maxiumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount > 7)
{
    preparedForLiftOff = false;
}

// add logic below to verify all astronauts are ready

if ( astronautStatus != 'ready')
{
    preparedForLiftOff = false;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if ( totalMassKg > 850000)
{
    preparedForLiftOff = false;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius > -150 || fuelTempCelsius < -300 )
{
    preparedForLiftOff = false;
}
// add logic below to verify the fuel level is at 100%

if (fuelLevel < 100 )
{
    preparedForLiftOff = false;
}
// add logic below to verify the weather status is clear
if ( weatherStatus != 'clear')
{
    preparedForLiftOff = false;
}
// Verify shuttle launch can proceed based on above conditions

if (preparedForLiftOff == true)
{
    console.log("All systems are a go! Initialting space shuttle launch sequence.");
    console.log("----------------------------------------------------------------")
    console.log("Date: ", date);
    console.log("Time: ", time);
    console.log("Astronaut Count: ", astronautCount);
    console.log("Crew Mass: ", crewMassKg, " kg");
    console.log("Fuel Mass: ", fuelMassKg, " kg");
    console.log("Shuttle Mass: ", shuttleMassKg, " kg");
    console.log("Total Mass: ", totalMassKg, " kg");
    console.log("Fuel Temperature: ", fuelTempCelsius, "C");
    console.log("Weather Status: ", weatherStatus);
    console.log("----------------------------------------------------------------")
    console.log("Have a safe trip astronauts!");
}

//****************************************************************************************

/*

All systems are a go! Initialting space shuttle launch sequence.
----------------------------------------------------------------
Date:  Monday 2019-03-18
Time:  10:05:35 AM
Astronaut Count:  7
Crew Mass:  564.9  kg
Fuel Mass:  760000  kg
Shuttle Mass:  74842.31  kg
Total Mass:  835407.21  kg
Fuel Temperature:  -225 C
Weather Status:  clear
----------------------------------------------------------------
Have a safe trip astronauts!

*/
