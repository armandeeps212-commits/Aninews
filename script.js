// Fetch all posts from posts.json
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const container = document.getElementById('posts-container');

    posts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.classList.add('post');
      postDiv.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.summary}</p>
        <button onclick="showFullPost(${post.id})">Read More</button>
        <div id="post-${post.id}" style="display:none;">
          <p>${post.content}</p>
        </div>
      `;
      container.appendChild(postDiv);
    });
  });

// Function to show/hide full post
function showFullPost(id) {
  const postDiv = document.getElementById(`post-${id}`);
  if (postDiv.style.display === 'none') {
    postDiv.style.display = 'block';
  } else {
    postDiv.style.display = 'none';
  }
}
