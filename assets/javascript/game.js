var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wins = 0;
let losses = 0;
let guesses = 11;
let guessesLeft = 11;
let guessedLetters = [];
var letterToGuess = null;

var computerGuess = computerChoices[Math.Floor(Math.random() * computerChoices.length)];
document.querySelector('.mantis').style.display = "none";

function updateGuessesLeft() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.computerChoices[Math.floor() * this.computerChoices.length];
};

function updateGuessesSoFar() {
    document.querySelector('#let').innerHTML =  "My Guesses: " + guessedLetters.join(', ');

}; 

var reset = function() {
    totalGuesses = 11;
    guessesLeft = 11;
    guessedLetters = [];
    setTimeout(function() { document.querySelector('.mantis').style.display = 'none'; }, 5000);
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = computerChoices.includes(userGuess)};

    if (check === false) {
        alert("You guessed incorrectly, try again?");
        return false;
    } else if (check === true) {
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesleft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                document.querySelector('.mantis').style.display = '';
                document.querySelector('.mantis').style.height = '4em';
                document.querySelector('.mantis').innerHTML = "Thats a pretty good guess" + userGuess + "Is the letter I was thinking of";
                reset();
            }
        } else if (guessesLeft == 0) {
            losses++;;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            document.querySelector('.mantis').style.display = '';
            document.querySelector('.mantis').innerHTML = "Sorry I'm thinking of the letter" + letterToGuess;
            reset();
        }
        return false;
    } else {
        alert("Oops, we have an error");
    }