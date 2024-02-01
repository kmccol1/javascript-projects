//****************************************************************************************
//
//    Filename:    removeI.js
//    Date:        29 January 2024
//    Author:      Kyle McColgan
//    Description: This program removes all elements with value = 'i' from an array.
//
//****************************************************************************************

function removeI(arr) {
    if (arr.indexOf('i') < 1){
      return arr;
    } else {
      arr.splice(arr.indexOf('i'),1);
      return removeI(arr);
    }
};

//****************************************************************************************

let arrayToChange = ['One', 'i', 'c', 'X', 'i', 'i', 54];
console.log(`Starting array...${arrayToChange}`);

console.log("Removing all elements with value = 'i'");
console.log("Updated array...");
console.log(removeI(arrayToChange));

//****************************************************************************************

/*
recursion-base-case> node removeI.js
Starting array...One,i,c,X,i,i,54
Removing all elements with value = 'i'
Updated array...
[ 'One', 'c', 'X', 54 ]
*/

