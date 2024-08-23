document.addEventListener("DOMContentLoaded", () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const resultDiv = document.getElementById("result");
    const playAgainButton = document.getElementById("play-again");

    function getComputerMove() {
        return Math.floor(Math.random() * 3);
    }

    function getResult(userChoice, computerChoice) {
        if (userChoice === computerChoice) {
            return "It's a tie!";
        } else if (
            (userChoice === 0 && computerChoice === 2) || // Rock beats Scissors
            (userChoice === 1 && computerChoice === 0) || // Paper beats Rock
            (userChoice === 2 && computerChoice === 1)    // Scissors beat Paper
        ) {
            return "You win!";
        } else {
            return "You lose!";
        }
    }

    function playGame(userChoice) {
        const computerChoice = getComputerMove();
        const userMove = choices[userChoice];
        const computerMove = choices[computerChoice];

        resultDiv.innerHTML = `
            <p>Your move: ${userMove}</p>
            <p>Computer's move (number): ${computerChoice + 1}</p>
            <p>Computer's move: ${computerMove}</p>
            <p>${getResult(userChoice, computerChoice)}</p>
        `;
        playAgainButton.classList.remove("hidden");
    }

    document.getElementById("rock").addEventListener("click", () => playGame(0));
    document.getElementById("paper").addEventListener("click", () => playGame(1));
    document.getElementById("scissors").addEventListener("click", () => playGame(2));

    playAgainButton.addEventListener("click", () => {
        resultDiv.innerHTML = "";
        playAgainButton.classList.add("hidden");
    });
});
