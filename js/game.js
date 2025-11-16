// SET MUSIC VOLUME TO 10% (0 = MUTED, 1 = FULL VOLUME) WHEN PAGE LOADS
const music = document.getElementById("music");
music.volume = 0.1;
music.onplay();

document.addEventListener("DOMContentLoaded", () => {
    // Grab the elements from HTML
    const playerInput = document.getElementById("choice"); 
    const clashBtn = document.querySelector(".class-btn"); 
    const randomBtn = document.querySelector(".randomize-btn"); 
    const resetBtn = document.querySelector(".reset"); 
    const resultDiv = document.querySelector(".result"); 

    // Define allowed choices
    const choices = ["smash", "wrap", "slice"];

    // Validate input
    function validateInput(input) {
        return choices.includes(input);
    }

    // Random choice function
    function getRandomChoice() {
        const index = Math.floor(Math.random() * choices.length);
        return choices[index];
    }

    // Determine winner
    function determineWinner(player, computer) {
        if (player === computer) return "It's a tie!";
        if (
            (player === "smash" && computer === "slice") ||
            (player === "slice" && computer === "wrap") ||
            (player === "wrap" && computer === "smash")
        ) return "Player wins!";
        return "Computer wins!";
    }

    // Button events
    clashBtn.addEventListener("click", () => {
        const playerChoice = playerInput.value.trim().toLowerCase();
        if (!validateInput(playerChoice)) {
            resultDiv.textContent = "Please type Smash, Wrap, or Slice!";
            return;
        }
        const computerChoice = getRandomChoice();
        const result = determineWinner(playerChoice, computerChoice);
        resultDiv.textContent = `Player: ${playerChoice}, Computer: ${computerChoice}. ${result}`;
    });

    randomBtn.addEventListener("click", () => {
        const playerChoice = getRandomChoice();
        const computerChoice = getRandomChoice();
        const result = determineWinner(playerChoice, computerChoice);
        resultDiv.textContent = `Player (Random): ${playerChoice}, Computer: ${computerChoice}. ${result}`;
    });

    resetBtn.addEventListener("click", () => {
        playerInput.value = "";
        resultDiv.textContent = "";
    });
});
