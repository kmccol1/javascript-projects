//****************************************************************************************
//
//    Filename:    ForInLoop.js
//    Date:        3 February 2024
//    Author:      Kyle McColgan
//    Description: This program uses a for..in loop to display an Object's properties.
//
//****************************************************************************************

let tortoiseOne = {
   species: "Galapagos Tortoise",
   name: "Pete",
   weight: 919,
   age: 85,
   diet: ["pumpkins", "lettuce", "cabbage"]
};

//****************************************************************************************

for (key in tortoiseOne)
{
    console.log(`${key} : ${tortoiseOne[key]}`);
}

// Using a for..in loop, iterate through each property in the tortoiseOne object and print the value to the console.

//****************************************************************************************

/*
chapter-examples> node ForInLoop.js
species : Galapagos Tortoise
name : Pete
weight : 919
age : 85
diet : pumpkins,lettuce,cabbage
*/
