//****************************************************************************************
//
//    Filename:    delayed-message.js
//    Date:        31 January 2024
//    Author:      Kyle McColgan
//    Description: This program displays a message that is delayed using setTimeout().
//
//****************************************************************************************

function printMessage() {
    console.log("The future is now!");
}

setTimeout(printMessage, 60000);

//****************************************************************************************

/*
passing-functions-as-arguments> node delayed-message.js
The future is now!

*/
