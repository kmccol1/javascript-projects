//****************************************************************************************
//
//    Filename:    checkFive.js
//    Date:        4 February 2024
//    Author:      Kyle McColgan
//    Description: This program uses a function to check if a number is less than five.
//
//****************************************************************************************

function checkFive(num){
   let result = '';
   if (num < 5){
     result = num + " is less than 5.";
   } else if (num === 5){
     result = num + " is equal to 5.";
   } else {
     result = num + " is greater than 5.";
   }
   return result;
 }

//****************************************************************************************

module.exports = checkFive;

//****************************************************************************************
