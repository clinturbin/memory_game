const playButton = document.querySelector("#playBtn");
const mainPage = document.querySelector("#loadPage");                // Main screen
const normalPage = document.querySelector("#normalPage");            // Board for normal game mode
const hardPage = document.querySelector("#hardPage");                // Board for hard game mode
const endPage = document.querySelector("#endPage");
const normalTiles = document.querySelectorAll(".normalTile");  // node list of all tiles for normal game board
const hardTiles = document.querySelectorAll(".hardTile");      // node list of all tiles for hard game board
const playAgainButton = document.getElementById("playAgain");

let guesses = document.querySelector("#guesses");  // gets the div to store number of guesses
let numberOfGuesses = 0;


let tileColor = "rgb(60, 100, 209)";     // color to use as tile cover
let blankColor = "rgb(35, 35, 35)";      // black background color to use



mainScreen();

// function to load main screen
function mainScreen() {
    mainPage.classList.remove("hidePage");          // show main screen
    normalPage.classList.add("hidePage");           // hide normal board
    hardPage.classList.add("hidePage");             // hide hard board
    playButton.addEventListener("click", playGame);   // Event listener for when "Play" button is clicked
}


// function to play game
function playGame() {
    let gameMode = getMode();                     // Get the game mode based on radio button selected
    mainPage.classList.add("hidePage");         // Hide the main load screen
    let boardToDisplay = displayBoard(gameMode);  // Assign node list of either normal or hard tiles to variable, then display the correct game board
    let colorsToUse = generateTiles(gameMode);    // Generates an array of random colors to use for game board
    loadBoard(boardToDisplay, colorsToUse);
    numberOfGuesses = 0;
    makeChoices(boardToDisplay, colorsToUse);
}


function loadEnd() {
    setTimeout(function() {
        mainPage.classList.add("hidePage");
        normalPage.classList.add("hidePage");
        hardPage.classList.add("hidePage");
        endPage.classList.remove("hidePage");
        guesses.textContent = numberOfGuesses;
        playAgainButton.addEventListener("click", reset);
    }, 1500);
}


//Function to go hide all but the main page
function reset() {
    normalPage.classList.add("hidePage");      // hide normal screen board
    hardPage.classList.add("hidePage");      // hide hard screen board
    endPage.classList.add("hidePage");      // hide end screen board
    mainPage.classList.remove("hidePage");  // load main board
}

// Function to handle make and check equality of choices
function makeChoices(board, colors) {
    let choices = [];              // create an empty array to put selected choices into
    let choice1;                   // set variable for 1st selected tile
    let choice2;                   // set variable for 2nd selected tile
    let matchesNeeded = board.length / 2;   // gets the number of matches needed to win game
    console.log(`${matchesNeeded} Matches Needed`)
    let matchesMade = 0;                    // initialize matches made to 0
    for (let i = 0; i < board.length; i++) {
        board[i].addEventListener("click", function() {   // add click listener to each tile on the board
            if(this.style.backgroundColor !== blankColor) {  // Check to see tile has blank background color
                if(this.style.backgroundColor === tileColor && choices.length < 2) {  // keep from selecting more than 2 covered tiles at a time
                    this.style.backgroundColor = colors[i];       // change the background color to the same color in colors array.
                    choices.push(this);                           //  add selected choice to choices array
                    if (choices.length === 2) {                   // check to see if 2 choices have been made
                        choice1 = choices[0].style.backgroundColor;  // if so, set the background color of 1st item to choice1
                        choice2 = choices[1].style.backgroundColor;  // and the background color of the 2nd item to choice2
                        numberOfGuesses += 1;
                        console.log(`${numberOfGuesses} guesses made`)
                        setTimeout(function() {                      // add delay so both selected tiles can be viewed
                            if (choice1 === choice2) {
                                choices.forEach((element) => element.style.backgroundColor = blankColor); // if choices match blank out tile
                                matchesMade += 1;
                                console.log(`${matchesMade} matches made (${matchesNeeded}) needed`)
                                if (matchesMade === matchesNeeded) {
                                    loadEnd();
                                }
                            } else {
                                choices.forEach((element) => element.style.backgroundColor = tileColor);  // if choices don't match, cover tiles
                            }
                            choices = [];  // empty choices array
                        }, 1000);          // wait 1 second before covering tile
                    }
                }
            }
        })
    }
}


// function to load game board after play button is selected
function loadBoard(board, colors) {
    for(let i = 0; i < board.length; i++) {              // loop through all tiles on board
        board[i].style.backgroundColor = colors[i];      // Set each tile on the board to color from colors array
    }
    setTimeout(function() {                              // set a delay before covering the tiles
        for (let i = 0; i < board.length; i++) {         // loop through each tile again
            board[i].style.backgroundColor = tileColor;  // Cover each tile with the same color
        }
    }, 2500);                                            // wait 2.5 seconds before covering the tile
}


// function to get game mode
function getMode() {
    let mode;      // create variable called mode to keeo track of mode selected
    document.getElementById("hard").checked ? mode = "hard" : mode = "normal";  // if hard mode is checked set mode to hardd otherwise set mode to normal
    return mode;    // return mode
}

// Function to display game board
function displayBoard(mode) {
    if (mode === "hard") {
        hardPage.classList.remove("hidePage");     // If hard mode mode is selected, remove "hideBoard" class to display board
        return hardTiles;
    } else {
        normalPage.classList.remove("hidePage");
        return normalTiles;
    }
}

// Generate array of colors to use for game board
function generateTiles(mode) {              // arrLength should be 16 for normal mode and 36 for hard mode
    let arr = [];                           // Make an empty array to push colors to
    let arrLength;
    mode === "hard" ? arrLength = hardTiles.length : arrLength = normalTiles.length;  // Set the array length based on the game mode selected
    for (let i = 0; i < arrLength / 2; i++) {   // Loop thorugh half the game Mode array length because there needs to be 2 of each random color
        let color = randomColor();              // Set variable color to a random color
        while (color === tileColor || color === blankColor || arr.indexOf(color) !== -1) {
            color = randomColor();             // generate new random color to use tile, background, or duplicatee color was generated
        }
        for (let j = 0; j < 2; j++) {
            arr.push(color);                     // push 1 random color to array twice
        }
    }
    return shuffle(arr);
}

// function to shuffle array
function shuffle(arr) {
    let ctr = arr.length;
    let temp;
    let index;
    while (ctr > 0) {                             // While there are elements in the array
        index = Math.floor(Math.random() * ctr);  // Pick a ranodm index
        ctr--;                                    // Decrese ctr by 1
        temp = arr[ctr];                          // And swap the last element with it
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

// Function to generate 1 random color
function randomColor() {
    var r = Math.floor(Math.random() * 256);   // pick a red from 0 - 255
    var g = Math.floor(Math.random() * 256);   // pick a green from 0 - 255
    var b = Math.floor(Math.random() * 256);   // Pick a blue from 0 - 255
    return "rgb(" + r + ", " + g + ", " + b +")";
}