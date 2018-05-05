// Variables
//------------------------------------------------------------------------------------------

var wordOptions = ["harry", "hermonie", "ron", "dumbledore", "hagrid", "dobby", "hedwig", "hogsmead", "honeydukes", "slytherin", "hufflepuff", "ravenclaw", "gryffindor", "muggle"]
var selectedWord = "";
var lettersInWord = [];
var blanks = 0;
var blanksAndSuccess = [];
var wrongLetters = [];


//Testing
console.log(wordOptions);
console.log(lettersInWord);
console.log(blanks);
console.log(blanksAndSuccess);
console.log(wrongLetters);

//Game Counters
var winCount = 0;
var lossCount = 0;
var guessesRemaining = 10;

// Testing
console.log(winCount);
console.log(lossCount);
console.log(guessesRemaining);

//Functions
//------------------------------------------------------------------------------------------
function startGame() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    lettersInWord = selectedWord.split("");
    blanks = lettersInWord.length;

    //Reset
    guessesRemaining = 10;
    wrongLetters = [];
    blanksAndSuccess = [];

    for (var i = 0; i < blanks; i++) {
        blanksAndSuccess.push("_");
    }

    document.getElementById("wordToGuess").innerHTML = blanksAndSuccess.join("   ");
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = lossCount;

    // Testing
    console.log(selectedWord);
    console.log(lettersInWord);
    console.log(blanks);
    console.log(blanksAndSuccess);
}

function checkLetters(letter) {
    //check if letter exists

    var isLetterinWord = false;

    for (var i = 0; i < blanks; i++) {
        if (selectedWord[i] === letter) {
            isLetterinWord == true;
        }
    }

    //check where in word letter is, then populate

    if (isLetterinWord) {
        for (var i = 0; i < blanks; i++) {
            if (selectedWord[i] === letter) {
                blanksAndSuccess[i] == letter;
            }
        }
    }
    //letter wasnt found
    else {
        wrongLetters.push(letter);
        guessesRemaining--
    }

    //testing
    console.log(blanksAndSuccess);
}

function roundComplete() {
    console.log("Win Count: " + winCount + " | Loss Count: " + lossCount + " | Remaining Guesses: " + guessesRemaining);
    // Update HTML
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccess.join(" ");

    // check if user won
    if (lettersInWord.toString() === blanksAndSuccess.toString()) {
        winCount++;
        alert("You're a Wizard Harry!")

        //update counters in HTML
        document.getElementById("winCounter").innerHTML = winCount;

        startGame();
    }
    // check if user lost
    else if (guessesRemaining == 0) {
        lossCount++;
        alert("Life's a Struggle When You're a Muggle!")

        //update counters in HTML
        document.getElementById("lossCounter").innerHTML = lossCount;

        startGame();
    }
}


//Main Process
//------------------------------------------------------------------------------------------

//starts code
startGame();

//keyclicks
document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
}



