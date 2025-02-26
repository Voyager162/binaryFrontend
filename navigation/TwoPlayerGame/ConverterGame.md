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
        #readyPopup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(150deg, #0E3348, #247994, #147EA0, #0F547B);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            font-size: 24px;
            z-index: 999;
        }
        button {
            padding: 10px 20px;
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
    <h3>Convert Decimal Number to Binary:</h3>
    <div id="readyPopup">
        <p>Welcome to the binary converter game! Convert numbers to binary and race to victory!</p>
        <p>Player 1 and Player 2, are you ready?</p>
        <p>Press any key to confirm!</p>
        <p id="readyStatus">Waiting for both players...</p>
        <p></p>
        <button class="regularButton"><a href="{{site.baseurl}}/trials">Click here to go back to the binary trials directory.</a></button>
    </div>
    <h2 id="question">Loading question...</h2>
    <input type="text" id="answer" placeholder="Enter your answer">
    <button onclick="submitAnswer()">Submit</button>
    <div id="gameBoard">
        <div id="player1" class="player"></div>
        <div id="player2" class="player"></div>
    </div>
    <h3 id="turnInfo">Player 1's Turn</h3>
    <button class="regularButton"><a href="{{site.baseurl}}/converter">Click here to add your own questions to the game, and look at the current questions and their answers.</a></button>
    <p></p>
    <button class="regularButton"><a href="{{site.baseurl}}/trials">Click here to go back to the binary trials directory.</a></button>
    <script type="module">
        import { pythonURI } from '../assets/js/api/config.js';
        let player1Pos = 20, player2Pos = 20, currentPlayer = 1, currentQuestionIndex = 0, questions = [];
        const player1 = document.getElementById("player1");
        const player2 = document.getElementById("player2");
        let player1Ready = false, player2Ready = false;
  function checkReady() {
            if (player1Ready && player2Ready) {
                document.getElementById("readyPopup").style.display = "none";
                fetchQuestions();
            }
        }
 window.addEventListener("keydown", () => {
            if (!player1Ready) {
                player1Ready = true;
                document.getElementById("readyStatus").textContent = "Player 1 is ready. Waiting for Player 2...";
            } else if (!player2Ready) {
                player2Ready = true;
                document.getElementById("readyStatus").textContent = "Both players are ready! Starting game...";
                setTimeout(checkReady, 1000);
            }
        });
 async function fetchQuestions() { 
            try {
                const response = await fetch(`${pythonURI}/api/binary-converter`);
                if (!response.ok) throw new Error("Network response failed");
                const data = await response.json();
                questions = data.map(q => ({ question: q.decimal, answer: q.binary }));
                if (questions.length) updateQuestion();
                else document.getElementById("question").textContent = "No questions available.";
            } catch (error) {
                console.error("Error fetching questions:", error);
                document.getElementById("question").textContent = "Server error, try again later.";
            }
        }
 function updateQuestion() {
            document.getElementById("question").textContent = questions[currentQuestionIndex].question;
            document.getElementById("turnInfo").textContent = `Player ${currentPlayer}'s Turn`;
        }
 window.submitAnswer = function () {
            const answer = document.getElementById("answer").value.trim();
            if (answer === questions[currentQuestionIndex].answer) {
                alert(`Correct! Player ${currentPlayer} moves forward.`);
                currentPlayer === 1 ? player1Pos += 30 : player2Pos += 30;
                currentPlayer === 1 ? player1.style.left = player1Pos + "px" : player2.style.left = player2Pos + "px";
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
        };
function resetGame() {
            player1Pos = 20; player2Pos = 20;
            player1.style.left = player1Pos + "px";
            player2.style.left = player2Pos + "px";
            currentPlayer = 1; currentQuestionIndex = 0;
            updateQuestion();
        }
    </script>
</body>
