---
layout: page
title: Binary Learning Game Leaderboard
permalink: /BinaryLearningGameLeaderboard/
---

{% comment %}
```html
{% endcomment %}

<html lang="en">
    <body>
        <table id="leaderboard">
        </table>
        <div id="resultContainer"></div> <!-- Add this line -->
        <script type="module" src="{{site.baseurl}}/navigation/leaderboard/leaderboard.js"></script>
        <script type="module" src="{{site.baseurl}}/assets/js/api/config.js"></script>
    </body>
</html>

<script type="module" src="{{site.baseurl}}/navigation/leaderboards/binaryLearningGame/BinaryLearningGameLeaderboard.js"></script>
<script type="module" src="{{site.baseurl}}/assets/js/api/config.js"></script>