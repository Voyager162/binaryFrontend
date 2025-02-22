---
layout: page
title: Binary Converter Game 
search_exclude: true
permalink: /trialsCompetition/
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f0f0f0;
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
        #player1 {
            background-color: red;
            left: 20px;
            top: 60%; /* Position red dot below blue */
            transform: translateY(-50%);
            display: block;
        }
        #player2 {
            background-color: blue;
            left: 20px;
            top: 40%; /* Position blue dot above red */
            transform: translateY(-50%);
            display: block;
        }
        #question {
            font-size: 24px;
            margin: 10px 0;
        }
        input, button {
            padding: 10px;
            margin: 10px;
            font-size: 16px;
        }
        .regularButton {
            all: unset; /* Removes all default styles */
            background-color: white !important;
            border: 2px solid #ccc;
            border-radius: 12px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.1s ease;
            font-weight: bold;
            color: black !important;
        }
        .regularButton:hover {
            background-color: gray !important; /* Light gray on hover */
            transform: scale(1.05);
        }
        .regularButton:active {
            background-color: darkgrey !important; /* Slightly darker gray when clicked */
            transform: scale(0.95); /* Slight scale-down effect on click */
        }
    </style>
</head>
<body>
    <h2 id="question">Loading question...</h2>
    <p>Current Turn: <span id="currentPlayer">Player 1 (Red)</span></p>
    <input type="text" id="answer" placeholder="Enter your answer">
    <button onclick="submitAnswer()">Submit</button>

  <div id="gameBoard">
        <div id="player1" class="player"></div>
        <div id="player2" class="player"></div>
  </div>
    <h3></h3>
    <button class="regularButton"><a href="{{site.baseurl}}/converter">Click here to add your own questions to the game, and look at the current questions and their answers.</a></button>
    <p></p>
    <button class="regularButton"><a href="{{site.baseurl}}/trials">Click here to go back to the binary trials directory.</a></button>

 <script>
        document.addEventListener("DOMContentLoaded", () => {
            let player1Pos = 20;
            let player2Pos = 20;
            let currentPlayer = 1;
            const player1 = document.getElementById("player1");
            const player2 = document.getElementById("player2");
            const currentPlayerDisplay = document.getElementById("currentPlayer");

            if (!player1 || !player2) {
                console.error("Player elements not found!");
                return;
            }

            const questions = [
                { question: "Convert 5 to binary:", answer: "101" },
                { question: "Convert 10 to binary:", answer: "1010" },
                { question: "Convert 7 to binary:", answer: "111" },
                { question: "Convert 3 to binary:", answer: "11" },
                { question: "Convert 8 to binary:", answer: "1000" }
            ];

            let currentQuestionIndex = 0;

            function updateQuestion() {
                document.getElementById("question").textContent = questions[currentQuestionIndex].question;
                currentPlayerDisplay.textContent = currentPlayer === 1 ? "Player 1 (Red)" : "Player 2 (Blue)";
            }

            updateQuestion();

            window.submitAnswer = function() {
                const answer = document.getElementById("answer").value.trim();
                const correctAnswer = questions[currentQuestionIndex].answer;

                if (answer === correctAnswer) {
                    alert(`Correct! ${currentPlayer === 1 ? 'Player 1' : 'Player 2'} moves forward.`);
                    if (currentPlayer === 1) {
                        player1Pos += 30;
                        player1.style.left = player1Pos + "px";
                    } else {
                        player2Pos += 30;
                        player2.style.left = player2Pos + "px";
                    }
                } else {
                    alert(`Incorrect! ${currentPlayer === 1 ? 'Player 1' : 'Player 2'} stays still.`);
                }

                if (player1Pos >= 550 || player2Pos >= 550) {
                    alert(`${player1Pos >= 550 ? 'Player 1' : 'Player 2'} wins by reaching the end!`);
                    resetGame();
                    return;
                }

                currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
                document.getElementById("answer").value = '';
                currentPlayer = currentPlayer === 1 ? 2 : 1;
                updateQuestion();
            }

            function resetGame() {
                player1Pos = 20;
                player2Pos = 20;
                player1.style.left = player1Pos + "px";
                player2.style.left = player2Pos + "px";
                currentPlayer = 1;
                currentQuestionIndex = 0;
                updateQuestion();
            }
        });
    </script>
</body>
