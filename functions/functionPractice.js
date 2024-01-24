//****************************************************************************************
//
//
//    Filename:    functionPractice.js
//    Date:        23 January 2024
//    Author:      Kyle McColgan
//    Description: This program implements some custom functions for practice purposes.
//
//
//****************************************************************************************

function makeLine (size, aChar = '#')
{
    let line = "";

    for ( let i = 0; i < size; i ++ )
    {
        line += aChar.slice(0,1);
    }

    return line;
}

//****************************************************************************************

function makeSquare(size, aChar = '#')
{
    let square = "";
    for ( let i = 0; i < size; i ++ )
    {
        //square += '#';
        square += makeLine(size, aChar);

        if (i != (size - 1))
        {
            square += '\n';
        }
    }

    return square;
}

//****************************************************************************************

function makeRectangle(width, height, aChar = '#')
{
    let square = "";
    for ( let i = 0; i < height; i ++ )
    {

        square += makeLine(width, aChar);

        if ( i != (height - 1))
        {
            square += '\n';
        }
    }

    return square;
}

//****************************************************************************************

function makeSquareV2(size, aChar = '#')
{
    let square;

    square = makeRectangle(size,size, aChar);

    return square;
}

//****************************************************************************************

function makeDownwardStairs(height, aChar = '#')
{
    let stairs = "";

    for ( let i = 0; i < height; i ++)
    {
        stairs += makeLine(i + 1, aChar) + '\n';
    }

    return stairs.trim();
}

//****************************************************************************************

function makeSpaceLine(numSpaces, numChars, aChar = '#')
{
    let spaceLine = "";

    for (let i = 0; i < numSpaces; i ++ )
    {
        spaceLine += ' ';
    }

    spaceLine += makeLine(numChars, aChar);

    for (let i = 0; i < numSpaces; i ++ )
    {
        spaceLine += ' ';
    }

    return spaceLine;
}

//****************************************************************************************

function makeIsoscelesTriangle(height, aChar = '#')
{
    let isoscelesTriangle = "";

    for ( let i = 0; i < height; i ++ )
    {
        isoscelesTriangle += makeSpaceLine(height - i - 1, 2 * i + 1, aChar) + '\n';
    }

    return isoscelesTriangle;
}

//****************************************************************************************

function makeDiamond(height, aChar = '#')
{
    let isoscelesTriangle = "";

    for ( let i = 0; i < height; i ++ )
    {
        isoscelesTriangle += makeSpaceLine(height - i - 1, 2 * i + 1, aChar) + '\n';
    }
    for ( let i = 0; i < height; i ++ )
    {
        //The below parameters need adjusted so the bottom half has one hashtag...
        isoscelesTriangle += makeSpaceLine(i, 2*(height - i - 1) + 1, aChar) + '\n';
    }

    return isoscelesTriangle;
}

//****************************************************************************************


console.log(makeLine(10));
console.log();
console.log(makeSquare(10, 'p'));
console.log();
console.log(makeRectangle(2,3));
console.log();
console.log(makeSquareV2(3));
console.log();
console.log(makeDownwardStairs(3));
console.log();
console.log(makeSpaceLine(7,3));
console.log();
console.log(makeIsoscelesTriangle(9));
console.log();
console.log(makeDiamond(9, 'S'));

//****************************************************************************************

/*
node functionPractice.js

##########

pppppppppp
pppppppppp
pppppppppp
pppppppppp
pppppppppp
pppppppppp
pppppppppp
pppppppppp
pppppppppp
pppppppppp

##
##
##

###
###
###

#
##
###

       ###

        #
       ###
      #####
     #######
    #########
   ###########
  #############
 ###############
#################


        S
       SSS
      SSSSS
     SSSSSSS
    SSSSSSSSS
   SSSSSSSSSSS
  SSSSSSSSSSSSS
 SSSSSSSSSSSSSSS
SSSSSSSSSSSSSSSSS
SSSSSSSSSSSSSSSSS
 SSSSSSSSSSSSSSS
  SSSSSSSSSSSSS
   SSSSSSSSSSS
    SSSSSSSSS
     SSSSSSS
      SSSSS
       SSS
        S


*/
