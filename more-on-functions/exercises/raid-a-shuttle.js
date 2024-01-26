//****************************************************************************************
//
//
//    Filename:    raid-a-shuttle.js
//    Date:        24 January 2024
//    Author:      Kyle McColgan
//    Description: This program implements some custom functions for practice purposes.
//
//
//****************************************************************************************

function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));

//****************************************************************************************

let tempVar = function (fuelLevel)
{
    let result = 0;
    //let flag = true;
    //let status;

    status = checkFuel(fuelLevel);

    if ( status === "green")
    {
        while(checkFuel(fuelLevel-1) != "yellow")
        {
            fuelLevel -= 1;
            result += 1;
        }
    }
    else if ( status === "yellow")
    {
        while(checkFuel(fuelLevel-1) != "red")
        {
            fuelLevel -= 1;
            result += 1;
        }
    }
    else
    {
        while(checkFuel(fuelLevel-1) != 0)
        {
            fuelLevel -= 1;
            result += 1;
        }
    }

    return result;
}

//****************************************************************************************

let launchCode = function(arr)
{
    let stash = [];

    stash.push(arr.splice(1, 1, "empty water bottle"));

    stash.push(arr.splice(4, 1, "empty candy wrapper"));

    return stash;
}

//****************************************************************************************

let irs = function (fuelLevel, cargoHold)
{
    let fuelStolen;
    let cargoStolen;

    fuelStolen = tempVar(fuelLevel);
    cargoStolen = launchCode(cargoHold);

    return `Raided ${fuelStolen} kg of fuel from the tanks, and stole ${cargoStolen[0]} and ${cargoStolen[1]} from the cargo hold.`;
}
//****************************************************************************************

//console.log(tempVar(fuelLevel));
//launchCode(cargoHold);
console.log(irs(fuelLevel, cargoHold));

//****************************************************************************************

/*
/* Steal some fuel from the shuttle:
 * /
 
//a). Define an anonymous function and set it equal to a variable with a normal, non-suspicious name. The function takes one parameter. This will be the fuel level on the shuttle.

//b). You must siphon off fuel without alerting the TAs. Inside your function, you want to reduce the fuel level as much as possible WITHOUT changing the color returned by the checkFuel function.

//c). Once you figure out how much fuel to pump out, return that value.

//d). Decide where to best place your function call to gather our new fuel.

/* Next, liberate some of that glorious cargo.
 * /

//a). Define another anonymous function with an array as a parameter, and set it equal to another innocent variable.

//b). You need to swipe two items from the cargo hold. Choose well. Stealing water ain’t gonna get us rich. Put the swag into a new array and return it from the function.

//c). The cargo hold has better security than the fuel tanks. It counts how many things are in storage. You need to replace what you steal with something worthless. The count MUST stay the same, or you’ll get caught and thrown into the LaunchCode brig.

//d). Don’t get hasty, matey! Remember to test your function.

/* Finally, you need to print a receipt for the accountant. Don’t laugh! That genius knows MATH and saves us more gold than you can imagine.
 * /
 
//a). Define a function called irs that can take fuelLevel and cargoHold as arguments.
	
//b). Call your anonymous fuel and cargo functions from within irs.

//c). Use a template literal to return, "Raided _____ kg of fuel from the tanks, and stole ____ and ____ from the cargo hold."
*/

//****************************************************************************************

/*
Fuel level: green
Hold status: Full
Raided 99999 kg of fuel from the tanks, and stole space suits and gold from the cargo hold.
*/
