const input = require('readline-sync');
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuelLevel = 0;
let numAstronauts = 0;
let shuttleAltitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

while ( fuelLevel < 5000 || fuelLevel > 30000)
{
    fuelLevel = input.question('Please enter the starting fuel level: ');

    if (fuelLevel < 5000)
    {
        console.log("Fuel level is too low. Please enter a value greater than 5000.");
    }
    else if (fuelLevel > 30000)
    {
        console.log("Fuel level is too high. Please enter a value smaller than 30000.");
    }
}



//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  
while ( numAstronauts < 1 || numAstronauts > 7)
{
    fuelLevel = input.question('Please enter the number of astronauts: ');

    if (numAstronauts < 5000)
    {
        console.log("Number of astronauts is too low. Please enter a value greater than 0.");
    }
    else if (numAstronauts > 30000)
    {
        console.log("Number of astronauts is too high. Please enter a value smaller than 8.");
    }
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while ( fuelLevel-100*numAstronauts >= 0)
{
    fuelLevel -= 100*numAstronauts;
    shuttleAltitude += 50;
}



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

console.log(`The shuttle gained an altitude of ${shuttleAltitude} km.`);

if (shuttleAltitude >= 2000)
{
    console.log("Orbit achieved!");
}
else
{
    console.log("Failed to reach orbit.");
}
