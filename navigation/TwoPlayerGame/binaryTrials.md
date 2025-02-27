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
            background: linear-gradient(150deg, #0E3348, #247994, #147EA0, #0F547B);
            color: #ffffff;
            font-family: Arial, sans-serif;
            text-align: center;
            overflow-y: auto;
        }
        p {
            color: black;
            font-size: 18px;
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
    <h3>Welcome to Binary Trials! Make sure you have someone to play with!</h3>
    <p>Partner - The history of binary, where both people have to work together and answer questions to win!</p>
    <p></p>
    <button class="regularButton"><a href="{{site.baseurl}}/trialsPartners">Partner Game</a></button>
    <p></p>
    <p>Competition - Converting numbers to binary, where two people compete against each other and one wins!</p>
    <p></p>
    <button class="regularButton"><a href="{{site.baseurl}}/trialsCompetition">Competition Game</a></button>
    <p></p>
    <p>From creators Rutvik and Shaurya, we hope you enjoy these games!</p>
</body>
</html>