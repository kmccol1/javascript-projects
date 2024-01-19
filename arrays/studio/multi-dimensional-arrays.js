const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let cabinet1 = food.split(",").sort();
let cabinet2 = equipment.split(",").sort();
let cabinet3 = pets.split(",").sort();
let cabinet4 = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHoldArr = [];

cargoHoldArr.push(cabinet1, cabinet2, cabinet3, cabinet4);

console.log("Current cargo hold: ", cargoHoldArr);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let numCabinet = input.question("Please enter the cabinet number (0-3): ");

if (numCabinet > 4)
{
    console.log("Error: cabinet number is too high.");
}
else if (numCabinet <= 0)
{
    console.log("Error: cabinet number is too low.");

}

let item = input.question("Please enter the name of the desired item: ");

if (cargoHoldArr[numCabinet].includes(item) === true)
{
    console.log(`Cabinet ${numCabinet} DOES contain ${item}`);
}
else
{
    console.log(`Cabinet ${numCabinet} DOES NOT contain ${item}`);
}

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

console.log(`Selcted cabinet contents: ${cargoHoldArr[numCabinet]}`);

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
