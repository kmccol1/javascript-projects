// Define your Book class here:

class Book
{
    constructor(title, author, copyrightDate, ISBN, numPages, numTimesCheckedOut, isDiscarded = false)
    {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numPages = numPages;
        this.numTimesCheckedOut = numTimesCheckedOut;
        this.isDiscarded = isDiscarded;
    }

    checkout(numCheckouts)
    {
        this.numTimesCheckedOut += numCheckouts;
    }
}



// Define your Manual and Novel classes here:
class Manual extends Book
{
    constructor(title, author, copyrightDate, ISBN, numPages, numTimesCheckedOut, isDiscarded = false)
    {
        super(title, author, copyrightDate, ISBN, numPages, numTimesCheckedOut, isDiscarded = false);
    }

    discard()
    {
        if(2024 - this.copyrightDate >= 5)
        {
            this.isDiscarded = true;
        }
    }
}

class Novel extends Book
{
    constructor(title, author, copyrightDate, ISBN, numPages, numTimesCheckedOut, isDiscarded = false)
    {
        super(title, author, copyrightDate, ISBN, numPages, numTimesCheckedOut, isDiscarded = false);
    }

    discard()
    {
        if(this.numTimesCheckedOut > 100)
        {
            this.isDiscarded = true;
        }
    }
}

// Declare the objects for exercises 2 and 3 here:

let tomeOne = new Novel('Pride and Prejudice', 'Jane Austen', 1813, 1111111111111, 432, 32);


let tomeTwo = new Manual('Top Secret Shuttle Building Manual', '	Redacted', 2013, 0000000000000, 1147, 1);


// Code exercises 4 & 5 here:

tomeOne.checkout(5);
tomeTwo.discard();

console.log("\nBook One:", tomeOne);
console.log("\n\nBook Two:", tomeTwo);
