//****************************************************************************************
//
//    Filename:    RPS.test.js
//    Date:        4 February 2024
//    Author:      Kyle McColgan
//    Description: This program tests the Rock, Paper, and Scissors game.
//
//****************************************************************************************

const testRPS = require('../RPS.js');

//****************************************************************************************

describe("RPS test suite", function(){

test("returns a message that the players have tied...", function() {
let result = testRPS.whoWon("rock", "rock");
expect(result).toBe("TIE!");
});

test("returns a message that player1 won...", function() {
let result = testRPS.whoWon("rock", "scissors");
expect(result).toBe("Player 1 wins!");
});

test("returns a message that player2 won...", function() {
let result = testRPS.whoWon("rock", "paper");
expect(result).toBe("Player 2 wins!");
});

test("returns a message that the player2 won...", function() {
let result = testRPS.whoWon("scissors", "rock");
expect(result).toBe("Player 2 wins!");
});

test("returns an error message that the player1 input is invalid...", function() {
let result = testRPS.whoWon("scisors", "rock");
expect(result).toBe("Error: invalid input for player 1...");
});

test("returns an error message that the player2 input is invalid...", function() {
let result = testRPS.whoWon("scissors", "rocky");
expect(result).toBe("Error: invalid input for player 2...");
});


});
