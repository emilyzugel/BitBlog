class PostsGrid extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.loadPosts();
  }

  loadPosts() {
    try {
      // Load the posts manifest from the JS file
      if (!window.postsData) {
        throw new Error('Posts data not loaded. Make sure data/posts.js is included.');
      }

      const posts = window.postsData.posts.map(post => {
        // Get the post data from the global window object
        const postData = window[post.id + 'Data'];
        if (!postData) {
          console.warn(`Post data not found for: ${post.id}`);
          return null;
        }
        return postData;
      }).filter(Boolean); // Remove null entries

      this.renderPosts(posts);

    } catch (error) {
      console.error('Error loading posts:', error);
      this.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: #666;">
                    <p>Error loading posts: ${error.message}</p>
                    <p>Make sure all data JS files are loaded.</p>
                </div>
            `;
    }
  }

  renderPosts(posts) {
    this.innerHTML = `
            <section class="posts-grid">
              <div class="container">
                ${posts.map(post => `
                    <article class="card" data-id="${post.id}">
                        <img src="${post.image}" alt="${post.title}" class="post-image" onerror="this.style.display='none'">
                        <div class="post-content">
                            <h3 class="post-title">${post.title}</h3>
                            <p class="post-description">${post.description}</p>
                            <time class="post-date">${new Date(post.date).toLocaleDateString()}</time>
                            <a href="post-page.html?id=${post.id}" class="post-link">Read more</a>
                        </div>
                    </article>
                `).join('')}
              </div>
            </section>
        `;
  }
}

customElements.define('posts-grid', PostsGrid);
