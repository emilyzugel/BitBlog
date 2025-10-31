class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="container">
          <a href="index.html" class="nav-logo">
            <img src="./images/white-logo.svg">
          </a>
          <ul class="nav-menu">
            <li class="nav-item">
              <a href="index.html" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="about.html" class="nav-link">About</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}

customElements.define('navbar-c', Navbar);
