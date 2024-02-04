//****************************************************************************************
//
//    Filename:    index.js
//    Date:        3 February 2024
//    Author:      Kyle McColgan
//    Description: This program tests some imported functions from practiceExports.js
//
//****************************************************************************************

// Import the modules exported from practiceExports.js below:
const practice = require('./practiceExports.js');
let arr = ['Hello', 'World', 123, 987, 'LC101'];

console.log(practice.isPalindrome('mom'));
console.log(practice.evenOrOdd(9));

for (i=0; i < 3; i++){
    console.log(practice.randomArrayElement(arr));
}

//****************************************************************************************

/*
/exporting-modules> node index
object
{
  isPalindrome: [Function: isPalindrome],
  evenOrOdd: [Function: evenOrOdd],
  randomArrayElement: [Function: randomArrayElement]
}

/exporting-modules> node index
true
Odd
123
987
LC101

*/
