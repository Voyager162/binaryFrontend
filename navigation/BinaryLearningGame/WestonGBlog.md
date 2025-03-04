---
layout: page
title: Binary Game Blog
permalink: /weston/blog
---

## 5 Things I Have Done

#### 1. Our first assignment was to create an API for the feature we had in mind
<br>
- I was able to get my API working with all CRUD methods
- This is the data it was saving
    - Attempt ID
    - Username
    - User ID
    - Score
    - Difficulty

<br><br>
<image src="{{site.baseurl}}/images/binaryLearningGame/API.gif" alt="Binary Game" style="width: 80%; height: 80%;"></image>
<br><br>

#### 2. Next, I had to implement full stack features across my feature in the frontend
<br>
- I decided to tack this step by step
    - First, focus only on the crucial methods that I need, create and read
    - Next, create simple functions performing those functions, with as little extra logic
    - Third, implement those methods into the main feature
    - Fourth, do the same for the update and delete functions

    - This allowed me to take these features step by step instead of taking it on all at once and going through a nightmare of errors
<br><br>

```javascript
    async function readScores() {
        try {
            const currentUserResponse = await fetch(`${pythonURI}/api/id`, fetchOptions);
            if (!currentUserResponse.ok) throw new Error('Failed to fetch current user');
            const currentUser = await currentUserResponse.json();
            userName = currentUser.uid;

            const scoresResponse = await fetch(`${pythonURI}/api/binaryLearningGameScores`, fetchOptions);
            if (!scoresResponse.ok) throw new Error('Failed to fetch scores');
            const scores = await scoresResponse.json();

            return (scores);

        } catch (error) {
            console.error('Error fetching scores:', error);
            return null;
        }
        }


        async function createScores(inputName, inputScore, inputDifficulty) {

        const scoreData = {
            username: inputName,
            score: inputScore,
            difficulty: inputDifficulty,
        };

        try {
            const response = await fetch(`${pythonURI}/api/binaryLearningGameScores`, {
            ...fetchOptions,
            method: 'POST',
            body: JSON.stringify(scoreData),
            });

            if (!response.ok) {
            throw new Error(`Failed to submit score: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Score submitted:', result);
        } catch (error) {
            console.error('Error submitting score:', error);
            alert('Error submitting score: ' + error.message);
        }
        }




    async function deleteScores(inputId) {

        const scoreData = {
            id: inputId
        }

        try {
            const response = await fetch(`${pythonURI}/api/binaryLearningGameScores`, {
            ...fetchOptions,
            method: 'DELETE',
            body: JSON.stringify(scoreData),
            });

            if (!response.ok) {
            throw new Error(`Failed to delete score: ${response.statusText}`);
            }
        }

        catch (error) {
            console.error('Error deleting score:', error);
            alert('Error deleting score: ' + error.message);
        }
        }

        async function updateScores(inputId, inputScore, inputDifficulty) {
        const scoreData = {
            id: inputId,
            user_score: inputScore,
            user_difficulty: inputDifficulty
        }

        try {
            const response = await fetch(`${pythonURI}/api/binaryLearningGameScores`, {
            ...fetchOptions,
            method: 'PUT',
            body: JSON.stringify(scoreData),
            });

            if (!response.ok) {
            throw new Error(`Failed to update score: ${response.statusText}`);
            }
        }

        catch (error) {
            if (error = "Forbidden") {
            alert("You do not have access to perform that function");
            }
            else {
            console.error('Error updating score:', error);
            alert('Error updating score: ' + error.message);
            }
        }
        }

        // Close rules popup
        rulesButton.addEventListener("click", function () {
        rulesPopup.classList.add("visible");
        });

        closeButton.addEventListener("click", function () {
        rulesPopup.classList.remove("visible");
        });


        scoresButton.addEventListener("click", function () {
        if (isUserAdmin) {
            getScoreTableData();
            adminScoresPopup.classList.add("visible");
        }
        else {
            getScoreTableData();
            scoresPopup.classList.add("visible");
        }
        });

        closeAdminScoresButton.addEventListener("click", function () {
        adminScoresPopup.classList.remove("visible");
        });

        closeScoresButton.addEventListener("click", function () {
        scoresPopup.classList.remove("visible");
        });
