//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate
{
    constructor(name, mass, scores)
    {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    average()
    {
        let avg = 0;
        let result;

        for ( let i = 0; i < this.scores.length; i ++)
        {
            avg += this.scores[i];
        }
        result = Math.round(avg/scores.length * 10)/10;
        return result;
    }

    status()
    {
        let avg = this.average();
        let result;
        if (avg >= 90)
        {
            result = `${this.name} earned an average test score of ${this.average()}% and has a status of Accepted`;

        }
        else if (avg >= 80  avg <= 89)
        {
            result = `${this.name} earned an average test score of ${this.average()}% and has a status of Reserve.`;

        }
        else if (avg >= 70  avg <= 79)
        {
            result = `${this.name} earned an average test score of ${this.average()}% and has a status of Probationary.`;
        }
        else
        {
            result = `${this.name} earned an average test score of ${this.average()}% and has a status of Rejected.`;
        }

        return result;
}

let bubba = new CrewCandidate('Bubba Bear', 135, [88,85,90]);
let merry = new CrewCandidate('Merry Maltese', 1.5, [93,88,97]);
let glad = new CrewCandidate('Glad Gator', 225, [75,78,62]);

console.log("Bubba: ", bubba);
console.log("Merry: ", merry);
console.log("Glad: ", glad);

console.log("Merry average: ", merry.averages());

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let numTests = 0;
while(glad.average() < 80 )
{
    glad.addScores(100);
    numTests++;
}

console.log(`Took ${numTests} to reach Reserve status!`);

while(glad.average() < 90)
{
    glad.addScores(100);
    numTests++;
}

console.log(`Took ${numTests} to reach Accepted status!`);
