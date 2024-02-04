//****************************************************************************************
//
//    Filename:    hello.js
//    Date:        3 February 2024
//    Author:      Kyle McColgan
//    Description: This program is a simple "Hello, World!" project built using Jest for
//                 unit testing purposes.
//
//****************************************************************************************

function hello(name) {
   if (name === undefined)
       name = "World";

   return "Hello, " + name + "!";
}

//****************************************************************************************

module.exports = hello;
