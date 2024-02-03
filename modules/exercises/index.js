//****************************************************************************************
//
//    Filename:    index.js
//    Date:        2 February 2024
//    Author:      Kyle McColgan
//    Description: This program is the driver program for the chapter thirteen exercise.
//
//****************************************************************************************

//Import modules:
const input = require('readline-sync');         //Import readline-sync.
const averages = require('./ScoreCalcs/averages.js');     //Import functions from averages.js.
const printAll = require('./display.js');       //Import function from display.js.
const randomSelect = require('./randomSelect'); //Import function from randomSelect.js.

//****************************************************************************************

//Candidate data:
let astronauts = ['Fox','Turtle','Cat','Hippo','Dog'];

const testTitles = ['Math','Fitness','Coding','Nav','Communication'];

let scores = [[95, 86, 83, 81, 76],[79, 71, 79, 87, 72],[94, 87, 87, 83, 82],[99, 77, 91, 79, 80],[96, 95, 99, 82, 70]];

//User interface:
let prompts = ['display all scores', 'average the scores for each test', 'average the scores for each astronaut','select the next spacewalker'];

for (let i = 0; i<prompts.length; i++)
{
  let response = input.question(`Would you like to ${prompts[i]}? Y/N: `);
  if (response.toLowerCase()==='y')
  {
    if (i===0)
    {
        //Call 'printAll' here and pass in all necessary arguments.
        printAll.printAll(astronauts, testTitles, scores);
    }
    else if (i===1)
    {
      for (let j = 0; j<testTitles.length; j++)
      {
          let avg = averages.averageForTest(j, scores);//Call 'averageForTest' here. Pass in j and scores as arguments.
          console.log(`${testTitles[j]} test average = ${avg}%.`);
      }
    }
    else if (i===2)
    {
      for (let j = 0; j<astronauts.length; j++)
      {
          let avg = averages.averageForStudent(j, scores);//Call 'averageForStudent' here. Pass in j and scores as arguments.
          console.log(`${astronauts[j]}'s test average = ${avg}%.`);
      }
    }
    else
    {
        let walker = randomSelect.randomFromArray(astronauts);
        //Call 'randomSelect' to pick a spacewalker from the astronauts array.
        console.log(`${walker} is the next spacewalker.`);
    }
  }
  else
  {
      console.log("Option skipped.");
  }
}

//****************************************************************************************

/*
/exercises> node index.js
Would you like to display all scores? Y/N: y
Name    Math    Fitness Coding  Nav     Communication
Fox     95      86      83      81      76
Turtle  79      71      79      87      72
Cat     94      87      87      83      82
Hippo   99      77      91      79      80
Dog     96      95      99      82      70
Would you like to average the scores for each test? Y/N: y
Math test average = 92.6%.
Fitness test average = 83.2%.
Coding test average = 87.8%.
Nav test average = 82.4%.
Communication test average = 76%.
Would you like to average the scores for each astronaut? Y/N: y
Fox's test average = 84.2%.
Turtle's test average = 77.6%.
Cat's test average = 86.6%.
Hippo's test average = 85.2%.
Dog's test average = 88.4%.
Would you like to select the next spacewalker? Y/N: y
Cat is the next spacewalker.
*/

