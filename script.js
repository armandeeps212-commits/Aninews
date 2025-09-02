// Load posts from posts.json
fetch('posts.json')
  .then(response => {
    if (!response.ok) {
      throw new Error("Failed to load posts.json");
    }
    return response.json();
  })
  .then(posts => {
    const blogContainer = document.getElementById("blog-container");
    blogContainer.innerHTML = ""; // Clear old content

    // Show latest 3 posts
    posts.slice(0, 3).forEach(post => {
      const blogCard = document.createElement("div");
      blogCard.className =
        "bg-white dark:bg-dark-700 shadow-md rounded-lg overflow-hidden p-5";

      blogCard.innerHTML = `
        <h3 class="text-xl font-bold mb-2">${post.title}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-3">${post.summary}</p>
        <p class="text-sm text-gray-500 mb-3">📅 ${post.date}</p>
        <a href="#" class="text-blue-600 hover:underline">Read More</a>
      `;

      blogContainer.appendChild(blogCard);
    });
  })
  .catch(error => {
    console.error("Error loading blogs:", error);
    document.getElementById("blog-container").innerHTML =
      "<p class='text-red-500'>⚠️ Failed to load blog posts.</p>";
  });
