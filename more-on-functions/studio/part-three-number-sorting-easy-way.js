//****************************************************************************************
//
//    Filename:    part-three-number-sorting-easy-way.js
//    Date:        29 January 2024
//    Author:      Kyle McColgan
//    Description: This program sorts an array built-in functions.
//
//****************************************************************************************

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Sort each array in ascending order.

console.log("Sorting nums least to greatest...");
console.log(`\nOriginal array: ${nums1}\nSorted array: ${nums1.sort(function(a, b){return a-b})}`);
console.log(`\nOriginal array: ${nums2}\nSorted array: ${nums2.sort(function(a, b){return a-b})}`);
console.log(`\nOriginal array: ${nums3}\nSorted array: ${nums3.sort(function(a, b){return a-b})}`);

//Sort each array in decending order.

console.log("Sorting nums greatest to least...");
console.log(`\nOriginal array: ${nums1}\nSorted array: ${nums1.sort(function(a, b){return b-a})}`);
console.log(`\nOriginal array: ${nums2}\nSorted array: ${nums2.sort(function(a, b){return b-a})}`);
console.log(`\nOriginal array: ${nums3}\nSorted array: ${nums3.sort(function(a, b){return b-a})}`);

console.log("Printing original arrays to see if modified: ");
console.log(`nums1: ${nums1}`);
console.log(`nums1: ${nums2}`);
console.log(`nums1: ${nums3}`);
//yes, they were modified by the call to nums1.sort()...

//****************************************************************************************

/*
more-on-functions/studio> node part-three-number-sorting-easy-way.js
Sorting nums least to greatest...

Original array: 5,10,2,42
Sorted array: 2,5,10,42

Original array: -2,0,-10,-44,5,3,0,3
Sorted array: -44,-10,-2,0,0,3,3,5

Original array: 200,5,4,10,8,5,-3.3,4.4,0
Sorted array: -3.3,0,4,4.4,5,5,8,10,200
Sorting nums greatest to least...

Original array: 2,5,10,42
Sorted array: 42,10,5,2

Original array: -44,-10,-2,0,0,3,3,5
Sorted array: 5,3,3,0,0,-2,-10,-44

Original array: -3.3,0,4,4.4,5,5,8,10,200
Sorted array: 200,10,8,5,5,4.4,4,0,-3.3
Printing original arrays to see if modified:
nums1: 42,10,5,2
nums1: 5,3,3,0,0,-2,-10,-44
nums1: 200,10,8,5,5,4.4,4,0,-3.3
*/
