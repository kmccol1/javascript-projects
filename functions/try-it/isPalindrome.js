function reverse(str) {
   return str.split('').reverse().join('');
}

function isPalindrome(str) {
   return reverse(str) === str;
}

console.log("Calling isPalindrome(str)...");

let result;
let src = "racecar";
let src2 = "palindrome";
let src3 = "Goooooooogle";

result = isPalindrome(src);
console.log(`Result: ${result}`);

console.log("Calling isPalindrome(str)...");

result = isPalindrome(src2);
console.log(`Result: ${result}`);

console.log("Calling isPalindrome(str)...");

result = isPalindrome(src3);
console.log(`Result: ${result}`);

