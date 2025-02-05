---
layout: page
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Cars</title>
    <style>
        body {
            background: linear-gradient(135deg, #003366, darkred); /* 180deg for top-to-bottom gradient */
            color: #ffffff;
            font-family: Arial, sans-serif;
            min-height: 100vh;
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow-y: auto;
        }
        p {
            color: white;
            margin-top: 20px;
            margin-bottom: 20px;
        }
        table {
            width: 100%;
            text-align: center;
            border-collapse: separate;
            border-color: white
        }
        td {
            background-color: transparent !important; /* Remove background color */
            padding: 10px !important; /* Remove padding */
            border-color: white
        }
        .button {
            background-color: transparent;
            color: white !important; /* White text */
            text-decoration: none;
            font-weight: bold;
            font-family: Arial, sans-serif;
            display: inline-block;
            padding: 0; /* Remove padding */
            border-radius: 20px;
            transition: transform 0.2s ease;
            text-align: center;
            width: fit-content; /* Fit the button to the content */
            height: fit-content; /* Fit the button to the content */
        }
        .button:hover {
            transform: scale(1.05); /* Slightly larger on hover */
            background-color: transparent; /* No background color change */
            color: white !important;
        }
        .button:active {
            transform: scale(0.95); /* Shrinks a bit on click */
            background-color: transparent; /* No background color change */
            color: white !important;
        }
        /* Images will adjust in size up to a maximum width and height */
        img {
            max-width: 1000px; /* Adjust maximum width as desired */
            max-height: 1000px; /* Adjust maximum height as desired */
            object-fit: contain; /* Keeps images within the max dimensions without cropping */
        }
        .image-gallery {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: auto;
        gap: 10px;
        }
        .image-gallery img {
            max-height: 150px;
            object-fit: cover;
        }
        .button-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr); /* 2 columns */
            gap: 20px;
            padding: 20px;
            justify-items: center; /* Center items horizontally */
        }
        .button img {
            max-width: 60%; /* Even smaller image */
            height: auto;
            border-radius: 20px;
            display: inline-block; /* Ensure the image is a block element */
        }
        h1 {
            text-align: center; /* Center the title */
        }
    </style>
</head>

<body>
    <h1>Binary Home Page</h1>
    <div class="button-container">
        <a href="{{site.baseurl}}/binaryGame" class="button">
            <img src="{{site.baseurl}}/images/binaryLearningGame/binaryGameLogo.jpg" alt="Binary Game">
        </a>
        <a href="{{site.baseurl}}/logicgame" class="button">Logic Gates Games</a>
        <a href="{{site.baseurl}}/converter/" class="button">Binary Converter</a>
        <a href="{{site.baseurl}}/binary_history" class="button">The History of Binary...</a>
        <a href="{{site.baseurl}}/comments" class="button">Comments and Feedback</a>
        <a href="{{site.baseurl}}/leaderboard/" class="button">Leaderboard</a>
        <a href="{{site.baseurl}}/quiz" class="button">Binary Quiz</a>
        <a href="{{site.baseurl}}/navigation/binary-calculator" class="button">Binary Calculator</a>
    </div>
</body>