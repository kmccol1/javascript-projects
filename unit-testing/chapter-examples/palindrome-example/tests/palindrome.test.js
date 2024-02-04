//****************************************************************************************
//
//    Filename:    palindrome.test.js
//    Date:        3 February 2024
//    Author:      Kyle McColgan
//    Description: This program tests the function isPalindrome().
//
//****************************************************************************************

const isPalindrome = require('../palindrome.js');

describe("isPalindrome", function(){

test("should return true for a single letter", function() {
expect(isPalindrome("a")).toBe(true);
});

test("should return true for a single letter repeated", function() {
expect(isPalindrome("aaa")).toBe(true);
});

test("should return true for a simple palindrome", function() {
expect(isPalindrome("aba")).toBe(true);
});

test("should return true for a longer palindrome", function() {
expect(isPalindrome("racecar")).toBe(true);
});

test("should return false for a longer non-palindrome", function() {
    expect(isPalindrome("launchcode")).toBe(false);
});

test("should return false for a simple non-palindrome", function() {
    expect(isPalindrome("ab")).toBe(false);
});

test("should be case-sensitive", function() {
    expect(isPalindrome("abA")).toBe(false);
});

test("should consider whitespace", function() {
    expect(isPalindrome("so many dynamos")).toBe(false);
});

test("should consider the empty string a palindrome", function() {
    expect(isPalindrome("")).toBe(true);
});

});

//****************************************************************************************

/*
/palindrome-example/tests> npm test

> unit-testing@1.0.0 test
> jest

 PASS  tests/palindrome.test.js
  isPalindrome
    ✓ should return true for a single letter (2 ms)
    ✓ should return true for a single letter repeated
    ✓ should return true for a simple palindrome
    ✓ should return true for a longer palindrome
    ✓ should return false for a longer non-palindrome
    ✓ should return false for a simple non-palindrome
    ✓ should be case-sensitive
    ✓ should consider whitespace (1 ms)
    ✓ should consider the empty string a palindrome

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        0.316 s, estimated 1 s
Ran all test suites.

*/
