//****************************************************************************************
//
//    Filename:    ObjectStudio03.js
//    Date:        1 February 2024
//    Author:      Kyle McColgan
//    Description: This program constructs an array of animal Objects.
//
//****************************************************************************************

// Code your crewMass function here:

function calculateCrewMass(crewArr)
{
    let resultMass = 0;

    for (let i = 0; i < crewArr; i ++ )
    {
        resultMass += crewArr[i].mass;
    }

    return Math.round(resultMass*10)/10;
}

//****************************************************************************************

// Code your fuelRequired function here:

function fuelRequired(crewArr)
{
    let fuelAmt = 0;
    let rocketMass = 75000;
    let totalMass = 0;
    let crewMass = calculateCrewMass(crewArr);


    for (let i = 0; i < crewArr.length; i ++ )
    {
        if ( crewArr[i].species === "dog" || crewArr[i].species === "cat" )
        {
            crewMass += 200;
        }
        else
        {
            crewMass += 100;
        }
    }

    totalMass = crewMass + rocketMass;

    fuelAmt = Math.ceil(totalMass * 9.5);

    console.log(`The mission has a launch mass of ${totalMass} kg and requires ${fuelAmt} kg of fuel.`);

    return fuelAmt;
}

//****************************************************************************************

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };

//****************************************************************************************

let candidateB = {
    'name':'Lassie',
    'species':'dog',
    'mass':19.1,
    'o2Used':function(hrs){return 0.030*hrs},
    'astronautID':503
};

//****************************************************************************************

let candidateC = {
    'name':'Jonsey',
    'species':'cat',
    'mass':3.6,
    'o2Used':function(hrs){return 0.022*hrs},
    'astronautID':796
};

//****************************************************************************************

let candidateD = {
    'name':'Paddington',
    'species':'bear',
    'mass':31.8,
    'o2Used':function(hrs){return 0.047*hrs},
    'astronautID':291
};

//****************************************************************************************

let candidateE = {
    'name':'Pete',
    'species':'tortoise',
    'mass':417,
    'o2Used':function(hrs){return 0.010*hrs},
    'astronautID':599
};

//****************************************************************************************

let candidateF = {
    'name':'Hugs',
    'species':'ball python',
    'mass':2.3,
    'o2Used':function(hrs){return 0.018*hrs},
    'astronautID':890
};

//****************************************************************************************

let crew = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
console.log("Printing the launch mass and fuel mass required for the mission...")
let amountOfFuel = fuelRequired(crew);
console.log(`The mission requires ${amountOfFuel} kg of fuel for success.`);
//****************************************************************************************

/*
studio> node ObjectsStudio03.js
Printing the launch mass and fuel mass required for the mission...
The mission has a launch mass of 75800 kg and requires 720100 kg of fuel.
The mission requires 720100 kg of fuel for success.
*/
 
