// scripts/post-page.js
class PostPage {
  constructor() {
    this.init();
  }

  init() {
    // Get the post ID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');

    if (postId) {
      this.loadPost(postId);
    } else {
      this.showError('No post ID specified');
    }
  }

  loadPost(postId) {
    try {
      // Get post data from the global window object
      const postData = window[postId + 'Data'];

      if (!postData) {
        throw new Error(`Post "${postId}" not found`);
      }

      this.renderPost(postData);
    } catch (error) {
      console.error('Error loading post:', error);
      this.showError(error.message);
    }
  }

  renderPost(post) {
    const postContainer = document.getElementById('post-content');

    postContainer.innerHTML = `
            <article class="post-full-content">
              <div class="container">
                  <header class="post-header">
                      <h1 class="post-title">${post.title}</h1>
                      <div class="post-meta">
                          <time class="post-date">${new Date(post.date).toLocaleDateString()}</time>
                      </div>
                  </header>
                
                  ${post.image ? `
                      <img src="${post.image}" alt="${post.title}" class="post-featured-image" onerror="this.style.display='none'">
                  ` : ''}
                
                  <div class="post-body">
                      ${post.fullContent || post.content}
                  </div>
                
                  <footer class="post-footer">
                      <a href="index.html" class="btn">← Back to all posts</a>
                  </footer>
              </div>
            </article>
        `;

    // Update page title
    document.title = `${post.title} - Simple Blog`;
  }

  showError(message) {
    const postContainer = document.getElementById('post-content');
    postContainer.innerHTML = `
            <div class="error-message">
                <h2>Post Not Found</h2>
                <p>${message}</p>
                <a href="index.html" class="btn">← Back to all posts</a>
            </div>
        `;
  }
}

// Initialize the post page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PostPage();
});
