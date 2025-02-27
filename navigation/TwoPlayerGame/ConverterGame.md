---
layout: page
title: Binary Converter Game 
search_exclude: true
permalink: /trialsCompetition/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            background: linear-gradient(150deg, #0E3348, #247994, #147EA0, #0F547B);
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        #gameBoard {
            width: 600px;
            height: 200px;
            border: 3px solid #333;
            margin: 20px auto;
            position: relative;
            background-color: white;
        }
        .player {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            position: absolute;
        }
        #player1 { background-color: red; left: 20px; top: 60%; transform: translateY(-50%); }
        #player2 { background-color: blue; left: 20px; top: 40%; transform: translateY(-50%); }
    </style>
</head>
<body>
    <h3>Convert Decimal Number to Binary:</h3>
    <h2 id="question">Loading question...</h2>
    <input type="text" id="answer" placeholder="Enter your answer">
    <button onclick="submitAnswer()">Submit</button>
    <div id="gameBoard">
        <div id="player1" class="player"></div>
        <div id="player2" class="player"></div>
    </div>
    <h3 id="turnInfo">Player 1's Turn</h3>
    <script>
        let player1Pos = 20, player2Pos = 20, currentPlayer = 1, currentQuestionIndex = 0, questions = [];
        let player1Step = 30, player2Step = 30;
         const player1 = document.getElementById("player1");
        const player2 = document.getElementById("player2");
         async function fetchQuestions() { 
            try {
                questions = [
                    { question: "5", answer: "101" },
                    { question: "10", answer: "1010" },
                    { question: "15", answer: "1111" }
                ];
                updateQuestion();
            } catch (error) {
                console.error("Error fetching questions:", error);
                document.getElementById("question").textContent = "Server error, try again later.";
            }
        }
         function updateQuestion() {
            document.getElementById("question").textContent = questions[currentQuestionIndex].question;
            document.getElementById("turnInfo").textContent = `Player ${currentPlayer}'s Turn`;
        }
         function submitAnswer() {
            const answer = document.getElementById("answer").value.trim();
            if (answer === questions[currentQuestionIndex].answer) {
                alert(`Correct! Player ${currentPlayer} moves forward.`);
                 if (currentPlayer === 1) {
                    player1Pos += player1Step;
                    player1.style.left = player1Pos + "px";
                    player1Step += 10; 
                } else {
                    player2Pos += player2Step;
                    player2.style.left = player2Pos + "px";
                    player2Step += 10;
                }
            } else {
                alert("Incorrect! Try again.");
            }
              if (player1Pos >= 550 || player2Pos >= 550) {
                alert(`${player1Pos >= 550 ? 'Player 1' : 'Player 2'} wins!`);
                resetGame();
                return;
            }
            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
            document.getElementById("answer").value = '';
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            updateQuestion();
        }
    function resetGame() {
            player1Pos = 20; player2Pos = 20;
            player1Step = 30; player2Step = 30;
            player1.style.left = player1Pos + "px";
            player2.style.left = player2Pos + "px";
            currentPlayer = 1; currentQuestionIndex = 0;
            updateQuestion();
        }
        fetchQuestions();
    </script>
</body>
</html>