```

#### 3. Our next step was to deploy our backend to AWS
<br>
- I encountered many issues while trying to get all my NGINX files functioning properly
    - (sorry for crashing the server)
- But, eventually I was able to get the server up and running properly with my game connecting data to the deployed backend
<br>
```raw
nginx: configuration file /etc/nginx/nginx.conf test is successful
```
<br>
```raw
8329564029c3   binary_backend       "gunicorn main:app"   4 days ago     Up 4 days     0.0.0.0:8501->8501/tcp, :::8501->8501/tcp   binary_backend-web-1
```
<br>
link to the deployed backend: <https://binary.stu.nighthawkcodingsociety.com/>
<br>

#### 4. Per my duties as a scrum master I had do create and manage the kanban board for our group
- This meant managing the burndown lists, keeping our group on task, and getting updates from the progress of individual smaller teams working on features
<br>
link to the kanban board: <https://github.com/users/Voyager162/projects/3>
<br>

#### 5. Lastly, I wanted our frontend to look much better
- There was the menu styling that was clashing with our features stylings and the theme we were going for
- I had to dive deep into how the site works through the css and scss and the header, footer, and body html files in the themes
- When I finally understood how this all worked, I was able to modify the frontend to make it fit with the theme we were going for as well as change some key elements of our theme.
<br>

```css
        .site-title {
      font-size: 1.625rem;
      font-weight: 300;
      letter-spacing: -1px;
      margin-bottom: 0;
      float: left;
      position: absolute;
      top: 0px;
      right: 35px;
      background-color: transparent;
      border: transparent;
      text-align: left;
      white-space: nowrap; /* Prevent text from wrapping */
    }
    .site-nav { position: absolute; top: 9px; right: 15px; background-color: transparent; border: transparent; border-radius: 5px; text-align: right; }
    .site-nav .nav-trigger { display: none; }
    .site-nav .menu-icon { float: right; width: 36px; height: 26px; line-height: 0; padding-top: 10px; text-align: center; }
    .site-nav .menu-icon > svg path { fill: #999999; }
    .site-nav label[for="nav-trigger"] { display: block; float: right; width: 36px; height: 36px; z-index: 2; cursor: pointer; }
    .site-nav input ~ .trigger { clear: both; display: none; }
    .site-nav input:checked ~ .trigger { display: block; padding-bottom: 5px; }
    .site-nav .page-link { color: #bbbbbb; line-height: 1.5; display: block; padding: 5px 10px; margin-left: 20px; }
    .site-nav .page-link:not(:last-child) { margin-right: 0; }
    @media screen and (min-width: 1000px) { .site-nav { position: static; float: right; border: none; background-color: inherit; }
      .site-nav label[for="nav-trigger"] { display: none; }
      .site-nav .menu-icon { display: none; }
      .site-nav input ~ .trigger { display: block; }
      .site-nav .page-link { display: inline; padding: 0; margin-left: auto; }
      .site-nav .page-link:not(:last-child) { margin-right: 20px; } }
      .site-nav {
        position: absolute;
        top: 0px;
        right: -80px;
        background-color: transparent;
        border: transparent;
        border-radius: 5px;
        text-align: left;
        margin-left: 20px; /* Add margin to create space */
      }
      
      #loginArea {
        color: #bbbbbb; /* Change the color of the login link */
      }
      .site-header { border-top: transparent; border-bottom: transparent; min-height: 55.95px; line-height: 54px; position: relative; }
```
<br><br><br>

## Retrospection

#### My future
- I have always loved using software engineering and pursuing that has always been my passion
- Currently I am using my skills in software engineering in the software department of our robotics team
- I have decided to pursue stanford in order to gain a strong career in aerospace engineering with an emphasis on software
- With these new skills I have from this class I will be able to apply my knowledge in order to excel in the software courses, internships, and eventually my career
- I will also use my skills in software to develop code for a project I am working on that involves FPV drones flying above boats to locate kelp patties to increase efficiency of fishermen
    - I will be using image recognition to get the exact GPS coordinates of those kelp patties and send them through a restful API to the garmin system to pop up on the display of the boat driver

#### Strengths and Weaknesses

##### Strengths
- I have noticed that I am very well skilled in developing object based software
- I am also able to go long periods of time coding without breaks
- I also am strong in logical reasoning and creative thinking

##### Weaknesses
- In the future I could work on more organization and in guiding my programming in order to become the most efficient I can be
- I could also work on better team management and understanding the exact details that we need to do in order to integrate and communicate between each other
- I also could work on my styling in order to present my features better and make them more user friendly

##### Next Steps for my Feature
- I could add additional modes that add a timer into the mix
    - This could dissuade the user from just searching up the answer on the internet because they have infinite time
    - It could also improve their processing time in coming up with the solutions
- I could also make another mode where the questions get harder and harder with decreasing allotted time for each question
    - This would make the user be able to push themselves harder in order to gain faster processing for much more difficult questions

## Feature Blog
<br><br>
<image src="{{site.baseurl}}/images/binaryLearningGame/featurePicture.png" alt="Binary Game" style="width: 50%; height: 50%;"></image>
<br><br>

## My Purpose

##### The purpose of our group code is to create a site to teach future students and peers:
- We will teach how non base-10 numbering systems work
- We will explain how different logic systems work, and their names (ex. Xor gate)
- We will create a space for students to work together through chats in order to gain understanding

##### The purpose of my code is to:
- Provide a fun learning experience
- Practice simple problems of converting binary to decimal
- Ramp up to higher difficulties for more experienced students
- Challange the user to grow in their understanding of non base-10 numbering systems

### Input and Output

##### Input:
<br>
- One example of an input feature in my code is my post request that is sent to the backend:
    ```javascript
    async function createScores(inputName, inputScore, inputDifficulty) {

        const scoreData = {
            username: inputName,
            score: inputScore,
            difficulty: inputDifficulty,
        };

        try {
            const response = await fetch(`${pythonURI}/api/binaryLearningGameScores`, {
            ...fetchOptions,
            method: 'POST',
            body: JSON.stringify(scoreData),
            });

            if (!response.ok) {
            throw new Error(`Failed to submit score: ${response.statusText}`);
            }

            const result = await response.json();
            console.log('Score submitted:', result);
        } catch (error) {
            console.error('Error submitting score:', error);
            alert('Error submitting score: ' + error.message);
        }
    }
    ```
- First the code takes in parameters of the name, score, and difficulty of the just played game
- Next the code formats that into a dictionary to be sent to the backend
- Then the code sends a post request to the api demonstrating input to the database
- The remaining code is simply getting the returned result and printing that out and also logging errors

##### Output
<br>
- One example of my output is my get request to retrieve data stored in the database:
    ```javascript
    async function readScores() {
    try {
        const scoresResponse = await fetch(`${pythonURI}/api/binaryLearningGameScores`, fetchOptions);
        if (!scoresResponse.ok) throw new Error('Failed to fetch scores');
        const scores = await scoresResponse.json();

        return(scores);

        } catch (error) {
        console.error('Error fetching scores:', error);
        return null;
        }
    }
    ```
- First, the code sends a http request to the specified URL
- Then the code checks for errors
- Then it parses the response body as JSON
- Then it returnes the response demonstrating output from a function
- The rest of the code is checking for errors


### List Requests

- I use dictionaries and lists in my table that shows all of the scores from the database:
    ```javascript
        async function getScoreTableData() {
        const scores = await readScores();

        let userScores = scores;
        let scoreInput, difficultyDropdown;

        if (!isUserAdmin) {
            userScores = scores.filter((entry) => String(entry.username) === String(userName));
        }

        let table = isUserAdmin ? document.getElementById("admin-table") : document.getElementById("table");

        // Clear the table before adding new rows
        while (table.firstChild) {
            table.removeChild(table.firstChild);
        }

        userScores.forEach(score => {
            const tr = document.createElement("tr");
            if (!updating.has(score.id)) {
            updating.set(score.id, false);
            }

            let usernamesTable, difficultyCell, scoreTd;

            if (isUserAdmin) {
            usernamesTable = document.createElement("td");
            usernamesTable.innerHTML = score.username;
            tr.appendChild(usernamesTable);
            }

            scoreTd = document.createElement("td");

            if (updating.get(score.id)) {
            // Score input field
            scoreInput = document.createElement("input");
            scoreInput.type = "text";
            scoreInput.value = score.user_score;
            scoreInput.className = "scoreInput"; // Add styling for input
            scoreTd.appendChild(scoreInput);
            } else {
            scoreTd.innerHTML = score.user_score;
            }

            tr.appendChild(scoreTd);

            difficultyCell = document.createElement("td");

            if (updating.get(score.id)) {
            // Create and insert dropdown inside the difficulty column
            difficultyDropdown = document.createElement("select");
            ["Easy", "Medium", "Hard", "Extreme"].forEach(optionText => {
                const option = document.createElement("option");
                option.text = optionText;
                option.value = optionText.toLowerCase();
                if (option.value === score.user_difficulty.toLowerCase()) {
                option.selected = true;
                }
                difficultyDropdown.appendChild(option);
            });
            difficultyDropdown.className = "dropdown";
            difficultyCell.appendChild(difficultyDropdown);
            } else {
            difficultyCell.innerHTML = score.user_difficulty;
            }

            tr.appendChild(difficultyCell);

            const action = document.createElement("td");

            if (isUserAdmin) {
            var updateBtn = document.createElement("input");
            updateBtn.type = "button";
            updateBtn.className = "button";
            updateBtn.value = updating.get(score.id) ? "Submit" : "Update";
            updateBtn.onclick = function () {
                if (updating.get(score.id)) {
                updating.set(score.id, false);
                const updatedScore = scoreInput.value.trim();
                const updatedDifficulty = difficultyDropdown.value;
                updateScores(score.id, updatedScore, updatedDifficulty);
                } else {
                updating.set(score.id, true);
                }
                getScoreTableData();
            };
            action.appendChild(updateBtn);
            }

            var deleteBtn = document.createElement("input");
            deleteBtn.type = "button";
            deleteBtn.className = "button";
            deleteBtn.value = "Delete";
            deleteBtn.onclick = function () {
            deleteScores(score.id);
            getScoreTableData();
            };
            action.appendChild(deleteBtn);

            tr.appendChild(action);
            table.appendChild(tr);
        });
        }
    ```
- This code demonstrates how I extracted information from the database
- I used this data to make a function that built a row for each column of data demonstrating dictionaries
- With this data I build rows for each user demonstrating lists
- Both of these corrospond to the information on the database by showing rows of users and thier data, with each different set on a different column

<br><br>
<image src="{{site.baseurl}}/images/binaryLearningGame/scoresPicture.png" alt="Binary Game" style="width: 50%; height: 50%;"></image>

### Algorithmic Code Request

##### Demonstration of sequencing, selection, and iteration

- A good example of code that both sequencing and selection is my put request function:
    ```javascript
    async function updateScores(inputId, inputScore, inputDifficulty) {
        const scoreData = {
            id: inputId,
            user_score: inputScore,
            user_difficulty: inputDifficulty
        }

        try {
            const response = await fetch(`${pythonURI}/api/binaryLearningGameScores`, {
            ...fetchOptions,
            method: 'PUT',
            body: JSON.stringify(scoreData),
            });

            if (!response.ok) {
            throw new Error(`Failed to update score: ${response.statusText}`);
            }

            updatedData = await response.json();
            return updatedData;
        } 
    
        catch (error) {
            if (error = "Forbidden") {
            alert("You do not have access to perform that function");
            }
            else {
            console.error('Error updating score:', error);
            alert('Error updating score: ' + error.message);
            }
        }
    }
    ```
- This code demonstrates sequencing by ordering the code in a top to bottom order to run
- I made sure to define my variables and below change and use those variables demonstrating sequencing
- I also used Selection by defining where the code goes
- This is shown through my error catching if-statements that define how the code runs if there is an error
<br><br>
<image src="{{site.baseurl}}/images/binaryLearningGame/Update.png" alt="Binary Game" style="width: 50%; height: 50%;"></image>

##### parameters and return type

- The updateScores function will take 3 different parameters
    - The score id so that the api will know which data to update
    - The updated score that will replace the previous score
    - The updated difficulty that will replace the precious difficulty

- The updateScores function will return the data of the newly updated score as evidence that the process has run smoothly without errors

### Call to Algorithm Request
- A good example of this is my delete scores function:
    ```javascript
    async function deleteScores(inputId) {

        const scoreData = {
            id: inputId
        }

        try {
            const response = await fetch(`${pythonURI}/api/binaryLearningGameScores`, {
            ...fetchOptions,
            method: 'DELETE',
            body: JSON.stringify(scoreData),
            });

            if (!response.ok) {
            throw new Error(`Failed to delete score: ${response.statusText}`);
            }
        } 
        
        catch (error) {
            console.error('Error deleting score:', error);
            alert('Error deleting score: ' + error.message);
        }
    }
    ```
- This function is then called when the user presses the delete button on the scores table
    ```javascript
    deleteBtn.onclick = function () {
      deleteScores(score.id);
      getScoreTableData();
    };
    ```
- With the deleteScores function I handle this data by sending a request to the api, giving it the score id from the parameter of the function.
- Then if the data produces an error, such as the score id not being an integer or some code error in the backend or frontend, the code will adapt and change.
    - Becuase the function is using a try and catch statement, an error will trigger the catch statement, which will safely report the error without crashing everything.

<br><br>

## MCQ review <https://github.com/Voyager162/weston_2025/issues/7>