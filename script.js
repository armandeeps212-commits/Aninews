<script>
fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('blog-container');
    posts.forEach(post => {
      container.innerHTML += `
        <div class="bg-white dark:bg-dark-700 rounded-xl overflow-hidden shadow-md anime-card p-6">
          <div class="flex items-center justify-between mb-3">
            <span class="text-sm font-medium">Anime Recap</span>
            <span class="text-xs text-gray-500 dark:text-gray-400">${post.date}</span>
          </div>
          <h3 class="text-xl font-bold mb-2">${post.title}</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-3">${post.summary}</p>
          <div class="flex justify-between items-center">
            <a href="#" onclick="showPost(${post.id})" class="text-sm text-primary-light hover:text-primary-dark font-medium">Read</a>
          </div>
        </div>`;
    });
  })
  .catch(err => console.error('Error loading posts:', err));

function showPost(id) {
  fetch('posts.json')
    .then(res => res.json())
    .then(posts => {
      const post = posts.find(p => p.id === id);
      if (post) {
        document.body.innerHTML = `
          <div class="container mx-auto p-6">
            <h1 class="text-3xl font-bold mb-4">${post.title}</h1>
            <p class="text-gray-500 mb-2">${post.date}</p>
            <p class="mb-4">${post.content}</p>
            <a href="index.html" class="text-primary-light hover:text-primary-dark">⬅ Back</a>
          </div>`;
      }
    });
}
</script>
