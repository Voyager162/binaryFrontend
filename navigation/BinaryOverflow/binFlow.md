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
                flex: 3; /* Allows main content to expand */
                background: lightcyan;
                padding: 20px;
                border-radius: 5px;
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
        <a href="#" class="login-btn">Login</a>
    </div>
        <!-- Layout -->
        <div class="container">
            <!-- Main Content -->
            <div class="main-content">
                <!-- Post Input Box -->
                <div class="post-box">
                    <input type="text" placeholder="Post title..." id="post-title">
                    <textarea placeholder="Write your post..." id="post-content"></textarea>
                    <button id="post-button">Post</button>
                </div>
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

<script>
 document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const postTitleInput = document.querySelector("#post-title"); // Title input field
    const postContentInput = document.querySelector("#post-content"); // Content input field
    const postButton = document.getElementById("post-button"); // Post button
    const postContainer = document.querySelector(".main-content"); // Where posts appear

    // Fetch posts from backend and display them
    async function fetchPosts() {
        try {
            const response = await fetch("http://127.0.0.1:8887/api/binaryOverflow/", {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch posts");
            }

            const data = await response.json();
            console.log("Fetched posts:", data);

            // Clear previous posts and populate
            postContainer.innerHTML = ""; 
            data.reverse().forEach((post) => {
                addPostToUI(post.id, post.title, post.blurb, post.author, post.date_posted, post.upvotes, post.downvotes);
            });

        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    }

    // Function to create a new post
    async function createPost() {
        const title = postTitleInput.value.trim();
        const content = postContentInput.value.trim();
        const author = 1; // Temporary placeholder, should be dynamic

        if (!title || !content) {
            alert("Title and content cannot be empty!");
            return;
        }

        // Step 1: Create BinaryOverflowContent first
        const contentData = { title, content, author, state: "parent" };

        try {
            const contentResponse = await fetch("http://127.0.0.1:8887/api/binaryOverflowContent/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(contentData),
            });

            if (!contentResponse.ok) {
                const errorMessage = await contentResponse.text();
                console.error("Failed to create content:", errorMessage);
                alert("Error creating content: " + errorMessage);
                return;
            }

            const newContent = await contentResponse.json();
            console.log("New content created:", newContent);

            // Step 2: Use newContent.id to create BinaryOverflowPost
            const postData = { post_ref: newContent.id };

            const postResponse = await fetch("http://127.0.0.1:8887/api/binaryOverflowPost/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(postData),
            });

            if (!postResponse.ok) {
                const errorMessage = await postResponse.text();
                console.error("Failed to create post:", errorMessage);
                alert("Error creating post: " + errorMessage);
                return;
            }

            const newPost = await postResponse.json();
            console.log("Post created successfully!", newPost);

            // Add new post to UI
            addPostToUI(newPost.id, newPost.title, newPost.blurb, newPost.author, newPost.date_posted, newPost.upvotes, newPost.downvotes);

            // Clear input fields
            postTitleInput.value = "";
            postContentInput.value = "";

        } catch (error) {
            console.error("Error posting:", error);
        }
    }

    // Function to add a post to the UI
    function addPostToUI(id, title, blurb, author, datePosted, upvotes, downvotes) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        postElement.innerHTML = `
            <div class="vote-section">
                <button class="vote-btn" onclick="votePost(${id}, 'upvote')">⬆</button>
                <div>${upvotes}</div>
                <button class="vote-btn" onclick="votePost(${id}, 'downvote')">⬇</button>
            </div>
            <div class="post-content">
                <div class="post-title">${title}</div>
                <div class="post-meta">Posted by <strong>${author}</strong> on ${new Date(datePosted).toLocaleString()}</div>
                <p>${blurb}</p>
            </div>
        `;

        // Insert at the top instead of clearing everything
        postContainer.insertBefore(postElement, postContainer.children[1]); 
    }

    // Function to upvote or downvote a post
    async function votePost(postId, voteType) {
        try {
            const response = await fetch(`http://127.0.0.1:8887/api/binaryOverflowPost/vote`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ post_id: postId, vote_type: voteType }),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                console.error("Vote failed:", errorMessage);
                alert("Error voting: " + errorMessage);
                return;
            }

            console.log(`Successfully ${voteType}d post with ID ${postId}`);
            fetchPosts(); // Refresh posts to update vote count
        } catch (error) {
            console.error("Error voting:", error);
        }
    }

    // Event listener for Post button
    postButton.addEventListener("click", createPost);

    // Fetch posts when page loads
    fetchPosts();
});
</script>