//****************************************************************************************
//
//
//    Filename:    part-two.js
//    Date:        15 January 2024
//    Author:      Kyle McColgan
//    Description: This program prints a DNA sequence.
//
//
//****************************************************************************************

//Part Two Section One

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";

// First, print out the dna strand in it's current state.

console.log("Current state: ", dna);

//1) Use the .trim() method to remove the leading and trailing whitespace, then print the result.

dna = dna.trim();
console.log("Trimmed: ", dna);

//2) Change all of the letters in the dna string to UPPERCASE, then print the result.

dna = dna.toUpperCase();
console.log("Uppercase: ", dna);

//3) Note that after applying the methods above, the original, flawed string is still stored in dna. To fix this, we need to reassign the changes to back to dna.
//Apply these fixes to your code so that console.log(dna) prints the DNA strand in UPPERCASE with no whitespace.

console.log("Uppercase and trimmed: ", dna);

//Part Two Section Two

let dnaTwo = "TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT";

//1) Replace the gene "GCT" with "AGG", and then print the altered strand.

dnaTwo = dna.replace('GCT', 'AGG');

console.log("Altered strand: ", dnaTwo);

//2) Look for the gene "CAT" with ``indexOf()``. If found print, "CAT gene found", otherwise print, "CAT gene NOT found".

if ( dnaTwo.indexOf('CAT') > 0)
{
    console.log("CAT gene found");
}
else
{
    console.log("CAT gene NOT found");
}

//3) Use .slice() to print out the fifth gene (set of 3 characters) from the DNA strand.

let fifthGene = dnaTwo.slice(16,19);
console.log("Fifth gene: ", fifthGene);

//4) Use a template literal to print, "The DNA strand is ___ characters long."

console.log("The DNA strand is ${dnaTwo} characters long.");

//5) Just for fun, apply methods to ``dna`` and use another template literal to print, 'taco cat'.
console.log((dna.slice(12,15)).toLowerCase() +
            'o',
            `${dna.slice(dna.indexOf('CAT'), dna.indexOf('CAT') + 3).toLowerCase()}`);

//****************************************************************************************

/*
node part-two.js
Current state:   TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT
Trimmed:  TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT
Uppercase:  TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT
Uppercase and trimmed:  TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-GCT
Altered strand:  TCG-TAC-GAC-TAC-CGT-CAG-ACT-TAA-CCA-GTC-CAT-AGA-AGG
CAT gene found
Fifth gene:  CGT
The DNA strand is ${dnaTwo} characters long.
taco cat
*/
