---
layout: page
permalink: /binaryOverflow
---


 <html lang="en">
    
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Binary Overflow</title>
<style>
            /* General Styling */
        body {
                background: linear-gradient(150deg, #0e3348, #1b2b34, #1b3b4d, #124c6c);
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 0;
                background-color: #f6f6f6;
            }
            /* Navigation Bar */
        .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: lightskyblue;
                padding: 15px 20px;
                color: lightslategrey;
            }
         .navbar .logo {
                font-size: 22px;
                font-weight: bold;
            }
            .navbar .nav-links {
                display: flex;
                gap: 20px;
            }
            .navbar .nav-links a {
                text-decoration: none;
                color: white;
                font-size: 16px;
                transition: 0.3s;
            }
            .navbar .login-btn {
                background-color: lightslategrey;
                padding: 8px 15px;
                border-radius: 5px;
                color: white;
                text-decoration: none;
                transition: 0.3s;
            }
            .navbar .login-btn:hover {
                background-color: silver;
            }
            /* Layout */
           .container {
                display: flex;
                justify-content: center;
                margin-top: 20px;
                width: 100%;
                max-width: 1200px;
                margin-left: auto;
                margin-right: auto;
}
            /* Main Content */
            .main-content {
                flex: 4; /* Allows main content to expand */
                background: lightcyan;
                padding:45px;
                border-radius: 10px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            /* Sidebar */
            .sidebar {
                flex: 1; /* Keeps sidebar minimal */
                min-width: 250px; /* Prevents sidebar from being too large */
                max-width: 300px; /* Ensures it stays small */
                background: black;
                padding: 15px;
                border-radius: 5px;
                margin-left: -1200px; /* Adds spacing between main content and sidebar */
                margin-top: 75px;
            }
            /* Post Box */
            .post-box {
                display: flex;
                align-items: center;
                padding: 15px;
                background: lightskyblue;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                margin-bottom: 20px;
            }
            .post-box input {
                width: 25%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
            .post-box textarea {
                width: 100%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
            .post-box button {
                background: #ff9800;
                color: white;
                padding: 10px 15px;
                border: none;
                margin-left: 10px;
                border-radius: 5px;
                cursor: pointer;
                transition: 0.3s;
            }
            /* Individual Post */
            .post {
                display: flex;
                border-bottom: 1px solid #ddd;
                padding: 15px 0;
            }
            .vote-section {
                text-align: center;
                margin-right: 15px;
                color: #555;
            }
            .vote-btn {
                background: none;
                border: none;
                cursor: pointer;
                font-size: 20px;
                transition: 0.3s;
            }
            .vote-btn:hover {
                color: #ff9800;
            }
            .post-content {
                flex: 1;
            }
            .post-title {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 5px;
                color: #2d2d2d;
            }
            .post-meta {
                font-size: 14px;
                color: #666;
            }
            /* Sidebar */
            .sidebar h3 {
                font-size: 18px;
                margin-bottom: 10px;
            }
            .sidebar ul {
                list-style: none;
                padding: 0;
            }
            .sidebar ul li {
                margin-bottom: 10px;
            }
            .sidebar ul li a {
                text-decoration: none;
                color: #2d2d2d;
                font-size: 14px;
            }
            .sidebar ul li a:hover {
                color: #ff9800;
            }
</style>
</head>

<body>
    <!-- Navbar -->
    <div class="navbar">
         <div class="logo">Binary Overflow</div>
         <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">Trending</a>
            <a href="#">New Posts</a>
         </div>
        <!-- <a href="#" class="login-btn">Login</a> -->
    </div>
        <!-- Layout -->
        <div class="container">
            <!-- Main Content -->
            <div class="main-content">
                <!-- Post Input Box -->
                <div class="post-box" id='jimmeh'>
                </div>
                <div id="posts-container"></div>
                <tbody>
        <!-- Data rows dynamically added here -->
                </tbody>
                <!-- Example Posts -->
                <div class="post">
                    <div class="vote-section">
                        <button class="vote-btn">⬆</button>
                        <div>-877</div>
                        <button class="vote-btn">⬇</button>
                    </div>
                    <div class="post-content">
                        <div class="post-title">code code code or smth idk</div>
                        <div class="post-meta">Posted by <strong>Mortie</strong> | 2 hours ago</div>
                    </div>
                </div>
                <div class="post">
                    <div class="vote-section">
                        <button class="vote-btn">⬆</button>
                        <div>-4</div>
                        <button class="vote-btn">⬇</button>
                    </div>
                    <div class="post-content">
                        <div class="post-title">join my film class trust its fire</div>
                        <div class="post-meta">Posted by <strong>Brownie</strong> | 4 hours ago</div>
                    </div>
                </div>
            </div>
            <!-- Sidebar -->
            <div class="sidebar">
                <h3>Binary Topics</h3>
                <ul>
                    <li><a href="#">I love binary</a></li>
                    <li><a href="#">somthing about binary</a></li>
                    <li><a href="#">i have no clue whatsw supposed to be here</a></li>
                </ul>
            </div>
        </div>
    </body>
 </html>

<script type="module">
    import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js'; 
    import { buildPostBox } from '{{site.baseurl}}/navigation/BinaryOverflow/postingTest.js';

    document.addEventListener("DOMContentLoaded", function () {
        console.log("JavaScript Loaded!");

        const div = document.getElementById("jimmeh");
        const postBox = buildPostBox();
        div.append(postBox);

        const postButton = document.getElementById("post-button");
        if (!postButton) {
            console.error("Post button not found!");
            return;
        }

        postButton.addEventListener("click", function () {
            console.log("Post button clicked!");
            createPost();
        });

        fetchPosts();
    });

    async function fetchPosts() {
        try {
            const response = await fetch(`${pythonURI}/api/binaryOverflow/home`, fetchOptions);
            if (!response.ok) throw new Error("Failed to fetch posts");
            const data = await response.json();

            const postsContainer = document.getElementById("posts-container");
            postsContainer.innerHTML = "";
            data.forEach(post => addPostToUI(post));

        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }

    async function createPost() {
        console.log("createPost() function started");

        const postTitleInput = document.getElementById("post-title");
        const postContentInput = document.getElementById("post-content");

        // ✅ Define title and content properly before using them
        const title = postTitleInput?.value.trim();
        const content = postContentInput?.value.trim();

        if (!title || !content) {
            alert("⚠️ Title and content cannot be empty!");
            return;
        }

        const options = { 
            ...fetchOptions,
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title, content }) 
        };

        try {
            const response = await fetch("http://127.0.0.1:8887/api/binaryOverflow/post", options);
            if (!response.ok) {
                const errorMessage = await response.text();
                console.error("Failed to create post:", errorMessage);
                alert("Error creating post: " + errorMessage);
                return;
            }

            const newPost = await response.json();
            console.log("Post created successfully!", newPost);
            addPostToUI(newPost);

            postTitleInput.value = "";
            postContentInput.value = "";
            fetchPosts();

        } catch (error) {
            console.error("Error posting:", error);
            alert("⚠️ Failed to create post.");
        }
    }

    function addPostToUI(post) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <div class="post-content">
                <h3 class="post-title">${post.title}</h3>
                <p>${post.content}</p>
                <div class="post-meta">Posted by <strong>${post.author || "Unknown"}</strong></div>
            </div>
        `;

        const postsContainer = document.getElementById("posts-container");
        if (!postsContainer) {
            console.error("Posts container not found!");
            return;
        }
        
        postsContainer.prepend(postElement);
    }
</script>