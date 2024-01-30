//****************************************************************************************
//
//    Filename:    part-one-find-minimum-value.js
//    Date:        29 January 2024
//    Author:      Kyle McColgan
//    Description: This program finds the minimum value in an array to be used later.
//
//****************************************************************************************

//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.

let findMin = function(arr)
{
    let result = arr[0];

    for ( let i = 1; i < arr.length; i ++)
    {
        if (arr[i] < result)
        {
            result = arr[i];
        }
    }

    return result;
}

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.

console.log(findMin(nums1));
console.log(findMin(nums2));
console.log(findMin(nums3));

//****************************************************************************************

/*
more-on-functions/studio> node part-one-find-minimum-value.js
2
-44
-3.3
*/
