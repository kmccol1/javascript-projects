//****************************************************************************************
//
//    Filename:    processor.test.js
//    Date:        3 February 2024
//    Author:      Kyle McColgan
//    Description: This program processes transmissions from the Voyager1 space probe.
//
//****************************************************************************************

const processor = require('../processor.js');

describe("transmission processor", function() {

test("takes a string and returns an object", function() {
let result = processor("9701::<489584872710>");
expect(typeof result).toBe("object");
});

test("returns -1 if '::' is not found", function() {
let result = processor("9701<489584872710>");
expect(result).toBe(-1);
});

test("returns id in object", function() {
let result = processor("9701::<489584872710>");
expect(result.id).not.toBeUndefined();
});

test("converts id to a number", function() {
let result = processor("9701::<489584872710>");
expect(result.id).toBe(9701);
});

test("returns rawData in object", () => {
let result = processor("9701::<487297403495720912>");
expect(result.rawData).not.toBeUndefined();
});

test("returns -1 for rawData if missing < at position 0", function() {
let result = processor("9701::487297403495720912>");
expect(result.rawData).toBe(-1);
});

test("returns -1 for rawData if contains '>' at position 14", function() {
let result = processor("9701::8729740349572>0912");
expect(result.rawData).toBe(-1);
});

});


//****************************************************************************************

/*
transmission-processor/tests> npm test

> unit-testing@1.0.0 test
> jest

 PASS  tests/processor.test.js
  transmission processor
    ✓ takes a string and returns an object (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.296 s
Ran all test suites.

*/
