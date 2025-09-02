// Fetch posts.json and display them
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('blog-container');
    container.innerHTML = ""; // clear old content

    posts.forEach(post => {
      const card = document.createElement('div');
      card.className = "bg-white dark:bg-dark-700 shadow-md rounded-lg p-6";

      card.innerHTML = `
        <h3 class="text-xl font-bold mb-2">${post.title}</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">${post.summary}</p>
        <span class="text-sm text-gray-400">${post.date}</span>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading posts:", error);
  });
