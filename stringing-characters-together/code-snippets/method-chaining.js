//String methods can be combined in a process called method chaining.

let word = 'JavaScript';

console.log(word.toUpperCase());
//Returns ``JAVASCRIPT``

//What does ``word.slice(4).toUpperCase()`` return?

console.log(word.slice(4).toUpperCase());

//Experiment with other combinations (chains) of string methods.

console.log(word.trim().toUpperCase());
console.log(word.toUpperCase().replace('S', 'X').slice(2));
