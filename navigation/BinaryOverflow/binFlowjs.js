console.log("JavaScript Loaded!");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event triggered!");
});
            const postButton = document.getElementById("post-button");
            const postTitleInput = document.getElementById("post-title");
            const postContentInput = document.getElementById("post-content");
            const postsContainer = document.getElementById("posts-container");

            if (!postButton) {
                console.error("Post button not found!");
                return;
            }

            postButton.addEventListener("click", function () {
                console.log("Post button clicked!"); 
                createPost();
            });

            fetchPosts();

            async function fetchPosts() {
                try {
                    const response = await fetch("http://127.0.0.1:8887/api/binaryOverflow/");
                    if (!response.ok) throw new Error("Failed to fetch posts");
                    const data = await response.json();

                    postsContainer.innerHTML = "";
                    data.forEach(post => {
                        addPostToUI(post);
                    });
                } catch (error) {
                    console.error("Error fetching posts:", error);
                }
            }

            async function createPost() {
                const title = postTitleInput.value.trim();
                const content = postContentInput.value.trim();
                if (!title || !content) {
                    alert("Title and content cannot be empty!");
                    return;
                }

                try {
                    const response = await fetch("http://127.0.0.1:8887/api/binaryOverflow/", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ title, content, author: "Anonymous" })
                    });

                    if (!response.ok) throw new Error(await response.text());
                    const newPost = await response.json();
                    addPostToUI(newPost);
                    
                    postTitleInput.value = "";
                    postContentInput.value = "";

                } catch (error) {
                    console.error("Error posting:", error);
                }
            }

            function addPostToUI(post) {
                const postElement = document.createElement("div");
                postElement.classList.add("post");
                postElement.innerHTML = `
                    <div class="post-content">
                        <div class="post-title">${post.title}</div>
                        <div class="post-meta">Posted by <strong>${post.author}</strong></div>
                        <p>${post.content}</p>
                    </div>
                `;
                postsContainer.prepend(postElement);
            }