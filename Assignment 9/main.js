const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Life is what happens when you're busy making other plans. – John Lennon",
    "Get busy living or get busy dying. – Stephen King",
    "You only live once, but if you do it right, once is enough. – Mae West",
    "Many of life’s failures are people who did not realize how close they were to success when they gave up. – Thomas A. Edison",
    "If you want to live a happy life, tie it to a goal, not to people or things. – Albert Einstein",
    "Never let the fear of striking out keep you from playing the game. – Babe Ruth",
    "Money and success don’t change people; they merely amplify what is already there. – Will Smith",
    "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
    "Not how long, but how well you have lived is the main thing. – Seneca"
];

let lastQuoteIndex = null;

function getRandomQuoteIndex() {
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === lastQuoteIndex);
    lastQuoteIndex = newIndex;
    return newIndex;
}

function displayQuote() {
    const quoteElement = document.getElementById('quote');
    const index = getRandomQuoteIndex();
    quoteElement.textContent = quotes[index];
}

document.getElementById('newQuoteButton').addEventListener('click', displayQuote);

window.onload = displayQuote;
