//declaration of variables
    var possibleWords = ['IRON MAN','CAPTAIN AMERICA','HULK','BLACK WIDOW','THOR','HAWKEYE','LOKI','NICK FURY','BLACK PANTHER','SHURI','OKOYE','ANT MAN','WASP','DOCTOR STRANGE','WINTER SOLDIER','FALCON','VISION','HULK BUSTER','WAR MACHINE','ULTRON','FALCON','RED SKULL','QUICKSILVER','SCARLET WITCH','CAPTAIN MARVEL','SPIDER MAN','SAND MAN','','STEVE ROGERS','CLINTRON FRANCIS BARTON','TONY STARK','HENRY PYM','BRUCE BANNER','KING TCHALLA','VICTOR SHADE','NATASHA ROMANOFF','HENRY MCCOY','SAMUEL WILSON','MONICA RAMBEAU','JAMES RHODES','PETER PARKER','WILLIAM BAKER','SCOTT LANG','STEPHEN STRANGE'];
    var wordChosen = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    var noOfGuesses = 6;
    var divGetter = document.getElementById("letterArea");
    var wordLetters = wordChosen.split("");
    var letter, button, holder;
    var userChoices = [];
    
    // function to generate empty boxes based on length of the word
    function hangManChooseRandomWord(event) {
        console.log(wordChosen);        
        var row = document.getElementById("letterRow");
        for (var a=0; a < wordLetters.length; a++) {
            var cell = row.insertCell(-1);
            cell.id = "cell_"+a;
           // console.log(cell.id);
        }
    }

    function alphaOnly(event) {
        if ((event.charCode > 64 && event.charCode < 91) || (event.charCode > 96 && event.charCode < 123) ){
            var letter = event.key
            userChoices.push(letter);
            compareWithPuzzle(letter.toUpperCase());
        }
        return (event.charCode > 64 && 
            event.charCode < 91) || (event.charCode > 96 && event.charCode < 123);
      };
      

    function compareWithPuzzle(letter){
        for(var i=0; i<wordLetters.length; i++){
            if(wordLetters[i] === letter) {
                console.log(wordLetters[i]);
                console.log(i);
                var cellToReplace = document.getElementById("cell_"+i);
                console.log(cellToReplace);
                cellToReplace.textContent = letter;
            }

            // else {
            //     noOfGuesses--;
            //     console.log("You have "+ noOfGuesses + " left");
            // }
        }
    }
   /* window.addEventListener( "load", function( windowLoadE ) {
    var p, letter, button, holder;
    holder = document.getElementById( "buttonsHolder" );
    for ( var i = 65; i <= 90; i++ ) {
        if ( i == 65 ) {
            p = document.createElement( "p" );
        }
        letter = String.fromCharCode( i );
        button = document.createElement( "button" );
        button.innerHTML = letter;
        button.setAttribute( "data-letter", letter );
        button.onclick = function( e ) { setLetter( this.getAttribute( "data-letter" ) ); };
        p.appendChild( button );
        if ( i == 74 || i == 83 || i == 90 ) {
            holder.appendChild( p );
        }
    }
    } );
    function setLetter( letter ) {
        userChoices.push(letter);
        //console.log(userChoices);
    } */