// script.js

// Fetch posts from posts.json and display them
fetch("posts.json")
  .then((response) => response.json())
  .then((posts) => {
    const blogContainer = document.getElementById("blog-container");
    blogContainer.innerHTML = "";

    posts.forEach((post) => {
      const postElement = document.createElement("div");
      postElement.className =
        "bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-md anime-card";

      postElement.innerHTML = `
        <div class="p-6">
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center space-x-2">
              <div class="w-8 h-8 rounded-full bg-gray-300 dark:bg-dark-600"></div>
              <span class="text-sm font-medium">AnimeLens</span>
            </div>
            <span class="text-xs text-gray-500 dark:text-gray-400">${post.date}</span>
          </div>
          <h3 class="text-xl font-bold mb-2">${post.title}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-3">${post.summary}</p>
          <div class="flex justify-between items-center">
            <div class="flex flex-wrap gap-2">
              <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-dark-600 rounded-full">Anime</span>
              <span class="text-xs px-2 py-1 bg-gray-100 dark:bg-dark-600 rounded-full">Recap</span>
            </div>
            <a href="#" class="text-sm text-primary-light hover:text-primary-dark font-medium" onclick="showFullPost(${post.id})">
              Read
            </a>
          </div>
        </div>
      `;
      blogContainer.appendChild(postElement);
    });
  })
  .catch((error) => console.error("Error loading posts:", error));

// Function to show full post content
function showFullPost(id) {
  fetch("posts.json")
    .then((response) => response.json())
    .then((posts) => {
      const post = posts.find((p) => p.id === id);
      if (post) {
        const blogContainer = document.getElementById("blog-posts");
        blogContainer.innerHTML = `
          <div class="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-md p-6">
            <h2 class="text-2xl font-bold mb-3">${post.title}</h2>
            <p class="text-gray-500 text-sm mb-2">${post.date}</p>
            <p class="text-gray-700 dark:text-gray-300 mb-4">${post.content}</p>
            <button onclick="location.reload()" class="mt-4 px-4 py-2 bg-primary-light hover:bg-primary-dark text-white rounded-lg">Back</button>
          </div>
        `;
      }
    });
}
