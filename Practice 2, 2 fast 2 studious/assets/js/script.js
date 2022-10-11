var intro = document.querySelector('.intro')
var links = document.querySelector('#links')
function hyfr() {
    intro.setAttribute("background-color", "blue");
}
hyfr()


var shoppingFromEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

function handleFormSubmit(event) {
    event.preventDefault()
    var shoppingItem = $('input[name="shopping-input"]').val();
    if (!shoppingItem) {
        console.log('cmon pick something');
        return;
    }

    shoppingListEl.append('<li>' + shoppingItem + '</li>');
    $('input[name="shopping-input"]').val('');
}
shoppingFromEl.on('submit', handleFormSubmit())

var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.quertSelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = "";
var numBlanks = 0;
var winCounter = 0;
var lossCounter = 0;
var isWin = false;
var timerCount;

var LettersinChosenWord = [];
var blanksLetters = [];

var words = ["git", "gud", "scrub"]

function init() {
    getWins();
    getLosses();
}

function startGame() {
    isWin = false;
    timerCount = 10;
    startButton.disabled = true;
    renderBlanks()
    startTimer()
}

function winGame() {
    wordBlank.textContetn = "YOU ARENT BAD"
    winCounter++
    startButton.disabled = false;
    renderBlanks()
    startTimer()
}

function loseGame() {
    wordBlank.textContent = "game over :/"
    loseCounter++
    startButton.disabled = false;
    setLosses()
}

function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                loseGame()
            }
        }
    }, 1000)
}

function renderBlanks() {
    chosenWord = words[Math.floor(Math.random() * words.length)]
    LettersinChosenWord = chosenWord.split('');
    numBlanks = LettersinChosenWord.length;
    blanksLetters = []
    for (var i = 0; i < numBlanks; i++) {
        blanksLetters.push("_")
    }
    wordBlank.textContent = blankLetter.join(" ")
}

function setWins() {
    localStorage.setItem('winCount',winCounter)
    win.textContent = blankLetters.join(" ")
}
function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter)
}

