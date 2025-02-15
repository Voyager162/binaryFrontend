---
layout: page
title: Binary Trials 
search_exclude: true
permalink: /trials/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binary Trials</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        #gameBoard {
            width: 600px;
            height: 200px;
            border: 2px solid black;
            margin: 20px auto;
            position: relative;
        }
        .player {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
        #player1 { background-color: red; left: 130px; }
        #player2 { background-color: blue; left: 430px; }
    </style>
</head>
<body>
    <h2 id="question">Loading question...</h2>
    <input type="text" id="answer">
    <button onclick="submitAnswer()">Submit</button>
    <div id="gameBoard">
        <div id="player1" class="player"></div>
        <div id="player2" class="player"></div>
    </div>
    <script>
        let player1Pos = 130; // Red block starts at 0px
        let player2Pos = 430; // Blue block starts at 300px
        let currentPlayer = 1; // Player 1 starts
        const player1 = document.getElementById("player1");
        const player2 = document.getElementById("player2");
        // Sample questions
        const questions = [
            { question: "What is 5 + 3?", answer: "8" },
            { question: "What is 10 - 4?", answer: "6" },
            { question: "What is 7 + 2?", answer: "9" },
            { question: "What is 12 - 5?", answer: "7" },
            { question: "What is 3 + 6?", answer: "9" }
        ];
        let currentQuestionIndex = 0;
        function updateQuestion() {
            document.getElementById("question").textContent = questions[currentQuestionIndex].question;
        }
        // Initialize game
        window.onload = updateQuestion;
        function submitAnswer() {
            const answer = document.getElementById("answer").value;
            const correctAnswer = questions[currentQuestionIndex].answer;
            if (answer === correctAnswer) {
                alert("Correct! Moving away.");
                player1Pos -= 30; // Moves left (away)
                player2Pos += 30; // Moves right (away)
                player1.style.left = player1Pos + "px";
                player2.style.left = player2Pos + "px";
            } else {
                alert("Incorrect!");
                // Check if players touch
                if (player1Pos >= player2Pos) {
                    player1Pos = 130;
                    player2Pos = 430;
                    player1.style.left = player1Pos + "px";
                    player2.style.left = player2Pos + "px";
                    alert("Game over! The blocks are in the same position.");
                } else {
                    player1Pos += 30; // Moves right (closer)
                    player2Pos -= 30; // Moves left (closer)
                    player1.style.left = player1Pos + "px";
                    player2.style.left = player2Pos + "px";
                }
            }
            // Cycle through questions
            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
            document.getElementById("answer").value = '';
            currentPlayer = currentPlayer === 1 ? 2 : 1;
    }
    </script>
</body>
</html>
