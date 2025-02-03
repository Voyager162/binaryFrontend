---
layout: page
permalink: /binaryOverflow
---


<!DOCTYPE html>
 <html lang="en">
    
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Binary Overflow</title>
     <style>
            /* General Styling */
        body {
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
                background-color: #2d2d2d;
                padding: 15px 20px;
                color: white;
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
            .navbar .nav-links a:hover {
                color: #ff9800;
            }
            .navbar .login-btn {
                background-color: #ff9800;
                padding: 8px 15px;
                border-radius: 5px;
                color: white;
                text-decoration: none;
                transition: 0.3s;
            }
            .navbar .login-btn:hover {
                background-color: #e68900;
            }
            /* Layout */
            .container {
                display: flex;
                justify-content: center;
                margin-top: 20px;
            }
            .main-content {
                width: 60%;
                background: white;
                padding: 20px;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .sidebar {
                width: 20%;
                margin-left: 20px;
                background: white;
                padding: 15px;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            /* Post Box */
            .post-box {
                display: flex;
                align-items: center;
                padding: 15px;
                background: white;
                border-radius: 5px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                margin-bottom: 20px;
            }
            .post-box input {
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
            .post-box button:hover {
                background: #e68900;
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
                    <input type="text" placeholder="What's on your mind?">
                    <button>Post</button>
                </div>
                <!-- Example Posts -->
                <div class="post">
                    <div class="vote-section">
                        <button class="vote-btn">⬆</button>
                        <div>12</div>
                        <button class="vote-btn">⬇</button>
                    </div>
                    <div class="post-content">
                        <div class="post-title">How do I convert binary to decimal in Python?</div>
                        <div class="post-meta">Posted by <strong>user123</strong> | 2 hours ago</div>
                    </div>
                </div>
                <div class="post">
                    <div class="vote-section">
                        <button class="vote-btn">⬆</button>
                        <div>8</div>
                        <button class="vote-btn">⬇</button>
                    </div>
                    <div class="post-content">
                        <div class="post-title">What is the best way to optimize a sorting algorithm?</div>
                        <div class="post-meta">Posted by <strong>devguru</strong> | 4 hours ago</div>
                    </div>
                </div>
            </div>
            <!-- Sidebar -->
            <div class="sidebar">
                <h3>Trending Topics</h3>
                <ul>
                    <li><a href="#">Machine Learning Basics</a></li>
                    <li><a href="#">Binary Trees in C++</a></li>
                    <li><a href="#">Best IDEs for Web Development</a></li>
                </ul>
            </div>
        </div>
    </body>
 </html>