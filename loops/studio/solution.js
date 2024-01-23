//****************************************************************************************
//
//
//    Filename:    solution.js
//    Date:        22 January 2024
//    Author:      Kyle McColgan
//    Description: This program assembles a number of meals and generates password.
//
//
//****************************************************************************************

const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];

//****************************************************************************************

function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals)
{
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  
  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment (and above the return statement) ... ///

  for (let i = 0; i < numMeals; i ++ )
  {
      meals[i] = [];

      for ( let j = 0; j < pantry.length; j ++)
      {
          meals[i].push(pantry[j][i]);
      }
  }

  return meals;
}

//****************************************************************************************

function askForNumber()
{
    numMeals = input.question("How many meals would you like to make?");

    /// CODE YOUR SOLUTION TO PART B here ///

    const MIN_MEALS = 1;
    const MAX_MEALS = 6;

    while ((numMeals < MIN_MEALS) || (numMeals > MAX_MEALS) || isNaN(numMeals))
    {
        if (numMeals < MIN_MEALS)
        {
            console.log(`Error: ${numMeals} is too low. Please enter a whole value greater than 1.`);
        }
        else if (numMeals > MAX_MEALS)
        {
        console.log(`Error: ${numMeals} is too high. Please enter a whole value less than 7.`);
        }
        else
        {
            console.log("Error: please enter a valid whole value integer in the range (1-6).")
        }

        numMeals = input.question("How many meals would you like to make?: ");
    }

    return numMeals;
}

//****************************************************************************************

function generatePassword(string1, string2) {
  let code = '';

  /// Code your Bonus Mission Solution here ///

  for ( let i = 0; i < string1.length; i ++ )
  {
      code += string1[i];
      code += string2[i];
  }

  return code;
}

//****************************************************************************************

function runProgram() {
  
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///
  
   let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 2);
   console.log(meals);
  

  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  
   let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
   console.log(mealsForX);

    /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

   let password1 = 'abc';
   let password2 = '123';
   console.log("Time to run the password generator so we can update the menu tomorrow.")
   console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

//****************************************************************************************

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};

//****************************************************************************************

/*
node index.js
[
  [ 'chicken', 'rice', 'peas', 'juice', 'apple' ],
  [ 'pork', 'pasta', 'green beans', 'milk', 'banana' ]
]
How many meals would you like to make?6
[
  [ 'chicken', 'rice', 'peas', 'juice', 'apple' ],
  [ 'pork', 'pasta', 'green beans', 'milk', 'banana' ],
  [ 'tofu', 'corn', 'kale', 'water', 'more kale' ],
  [ 'beef', 'potato', 'edamame', 'soy milk', 'ice cream' ],
  [ 'fish', 'quinoa', 'broccoli', 'soda', 'chocolate' ],
  [ 'beans', 'crackers', 'asparagus', 'tea', 'kiwi' ]
]
Time to run the password generator so we can update the menu tomorrow.
The new password is: a1b2c3
*/
