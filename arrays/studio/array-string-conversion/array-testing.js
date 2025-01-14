//****************************************************************************************
//
//
//    Filename:    array-testing.js
//    Date:        18 January 2024
//    Author:      Kyle McColgan
//    Description: This program tests some custom Array methods.
//
//
//****************************************************************************************

let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check = false;
	let output = "";
	//TODO: 2. write the code required for this step

	check = protoArray1.includes(",");

	if ( check === true)
	{
		output = protoArray1.split(",").reverse().join(",");
	}



	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash() {
	let check;
	let output;
//TODO: write the code required for this step

	check = protoArray2.includes(";");

	if ( check === true)
	{
		output = protoArray2.split(";").sort().join("-");
	}
  
	return output;
}

//4)
function reverseSpaces() {
	let check;
	let output;
  //TODO: write the code required for this step

	check = protoArray3.includes(" ");

	if (check === true)
	{
		output = protoArray3.split(" ").sort().reverse().join(" ");
	}

	return output;
}

//5)
function commaSpace() {
	let check;
	let output;
	//TODO: write the code required for this step

	check = protoArray4.includes(", ");

	if (check === true)
	{
		output = protoArray4.split(", ").reverse().join(",").trim();
	}
  
	return output;
}

console.log(reverseCommas(protoArray1));
console.log(semiDash(protoArray2));
console.log(reverseSpaces(protoArray3));
console.log(commaSpace(protoArray4));

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};

//****************************************************************************************

/*
node array-testing.js
12,9,6,3
A-C-E-M
string space delimited
caution,typing,require,might,Comma-spaces
*/
