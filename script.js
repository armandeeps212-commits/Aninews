document.addEventListener("DOMContentLoaded", () => {
  fetch("posts.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("File not found: " + response.status);
      }
      return response.json();
    })
    .then(posts => {
      const container = document.getElementById("blog-container");
      container.innerHTML = "";

      posts.forEach(post => {
        container.innerHTML += `
          <div class="bg-white dark:bg-dark-700 shadow-md rounded-lg p-6">
            <h3 class="text-xl font-bold mb-2">${post.title}</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">${post.summary}</p>
            <span class="text-sm text-gray-400">${post.date}</span>
          </div>
        `;
      });
    })
    .catch(error => {
      const container = document.getElementById("blog-container");
      container.innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
});
