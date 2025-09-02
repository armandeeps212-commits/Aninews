const blogContainer = document.getElementById('blog-container');

function createBlogCard(blog) {
  const card = document.createElement('div');
  card.className = 'bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 rounded-xl overflow-hidden shadow-xl anime-card hover:scale-105 hover:shadow-2xl transition-transform duration-300';
  
  card.innerHTML = `
    <div class="relative h-52 overflow-hidden rounded-t-xl">
      <img src="${blog.image}" alt="${blog.title}" class="w-full h-full object-cover brightness-90 hover:brightness-110 transition-all duration-300">
      ${blog.isNew ? '<div class="absolute top-3 left-3 px-3 py-1 bg-secondary-light text-dark-900 font-semibold text-xs rounded-full">NEW</div>' : ''}
    </div>
    <div class="p-6 flex flex-col justify-between h-52">
      <div>
        <h3 class="text-xl font-bold mb-2 gradient-text line-clamp-2">${blog.title}</h3>
        <p class="text-gray-300 text-sm line-clamp-3">${blog.description}</p>
      </div>
      <a href="${blog.link}" class="mt-4 inline-flex items-center justify-between text-primary-light hover:text-secondary-light font-medium transition-all">
        Read More <i class="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
  `;
  
  return card;
}

// Fetch posts.json dynamically
async function loadBlogs() {
  try {
    const response = await fetch('posts.json');
    if (!response.ok) throw new Error('Failed to fetch JSON');
    const posts = await response.json();

    blogContainer.innerHTML = ''; // Clear existing cards
    posts.forEach(blog => {
      blogContainer.appendChild(createBlogCard(blog));
    });
  } catch (err) {
    console.error('Error loading blogs:', err);
    blogContainer.innerHTML = '<p class="col-span-full text-center text-gray-400">No blogs available at the moment.</p>';
  }
}

// Initialize
loadBlogs();
