//declaration of variables
    var possibleWords = ['IRON MAN','CAPTAIN AMERICA','HULK','BLACK WIDOW','THOR','HAWKEYE','LOKI','NICK FURY','BLACK PANTHER','SHURI','OKOYE','ANT MAN','WASP','DOCTOR STRANGE','WINTER SOLDIER','FALCON','VISION','HULK BUSTER','WAR MACHINE','ULTRON','FALCON','RED SKULL','QUICKSILVER','SCARLET WITCH','CAPTAIN MARVEL','SPIDER MAN','SAND MAN','','STEVE ROGERS','CLINTRON FRANCIS BARTON','TONY STARK','HENRY PYM','BRUCE BANNER','KING TCHALLA','VICTOR SHADE','NATASHA ROMANOFF','HENRY MCCOY','SAMUEL WILSON','MONICA RAMBEAU','JAMES RHODES','PETER PARKER','WILLIAM BAKER','SCOTT LANG','STEPHEN STRANGE'];

    function hangManChooseRandomWord(event) {
        //console.log(possibleWords.length);
        var wordChosen = possibleWords[Math.floor(Math.random() * possibleWords.length)];
        var noOfWords = wordChosen.split(' ');
        var noOfTurns;
        //console.log(noOfWords);
        console.log(wordChosen);
        //console.log(wordChosen.split(' ').length);
        //To get the Div in focus
        //var divDisplay = document.getElementById("letterArea");
        //if (divDisplay.style.display === "none") {
        //  divDisplay.style.display = "block";
        //}
        //else {
        //  divDisplay.style.display = "none";
        //}
        
        
            if (noOfWords.length === 2) {
                noOfTurns = wordChosen.length - 1;
            }
            else if (noOfWords.length === 3) {
                noOfTurns = wordChosen.length - 2;
            }
            else if (noOfWords.length === 1) {
                noOfTurns = wordChosen.length;
            }
        
        console.log(noOfTurns);
    }
    