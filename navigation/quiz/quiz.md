---
layout: page
title: Quiz Page
permalink: /quiz
---

<div id="quizgrading"></div>
<div class="quiz-container">
    <h2>Binary Quiz</h2>
    <div id="quiz"></div>
    <button id="submit">Submit Quiz</button>
    <div id="results"></div>
</div>



<div class="quiz-container">
    <h3>Quiz Attempt History</h3> 
    <button id="createAttempt">Create New Attempt</button>
    <table id="attemptsTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Quiz Grade</th>
                <th>Attempt Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <!-- Table rows will be populated here -->
        </tbody>
    </table>
</div>

 <style>
     /* General Styling */
        body {
                background: linear-gradient(150deg, #0E3348, #247994, #147EA0, #0F547B
);
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #F6F6F6;
            } 
        .quiz-container {
            width: 80%;
            margin: 0 auto;
            padding: 20px;
        }
        .quiz-container h2 {
            text-align: center;
        }
        .question {
            margin-bottom: 15px;
        }
        .answers {
            margin-bottom: 20px;
        }
        .answers label {
            display: block;
            margin: 5px 0;
        }
        table {
            width: 200%;
            margin-top: 100px; /* Space from the top */
            margin-left: -150px; /* Adjust this value to control how much to shift left */
            border-collapse: collapse;
            display: table;
            background-color: #FFFFFF; /* Ensure this line is correct */
        }
        table, th, td {
            border: 1px solid black;
        }
        th, td {
            padding: 10px;
            text-align: center;
            background-color: #FFFFFF; /* Ensure cells are white */
        }
        button {
            padding: 12px 20px;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: #FFFFFF; /* Make buttons white */
            color: var(--text-dark); /* Adjust text color for contrast */
            transition: background-color 0.2s ease, transform 0.1s ease-in-out;
        }
        button:hover {
            transform: scale(1.02);
        }

        button:active {
            transform: scale(0.98);
        }

        th {
            background-color: #f2f2f2;
            font-weight: bold;
            padding: 12px;
            text-align: center;
            border-bottom: 2px solid #ddd;
        }
        
        thead {
            position: sticky;
            top: 0;
            background-color: white;
        }
    </style>

