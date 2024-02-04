//****************************************************************************************
//
//    Filename:    KindnessSelection.js
//    Date:        3 February 2024
//    Author:      Kyle McColgan
//    Description: This program uses a for..in loop to display an Object's properties.
//
//****************************************************************************************

function randomSelection(arr){
   let index = Math.floor(Math.random()*arr.length);
   return arr[index];
 }
 
 let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];
 
 let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];
 
 for (i=0; i < 8; i++){
   console.log(randomSelection(happiness));
 }

//****************************************************************************************

 
 //Experiment with the code above. Try to:
 //a) Print 3 random selections from each array.
console.log("\nPrinting three random selections from words and happiness arrays: ");

for(let i = 0; i < 3; i ++ )
{
    console.log(`${i} : ${randomSelection(happiness)}`);
}

for(let i = 0; i < 3; i ++ )
{
    console.log(`${i} : ${randomSelection(words)}`);
}
 //b) Have the code randomly pick one array, and then print 2 random items from it.

console.log("\nPrinting two randomly picked items from a randomly picked array: ");
let randomArrayNum = Math.random()*10;

if (randomArrayNum % 2 == 0)
{
    for(let i = 0; i < 2; i ++ )
    {
        console.log(`${i} : ${randomSelection(happiness)}`);
    }
}
else
{
    for(let i = 0; i < 2; i ++ )
    {
        console.log(`${i} : ${randomSelection(words)}`);
    }
}
//c) Create a new array, then fill it with one random item from words and happiness. Print the new array.

let newArr = [];

newArr.push(randomSelection(words));
newArr.push(randomSelection(happiness));

console.log("\nPrinting two randomly picked items from both arrays: ");

for(let i = 0; i < newArr.length; i ++ )
{
    console.log(`${i} : ${newArr[i]}`);
}
//****************************************************************************************

/*
chapter-examples> node KindnessSelection.js
Joy
Kindness
Peace
Kittens
Peace
Kindness
Joy
Kindness

Printing three random selections from words and happiness arrays:
0 : Puppies
1 : Love
2 : Kittens
0 : Hello
1 : Hello
2 : Python

Printing two randomly picked items from a randomly picked array:
0 : JavaScript
1 : Hello

Printing two randomly picked items from both arrays:
0 : Rutabaga
1 : Kittens
*/
