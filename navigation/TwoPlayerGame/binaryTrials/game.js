let player1Pos = 0; // Player 1 position
let player2Pos = 580; // Player 2 position
let currentPlayer = 1; // Player 1 starts

const gameBoard = document.getElementById("gameBoard");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");

const questions = [
    { question: "What is 5 + 3?", answer: "8" },
    { question: "What is 10 - 4?", answer: "6" },
    { question: "What is 7 + 2?", answer: "9" }
];

let currentQuestionIndex = 0;

function submitAnswer() {
    const answer = document.getElementById("answer").value;
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (answer === correctAnswer) {
        alert("Correct! Move backwards.");
        if (currentPlayer === 1) {
            player1Pos -= 20;
            player1.style.left = player1Pos + "px";
        } else {
            player2Pos += 20;
            player2.style.left = player2Pos + "px";
        }
    } else {
        alert("Incorrect! Move forwards.");
        if (currentPlayer === 1) {
            player1Pos += 20;
            player1.style.left = player1Pos + "px";
        } else {
            player2Pos -= 20;
            player2.style.left = player2Pos + "px";
        }
    }

    // Update question and switch player
    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
    document.getElementById("question").textContent = questions[currentQuestionIndex].question;
    document.getElementById("answer").value = '';
    currentPlayer = currentPlayer === 1 ? 2 : 1;
}

// Handle player movement with keyboard
document.addEventListener("keydown", (e) => {
    if (e.key === "w" && currentPlayer === 1) {
        player1Pos -= 20;
        player1.style.left = player1Pos + "px";
    }
    if (e.key === "s" && currentPlayer === 1) {
        player1Pos += 20;
        player1.style.left = player1Pos + "px";
    }
    if (e.key === "ArrowUp" && currentPlayer === 2) {
        player2Pos -= 20;
        player2.style.left = player2Pos + "px";
    }
    if (e.key === "ArrowDown" && currentPlayer === 2) {
        player2Pos += 20;
        player2.style.left = player2Pos + "px";
    }
});
