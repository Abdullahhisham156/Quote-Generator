

var quotes = [
    {
        quote: '“Be yourself; everyone else is already taken.”',
        author: '― Oscar Wilde'
    },
    {
        quote: '“Two things are infinite: the universe and human stupidity; and Im not sure about the universe.”',
        author: '― Albert Einstein'
    },
    {
        quote: '“So many books, so little time.”',
        author: '― Frank Zappa'
    },
    {
        quote: '“A room without books is like a body without a soul.”',
        author: '― Marcus Tullius Cicero'
    },
    {
        quote: '“Be the change that you wish to see in the world.”',
        author: '― Mahatma Gandhi'
    },
    {
        quote: '“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”',
        author: '― Ralph Waldo Emerson'
    },
];

function generateRandomNumber(){
    return Math.floor(Math.random() * quotes.length) + 1;
}


function generateQuote() {
    var randomNumber = generateRandomNumber();
    var prevNumber = randomNumber;
    if (randomNumber == prevNumber){
        document.getElementById("quote").innerHTML= quotes[prevNumber - 1].quote;
        document.getElementById("author").innerHTML= quotes[prevNumber -1].author;
    } else {
        document.getElementById("quote").innerHTML= quotes[randomNumber].quote;
        document.getElementById("author").innerHTML= quotes[randomNumber].author;
    }
}







