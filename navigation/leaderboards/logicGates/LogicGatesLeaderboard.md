---
layout: page
title: Logic Gates Leaderboard
permalink: /LogicGatesLeaderboard/
---

{% comment %}
```html
{% endcomment %}

<html lang="en">
<head>
  <link rel="stylesheet" type="text/css" href="{{site.baseurl}}/navigation/leaderboards/logicGates/styling.css">
</head>
<body>
  <table id="Leaderboard">
    <thead>
      <tr>
        <th>Username</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color:rgb(183, 162, 218);
      text-align: center;
    }
    .tabs {
      margin-bottom: 20px;
      background-color: rgb(78, 103, 144);
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
      background: rgb(103, 78, 144);
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
      color: white;
      text-transform: uppercase;
    }
    .leaderboard-row:nth-child(even) {
      background-color: rgb(103, 78, 144);
    }
  </style>

  <script type="module" src="{{site.baseurl}}/navigation/leaderboards/logicGates/LogicGatesLeaderboard.js"></script>
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

    document.getElementById("defaultOpen").click();
  </script>
</body>
</html>