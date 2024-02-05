//****************************************************************************************
//
//    Filename:    checkFive.test.js
//    Date:        4 February 2024
//    Author:      Kyle McColgan
//    Description: This program tests the checkFive() function found in checkFive.js
//
//****************************************************************************************

const checkFive = require('../checkFive.js');

//****************************************************************************************

describe("checkFive", function(){

test("returns a message that the number is less than 5...", function() {
let result = checkFive(2);
expect(result).toEqual("2 is less than 5.");
});

//****************************************************************************************

test("returns a message that the number is greater than 5...", function() {
let result = checkFive(7);
expect(result).toEqual("7 is greater than 5.");
});

//****************************************************************************************

test("displays a message that says 5 is equal to 5...", function() {
let result = checkFive(5);
expect(result).toEqual("5 is equal to 5.");
});

});

//****************************************************************************************
