const quotes = [
    {
       "quote":"Living in the moment brings you a sense of reverence for all of life's blessings." ,
        "author" :"Oprah Winfrey"
    },
    {
       "quote":"Men are not prisoners of fate, but only prisoners of their own minds." ,
        "author" :"Franklin D. Roosevelt"
    },
    {
        "quote":"ccGood communication is as stimulating as black coffee and just as hard to sleep after." ,
        "author" :"Anne Morrow Lindbergh"
    },
    {
        "quote": "Ambition is a poor excuse for not having sense enough to be lazy.",
        "author": "Edgar Bergen"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

