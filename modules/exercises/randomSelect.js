//****************************************************************************************
//
//    Filename:    randomSelect.js
//    Date:        2 February 2024
//    Author:      Kyle McColgan
//    Description: This program implements a function to select a random
//                 element from an array parameter.
//
//****************************************************************************************

function randomFromArray(arr)
{
    //Your code here to select a random element from the array passed to the function.
    let randNum = Math.floor(Math.random() * arr.length);

    return arr[randNum];
}

//****************************************************************************************

//TODO: Export the randomFromArray function.
module.exports = {randomFromArray:randomFromArray}
