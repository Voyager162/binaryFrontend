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
      
      loadAndDisplayScores(level); // Load scores for the selected level
    }

    document.getElementById("defaultOpen").click();
  </script>
</body>
</html>