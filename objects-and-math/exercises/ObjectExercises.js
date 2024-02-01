//****************************************************************************************
//
//    Filename:    ObjectExercises.js
//    Date:        31 January 2024
//    Author:      Kyle McColgan
//    Description: This program performs an animal race using Objects in JavaScript.
//
//****************************************************************************************

let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,

   move: function()
   {
      return Math.random()*10;
   }
};

//****************************************************************************************

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 2,

   move: function()
   {
      return Math.random()*10;
   }
};

//****************************************************************************************

let superBeagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 3,

   move: function()
   {
      return Math.random()*10;
   }
};

//****************************************************************************************

let superTardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 4,

   move: function()
   {
      return Math.random()*10;
   }
};

//****************************************************************************************

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 10,

   move: function()
   {
      return Math.random()*10;
   }
};

//****************************************************************************************

function crewReports(animal)
{
    return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and
            ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

//****************************************************************************************

function fitnessTest(arr)
{
    let numTurns = [];
    let numSteps = [];
/*
    let flag = false;

    while (flag !== true)
    {
        for ( let i = 0; i < arr.length; i ++ )
        {
            numSteps[i] += arr[i].move();

            if (numSteps[i] >= 20)
            {
                numTurns.push(`${arr[i].name} took ${i} turns to take 20 steps.`);
                i = arr.length - 1;
            }
        }
    }
*/
    let numberSteps;
    let numberTurns;


    for ( let i = 0; i < arr.length; i ++ )
    {
        numberSteps = 0;
        numberTurns = 0;


        while (numberSteps < 20)
        {
            //numSteps.push(arr[i].move());
            //numSteps[i] += arr[i].move();
            //numTurns[i] ++;
            numberTurns ++;
            numberSteps += arr[i].move();

        }

        numTurns.push(`${arr[i].name} took ${numberTurns} turns to take 20 steps.`);
    }


    return numTurns;
}

//****************************************************************************************

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!

let crew = [superChimpOne,superChimpTwo,superBeagle,superTardigrade,salamander];
console.log(fitnessTest(crew));

//****************************************************************************************

/*
exercises> node ObjectExercises.js
[
  'Chad took 7 turns to take 20 steps.',
  'Brad took 3 turns to take 20 steps.',
  'Leroy took 4 turns to take 20 steps.',
  'Almina took 6 turns to take 20 steps.',
  'Lacey took 4 turns to take 20 steps.'
]
*/
