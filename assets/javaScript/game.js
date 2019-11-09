//declaration of global variables
var possibleWords = ['IRON MAN','CAPTAIN AMERICA','HULK','BLACK WIDOW','THOR','HAWKEYE','LOKI','NICK FURY','BLACK PANTHER','SHURI','OKOYE','ANT MAN','WASP','DOCTOR STRANGE','WINTER SOLDIER','FALCON','VISION','HULK BUSTER','WAR MACHINE','ULTRON','FALCON','RED SKULL','QUICKSILVER','SCARLET WITCH','CAPTAIN MARVEL','SPIDER MAN','SAND MAN','','STEVE ROGERS','CLINTRON FRANCIS BARTON','TONY STARK','HENRY PYM','BRUCE BANNER','KING TCHALLA','VICTOR SHADE','NATASHA ROMANOFF','HENRY MCCOY','SAMUEL WILSON','MONICA RAMBEAU','JAMES RHODES','PETER PARKER','WILLIAM BAKER','SCOTT LANG','STEPHEN STRANGE'];
var wordChosen = possibleWords[Math.floor(Math.random() * possibleWords.length)];
var noOfGuesses = 6;
var wordLetters = wordChosen.split("");
var correctGuesses =[];


document.getElementById("livesLeft").innerHTML = noOfGuesses;
document.getElementById("wins").innerHTML = sessionStorage.noOfWins;

//On page load, this function will generate the alphabets and generate buttons for each alphabet. 
var divgetter = document.getElementById ("letters");
//console.log(wordChosen);
for (var i=65; i<91; i++){
    var alphabet = String.fromCharCode(i);
    var buttons = document.createElement("button");
    buttons.innerHTML = String.fromCharCode(i);
    buttons.setAttribute("id", alphabet);
    buttons.setAttribute("class", "alphabet");
    divgetter.appendChild(buttons);
    buttons.addEventListener('click', letterCompare);
}

//following set of statements display boxes based on the random word length
var divGetter2 = document.getElementById("puzzleButtons");
for (var a=0; a < wordLetters.length; a++) {
    var pButton = document.createElement("button");
    pButton.id = "puzzle_"+a;
    pButton.class ="btn-info";
    pButton.style.width = "30px";
    pButton.style.height = "30px";
    pButton.setAttribute("disabled", "disabled");
    if(wordLetters[a] === " ") {
        pButton.style.visibility = 'hidden';
        pButton.innterHTML = "-"
        correctGuesses.push(" ");
    }
    divGetter2.appendChild(pButton);
}

function letterCompare () {
    var buttonToReplace;
    checkForZeroGuesses();
    checkWinStatus();
    this.setAttribute("disabled", "disabled");
    if((wordLetters.includes(this.innerHTML)) && (noOfGuesses > 0)) {
        checkForZeroGuesses();
        for(var i=0; i<wordLetters.length; i++){
            if(wordLetters[i] === this.innerHTML) {
                buttonToReplace = document.getElementById("puzzle_"+i);
                buttonToReplace.innerHTML = this.innerHTML;
                correctGuesses.push(this.innerHTML);
                checkWinStatus();
            }        
        }
    }
    else {
            noOfGuesses--;
            switch (noOfGuesses) {
                case 5:
                    document.getElementById("thanos").style.marginLeft= '125px';
                    break;
                case 4:
                    document.getElementById("thanos").style.marginLeft= '250px';
                    break;
                case 3:
                    document.getElementById("thanos").style.marginLeft= '375px';
                    break;
                case 2:
                    document.getElementById("thanos").style.marginLeft= '500px';
                    break;
                case 1:
                    document.getElementById("thanos").style.marginLeft= '550px';
                    break;                    
            }
            checkForZeroGuesses();
    }
    document.getElementById("livesLeft").innerHTML = noOfGuesses;
}    

function checkForZeroGuesses(){
    if (noOfGuesses === 0) {
        checkWinStatus();
        disableLetters();
        document.getElementById("thanos").style.visibility = "hidden";
        document.getElementById("glove").style.visibility = "hidden";
        document.body.style.backgroundImage = "url('assets/images/thanosSnap.jpg')";
        playAgain();
        var youLost = document.createElement("h3");
        youLost.innerHTML = "Sorry you lost... Press play again to try again";
        document.getElementById("message").appendChild(youLost);
        }
}

 function checkWinStatus () {

    var noOfElements = document.getElementById ("puzzleButtons").childElementCount;
    if (correctGuesses.length === wordLetters.length){
        var youWon = document.createElement("h3");
        youWon.innerHTML = "Congratulations you saved the world from Thanos Snap... Press play again to save the world... AGAIN !";
        document.getElementById("message").appendChild(youWon);
        if(true) {
            if (!isNaN(parseInt(sessionStorage.noOfWins))) {
              sessionStorage.noOfWins = parseInt(sessionStorage.noOfWins) + 1 + '';
            } else {
              sessionStorage.noOfWins = '1';
            }
        }
        document.getElementById("wins").innerHTML = sessionStorage.noOfWins;
        playAgain();
        disableLetters();
    }
 }

 function playAgain () {
    var playAgain = document.createElement("button");
    playAgain.id = "playAgain";
    playAgain.innerHTML = "Play Again";
    playAgain.class ="btn btn-info";
    playAgain.style.width = "100px";
    playAgain.style.height = "30px";
    playAgain.style.display="block";
    document.getElementById("playAgainButton").appendChild(playAgain);
    playAgain.addEventListener('click', resetGame);
 }

 function disableLetters () {
    var nodes = document.getElementById("letters").getElementsByTagName('*');
    for(var i = 0; i < nodes.length; i++){
        nodes[i].disabled = true;
    }
 }    

 function resetGame() {
    location.reload();
 }