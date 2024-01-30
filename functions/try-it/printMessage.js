let message = "Hello, World!";

function printMessage() {
   console.log(message);
}

console.log("Calling printMessage()...");
printMessage();

console.log("Updating the message contents...");
message = "Updated msg";

console.log("Calling printMessage()...");
printMessage();

console.log("Printing final message...");
console.log("Updating the message contents...");
message = "Goodbye";
printMessage();

