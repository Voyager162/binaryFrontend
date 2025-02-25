---
layout: page
title: Binary Learning Game Leaderboard
permalink: /BinaryLearningGameLeaderboard/
---

{% comment %}
```html
{% endcomment %}

<html lang="en">
<head>
  <link rel="stylesheet" type="text/css" href="{{site.baseurl}}/navigation/leaderboards/binaryLearningGame/styling.css">
</head>
<body>
   <div class="tabs">
    <button class="tablink" id="defaultOpen">Easy</button>
    <button class="tablink">Medium</button>
    <button class="tablink">Hard</button>
    <button class="tablink">Extreme</button>
<style>
    body {
      font-family: Arial, sans-serif;
      background-color:rgb(191, 214, 251);
      text-align: center;
    }
    .tabs {
      margin-bottom: 20px;
      background-color: rgb(78, 103, 144);
      padding: 10px 0;
      border-radius: 10px;
      text-align: center;
      display: flex;
      justify-content: center;
    }
    .tablink {
      background-color: rgb(109, 160, 182) !important;
      color:rgb(109, 160, 182);
      border: none;
      padding: 10px 15px;
      margin: 5px 10px;
      cursor: pointer;
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
      font-size: 16px;
      width: 21%;
    }
    .tablink:hover, .tablink.active {
      color:rgb(109, 160, 182);
      background-color: #45a049;
      transform: scale(1.1);
      filter: brightness(1.2);
    }
    .tabcontent {
      display: none;
      background: rgb(191, 214, 251);
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
      background-color: #4CAF50;
      color:rgb(109, 160, 182);
      text-transform: uppercase;
    }
    .leaderboard-row:nth-child(even) {
      background-color: rgb(103, 78, 144);
    }
</style>
  </div>
<div id="easy" class="tabcontent">
  <table id="easyLeaderboard">
    <thead>
      <tr>
        <th>Username</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<div id="medium" class="tabcontent">
  <table id="mediumLeaderboard">
    <thead>
      <tr>
        <th>Username</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<div id="hard" class="tabcontent">
  <table id="hardLeaderboard">
    <thead>
      <tr>
        <th>Username</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<div id="extreme" class="tabcontent">
  <table id="extremeLeaderboard">
    <thead>
      <tr>
        <th>Username</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</div>

<script type="module" src="{{site.baseurl}}/navigation/leaderboards/binaryLearningGame/BinaryLearningGameLeaderboard.js"></script>
<script type="module" src="{{site.baseurl}}/assets/js/api/config.js"></script>
<script>
    function showLeaderboard(level) {
      const allTabs = document.querySelectorAll('.tabcontent');
      allTabs.forEach(tab => {
        tab.style.display = 'none';
      });
      
      const activeTab = document.getElementById(level);
      activeTab.style.display = 'block';
      
      const buttons = document.querySelectorAll('.tablink');
      buttons.forEach(button => {
        button.classList.remove('active');
      });
      
      const activeButton = Array.from(buttons).find(button => button.textContent === level);
      activeButton.classList.add('active');
      
      loadAndDisplayScores(level);
    }

    document.getElementById("defaultOpen").click();
</script>
</body>
</html>
