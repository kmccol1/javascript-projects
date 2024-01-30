//****************************************************************************************
//
//    Filename:    part-two-create-sorted-array.js
//    Date:        29 January 2024
//    Author:      Kyle McColgan
//    Description: This program sorts an array using iteration as well as recursion.
//
//****************************************************************************************

function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//****************************************************************************************

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//****************************************************************************************

function sort(arr)
{
    let result = [];
    let min;

    while (arr.length > 0)
    {
        min = findMinValue(arr);
        result.push(min);
        arr.splice(arr.indexOf(min), 1);
    }

    return result;
}

//****************************************************************************************

function sortRecursive(arr, result = [])
{
    let min;

    if (arr.length < 1)
    {
        return result;
    }
    else
    {
        min = findMinValue(arr);
        result.push(min);
        arr.splice(arr.indexOf(min), 1);
        return sortRecursive(arr, result);
    }
}

//****************************************************************************************

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log("Sorting nums...");
console.log(sort(nums1));
console.log(sort(nums2));
console.log(sort(nums3));

nums1 = [5, 10, 2, 42];
nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log("Sorting nums recursively...");
console.log(sortRecursive(nums1));
console.log(sortRecursive(nums2));
console.log(sortRecursive(nums3));

console.log("Printing original arrays to see if modified: ");
console.log(`nums1: ${nums1}`);
console.log(`nums2: ${nums2}`);
console.log(`nums3: ${nums3}`);
//yes, they were modified by the call to nums1.sort()...

//****************************************************************************************

/*
more-on-functions/studio> node part-two-create-sorted-array.js
Sorting nums...
[ 2, 5, 10, 42 ]
[
  -44, -10, -2, 0,
    0,   3,  3, 5
]
[
  -3.3, 0, 4, 4.4,
     5, 5, 8,  10,
   200
]
Sorting nums recursively...
[ 2, 5, 10, 42 ]
[
  -44, -10, -2, 0,
    0,   3,  3, 5
]
[
  -3.3, 0, 4, 4.4,
     5, 5, 8,  10,
   200
]
Printing original arrays to see if modified:
nums1:
nums2:
nums3:
*/
