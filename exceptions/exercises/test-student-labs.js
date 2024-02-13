//****************************************************************************************
//
//    Filename:    test-student-labs.js
//    Date:        12 February 2024
//    Author:      Kyle McColgan
//    Description: This program provides a function to grade lab scores and throws
//                 an exception if a method does not yet exist in the objects.
//
//****************************************************************************************

function gradeLabs(labs)
{
    let result;
    for (let i=0; i < labs.length; i++)
    {
        let lab = labs[i];
        try
        {
            result = lab.runLab(3);
        }
        catch(err)
        {
            console.log("We caught a TypeError, but our program continues to run!");
            console.log("You tried to access the runLab method!");
            result = "Error thrown";
        }

        console.log(`${lab.student} code worked: ${result === 27}`);
  }
}

//****************************************************************************************

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

gradeLabs(studentLabs);

let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];

gradeLabs(studentLabs2);

//****************************************************************************************

/*
exercises> node test-student-labs.js
Carly code worked: true
Erica code worked: false
We caught a TypeError, but our program continues to run!
You tried to access the runLab method!
Blake code worked: false
Jessica code worked: true
Mya code worked: false
*/
