// MUSIC
var music = document.getElementById("music");
music.volume = 0.1;


//DROPDOWN NAV
document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown-menu");
    const navLinks = document.querySelector(".nav-links");

    dropdown.addEventListener("click", () => {
        navLinks.classList.toggle("show"); // toggle mobile menu
    });
});


// ELEMENTS
var playerInput = document.getElementById("choice");
var clashBtn = document.querySelector(".class-btn");
var randomBtn = document.querySelector(".randomize-btn");
var resetBtn = document.querySelector(".reset");
var resultDiv = document.querySelector(".result");

// SOUNDS
var rockSound = new Audio("assets/sounds/rock.mp3");
var paperSound = new Audio("assets/sounds/paper.mp3");
var sliceSound = new Audio("assets/sounds/slice.mp3");
var winSound = new Audio("assets/sounds/win.mp3");
var loseSound = new Audio("assets/sounds/lose.mp3");
var tieSound = new Audio("assets/sounds/tie.mp3");

// CHOICES
var choices = ["smash", "wrap", "slice"];

// HELPER FUNCTION SIMPLIFIED
function getRandomChoice() {
    var index = Math.floor(Math.random() * 3); // 0,1,2
    return choices[index];
}

// DETERMINE WINNER SIMPLIFIED
function determineWinner(player, computer) {
    if (player === computer) return "Tie";
    if (
        (player === "smash" && computer === "slice") ||
        (player === "slice" && computer === "wrap") ||
        (player === "wrap" && computer === "smash")
    ) return "Player";
    else return "Computer";
}

// PLAY MOVE SOUND
function playMoveSound(move) {
    if (move === "smash") rockSound.play();
    else if (move === "wrap") paperSound.play();
    else if (move === "slice") sliceSound.play();
}

// PLAY RESULT SOUND
function playResultSound(winner) {
    if (winner === "Player") winSound.play();
    else if (winner === "Computer") loseSound.play();
    else if (winner === "Tie") tieSound.play();
}

// CLASH BUTTON
clashBtn.addEventListener("click", function() {
    var playerChoice = playerInput.value.toLowerCase().trim();
    if (choices.indexOf(playerChoice) === -1) {
        resultDiv.textContent = "Please type Smash, Wrap, or Slice!";
        return;
    }
    var computerChoice = getRandomChoice();
    var winner = determineWinner(playerChoice, computerChoice);
    resultDiv.textContent = "Player: " + playerChoice + ", Computer: " + computerChoice + ". " + (winner === "Tie" ? "It's a tie!" : winner + " wins!");
    
    var winningMove = winner === "Player" ? playerChoice : (winner === "Computer" ? computerChoice : null);
    if (winningMove) playMoveSound(winningMove);
    playResultSound(winner);
});

// RANDOMIZE BUTTON
randomBtn.addEventListener("click", function() {
    var playerChoice = getRandomChoice();
    var computerChoice = getRandomChoice();
    var winner = determineWinner(playerChoice, computerChoice);
    resultDiv.textContent = "Player (Random): " + playerChoice + ", Computer: " + computerChoice + ". " + (winner === "Tie" ? "It's a tie!" : winner + " wins!");
    
    var winningMove = winner === "Player" ? playerChoice : (winner === "Computer" ? computerChoice : null);
    if (winningMove) playMoveSound(winningMove);
    playResultSound(winner);
});

// RESET BUTTON
resetBtn.addEventListener("click", function() {
    playerInput.value = "";
    resultDiv.textContent = "";
});
