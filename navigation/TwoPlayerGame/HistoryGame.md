---
layout: page
title: Binary Trials 
search_exclude: true
permalink: /trialsPartners/
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Binary History - Partners</title>
    <style>
        body {
            background: linear-gradient(150deg, #0E3348, #247994, #147EA0, #0F547B); /* 180deg for top-to-bottom gradient*/
            color: #ffffff;
            font-family: Arial, sans-serif;
            text-align: center;
            overflow-y: auto;
        }
        #gameBoard {
            width: 800px;
            height: 200px;
            border: 6px solid white;
            margin: 20px auto;
            position: relative;
            background-color: #eee;
        }
        .player {
            width: 30px;
            height: 30px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 50%;
        }
        #player1 { background-color: red; left: 20px; }
        #player2 { background-color: blue; left: 740px; }
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
        #readyPopup.hidden {
            display: none;
        }
        #playAgainPopup {
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
        #playAgainPopup.hidden {
            display: none;
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
    <div id="readyPopup">
        <p>Welcome to the binary history game! You will be given an event in the history of binary, and have to guess what decade the event happened!</p>
        <p>Player 1 and Player 2, are you ready?</p>
        <p>Press any key to confirm!</p>
        <p id="readyStatus">Waiting for both players...</p>
        <h3></h3>
        <button class="regularButton"><a href="{{site.baseurl}}/trials">Click here to go back to the binary trials directory.</a></button>
    </div>
    <div id="questionBox">
        <p></p>
        <h3 id="question">Loading question...</h3>
        <p></p>
    </div>
    <p>Enter the decade in which the event happened (format: xxx0)</p>
    <p></p>
    <input type="text" id="answer">
    <button id="submitAnswer">Submit</button>
    <div id="gameBoard">
        <div id="player1" class="player"></div>
        <div id="player2" class="player"></div>
    </div>
    <h3 id="turnInfo">Player 1's Turn</h3>
    <h3></h3>
    <h3 id="stopwatch">Time: 0 seconds</h3>
    <h3></h3>
    <button class="regularButton"><a href="{{site.baseurl}}/binary_history">Click here to add your own questions to the game, and look at the current questions and their answers.</a></button>
    <p></p>
    <button class="regularButton"><a href="{{site.baseurl}}/trials">Click here to go back to the binary trials directory.</a></button>
    <div id="playAgainPopup" class="hidden">
        <h3>Do you want to play again?</h3>
        <p></p>
        <p>- If yes, reload the page </p>
        <p></p>
        <button class="regularButton"><a href="{{site.baseurl}}/trials">Click here to go back to the binary trials directory.</a></button>
    </div>
    <script type="module">
        import { pythonURI, fetchOptions } from '../assets/js/api/config.js';
        let timeElapsed = 0;
        let stopwatchInterval;
        let player1Pos = 20;
        let player2Pos = 740;
        let currentPlayer = 1;
        const player1 = document.getElementById("player1");
        const player2 = document.getElementById("player2");
        let questions = [];
        let currentQuestionIndex = 0;
        let player1Ready = false;
        let player2Ready = false;
        // Ready Check Functionality
        function checkReady() {
            if (player1Ready && player2Ready) {
                document.getElementById("readyPopup").classList.add("hidden");
                fetchQuestions();
            }
        }
        function startStopwatch() {
            stopwatchInterval = setInterval(() => {
                timeElapsed++;
                document.getElementById("stopwatch").textContent = `Time: ${timeElapsed} seconds`;
            }, 1000);
        }
        function resetGame() {
            player1Pos = 20;
            player2Pos = 740;
            player1.style.left = player1Pos + "px";
            player2.style.left = player2Pos + "px";
            timeElapsed = 0;
            document.getElementById("stopwatch").textContent = `Time: 0 seconds`;
            // Cycle through questions
            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
            document.getElementById("answer").value = '';
            startMovement();
        }
        function stopStopwatch() {
            clearInterval(stopwatchInterval);
            alert(`Game over! The players collided after ${timeElapsed} seconds.`);
            timeElapsed = 0;
            document.getElementById("playAgainPopup").classList.remove("hidden");
        }
        function submitAnswer() {
            // Ensure questions are loaded before allowing submission
            if (questions.length === 0) {
                alert("Questions are still loading. Please wait.");
                return;
            }
            const answer = document.getElementById("answer").value.trim().toLowerCase();
            const correctAnswer = questions[currentQuestionIndex].answer.trim().toLowerCase();
            if (answer === correctAnswer) {
                alert("Correct! Moving backward.");
                if (currentPlayer === 1) {
                    player1Pos -= 30;
                } else {
                    player2Pos += 30;
                }
            } else {
                alert(`Incorrect! The correct answer is ${correctAnswer}. Keep moving forward.`);
            }
            // Update player positions
            player1.style.left = player1Pos + "px";
            player2.style.left = player2Pos + "px";
            // Cycle through questions
            currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
            document.getElementById("answer").value = '';
            currentPlayer = currentPlayer === 1 ? 2 : 1;
            updateQuestion();
        }
        function startMovement() {
            startStopwatch(); // Start the stopwatch when movement begins
            setInterval(() => {
                player1Pos += 1;
                player2Pos -= 1;
                player1.style.left = player1Pos + "px";
                player2.style.left = player2Pos + "px";
                if (player1Pos + 28 >= player2Pos) {
                    stopStopwatch(); // Stop the stopwatch if players collide
                    resetGame(); // Reset the game for the next round
                }
            }, 100);
        }
        document.getElementById("submitAnswer").addEventListener("click", submitAnswer);
        window.addEventListener("keydown", () => {
            if (!player1Ready) {
                player1Ready = true;
                document.getElementById("readyStatus").textContent = "Player 1 is ready. Waiting for Player 2...";
            } else if (!player2Ready) {
                player2Ready = true;
                document.getElementById("readyStatus").textContent = "Both players are ready! Starting game...";
                setTimeout(() => {
                    checkReady();
                    startMovement();
                }, 1000);
            }
        });
        async function fetchQuestions() { 
            try {
                const response = await fetch(pythonURI + "/api/binary-history", fetchOptions);
                if (response.ok) {
                    const data = await response.json();
                    // Sort by year, oldest to newest (optional)
                    data.sort((a, b) => a.year - b.year);
                    // Convert to questions array
                    questions = data.map(event => ({
                        question: event.description,
                        answer: event.year.toString().trim().toLowerCase()
                    }));
                    if (questions.length > 0) {
                        questions = questions.sort(() => Math.random() - 0.5); //Randomize order
                        updateQuestion(); // Start the game once questions are loaded
                    } else {
                        document.getElementById("question").textContent = "No questions available.";
                    }
                } else {
                    throw new Error("Network response failed");
                }
            } catch (error) {
                console.error("Error fetching questions:", error);
                document.getElementById("question").textContent = "Hmm... it seems like the server is down, try again later.";
            }
        }
        function updateQuestion() {
            document.getElementById("question").textContent = questions[currentQuestionIndex].question;
            document.getElementById("turnInfo").textContent = `Player ${currentPlayer}'s Turn`;
        }
    </script>
</body>
</html>