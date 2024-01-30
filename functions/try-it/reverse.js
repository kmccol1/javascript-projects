function reverse(str) {
   let lettersArray = str.split('');
   let reversedLettersArray = lettersArray.reverse();
   return reversedLettersArray.join('');
}

let result = "";
let src = "Google";

console.log("Calling reverse(str) function...");
result = reverse(src);
console.log(`${result}`);
console.log("Goodbye!");
