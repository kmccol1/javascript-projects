//****************************************************************************************
//
//    Filename:    ObjectStudio01.js
//    Date:        1 February 2024
//    Author:      Kyle McColgan
//    Description: This program constructs an array of animal Objects.
//
//****************************************************************************************

// Code your selectRandomEntry function here:

function selectRandomEntry ()
{
    return Math.ceil(Math.random() * 5);
}

//****************************************************************************************

// Code your buildCrewArray function here:

function buildCrewArray(candidateArr, idArr)
{
    let crew = [];


    for (let i = 0; i < idArr.length; i ++)
    {
        for (let j = 0; j < candidateArr.length; j ++)
        {
            if (candidateArr[j].astronautID == idArr[i])
            {
                crew.push(candidateArr[i]);
            }
        }
    }

/*
    for (id in idArr)
    {
        for (animal in candidateArr)
        {
            if (animal.astronautID == id)
            {
                console.log("true");
                crew.push(animal);
            }
        }
    }
*/
    return crew;

}

//****************************************************************************************

//for loop, make the id array from the Objects.....--Phillip
let idNumbers = [291, 414, 503, 599, 796, 890];

//****************************************************************************************

// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

//****************************************************************************************

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your template literal and console.log statements:
//let spaceCrew; buildCrewArray(animals, selectedAnimalIDs);
let selectedAnimalIDs = [];
let randomVal;

for(let i = 0; i < 3; i ++ )
{
    randomVal = selectRandomEntry();
    selectedAnimalIDs.push(idNumbers[randomVal]);
}

let spaceCrew = buildCrewArray(animals, selectedAnimalIDs);

console.log(`${spaceCrew[0].name}, ${spaceCrew[1].name}, and ${spaceCrew[2].name} are going to space!`);

//****************************************************************************************

/*
studio> node ObjectsStudio01.js
Gordon Shumway, Lassie, and Jonsey are going to space!
*/
