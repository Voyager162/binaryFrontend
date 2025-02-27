---
layout: page
title: Binary Quiz Leaderboard
permalink: /BinaryQuizLeaderboard/
---

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
</style>

<script type="module" src="{{site.baseurl}}/navigation/leaderboards/binaryQuiz/BinaryQuizLeaderboard.js"></script>
<script type="module" src="{{site.baseurl}}/assets/js/api/config.js"></script>


{% comment %}
```html
{% endcomment %}

<html lang="en">

<body>
    <style>
    body {
      font-family: Arial, sans-serif;
      background-color:rgb(191, 214, 251);
      text-align: center;
    }
    .tabs {
      margin-bottom: 20px;
      background-color: #0091C2;
      padding: 10px 0;
      border-radius: 10px;
    }
    .tablink {
      background-color: #4CAF50;
      color: red;
      border: none;
      padding: 10px 15px;
      margin: 5px;
      cursor: pointer;
      border-radius: 5px;
      transition: 0.3s;
      font-size: 16px;
    }
    .tablink:hover, .tablink.active {
      background-color:#45a049;
    }
    .tabcontent {
      display: none;
      background: rgb(191, 214, 251) !important
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      width: 80%;
      margin: auto;
    }
    table {
      width: 100%;
      margin: 20px 0;
      border-collapse: collapse;
      background: rgb(131, 163, 198);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    th, td {
      padding: 12px;
      border-bottom: 1px solid #ddd;
      text-align: left;
    }
    th {
      background-color: rgb(48, 68, 101) !important;
      color: white;
      text-transform: uppercase;
    }
    .leaderboard-row:nth-child(even) {
      background-color: rgb(103, 78, 144);
    }
  </style>
  <table id="Leaderboard">
    <thead>
      <tr>
        <th>Username</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  

  <script type="module" src="{{site.baseurl}}/navigation/leaderboards/binaryQuiz/BinaryQuizLeaderboard.js"></script>
  <script type="module" src="{{site.baseurl}}/assets/js/api/config.js"></script>
  <script>
    function showLeaderboard(level) {
      const allTabs = document.querySelectorAll('.tabcontent');
      allTabs.forEach(tab => {
        tab.style.display = 'none';
      });
      
      activeTab.style.display = 'block';
      
      const buttons = document.querySelectorAll('.tablink');
      buttons.forEach(button => {
        button.classList.remove('active');
      });
      
      const activeButton = Array.from(buttons).find(button => button.textContent === level);
      activeButton.classList.add('active');
      
      loadAndDisplayScores(level); // Load scores for the selected level
    }

    document.getElementById("defaultOpen");
  </script>
</body>
</html>


