//****************************************************************************************
//
//    Filename:    processor.js
//    Date:        4 February 2024
//    Author:      Kyle McColgan
//    Description: This program processes transmissions from the Voyager1 space probe.
//
//****************************************************************************************

function processor(transmission)
{
    transmission = transmission.trim();
    if (transmission.indexOf("::") < 0)
    {
    // Data is invalid
        return -1;
    }
    let parts = transmission.split("::");
    let rawData = parts[1].slice(1, parts[1].length-2);
    if ( (rawData[0] !== "<") || (rawData[13] == '<') || (typeof Number(parts[0]) != "NaN") || (parts[0].contains("::") || (rawData.contains("::")) || (typeof Number(rawData) != "NaN") ))
    {
        rawData = -1;
    }

return {
id: Number(parts[0]),
rawData: rawData
};
}

//****************************************************************************************

module.exports = processor;

//****************************************************************************************
