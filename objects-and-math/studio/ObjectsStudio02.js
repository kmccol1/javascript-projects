//****************************************************************************************
//
//    Filename:    ObjectStudio02.js
//    Date:        1 February 2024
//    Author:      Kyle McColgan
//    Description: This program constructs an array of animal Objects.
//
//****************************************************************************************

// Code your orbitCircumference function here:

function orbitCircumference(radius = 2000)
{
    return Math.round(2 * Math.PI * radius);
}

//****************************************************************************************

// Code your missionDuration function here:

function missionDuration(numOrbits, radius = 2000, speed = 28000)
{
    let time;
    let distance = orbitCircumference(radius);

    time = distance / speed;

    time = Math.round(time * 100)/100;

    console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);

    return time;
}

//****************************************************************************************

// Copy/paste your selectRandomEntry function here:
// Code your selectRandomEntry function here:

function selectRandomEntry ()
{
    return Math.ceil(Math.random() * 5);
}

//****************************************************************************************

function selectAnimalWithMinO2 (crewArr)
{
    let animalMinO2 = crewArr[0];
    let oxygenUsed;

    for (let i = 0; i < crewArr.length; i ++ )
    {
        oxygenUsed = crewArr[i].o2Used()
    }

    return animalMinO2;
}

//****************************************************************************************

// Code your oxygenExpended function here:

function oxygenExpended (candidateObj, radius=2000, speed=28000)
{
    let totalOrbits = 3;

    let numHours = missionDuration(totalOrbits, radius, speed);

    let o2Consumption = Math.round(candidateObj.o2Used(numHours)*1000)/1000;

    let result = `${candidateObj.name} will perform the spacewalk, which will last ${numHours} hours and require ${o2Consumption} kg of oxygen.`;

    return result;
}

//****************************************************************************************

// Candidate data & crew array.
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

// Code your template literal and console.log statements:
//let spaceCrew; buildCrewArray(animals, selectedAnimalIDs);

console.log(oxygenExpended(crew[selectRandomEntry()]));

//****************************************************************************************

/*
studio> node ObjectsStudio02.js
The mission will travel 12566 km around the planet, and it will take 0.45 hours to complete.
Hugs will perform the spacewalk, which will last 0.45 hours and require 0.008 kg of oxygen.
*/
