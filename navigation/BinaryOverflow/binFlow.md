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
                flex: 10; /* Allows main content to expand */
                min-width: 1000px; /* Prevents sidebar from being too large */
                max-width: 2000px; /* Ensures it stays small */
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
                background: black !important;
                padding: 15px;
                border-radius: 5px;
                margin-left: -350px; /* Adds spacing between main content and sidebar */
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
                margin-bottom: 10px;
            }
            .post-box input {
                width: 25%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
            }
            .post-box textarea {
                width: 210%; /* keeps existing width */
                height: 100px; /* adjust this height to your preference */
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                resize: vertical; /* Allows users to adjust height manually */
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
                padding: 50px 0px;
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
                color: black !important;
            }
            .post-title {
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 5px;
                color: black !important;
            }
            .post-content p {
                color: black !important;
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
            /* Delete Button Styling */
            .delete-btn {
                background-color: #ff4b4b; /* Soft red */
                color: lightcyan;
                border: none;
                padding: 3px 6px;
                border-radius: 4px;
                cursor: pointer;
                font-size: 14px;
                transition: background-color 0.3s ease;
                margin-top: 10px;
            }
            .delete-btn:hover {
                background-color: lightslategrey !important; /* Darker red on hover */
            }
</style>
</head>

<body>
    <!-- Navbar -->
    <div class="navbar">
         <div class="logo">Binary Overflow</div>
         <div class="nav-links">
            <a href="http://127.0.0.1:4887/binaryFrontend/">Home</a>
            <a href="http://127.0.0.1:4887/binaryFrontend/binaryOverflow">New Posts</a>
         </div>
        <!-- <a href="#" class="login-btn">Login</a> -->
    </div>
        <!-- Layout -->
        <div class="container">
            <!-- Main Content -->
            <div class="main-content">
                <!-- Post Input Box -->
                 <div style="display:none;"> <button id="post-button">Post</button> </div>  <!-- ✅ This was missing -->
                <div class="post-box" id='jimmeh'></div>
                <!-- Posts Container -->
                <div id="posts-container">
                    <!-- New posts will be added here dynamically -->
                </div>
                <!-- Example Posts -->
                <div class="post">
                    <div class="vote-section">
                        <button class="vote-btn">⬆</button>
                        <div></div>
                        <button class="vote-btn">⬇</button>
                    </div>
                    <div class="post-content">
                        <div class="post-title"><h2>Binary Overflow Page</h2></div>
                        <div> <p> Weclome to the first version of our Binary Overflow page! Have a look around and also check out the other features found on our page.</p>
                        <div class="post-meta">Posted by <strong>Lars</strong></div>
                    </div>
                </div>
            <!-- Sidebar -->
            <div class="sidebar">
                <h3>More Binary Content!</h3>
                <ul>
                    <li><a href="http://127.0.0.1:4887/binaryFrontend/binaryGame/">Binary Game</a></li>
                    <li><a href="http://127.0.0.1:4887/binaryFrontend/quiz">Binary Quiz</a></li>
                </ul>
            </div>
        </div>

<script type="module">
    import { pythonURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js'; 
    import { buildPostBox } from '{{site.baseurl}}/navigation/BinaryOverflow/postingTest.js';

    document.addEventListener("DOMContentLoaded", function () {
        const div = document.getElementById("jimmeh");
        div.append(buildPostBox());

        const postButton = document.getElementById("post-button");
        if (!postButton) {
            console.error("Post button not found!");
            return;
        }

        postButton.addEventListener("click", createPost);
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
        const postTitleInput = document.getElementById("post-title");
        const postContentInput = document.getElementById("post-content");

        const title = postTitleInput?.value.trim();
        const content = postContentInput?.value.trim();

        if (!title || !content) {
            alert("⚠️ Title and content cannot be empty!");
            return;
        }

        const options = { 
            ...fetchOptions,
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content }) 
        };

        try {
            const response = await fetch(`${pythonURI}/api/binaryOverflow/post`, options);
            if (!response.ok) throw new Error(await response.text());

            const newPost = await response.json();
            addPostToUI(newPost);

            postTitleInput.value = "";
            postContentInput.value = "";

            setTimeout(fetchPosts, 1000);
        } catch (error) {
            console.error("Error posting:", error);
            alert("⚠️ Failed to create post: " + error.message);
        }
    }

    async function deletePost(postId, postElement) {
        if (!confirm('Are you sure you want to delete this post?')) return;

        const options = {
            method: 'DELETE',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: postId })
        };

        try {
            const response = await fetch(`${pythonURI}/api/binaryOverflow/post`, options);
            const result = await response.text();

            if (response.ok) {
                alert('✅ Post successfully deleted!');
                postElement.remove();
            } else {
                alert('⚠️ Error deleting post: ' + result);
            }
        } catch (error) {
            console.error('Delete error:', error);
            alert('⚠️ Failed to delete post.');
        }
    }

    function addPostToUI(post) {
        if (!post || !post.title || !post.content) {
            console.error("Invalid post data:", post);
            return;
        }

        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <div class="vote-section">
                <button class="vote-btn">⬆</button>
                <div>0</div>
                <button class="vote-btn">⬇</button>
            </div>
            <div class="post-content">
                <h3 class="post-title">${post.title}</h3>
                <p>${post.content}</p>
                <div class="post-meta">Posted by <strong>${post.author || "Unknown"}</strong></div>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        const deleteBtn = postElement.querySelector(".delete-btn");
        deleteBtn.onclick = () => deletePost(post.id, postElement);

        const postsContainer = document.getElementById("posts-container");
        postsContainer.prepend(postElement);
    }
</script>