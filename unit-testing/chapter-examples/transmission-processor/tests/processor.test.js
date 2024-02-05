//****************************************************************************************
//
//    Filename:    processor.test.js
//    Date:        4 February 2024
//    Author:      Kyle McColgan
//    Description: This program tests the tranmsissions processor.
//
//****************************************************************************************

const processor = require('../processor.js');

//****************************************************************************************

describe("transmission processor", function() {

test("takes a string and returns an object", function() {
let result = processor("9701::<489584872710>");
expect(typeof result).toBe("object");
});

//****************************************************************************************

test("returns -1 if '::' is not found", function() {
let result = processor("9701<489584872710>");
expect(result).toBe(-1);
});

//****************************************************************************************

test("returns id in object", function() {
let result = processor("9701::<489584872710>");
expect(result.id).not.toBeUndefined();
});

//****************************************************************************************

test("converts id to a number", function() {
let result = processor("9701::<489584872710>");
expect(result.id).toBe(9701);
});

//****************************************************************************************

test("returns rawData in object", () => {
let result = processor("9701::<487297403495720912>");
expect(result.rawData).not.toBeUndefined();
});

//****************************************************************************************

test("returns -1 for rawData if missing < at position 0", function() {
let result = processor("9701::487297403495720912>");
expect(result.rawData).toBe(-1);
});

//****************************************************************************************

test("returns -1 for rawData if contains '>' at position 14", function() {
let result = processor("9701::8729740349572>0912");
expect(result.rawData).toBe(-1);
});

//****************************************************************************************

test("returns -1 for rawData if contains '<' at position 5", function() {
let result = processor("9701::4872<97403495720912");
expect(result.rawData).toBe(-1);
});

//****************************************************************************************

test("returns -1 for rawData if missing '<' and missing '>'", function() {
let result = processor("9701::487297403495720912");
expect(result.rawData).toBe(-1);
});

//****************************************************************************************

test("returns -1 for rawData if contains extra '<'", function() {
let result = processor("9701::<487297403495<720912>");
expect(result.rawData).toBe(-1);
});

//****************************************************************************************

test("trim leading and trailing whitespace from transmission string", function() {
let result = processor("  9701::<487297403495720912>  ");
expect(result.rawData).toBe(-1);
});

//****************************************************************************************

test("returns -1 if the id part of the transmission string cannot be converted to a number.", function() {
let result = processor("97q1::<487297403495720912>");
expect(result.rawData).toBe(-1);
});

//****************************************************************************************

test("returns -1 if more than one '::' is found in the transmission string.", function() {
let result = processor("9701::<487297403495::720912>");
expect(result.rawData).toBe(-1);
});

//****************************************************************************************

test("Do not include the '<' and '>' symbols in the value assigned to rawData.", function() {
let result = processor("9701::<487297403495720912>");
expect(result.rawData).toBe(-1);
});

//****************************************************************************************

test("returns -1 for the value of rawData if anything besdies numbers are present between the '<' and '>' symbols.", function() {
let result = processor("9701::<4872974OOO3495720912>");
expect(result.rawData).toBe(-1);
});

});

//****************************************************************************************

/*
/transmission-processor/tests> npm test

> unit-testing@1.0.0 test
> jest

 PASS  tests/processor.test.js
  transmission processor
    ✓ takes a string and returns an object (2 ms)
    ✓ returns -1 if '::' is not found (1 ms)
    ✓ returns id in object
    ✓ converts id to a number
    ✓ returns rawData in object
    ✓ returns -1 for rawData if missing < at position 0
    ✓ returns -1 for rawData if contains '>' at position 14
    ✓ returns -1 for rawData if contains '<' at position 5
    ✓ returns -1 for rawData if missing '<' and missing '>' (1 ms)
    ✓ returns -1 for rawData if contains extra '<'
    ✓ trim leading and trailing whitespace from transmission string (1 ms)
    ✓ returns -1 if the id part of the transmission string cannot be converted to a number.
    ✓ returns -1 if more than one '::' is found in the transmission string.
    ✓ Do not include the '<' and '>' symbols in the value assigned to rawData. (1 ms)
    ✓ returns -1 for the value of rawData if anything besdies numbers are present between the '<' and '>' symbols.

Test Suites: 1 passed, 1 total
Tests:       15 passed, 15 total
Snapshots:   0 total
Time:        0.352 s, estimated 1 s
Ran all test suites.

*/
