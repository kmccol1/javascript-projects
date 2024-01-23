//Type casted the String "degreesC" to a Number() type on line 5 to be able to convert the temperature properly rather than concatenate the two Strings.
const input = require('readline-sync');

let degreesC = input.question('Temp in degrees C: ');
let degreesK = Number(degreesC) + 273.15;

console.log('Degrees K:', degreesK);