<script type="module">
    import { pythonURI, javaURI, fetchOptions, login } from '{{site.baseurl}}/assets/js/api/config.js';

    const quizGradingsApi = `${pythonURI}/api/quizgrading`;

    const Questions = [
    {
        question: "What does an arithmetic shift do?",
        answers: {
            a: "All bits are deleted",
            b: "The bits not shifted are discarded",
            c: "The bits that are shifted out of either end are discarded",
            d: "Nothing changes"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the binary equivalent of the decimal number 5?",
        answers: {
            a: "101",
            b: "001",
            c: "100",
            d: "1001"
        },
        correctAnswer: "a"
    },
    {
        question: "What is binary addition result of 1011 + 1101?",
        answers: {
            a: "2112",
            b: "10100",
            c: "11000",
            d: "00111"
        },
        correctAnswer: "c"
    },
    {
        question: "Which encoding standard allows for more characters?",
        answers: {
            a: "ASCII",
            b: "Unicode",
        },
        correctAnswer: "b"
    },
    {
        question: "In a 4-bit two's complement system, what is the representation of -5?",
        answers: {
            a: "1011",
            b: "1101",
            c: "1110",
            d: "1100"
        },
        correctAnswer: "b"
    },
    {
        question: "How many bits are used to represent an ASCII character?",
        answers: {
            a: "7",
            b: "16",
            c: "32",
            d: "8"
        },
        correctAnswer: "d"
    },
    {
        question: "What is the binary representation of the decimal number 13?",
        answers: {
            a: "1010",
            b: "1100",
            c: "1101",
            d: "1011"
        },
        correctAnswer: "c"
    },
    {
        question: "What happens during a left arithmetic shift?",
        answers: {
            a: "Zeroes are shifted to the right",
            b: "Zeroes are shifted to the left",
            c: "Zeroes are deleted",
            d: "Ones are shifted to the right"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the binary addition result of 1001 + 0110?",
        answers: {
            a: "10110",
            b: "01101",
            c: "1111",
            d: "10001"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the binary subtraction result of 1011 - 0101?",
        answers: {
            a: "0110",
            b: "1000",
            c: "0101",
            d: "0011"
        },
        correctAnswer: "c"
    }
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomizeQuestions(questions, numQuestions) {
    const shuffledQuestions = [...questions];
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
        const j = getRandomInt(i + 1);
        [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
    return shuffledQuestions.slice(0, numQuestions);
}

function buildQuiz(questions) {
    const quizContainer = document.getElementById('quiz');
    const output = [];
    questions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (let letter in currentQuestion.answers) {
            answers.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
            );
        }
        output.push(
            `<div class="question">${currentQuestion.question}</div>
            <div class="answers">${answers.join('')}</div>`
        );
    });
    quizContainer.innerHTML = output.join('');
}

async function showResults(questions) {
    const quizContainer = document.getElementById('quiz');
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        } else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = `${numCorrect} out of ${questions.length}`;

    const currentUserResponse = await fetch(`${pythonURI}/api/id`, fetchOptions);
    if (!currentUserResponse.ok) throw new Error('Failed to fetch current user');
    const currentUser = await currentUserResponse.json();
    userName = currentUser.uid;
    userID = currentUser.id;
    // Send the attempt data to the backend
    const attemptData = {
        quizgrade: numCorrect,
        attempt: new Date().toISOString(),
        id: userID,
        username: userName,
    };

    fetch(quizGradingsApi, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(attemptData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Score stored successfully:", data);
        loadAttempts(); // Reload attempts after submission
    })
    .catch(error => {
        console.error("Error storing score:", error);
    });
}

async function deleteAttempt(inputId) {
  const scoreData = {
    id: inputId
  } 

  try {
    const smthing = await fetch(quizGradingsApi, {
      ...fetchOptions,
      method: 'DELETE',
      body: JSON.stringify(scoreData),
    });

    if (!smthing.ok) {
      throw new Error(`Failed to delete score: ${smthing.statusText}`);
    }
  } 
  
  catch (error) {
    console.error('Error deleting score:', error);
    alert('Error deleting score: ' + error.message);
  }
}

let userName, userID; // Add these variables at the top of the script

// Update the loadAttempts function to include current user info
async function loadAttempts() {
    // Get current user info first
    const currentUserResponse = await fetch(`${pythonURI}/api/id`, fetchOptions);
    if (!currentUserResponse.ok) throw new Error('Failed to fetch current user');
    const currentUser = await currentUserResponse.json();
    userName = currentUser.uid;
    userID = currentUser.id;

    const quizGrading = await fetch(quizGradingsApi, fetchOptions)
    if (!quizGrading.ok) {console.error("Error loading attempts:", quizGrading);}

    const quizResults = await quizGrading.json();
    console.log(quizResults)

    // Get the table and create thead and tbody if they don't exist
    const table = document.getElementById('attemptsTable');
    let thead = table.querySelector('thead');
    let tbody = table.querySelector('tbody');

    // Create thead if it doesn't exist
    if (!thead) {
        thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headers = ['ID', 'Username', 'Quiz Grade', 'Attempt Date', 'Actions'];
        
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
    }

    // Create tbody if it doesn't exist
    if (!tbody) {
        tbody = document.createElement('tbody');
        table.appendChild(tbody);
    }

    // Clear existing rows in tbody
    tbody.innerHTML = '';

    // Add data rows
    quizResults.forEach(attempt => {
        const row = document.createElement('tr');
        const idCell = document.createElement('td')
        idCell.innerHTML = attempt.id;
        const usernameCell = document.createElement('td')
        usernameCell.innerHTML = attempt.username;
        const quizgradeCell = document.createElement('td')
        quizgradeCell.innerHTML = attempt.quizgrade;
        const attemptCell = document.createElement('td')
        attemptCell.innerHTML = attempt.attempt;
        const actionCell = document.createElement('td'); 
        
        // Only show delete/edit buttons for the current user's attempts
        if (attempt.username === userName) {
            const deleteButton = document.createElement('button')
            deleteButton.innerHTML = 'Delete';
            deleteButton.addEventListener('click', () => deleteAttempt(attempt.id));
            const editButton = document.createElement('button')
            editButton.innerHTML = 'Edit';
            editButton.addEventListener('click', () => editAttempt(attempt.id));
            actionCell.append(deleteButton);
            actionCell.append(editButton);
        }
        
        row.append(idCell);
        row.append(usernameCell);
        row.append(quizgradeCell);
        row.append(attemptCell);
        row.append(actionCell);
        tbody.append(row);
    });
}

// Update the createAttempt function to include user info
function createAttempt() {
    const quizgrade = prompt("Enter quiz grade:");
    const attempt = prompt("Enter attempt number:");
    if (quizgrade && attempt) {
        fetch(quizGradingsApi, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                quizgrade, 
                attempt,
                id: userID,
                username: userName 
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log("Attempt created:", data);
            loadAttempts(); // Reload table
        })
        .catch((error) => console.error("Error creating attempt:", error));
    }
}

// Update the editAttempt function to include user info
function editAttempt(id) {
    // First verify this is the current user's attempt
    if (!userName) {
        alert("Please log in to edit attempts");
        return;
    }

    const quizgrade = prompt("Enter new quiz grade:");
    const attempt = prompt("Enter new attempt number:");
    if (quizgrade && attempt) {
        fetch(quizGradingsApi, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                id,  // Keep the original ID
                quizgrade, 
                attempt,
                username: userName,
                user_id: userID  // Include the user ID
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to update attempt');
            }
            return response.json();
        })
        .then((data) => {
            console.log("Attempt updated:", data);
            loadAttempts(); // Reload table
        })
        .catch((error) => {
            console.error("Error updating attempt:", error);
            alert("Error updating attempt. Please try again.");
        });
    }
}

window.onload = () => {
    const selectedQuestions = randomizeQuestions(Questions, 5);
    buildQuiz(selectedQuestions);
    loadAttempts();

    document.getElementById('submit').addEventListener('click', () => {
        showResults(selectedQuestions);
    });

    document.getElementById('createAttempt').addEventListener('click', () => {
        createAttempt();
    });
};
</script>