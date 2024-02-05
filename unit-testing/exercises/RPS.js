//****************************************************************************************
//
//    Filename:    RPS.js
//    Date:        4 February 2024
//    Author:      Kyle McColgan
//    Description: This program uses a whoWon() function to play
//                 the Rock, Paper, and Scissors game.
//
//****************************************************************************************

function whoWon(player1,player2){

  if (player1 !== 'rock' && player1 !== 'paper' && player1 !== 'scissors')
  {
    return 'Error: invalid input for player 1...';
  }
  else if (player2 !== 'rock' && player2 !== 'paper' && player2 !== 'scissors')
  {
    return 'Error: invalid input for player 2...';
  }
  else
  {
    if (player1 === player2){
     return 'TIE!';
   }

   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }

   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }

   if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
   }

   return 'Player 1 wins!';
  }


 }

//****************************************************************************************

module.exports = {whoWon:whoWon};

//****************************************************************************************

/*
/exercises> npm test

> unit-testing@1.0.0 test
> jest

 PASS  tests/RPS.test.js
 PASS  tests/checkFive.test.js

Test Suites: 2 passed, 2 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.368 s, estimated 1 s
Ran all test suites.
*/
